// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaPlus, 
  FaEdit, 
  FaUsers, 
  FaUsersCog, 
  FaBook, 
  FaBookOpen, 
  FaInfoCircle, 
  FaEye 
} from 'react-icons/fa';
import '../assets/css/admin/NavStyle.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="nav-title">لوحة الإدارة</h2>
      <ul className="nav-links">
        {/* طلاب وأساتذة */}
        <li><Link to="/create" className="nav-button"><FaPlus className="icon" /> إنشاء طالب/أستاذ</Link></li>
        <li><Link to="/edit" className="nav-button"><FaEdit className="icon" /> تعديل طالب/أستاذ</Link></li>
        <li><Link to="/students" className="nav-button"><FaUsers className="icon" /> عرض الطلاب</Link></li>
        <li><Link to="/professors" className="nav-button"><FaUsersCog className="icon" /> عرض الأساتذة</Link></li>

        {/* المجتمعات */}
        <li><Link to="/create-community" className="nav-button"><FaPlus className="icon" /> إنشاء مجتمع</Link></li>
        <li><Link to="/edit-community" className="nav-button"><FaEdit className="icon" /> تعديل مجتمع</Link></li>
        <li><Link to="/community-actions" className="nav-button"><FaBookOpen className="icon" /> صفحة المجتمع</Link></li>
        <li><Link to="/community-info" className="nav-button"><FaInfoCircle className="icon" /> معلومات المجتمع</Link></li>
        <li><Link to="/community-view" className="nav-button"><FaEye className="icon" /> عرض المجتمع</Link></li>

        {/* المكتبة */}
        <li><Link to="/create-library" className="nav-button"><FaPlus className="icon" /> إنشاء مكتبة</Link></li>
        <li><Link to="/edit-library" className="nav-button"><FaEdit className="icon" /> تعديل مكتبة</Link></li>
        <li><Link to="/library-actions" className="nav-button"><FaBookOpen className="icon" /> صفحة المكتبة</Link></li>
        <li><Link to="/library-info" className="nav-button"><FaInfoCircle className="icon" /> معلومات المكتبة</Link></li>
        <li><Link to="/library-view" className="nav-button"><FaEye className="icon" /> عرض المكتبة</Link></li>

        {/* الاختصاص والمادة */}
        <li><Link to="/edit-specialty" className="nav-button"><FaEdit className="icon" /> تعديل اختصاص</Link></li>
        <li><Link to="/specialty-info" className="nav-button"><FaInfoCircle className="icon" /> معلومات الاختصاص</Link></li>
        <li><Link to="/edit-subject" className="nav-button"><FaEdit className="icon" /> تعديل مادة</Link></li>
        <li><Link to="/subject-info" className="nav-button"><FaInfoCircle className="icon" /> معلومات المادة</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
