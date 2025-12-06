import { Link } from 'react-router-dom';

function ProblemCard({ problem }) {
  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMins < 60) return `${diffMins} minutes ago`;
    if (diffHours < 24) return `${diffHours} hours ago`;
    return `${diffDays} days ago`;
  };
  
  // Urgency badge colors
  const urgencyColors = {
    critical: 'bg-red-100 text-red-700 border-red-200',
    high: 'bg-orange-100 text-orange-700 border-orange-200',
    medium: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    low: 'bg-green-100 text-green-700 border-green-200'
  };
  
  const urgencyEmojis = {
    critical: '🔴',
    high: '🟠',
    medium: '🟡',
    low: '🟢'
  };
  
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      
      {/* Header - Category & Urgency */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded">
          {problem.category}
        </span>
        <span className={`text-xs font-medium px-3 py-1 rounded border ${urgencyColors[problem.urgency]}`}>
          {urgencyEmojis[problem.urgency]} {problem.urgency.toUpperCase()}
        </span>
      </div>
      
      {/* Title */}
      <Link 
        to={`/problem/${problem.id}`}
        className="block mb-3 hover:text-blue-600 transition-colors"
      >
        <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
          {problem.title}
        </h3>
      </Link>
      
      {/* Description Preview */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {problem.description}
      </p>
      
      {/* Tags */}
      {problem.tags && problem.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {problem.tags.slice(0, 3).map((tag) => (
            <span 
              key={tag}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
          {problem.tags.length > 3 && (
            <span className="text-xs text-gray-500">
              +{problem.tags.length - 3} more
            </span>
          )}
        </div>
      )}
      
      {/* Footer - Stats & Meta */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
            {problem.solutions?.length || 0} solutions
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            {problem.views} views
          </span>
        </div>
        
        <span className="text-xs text-gray-400">
          {formatDate(problem.submittedAt)}
        </span>
      </div>
      
      {/* Budget Badge (if exists) */}
      {problem.budget && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-700 bg-green-50 px-3 py-1 rounded">
            💰 Budget: ${problem.budget}
          </span>
        </div>
      )}
      
    </div>
  );
}

export default ProblemCard;