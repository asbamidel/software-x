import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProblemsPage from './pages/ProblemsPage';
import BillboardPage from './pages/BillboardPage';
import DashboardPage from './pages/DashboardPage';
import SubmitProblemPage from './pages/SubmitProblemPage'; // ← ADD THIS

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        {/* Header appears on every page */}
        <Header />
        
        {/* Routes define which page shows for each URL */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/problems" element={<ProblemsPage />} />
          <Route path="/billboard" element={<BillboardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/submit-problem" element={<SubmitProblemPage />} /> {/* ← ADD THIS */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
