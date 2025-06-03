
import Nav from './nav.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CommunityPage from './pages/CommunityPage.jsx';
function App() {


  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {/* <Route path="/" element={<Nav />} /> */}
        <Route path="/" element={<CommunityPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App
