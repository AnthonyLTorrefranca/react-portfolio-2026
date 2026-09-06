import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'BIO', path: '/bio' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'SKILLS', path: '/skills' },
    { name: 'CONTACTS', path: '/contacts' },
  ]

  return (
    <nav className="sticky top-0 z-[999] bg-black px-4 py-2 sm:px-8 sm:py-3 border-b border-zinc-800 relative">
      <div className="flex items-center justify-between lg:justify-around">
        {/* Brand / Logo: small on mobile vw, scaling up on larger screens */}
        <a
          href="https://www.facebook.com/6saitama9"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 sm:gap-2 active:bg-zinc-900 px-2 py-1 rounded transition-colors"
        >
          <p className="text-white text-xs sm:text-base lg:text-xl font-bold tracking-tight">
            ANTHONY TORREFRANCA
          </p>
          <span className="h-4 sm:h-6 lg:h-7 w-[2px] bg-white"></span>
          <p className="text-yellow-300 text-xs sm:text-base lg:text-xl font-bold tracking-tight">
            PORTFOLIO
          </p>
        </a>

        {/* Mobile Hamburger Button: small & compact */}
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="p-1.5 text-white hover:text-yellow-300 focus:outline-none transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-white text-lg xl:text-2xl px-4 py-2 hover:text-yellow-300 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown Menu: floating overlay so page content is never pushed down */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-zinc-800 flex flex-col gap-1 p-4 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-white text-sm sm:text-base py-2 px-3 rounded hover:bg-zinc-900 hover:text-yellow-300 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}