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
  
  {
    label: 'Test Suite',
    icon: '◈',
    children: [
      { label: 'Monthly summary', href: '/reports/monthly' },
      { label: 'Annual overview', href: '/reports/annual' },
      { label: 'Custom report', href: '/reports/custom' },
      { label: 'Export data', href: '/reports/export' },
    ],
  },
  { label: 'Test Execution', href: '/testexecution', icon: '▣' },
  { label: 'Reports', href: '/reports', icon: '◫' },
  { label: 'Test Data Manager', href: '/testdatamanager', icon: '◉' },
  { label: 'Service Virtualization', href: '/servicevirtualization', icon: '◉' },
  { label: 'SEEA Features', href: '/seeafeatures', icon: '◉' },
  { label: 'SCM/Artifact Management', href: '/samanagement', icon: '◉' },
  { label: 'AI Chatbot', href: '/aichatbot', icon: '◉' },
  { label: 'Contact Us', href: '/contactus', icon: '◉' },
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
      className="fixed z-[9999] w-48 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden"
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClose}
          className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
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
      ? 'bg-gray-100 text-gray-900 font-medium'
      : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
  }`

  if (item.href && !item.children) {
    return (
      <Link href={item.href} className={baseClasses}>
        <span className="flex items-center gap-2.5">
          <span className="text-xs w-4 text-center opacity-60">{item.icon}</span>
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
          <span className="text-xs w-4 text-center opacity-60">{item.icon}</span>
          {item.label}
        </span>
        {item.children && (
          <span className={`text-[9px] text-gray-400 ml-1 transition-transform ${flyoutOpen ? 'rotate-90' : ''}`}>
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
    <aside className="w-56 bg-white border-r border-gray-200 flex flex-col flex-shrink-0 overflow-y-auto">
      <div className="flex-1 px-3 py-4 flex flex-col gap-6">
        <div>
          <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest px-3 mb-1">
            Main
          </p>
          <nav className="flex flex-col gap-0.5">
            {navItems.map((item) => (
              <SidebarItem key={item.label} item={item} />
            ))}
          </nav>
        </div>
        <div>
        </div>
      </div>
    </aside>
  )
}