import React, { useState, useEffect } from 'react';
import { BrowserRouter , Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import CreatePage from './pages/CreatePage.jsx';
import EditPage from './pages/EditPage.jsx';
import StudentsPage from './pages/StudentsPage.jsx';
import ProfessorsPage from './pages/ProfessorsPage.jsx';
import Navbar from './nav.jsx';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/users').then((res) => setUsers(res.data));
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 space-y-8">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/create" element={<CreatePage users={users} setUsers={setUsers} />} />
          <Route path="/edit" element={<EditPage users={users} setUsers={setUsers} />} />
          <Route path="/students" element={<StudentsPage  />} />
          <Route path="/professors" element={<ProfessorsPage  />} />
          {/* <Route path="/" element={<Navbar />} /> */}
        </Routes>
    
      </BrowserRouter>
      </div>
  );
};



export default App
