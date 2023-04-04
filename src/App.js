import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Layout from './components/layout/Layout.js';
import Home from './pages/Home.js';

function App() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash === '') {
      window.scroll(0,0);
    }

    else {
      setTimeout(() =>{
        const id = hash.replace('#', '');
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView(
          { 
            behavior: 'smooth',
            block: 'center'
          });
        }
      }, 0);
    }

  }, [pathname, hash, key]);


  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
