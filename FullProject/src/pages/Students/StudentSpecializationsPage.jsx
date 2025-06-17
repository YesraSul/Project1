import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

// الاختصاصات التي يشرف عليها الأستاذ
const specializations = [
  {
    id: "networks",
    name: "هندسة الشبكات",
    description: "يشرف الأستاذ على مقررات تصميم الشبكات والبروتوكولات."
  },
  {
    id: "ai",
    name: "الذكاء الاصطناعي",
    description: "يتابع الأستاذ مشاريع وبحوث في أنظمة الذكاء والتعلم الآلي."
  },
  {
    id: "software",
    name: "هندسة البرمجيات",
    description: "يقوم الأستاذ بتدريس وتحكيم مشاريع تطوير البرمجيات."
  }
];

// الشريط الجانبي للروابط
const Sidebar = () => (
  <div className="w-64 bg-orange-100 p-4 rounded-2xl shadow-md">
    <h2 className="text-xl font-bold mb-4 text-orange-600">القائمة</h2>
    <ul className="space-y-2">
      <li>
        <Link to="/community" className="text-orange-500 hover:underline">المجتمع الأكاديمي</Link>
      </li>
      <li>
        <Link to="/library" className="text-orange-500 hover:underline">المكتبة الرقمية</Link>
      </li>
    </ul>
  </div>
);

// الصفحة الرئيسية للاختصاصات
const SpecializationsPage = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold text-orange-600 mb-6">الاختصاصات المشرف عليها</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {specializations.map(spec => (
        <Link key={spec.id} to={`/specialization/${spec.id}`} className="bg-orange-50 p-6 rounded-2xl shadow hover:bg-orange-100 transition">
          <h2 className="text-xl font-bold text-orange-700 mb-2">{spec.name}</h2>
          <p className="text-orange-800 text-sm">{spec.description}</p>
        </Link>
      ))}
    </div>
  </div>
);

// صفحة تفاصيل الاختصاص
const SpecializationDetail = ({ id }) => (
  <div className="flex gap-8 p-8">
    <Sidebar />
    <div className="flex-1">
      <h1 className="text-2xl font-bold text-orange-700 mb-4">تفاصيل الإشراف على: {id}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link to={`/specialization/${id}/courses`} className="block bg-orange-100 p-6 rounded-2xl shadow hover:bg-orange-200 transition">
          <h3 className="text-xl text-orange-800 font-bold mb-2">المقررات المكلف بها</h3>
          <p className="text-orange-700 text-sm">عرض المواد التي يدرسها الأستاذ ضمن الاختصاص.</p>
        </Link>
        <Link to={`/specialization/${id}/students`} className="block bg-orange-100 p-6 rounded-2xl shadow hover:bg-orange-200 transition">
          <h3 className="text-xl text-orange-800 font-bold mb-2">متابعة الطلبة</h3>
          <p className="text-orange-700 text-sm">إشراف وتتبع الطلبة المرتبطين بهذا التخصص.</p>
        </Link>
      </div>
    </div>
  </div>
);

// صفحات قيد التطوير
const PlaceholderPage = ({ title }) => (
  <div className="flex gap-8 p-8">
    <Sidebar />
    <div className="flex-1">
      <h1 className="text-2xl font-bold text-orange-700">{title}</h1>
      <p className="text-orange-600 mt-4">(هذه الصفحة قيد التطوير وسيتم ربطها بقاعدة البيانات قريبًا)</p>
    </div>
  </div>
);

// ملف الراوتر الأساسي
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SpecializationsPage />} />
      <Route path="/specialization/:id" element={<SpecializationWrapper />} />
      <Route path="/specialization/:id/courses" element={<PlaceholderPage title="المقررات المكلف بها" />} />
      <Route path="/specialization/:id/students" element={<PlaceholderPage title="متابعة الطلبة" />} />
      <Route path="/community" element={<PlaceholderPage title="المجتمع الأكاديمي" />} />
      <Route path="/library" element={<PlaceholderPage title="المكتبة الرقمية" />} />
    </Routes>
  </Router>
);

// استخراج المعرف من الـ URL
const SpecializationWrapper = () => {
  const { id } = useParams();
  return <SpecializationDetail id={id} />;
};

export default App;
