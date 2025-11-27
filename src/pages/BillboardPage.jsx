function BillboardPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Problem Billboard</h1>
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <p className="text-gray-600 text-lg">
            Trending problems will appear here...
          </p>
        </div>
      </div>
    </div>
  );
}

export default BillboardPage;