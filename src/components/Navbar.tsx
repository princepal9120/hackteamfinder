import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-white" />
              <span className="text-white text-xl font-bold hidden sm:block">HackTeamFinder</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:space-x-8">
            <Link to="/" className="text-white hover:text-primary-light transition-colors">
              Home
            </Link>
            <Link to="/hackathons" className="text-white hover:text-primary-light transition-colors">
              Hackathons
            </Link>
            <Link to="/find-teammates" className="text-white hover:text-primary-light transition-colors">
              Find Teammates
            </Link>
            <Link to="/messages" className="text-white hover:text-primary-light transition-colors">
              Messages
            </Link>
          </div>

          <div className="hidden md:block">
            <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all">
              Connect Wallet
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-primary-light p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-white hover:bg-white/20 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/hackathons"
              className="block px-3 py-2 text-white hover:bg-white/20 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Hackathons
            </Link>
            <Link
              to="/find-teammates"
              className="block px-3 py-2 text-white hover:bg-white/20 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Find Teammates
            </Link>
            <Link
              to="/messages"
              className="block px-3 py-2 text-white hover:bg-white/20 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Messages
            </Link>
            <button className="w-full mt-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all">
              Connect Wallet
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;