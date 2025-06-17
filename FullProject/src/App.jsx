
import Nav from './nav.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import CommunityPage from './pages/Professor/CommunityPage.jsx';
import LibraryPage from './pages/Professor/LibraryPage.jsx';
import CoursePage from './pages/Professor/CoursePage.jsx';
import SpecializationsPage from './pages/Professor/SpecializationsPage.jsx' ;
import ProjectsPage from './pages/Professor/ProjectsPage.jsx';


import StudentLibraryPage from './pages/Students/StudentLibraryPage.jsx';
import StudentCommunityPage from './pages/Students/StudentCommunityPage.jsx';
import StudentProjectsPage from './pages/Students/StudentProjectsPage.jsx';
import StudentSpecializationsPage from './pages/Students/StudentSpecializationsPage.jsx';
import StudentCoursePage from './pages/Students/StudentCoursePage.jsx';


// Admin Route 
import axios from 'axios';
import CreatePage from './pages/Admin/CreatePage.jsx';
import EditPage from './pages/Admin/EditPage.jsx';
import StudentsPage from './pages/Admin/StudentsPage.jsx';
import ProfessorsPage from './pages/Admin/ProfessorsPage.jsx';
import CreateCommunity from './pages/Admin/CreateCommunity.jsx';
import EditCommunity from './pages/Admin/EditCommunity.jsx';
import CommunityActions from './pages/Admin/CommunityActions.jsx';
import CommunityInfo from './pages/Admin/CommunityInfo.jsx';
import CommunityView from './pages/Admin/CommunityView.jsx';
import CreateLibrary from './pages/Admin/CreateLibrary.jsx';
import EditLibrary from './pages/Admin/EditLibrary.jsx';
import LibraryActions from './pages/Admin/LibraryActions.jsx';
import LibraryInfo from './pages/Admin/LibraryInfo.jsx';
import LibraryView from './pages/Admin/LibraryView.jsx';
import EditSpecialty from './pages/Admin/EditSpecialty.jsx';
import SpecialtyInfo from './pages/Admin/SpecialtyInfo.jsx';
import EditSubject from './pages/Admin/EditSubject.jsx';
import SubjectInfo from './pages/Admin/SubjectInfo.jsx';
import Navbar from './components/Navbar.jsx';

import './assets/css/admin/layout.css';
import './assets/css/admin/CreatePage.css';
import './assets/css/admin/EditePage.css';
import './assets/css/admin/StudentsPage.css';
import './assets/css/admin/ProfessorsPage.css';
import './assets/css/admin/NavStyle.css';
import './assets/css/admin/Form.css';
import './assets/css/admin/CreateCommunity.css';
import './assets/css/admin/EditCommunity.css';
import './assets/css/admin/CommunityActions.css';
import './assets/css/admin/CommunityInfo.css';
import './assets/css/admin/CommunityView.css';
import './assets/css/admin/CreateLibrary.css';
import './assets/css/admin/EditLibrary.css';
import './assets/css/admin/LibraryActions.css';
import './assets/css/admin/LibraryInfo.css';
import './assets/css/admin/LibraryView.css';
import './assets/css/admin/EditSpecialty.css';
import './assets/css/admin/SpecialtyInfo.css';
import './assets/css/admin/EditSubject.css';
import './assets/css/admin/SubjectInfo.css';
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/users').then((res) => setUsers(res.data));
  }, []);


  return (
    <BrowserRouter>
      <Nav />
          <div className="sidebar">
          <Navbar />
        </div>
      <Routes>
        {/* <Route path="/" element={<Nav />} /> */}

        <Route path="/community" element={<CommunityPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/" element={<CoursePage />} />
        <Route path="/specialization" element={<SpecializationsPage />} />
        <Route path="/project" element={<ProjectsPage />} />


        <Route path="/student-library" element={<StudentLibraryPage />} />
        <Route path="/student-community" element={<StudentCommunityPage />} />
        <Route path="/student-project" element={<StudentProjectsPage />} />
        <Route path="/student-specialization" element={<StudentSpecializationsPage />} />
        <Route path="/student-coursePage" element={<StudentCoursePage />} />

{/* Admin Pages */}

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
    </BrowserRouter>
  );
}

export default App
