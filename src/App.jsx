import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProblemsPage from './pages/ProblemsPage';
import BillboardPage from './pages/BillboardPage';
import DashboardPage from './pages/DashboardPage';
import SubmitProblemPage from './pages/SubmitProblemPage';
import ToolsPage from './pages/ToolsPage';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/problems" element={<ProblemsPage />} />
          <Route path="/billboard" element={<BillboardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/submit-problem" element={<SubmitProblemPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
