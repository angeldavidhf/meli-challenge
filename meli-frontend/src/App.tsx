import { Route, Routes } from 'react-router-dom';

import Header from '@organisms/Header';

import Home from '@pages/Home';
import SearchResult from '@pages/SearchResult';
import ItemDetail from '@pages/ItemDetail';

function App() {

  return (
    <>
      <Header />
      <main className="container" aria-label="Main content">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="items" element={<SearchResult />} />
          <Route path="items/:id" element={<ItemDetail />} />
        </Routes>
      </main>
    </>
  );
}

export default App
