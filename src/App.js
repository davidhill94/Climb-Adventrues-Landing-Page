import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Sidebar } from './components/Sidebar/Sidebar';
import { DiscoverPage } from './pages/DiscoverPage';
import { Home } from './pages/Home';
import { SignUpPage } from './pages/SignUpPage';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen(!isOpen)
  },
 [isOpen]);
 
  useEffect(() => {
    if(isOpen){
      window.addEventListener('scroll', toggle)
    }
}, [isOpen, toggle])

  return (
    <BrowserRouter className="App">
      <Sidebar toggle={toggle} isOpen={isOpen}/>
      <Routes>
        <Route path="/" element={<Home toggle={toggle} isOpen={isOpen} />} />
        <Route path="/sign-up" element={<SignUpPage toggle={toggle} isOpen={isOpen}  />} />
        <Route path="/discover" element={<DiscoverPage toggle={toggle} isOpen={isOpen}  />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
