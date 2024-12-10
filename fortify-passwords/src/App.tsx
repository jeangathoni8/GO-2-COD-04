import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { LandingHero } from './components/LandingHero';
import { PasswordGenerator } from './components/PasswordGenerator';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Header theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<LandingHero />} />
          <Route path="/generator" element={<PasswordGenerator />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;