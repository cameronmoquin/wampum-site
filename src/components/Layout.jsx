import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { IconMenu, IconX } from './Icons'

function NavLink({ to, children, onClick }) {
  const location = useLocation()
  const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to))
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`block px-3 py-3 sm:py-2 text-sm font-medium tracking-wide transition-colors no-underline
        ${isActive
          ? 'text-charcoal border-b-2 border-charcoal'
          : 'text-smoke hover:text-charcoal'
        }`}
    >
      {children}
    </Link>
  )
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-charcoal/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            <Link to="/" className="no-underline">
              <span className="font-serif text-lg font-bold text-charcoal tracking-tight">The Wampum</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/story">The Story</NavLink>
              <NavLink to="/wampum">WAMPUM</NavLink>
              <NavLink to="/field-guide">Field Guide</NavLink>
              <NavLink to="/community">Community</NavLink>
              <NavLink to="/library">Library</NavLink>
            </nav>

            <button
              className="md:hidden p-2 text-charcoal"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <IconX /> : <IconMenu />}
            </button>
          </div>

          {menuOpen && (
            <nav className="md:hidden pb-4 border-t border-charcoal/10 pt-3 flex flex-col gap-1">
              <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
              <NavLink to="/story" onClick={() => setMenuOpen(false)}>The Story</NavLink>
              <NavLink to="/wampum" onClick={() => setMenuOpen(false)}>WAMPUM</NavLink>
              <NavLink to="/field-guide" onClick={() => setMenuOpen(false)}>Field Guide</NavLink>
              <NavLink to="/community" onClick={() => setMenuOpen(false)}>Community</NavLink>
              <NavLink to="/library" onClick={() => setMenuOpen(false)}>Library</NavLink>
            </nav>
          )}
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-charcoal text-white/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8 text-sm">
            <div>
              <h3 className="font-serif text-base text-white/90 mb-3">The Wampum</h3>
              <p className="leading-relaxed">
                A field guide for what comes next. Built by the Community Gardeners, Providence, Rhode Island.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-base text-white/90 mb-3">Navigate</h3>
              <ul className="space-y-2">
                <li><Link to="/story" className="hover:text-white/90 transition-colors no-underline text-white/60">The Story</Link></li>
                <li><Link to="/wampum" className="hover:text-white/90 transition-colors no-underline text-white/60">WAMPUM Token</Link></li>
                <li><Link to="/field-guide" className="hover:text-white/90 transition-colors no-underline text-white/60">Field Guide</Link></li>
                <li><Link to="/community" className="hover:text-white/90 transition-colors no-underline text-white/60">Community</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-base text-white/90 mb-3">WAMP Token</h3>
              <p className="leading-relaxed mb-2">ERC-20 on Polygon Mainnet</p>
              <a
                href="https://polygonscan.com/address/0xC46b794808D30f75787Da284D1EB8d46b9496A67"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors no-underline underline decoration-white/30"
              >
                View on Polygonscan
              </a>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/30">
            <p>thewampum.com &middot; The Community Gardeners &middot; Providence, Rhode Island &middot; April 2026</p>
            <p className="mt-1">WAMPUM (WAMP) is a community exchange token. It is not a security. No financial return is promised or implied.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
