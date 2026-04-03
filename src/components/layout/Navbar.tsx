'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Reports', href: '/reports' },
]

const profileMenuItems = [
  { label: 'Account details', href: '/account' },
  { label: 'Settings', href: '/settings' },
  { label: 'Notifications', href: '/notifications' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [profileOpen, setProfileOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProfileOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    if (!searchQuery.trim()) return
    // TODO: implement your search logic here
    console.log('Searching for:', searchQuery)
  }

  return (
    <nav className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0 z-50 gap-4">

      {/* Left — logo + nav links */}
      <div className="flex items-center gap-8 shrink-0">
        <span className="text-base font-semibold text-gray-900 tracking-tight">
          MyApp
        </span>
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm px-3 py-1.5 rounded-md transition-colors ${
                pathname === link.href
                  ? 'bg-gray-100 text-gray-900 font-medium'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <form
        onSubmit={handleSearch}
        className="flex-1 max-w-md"
      >
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="w-full pl-9 pr-4 py-1.5 text-sm bg-gray-100 border border-transparent rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-gray-300 transition-colors"
          />
        </div>
      </form>

      {/* Right — profile avatar + dropdown */}
      <div className="relative flex-shrink-0" ref={dropdownRef}>
        <button
          onClick={() => setProfileOpen((prev) => !prev)}
          className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold flex items-center justify-center hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
          aria-label="Open profile menu"
          aria-expanded={profileOpen}
        >
          JD
        </button>

        {profileOpen && (
          <div className="absolute right-0 top-10 w-52 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50">
            <div className="px-4 py-3 border-b border-gray-100">
              <p className="text-sm font-medium text-gray-900">John Doe</p>
              <p className="text-xs text-gray-500 mt-0.5">john@company.com</p>
            </div>
            <div className="py-1">
              {profileMenuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setProfileOpen(false)}
                  className="flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="border-t border-gray-100 py-1">
              <button
                onClick={() => {
                  setProfileOpen(false)
                  // TODO: add your sign out logic here
                }}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
              >
                Sign out
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}