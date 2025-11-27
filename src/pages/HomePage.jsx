function HomePage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to Software-X
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          The problem-solving platform for Shopify store owners
        </p>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">How it works:</h2>
          <ol className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</span>
              <span>Submit your Shopify problem with details</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</span>
              <span>Community members donate verified solutions</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</span>
              <span>Rate solutions that worked for you</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</span>
              <span>Get your problem resolved within 21 days</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default HomePage;