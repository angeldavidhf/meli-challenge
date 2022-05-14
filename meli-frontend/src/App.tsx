import { Route, Routes } from 'react-router-dom';

import Header from '@organisms/Header';

import Home from '@pages/Home';
import SearchResult from '@pages/SearchResult';
import ProductResult from '@pages/ProductResult';

function App() {

  return (
    <>
      <Header />
      <main className="container" aria-label="Main content">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="items" element={<SearchResult />} />
          <Route path="items/:id" element={<ProductResult />} />
        </Routes>
      </main>
    </>
  );
}

export default App
