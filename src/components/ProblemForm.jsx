import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProblemForm() {
  const navigate = useNavigate();
  
  // REQUIRED FIELDS STATE
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [whatTried, setWhatTried] = useState('');
  const [expectedOutcome, setExpectedOutcome] = useState('');
  const [urgency, setUrgency] = useState('medium');
  const [hasTriedSolutions, setHasTriedSolutions] = useState(true);
  
  // OPTIONAL FIELDS STATE
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState('');
  const [budget, setBudget] = useState('');
  
  // PRE-POST CHECKLIST STATE
  const [checklist, setChecklist] = useState({
    searched: false,
    detailProvided: false,
    realProblem: false,
    agreeToRate: false
  });
  
  // VALIDATION & UI STATE
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showTagInput, setShowTagInput] = useState(false);
  
  // CATEGORIES
  const categories = [
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
  
  // CHARACTER LIMITS
  const LIMITS = {
    title: { min: 10, max: 100 },
    description: { min: 100, max: 2000 },
    whatTried: { min: 50, max: 1000 },
    expectedOutcome: { min: 50, max: 500 }
  };
  
  // VALIDATION FUNCTION
  const validateForm = () => {
    const newErrors = {};
    
    // Title
    if (!title.trim()) {
      newErrors.title = 'Title is required';
    } else if (title.length < LIMITS.title.min) {
      newErrors.title = `Title must be at least ${LIMITS.title.min} characters`;
    } else if (title.length > LIMITS.title.max) {
      newErrors.title = `Title cannot exceed ${LIMITS.title.max} characters`;
    }
    
    // Category
    if (!category) {
      newErrors.category = 'Please select a category';
    }
    
    // Description
    if (!description.trim()) {
      newErrors.description = 'Description is required';
    } else if (description.length < LIMITS.description.min) {
      newErrors.description = `Description must be at least ${LIMITS.description.min} characters`;
    } else if (description.length > LIMITS.description.max) {
      newErrors.description = `Description cannot exceed ${LIMITS.description.max} characters`;
    }
    
    // What I've Tried
    if (hasTriedSolutions) {
      if (!whatTried.trim()) {
        newErrors.whatTried = 'Please tell us what you\'ve already tried';
      } else if (whatTried.length < LIMITS.whatTried.min) {
        newErrors.whatTried = `Please provide at least ${LIMITS.whatTried.min} characters`;
      } else if (whatTried.length > LIMITS.whatTried.max) {
        newErrors.whatTried = `Cannot exceed ${LIMITS.whatTried.max} characters`;
      }
    }
    // If they haven't tried anything, we auto-fill it, so no validation needed
    
    // Expected Outcome
    if (!expectedOutcome.trim()) {
      newErrors.expectedOutcome = 'Please describe what success looks like';
    } else if (expectedOutcome.length < LIMITS.expectedOutcome.min) {
      newErrors.expectedOutcome = `Please provide at least ${LIMITS.expectedOutcome.min} characters`;
    } else if (expectedOutcome.length > LIMITS.expectedOutcome.max) {
      newErrors.expectedOutcome = `Cannot exceed ${LIMITS.expectedOutcome.max} characters`;
    }
    
    // Checklist validation
    const allChecked = Object.values(checklist).every(val => val === true);
    if (!allChecked) {
      newErrors.checklist = 'Please confirm all checklist items before submitting';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // ADD TAG
  const handleAddTag = () => {
    const trimmedTag = currentTag.trim();
    
    if (!trimmedTag) return;
    
    if (tags.length >= 5) {
      alert('Maximum 5 tags allowed');
      return;
    }
    
    if (tags.includes(trimmedTag)) {
      alert('Tag already added');
      return;
    }
    
    setTags([...tags, trimmedTag]);
    setCurrentTag('');
    setShowTagInput(false);
  };
  
  // REMOVE TAG
  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };
  
  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll to first error
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    setIsSubmitting(true);
    
    // Create problem object
    const problem = {
      id: `prob_${Date.now()}`,
      title: title.trim(),
      category,
      description: description.trim(),
      whatTried: whatTried.trim(),
      expectedOutcome: expectedOutcome.trim(),
      urgency,
      tags,
      budget: budget || null,
      submittedBy: 'current_user', // TODO: Replace with actual user
      submittedAt: new Date().toISOString(),
      status: 'active',
      tier: 1,
      solutions: [],
      upvotes: 0,
      views: 0
    };
    
    // Save to localStorage
    const existingProblems = JSON.parse(localStorage.getItem('problems') || '[]');
    existingProblems.push(problem);
    localStorage.setItem('problems', JSON.stringify(existingProblems));
    
    // Simulate network delay
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/problems');
    }, 800);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Submit a Problem</h1>
          <p className="text-lg text-gray-600">
            Describe your Shopify issue in detail to get the best solutions from our community
          </p>
        </div>
        
        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* REQUIRED FIELDS SECTION */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-red-100 text-red-600 text-sm px-2 py-1 rounded mr-3">Required</span>
              Problem Details
            </h2>
            
            {/* TITLE */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Problem Title *
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="E.g., Checkout page crashes when applying discount codes"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                  errors.title ? 'border-red-300 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                }`}
              />
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-red-600">{errors.title || ''}</span>
                <span className={`text-sm ${
                  title.length < LIMITS.title.min || title.length > LIMITS.title.max 
                    ? 'text-red-600' : 'text-gray-500'
                }`}>
                  {title.length}/{LIMITS.title.max}
                </span>
              </div>
            </div>
            
            {/* CATEGORY */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Problem Category *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                  errors.category ? 'border-red-300 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                }`}
              >
                <option value="">Select a category...</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              {errors.category && (
                <span className="text-sm text-red-600 mt-1 block">{errors.category}</span>
              )}
            </div>
            
            {/* DESCRIPTION */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Detailed Description *
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe what's happening in detail. Be specific about error messages, when it occurs, and any patterns you've noticed..."
                rows="6"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none ${
                  errors.description ? 'border-red-300 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                }`}
              />
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-red-600">{errors.description || ''}</span>
                <span className={`text-sm ${
                  description.length < LIMITS.description.min || description.length > LIMITS.description.max 
                    ? 'text-red-600' : 'text-gray-500'
                }`}>
                  {description.length}/{LIMITS.description.max}
                </span>
              </div>
            </div>
            
            {/* WHAT I'VE TRIED */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                What I've Tried *
              </label>
              
              {/* Toggle */}
              <div className="mb-3">
                <label className="flex items-center gap-2 cursor-pointer w-fit">
                  <input
                    type="checkbox"
                    checked={!hasTriedSolutions}
                    onChange={(e) => {
                      setHasTriedSolutions(!e.target.checked);
                      if (e.target.checked) {
                        setWhatTried('I haven\'t tried any solutions yet');
                      } else {
                        setWhatTried('');
                      }
                    }}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-200"
                  />
                  <span className="text-gray-700">I haven't tried anything yet</span>
                </label>
              </div>
              
              {/* Show textarea only if they've tried something */}
              {hasTriedSolutions && (
                <>
                  <textarea
                    value={whatTried}
                    onChange={(e) => setWhatTried(e.target.value)}
                    placeholder="What solutions have you already attempted? This helps us avoid suggesting things you've already done..."
                    rows="4"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none ${
                      errors.whatTried ? 'border-red-300 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                    }`}
                  />
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-red-600">{errors.whatTried || ''}</span>
                    <span className={`text-sm ${
                      whatTried.length < LIMITS.whatTried.min || whatTried.length > LIMITS.whatTried.max 
                        ? 'text-red-600' : 'text-gray-500'
                    }`}>
                      {whatTried.length}/{LIMITS.whatTried.max}
                    </span>
                  </div>
                </>
              )}
              
              {!hasTriedSolutions && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-700">
                  ✓ Noted: You haven't tried any solutions yet. We'll provide fresh approaches.
                </div>
              )}
            </div>
            
            {/* EXPECTED OUTCOME */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Expected Outcome *
              </label>
              <textarea
                value={expectedOutcome}
                onChange={(e) => setExpectedOutcome(e.target.value)}
                placeholder="What does success look like? Describe the ideal resolution to this problem..."
                rows="3"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none ${
                  errors.expectedOutcome ? 'border-red-300 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                }`}
              />
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-red-600">{errors.expectedOutcome || ''}</span>
                <span className={`text-sm ${
                  expectedOutcome.length < LIMITS.expectedOutcome.min || expectedOutcome.length > LIMITS.expectedOutcome.max 
                    ? 'text-red-600' : 'text-gray-500'
                }`}>
                  {expectedOutcome.length}/{LIMITS.expectedOutcome.max}
                </span>
              </div>
            </div>
            
            {/* URGENCY LEVEL */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Urgency Level *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                
                <button
                  type="button"
                  onClick={() => setUrgency('critical')}
                  className={`p-4 rounded-lg border-2 font-medium transition-all text-left ${
                    urgency === 'critical'
                      ? 'border-red-500 bg-red-50 text-red-700'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <div className="font-bold mb-1">🔴 Critical</div>
                  <div className="text-xs opacity-75">Need solution within 3 days</div>
                </button>
                
                <button
                  type="button"
                  onClick={() => setUrgency('high')}
                  className={`p-4 rounded-lg border-2 font-medium transition-all text-left ${
                    urgency === 'high'
                      ? 'border-orange-500 bg-orange-50 text-orange-700'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <div className="font-bold mb-1">🟠 High</div>
                  <div className="text-xs opacity-75">Within 1 week</div>
                </button>
                
                <button
                  type="button"
                  onClick={() => setUrgency('medium')}
                  className={`p-4 rounded-lg border-2 font-medium transition-all text-left ${
                    urgency === 'medium'
                      ? 'border-yellow-500 bg-yellow-50 text-yellow-700'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <div className="font-bold mb-1">🟡 Medium</div>
                  <div className="text-xs opacity-75">Within 2 weeks</div>
                </button>
                
                <button
                  type="button"
                  onClick={() => setUrgency('low')}
                  className={`p-4 rounded-lg border-2 font-medium transition-all text-left ${
                    urgency === 'low'
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <div className="font-bold mb-1">🟢 Low</div>
                  <div className="text-xs opacity-75">Whenever possible</div>
                </button>
                
              </div>
            </div>
          </div>
          
          {/* OPTIONAL FIELDS SECTION */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded mr-3">Optional</span>
              Additional Information
            </h2>
            
            {/* TAGS */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tags (max 5)
              </label>
              
              {/* Display current tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="hover:text-blue-900"
                    >
                      ×
                    </button>
                  </span>
                ))}
                
                {tags.length < 5 && !showTagInput && (
                  <button
                    type="button"
                    onClick={() => setShowTagInput(true)}
                    className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-gray-200"
                  >
                    + Add Tag
                  </button>
                )}
              </div>
              
              {/* Tag input */}
              {showTagInput && (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={currentTag}
                    onChange={(e) => setCurrentTag(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                    placeholder="Type tag and press Enter..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                  <button
                    type="button"
                    onClick={handleAddTag}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowTagInput(false);
                      setCurrentTag('');
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                </div>
              )}
              
              <p className="text-xs text-gray-500 mt-2">
                Add relevant tags to help others find and solve your problem faster
              </p>
            </div>
            
            {/* BUDGET */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Budget (if willing to pay for solution)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-3 text-gray-500">$</span>
                <input
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="0"
                  min="0"
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Offering a budget may attract faster, more specialized help
              </p>
            </div>
            
            {/* ATTACHMENTS PLACEHOLDER */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Attachments
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <p className="text-gray-500">📎 Image and file uploads coming soon</p>
                <p className="text-xs text-gray-400 mt-1">Max 5MB total</p>
              </div>
            </div>
          </div>
          
          {/* PRE-POST CHECKLIST */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Before You Submit</h2>
            <p className="text-gray-600 mb-6">
              Please confirm the following to ensure you get the best help:
            </p>
            
            <div className="space-y-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checklist.searched}
                  onChange={(e) => setChecklist({ ...checklist, searched: e.target.checked })}
                  className="mt-1 w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-200"
                />
                <span className="text-gray-700">
                  I've searched for similar problems and didn't find a solution
                </span>
              </label>
              
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checklist.detailProvided}
                  onChange={(e) => setChecklist({ ...checklist, detailProvided: e.target.checked })}
                  className="mt-1 w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-200"
                />
                <span className="text-gray-700">
                  I've provided enough detail for someone to help me
                </span>
              </label>
              
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checklist.realProblem}
                  onChange={(e) => setChecklist({ ...checklist, realProblem: e.target.checked })}
                  className="mt-1 w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-200"
                />
                <span className="text-gray-700">
                  This is a real problem I'm currently experiencing
                </span>
              </label>
              
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checklist.agreeToRate}
                  onChange={(e) => setChecklist({ ...checklist, agreeToRate: e.target.checked })}
                  className="mt-1 w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-200"
                />
                <span className="text-gray-700">
                  I agree to rate any solutions I receive to help the community
                </span>
              </label>
            </div>
            
            {errors.checklist && (
              <p className="text-red-600 text-sm mt-4">{errors.checklist}</p>
            )}
          </div>
          
          {/* SUBMIT BUTTONS */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex-1 py-4 rounded-lg font-semibold text-white transition-all shadow-sm hover:shadow-md ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isSubmitting ? 'Submitting Problem...' : 'Submit Problem'}
            </button>
            
            <button
              type="button"
              onClick={() => navigate('/problems')}
              className="px-8 py-4 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:border-gray-400 transition-all"
            >
              Cancel
            </button>
          </div>
          
        </form>
        
      </div>
    </div>
  );
}

export default ProblemForm;