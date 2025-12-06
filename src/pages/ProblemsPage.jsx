import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProblemCard from '../components/ProblemCard';

function ProblemsPage() {
  const [problems, setProblems] = useState([]);
  const [filteredProblems, setFilteredProblems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedUrgency, setSelectedUrgency] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = [
    'all',
    'Technical',
    'Business',
    'Design',
    'Marketing',
    'Operations',
    'Customer Service',
    'Payments & Checkout',
    'Shipping & Fulfillment',
    'Apps & Integrations',
    'Other'
  ];
  
  // Load problems from localStorage
  useEffect(() => {
    const loadedProblems = JSON.parse(localStorage.getItem('problems') || '[]');
    setProblems(loadedProblems);
    setFilteredProblems(loadedProblems);
  }, []);
  
  // Filter and sort problems
  useEffect(() => {
    let filtered = [...problems];
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    
    // Filter by urgency
    if (selectedUrgency !== 'all') {
      filtered = filtered.filter(p => p.urgency === selectedUrgency);
    }
    
    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Sort
    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));
        break;
      case 'oldest':
        filtered.sort((a, b) => new Date(a.submittedAt) - new Date(b.submittedAt));
        break;
      case 'most-solutions':
        filtered.sort((a, b) => (b.solutions?.length || 0) - (a.solutions?.length || 0));
        break;
      case 'most-viewed':
        filtered.sort((a, b) => b.views - a.views);
        break;
      case 'urgent':
        const urgencyOrder = { critical: 0, high: 1, medium: 2, low: 3 };
        filtered.sort((a, b) => urgencyOrder[a.urgency] - urgencyOrder[b.urgency]);
        break;
      default:
        break;
    }
    
    setFilteredProblems(filtered);
  }, [problems, selectedCategory, selectedUrgency, sortBy, searchQuery]);
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Problem Bank</h1>
              <p className="text-lg text-gray-600">
                {filteredProblems.length} problems {selectedCategory !== 'all' && `in ${selectedCategory}`}
              </p>
            </div>
            <Link 
              to="/submit-problem"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-sm"
            >
              + Submit Problem
            </Link>
          </div>
          
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search problems..."
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <svg className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Sidebar - Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-24">
              
              <h3 className="font-bold text-gray-900 mb-4">Filters</h3>
              
              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat === 'all' ? 'All Categories' : cat}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Urgency Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Urgency
                </label>
                <select
                  value={selectedUrgency}
                  onChange={(e) => setSelectedUrgency(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm"
                >
                  <option value="all">All Urgency Levels</option>
                  <option value="critical">🔴 Critical</option>
                  <option value="high">🟠 High</option>
                  <option value="medium">🟡 Medium</option>
                  <option value="low">🟢 Low</option>
                </select>
              </div>
              
              {/* Sort By */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="urgent">Most Urgent</option>
                  <option value="most-solutions">Most Solutions</option>
                  <option value="most-viewed">Most Viewed</option>
                </select>
              </div>
              
              {/* Clear Filters */}
              {(selectedCategory !== 'all' || selectedUrgency !== 'all' || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedUrgency('all');
                    setSearchQuery('');
                  }}
                  className="w-full mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Clear all filters
                </button>
              )}
              
            </div>
          </div>
          
          {/* Main Content - Problem List */}
          <div className="lg:col-span-3">
            
            {/* No problems message */}
            {filteredProblems.length === 0 && (
              <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No problems found</h3>
                <p className="text-gray-600 mb-6">
                  {searchQuery || selectedCategory !== 'all' || selectedUrgency !== 'all'
                    ? 'Try adjusting your filters or search query'
                    : 'Be the first to submit a problem!'
                  }
                </p>
                <Link 
                  to="/submit-problem"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Submit First Problem
                </Link>
              </div>
            )}
            
            {/* Problem Cards Grid */}
            <div className="space-y-4">
              {filteredProblems.map((problem) => (
                <ProblemCard key={problem.id} problem={problem} />
              ))}
            </div>
            
          </div>
          
        </div>
        
      </div>
    </div>
  );
}

export default ProblemsPage;