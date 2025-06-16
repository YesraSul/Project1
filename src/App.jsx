// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import CreatePage from './pages/CreatePage.jsx';
import EditPage from './pages/EditPage.jsx';
import StudentsPage from './pages/StudentsPage.jsx';
import ProfessorsPage from './pages/ProfessorsPage.jsx';
import CreateCommunity from './pages/CreateCommunity.jsx';
import EditCommunity from './pages/EditCommunity.jsx';
import CommunityActions from './pages/CommunityActions.jsx';
import CommunityInfo from './pages/CommunityInfo.jsx';
import CommunityView from './pages/CommunityView.jsx';
import CreateLibrary from './pages/CreateLibrary.jsx';
import EditLibrary from './pages/EditLibrary.jsx';
import LibraryActions from './pages/LibraryActions.jsx';
import LibraryInfo from './pages/LibraryInfo.jsx';
import LibraryView from './pages/LibraryView.jsx';
import EditSpecialty from './pages/EditSpecialty.jsx';
import SpecialtyInfo from './pages/SpecialtyInfo.jsx';
import EditSubject from './pages/EditSubject.jsx';
import SubjectInfo from './pages/SubjectInfo.jsx';
import Navbar from './components/Navbar.jsx';

import './assets/css/layout.css';
import './assets/css/CreatePage.css';
import './assets/css/EditePage.css';
import './assets/css/StudentsPage.css';
import './assets/css/ProfessorsPage.css';
import './assets/css/NavStyle.css';
import './assets/css/Form.css';
import './assets/css/CreateCommunity.css';
import './assets/css/EditCommunity.css';
import './assets/css/CommunityActions.css';
import './assets/css/CommunityInfo.css';
import './assets/css/CommunityView.css';
import './assets/css/CreateLibrary.css';
import './assets/css/EditLibrary.css';
import './assets/css/LibraryActions.css';
import './assets/css/LibraryInfo.css';
import './assets/css/LibraryView.css';
import './assets/css/EditSpecialty.css';
import './assets/css/SpecialtyInfo.css';
import './assets/css/EditSubject.css';
import './assets/css/SubjectInfo.css';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/users').then((res) => setUsers(res.data));
  }, []);

  return (
    <BrowserRouter>
      <div className="main-layout">
        <div className="sidebar">
          <Navbar />
        </div>
        <div className="page-content">
          <Routes>
            <Route path="/create" element={<CreatePage users={users} setUsers={setUsers} />} />
            <Route path="/edit" element={<EditPage users={users} setUsers={setUsers} />} />
            <Route path="/students" element={<StudentsPage users={users} />} />
            <Route path="/professors" element={<ProfessorsPage users={users} />} />
            <Route path="/create-community" element={<CreateCommunity />} />
            <Route path="/edit-community" element={<EditCommunity />} />
            <Route path="/community-actions" element={<CommunityActions />} />
            <Route path="/community-info" element={<CommunityInfo />} />
            <Route path="/community-view" element={<CommunityView />} />
            <Route path="/create-library" element={<CreateLibrary />} />
            <Route path="/edit-library" element={<EditLibrary />} />
            <Route path="/library-actions" element={<LibraryActions />} />
            <Route path="/library-info" element={<LibraryInfo />} />
            <Route path="/library-view" element={<LibraryView />} />
            <Route path="/edit-specialty" element={<EditSpecialty />} />
            <Route path="/specialty-info" element={<SpecialtyInfo />} />
            <Route path="/edit-subject" element={<EditSubject />} />
            <Route path="/subject-info" element={<SubjectInfo />} />
            <Route path="*" element={<CreatePage users={users} setUsers={setUsers} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
