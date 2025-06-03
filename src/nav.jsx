import { Link } from 'react-router-dom';
import './assets/css/navstyle.css'; // تأكد أن هذا الملف موجود

const Navbar = () => (
  <div className="sidebar">
    <Link to="/create" className="nav-button">إنشاء</Link>
    <Link to="/edit" className="nav-button">تعديل</Link>
    <Link to="/students" className="nav-button">عرض الطلاب</Link>
    <Link to="/professors" className="nav-button">عرض الأساتذة</Link>
  </div>
);

export default Navbar;
