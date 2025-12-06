import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="8" fill="url(#gradient)"/>
              <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">SX</text>
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0EA5E9" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-2xl font-bold text-gray-900">software-x</span>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/problems" 
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Problems
            </Link>
            <Link 
              to="/dashboard" 
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Dashboard
            </Link>
            <Link 
              to="/tools" 
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Tools
            </Link>
            <Link 
              to="/blog" 
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Blog
            </Link>
          </nav>

          {/* Right Side - Sign In & Join */}
          <div className="flex items-center space-x-4">
            <button className="hidden lg:block text-gray-600 hover:text-gray-900 font-medium transition-colors px-4 py-2">
              Sign in
            </button>
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded font-medium transition-colors">
              Join
            </button>
            
            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;