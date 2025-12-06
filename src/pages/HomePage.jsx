import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section - Dark Green like Fiverr Pro */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Content */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                A premium solution that delivers trusted Shopify help
              </h1>
              
              {/* Pills/Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                <button className="bg-white/20 hover:bg-white/30 text-white px-5 py-2.5 rounded-full font-medium transition-all backdrop-blur-sm border border-white/20">
                  Browse problems
                </button>
                <button className="bg-white/20 hover:bg-white/30 text-white px-5 py-2.5 rounded-full font-medium transition-all backdrop-blur-sm border border-white/20">
                  Submit a problem
                </button>
                <button className="bg-white/20 hover:bg-white/30 text-white px-5 py-2.5 rounded-full font-medium transition-all backdrop-blur-sm border border-white/20">
                  Expert solutions
                </button>
              </div>
              
              {/* Search Bar */}
              <div className="relative max-w-2xl">
                <input
                  type="text"
                  placeholder="Search for problems or solutions"
                  className="w-full px-6 py-4 pr-14 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-xl"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-md transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Right Side - User Cards */}
            <div className="hidden lg:flex justify-end items-center gap-4">
              <div className="bg-gradient-to-br from-pink-900 to-red-900 rounded-2xl p-6 w-52 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform">
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-20 h-20 mb-4"></div>
                <div className="bg-white/10 h-3 w-32 rounded mb-2"></div>
                <div className="bg-white/10 h-2 w-24 rounded"></div>
                <div className="mt-4 inline-block bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                  Vetted Expert
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-6 w-64 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform">
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-24 h-24 mb-4"></div>
                <div className="bg-white/10 h-4 w-40 rounded mb-2"></div>
                <div className="bg-white/10 h-2 w-32 rounded"></div>
                <div className="mt-4 inline-block bg-emerald-500 text-white text-xs px-3 py-1 rounded-full">
                  Vetted Pro
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-lime-800 to-emerald-900 rounded-2xl p-6 w-52 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform">
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-20 h-20 mb-4"></div>
                <div className="bg-white/10 h-3 w-32 rounded mb-2"></div>
                <div className="bg-white/10 h-2 w-24 rounded"></div>
                <div className="mt-4 inline-block bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                  Vetted Pro
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      
      {/* Trusted By Section */}
      <section className="bg-gradient-to-b from-emerald-900 to-emerald-950 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-white/60 font-medium mb-6">Shopify stores solving problems with Software-X</p>
          <div className="flex flex-wrap items-center gap-12 opacity-60">
            <div className="text-white font-bold text-2xl">SHOPIFY</div>
            <div className="text-white font-bold text-2xl">OBERLO</div>
            <div className="text-white font-bold text-2xl">PRINTFUL</div>
            <div className="text-white font-bold text-2xl">SPOCKET</div>
            <div className="text-white font-bold text-2xl">DSERS</div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How Software-X Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get expert solutions to your Shopify problems in three simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-emerald-600 text-3xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Submit Your Problem</h3>
              <p className="text-gray-600 leading-relaxed">
                Describe your Shopify issue with details. Our community of experts will review it immediately.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 text-3xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Get Verified Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive multiple solutions from vetted experts, all tested and rated by the community.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-purple-600 text-3xl font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Problem Solved</h3>
              <p className="text-gray-600 leading-relaxed">
                Implement the solution and rate it to help others. Get your issue resolved within 21 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to solve your Shopify problems?
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Join thousands of store owners getting expert help. Submit your first problem for free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/submit-problem"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
            >
              Submit a Problem
            </Link>
            <Link 
              to="/problems"
              className="inline-block bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 px-10 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Browse Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Software-X</h4>
              <p className="text-gray-400 text-sm">
                Premium problem-solving for Shopify store owners
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">For Store Owners</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Submit Problem</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Browse Solutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dashboard</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Tools</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Software-X. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default HomePage;