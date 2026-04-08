'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { createPortal } from 'react-dom'

type NavItem = {
  label: string
  href?: string
  icon: string
  children?: { label: string; href: string }[]
}

const navItems: NavItem[] = [
  { label: 'Dashboard', href: '/', icon: '▣' },
  { label: 'Projects', href: '/projects', icon: '◫' },
  {
    label: 'Reports',
    icon: '◈',
    children: [
      { label: 'Monthly summary', href: '/reports/monthly' },
      { label: 'Annual overview', href: '/reports/annual' },
      { label: 'Custom report', href: '/reports/custom' },
      { label: 'Export data', href: '/reports/export' },
    ],
  },
  { label: 'Team', href: '/team', icon: '◉' },
]

const settingsItems: NavItem[] = [
  { label: 'Preferences', href: '/settings/preferences', icon: '◎' },
  { label: 'Security', href: '/settings/security', icon: '◆' },
]

type FlyoutPosition = { top: number; left: number }

function FlyoutMenu({
  items,
  position,
  onClose,
}: {
  items: { label: string; href: string }[]
  position: FlyoutPosition
  onClose: () => void
}) {
  return createPortal(
    <div
      style={{ top: position.top, left: position.left }}
      className="fixed z-9999 w-48 bg-white border border-indigo-100 rounded-xl shadow-lg overflow-hidden"
      onMouseDown={(e) => e.stopPropagation()
        
      }
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClose}
          className="block px-4 py-2 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-900 transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </div>,
    document.body
  )
}

function SidebarItem({ item }: { item: NavItem }) {
  const pathname = usePathname()
  const [flyoutOpen, setFlyoutOpen] = useState(false)
  const [flyoutPos, setFlyoutPos] = useState<FlyoutPosition>({ top: 0, left: 0 })
  const itemRef = useRef<HTMLDivElement>(null)

  const isActive = item.href
    ? pathname === item.href
    : item.children?.some((c) => pathname === c.href)

  const toggleFlyout = useCallback(() => {
    if (!item.children || !itemRef.current) return
    const rect = itemRef.current.getBoundingClientRect()
    setFlyoutPos({ top: rect.top, left: rect.right + 6 })
    setFlyoutOpen((prev) => !prev)
  }, [item.children])

  useEffect(() => {
    if (!flyoutOpen) return
    function handleClickOutside(e: MouseEvent) {
      if (itemRef.current && !itemRef.current.contains(e.target as Node)) {
        setFlyoutOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [flyoutOpen])

  const baseClasses = `flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-sm transition-colors ${
    isActive
      ? 'bg-indigo-100 text-indigo-900 font-medium'
      : 'text-slate-500 hover:bg-indigo-50 hover:text-indigo-800'
  }`

  if (item.href && !item.children) {
    return (
      <Link href={item.href} className={baseClasses}>
        <span className="flex items-center gap-2.5">
          <span className="text-xs w-4 text-center opacity-50">{item.icon}</span>
          {item.label}
        </span>
      </Link>
    )
  }

  return (
    <>
      <div
        ref={itemRef}
        className={baseClasses}
        onClick={toggleFlyout}
      >
        <span className="flex items-center gap-2.5">
          <span className="text-xs w-4 text-center opacity-50">{item.icon}</span>
          {item.label}
        </span>
        {item.children && (
          <span className={`text-[9px] text-indigo-300 ml-1 transition-transform duration-200 inline-block ${flyoutOpen ? 'rotate-90' : ''}`}>
            ▶
          </span>
        )}
      </div>

      {flyoutOpen && item.children && (
        <FlyoutMenu
          items={item.children}
          position={flyoutPos}
          onClose={() => setFlyoutOpen(false)}
        />
      )}
    </>
  )
}

export default function Sidebar() {
  return (
    <aside className="w-56 bg-slate-50 border-r border-indigo-100 flex flex-col flex-shrink-0 overflow-y-auto">
      <div className="flex-1 px-3 py-4 flex flex-col gap-6">
        <div>
          <p className="text-[10px] font-medium text-indigo-300 uppercase tracking-widest px-3 mb-1">
            Main
          </p>
          <nav className="flex flex-col gap-0.5">
            {navItems.map((item) => (
              <SidebarItem key={item.label} item={item} />
            ))}
          </nav>
        </div>
        <div>
          <p className="text-[10px] font-medium text-indigo-300 uppercase tracking-widest px-3 mb-1">
            Settings
          </p>
          <nav className="flex flex-col gap-0.5">
            {settingsItems.map((item) => (
              <SidebarItem key={item.label} item={item} />
            ))}
          </nav>
        </div>
      </div>
    </aside>
  )
}