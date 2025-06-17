import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const specializations = [
  {
    id: "networks",
    name: "هندسة الشبكات",
    description: "تخصص يهتم بتصميم وتشغيل الشبكات والبنية التحتية لتقنية المعلومات."
  },
  {
    id: "ai",
    name: "الذكاء الاصطناعي",
    description: "تخصص يركز على إنشاء أنظمة ذكية تتعلم وتتفاعل مع البيئة."
  },
  {
    id: "software",
    name: "هندسة البرمجيات",
    description: "تخصص يهتم بتطوير البرمجيات وضمان جودتها وكفاءتها."
  }
];

const Sidebar = () => (
  <div className="w-64 bg-orange-100 p-4 rounded-2xl shadow-md">
    <h2 className="text-xl font-bold mb-4 text-orange-600">القائمة</h2>
    <ul className="space-y-2">
      <li>
        <Link to="/community" className="text-orange-500 hover:underline">المجتمع</Link>
      </li>
      <li>
        <Link to="/library" className="text-orange-500 hover:underline">المكتبة</Link>
      </li>
    </ul>
  </div>
);

const SpecializationsPage = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold text-orange-600 mb-6">الاختصاصات</h1>
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

const SpecializationDetail = ({ id }) => (
  <div className="flex gap-8 p-8">
    <Sidebar />
    <div className="flex-1">
      <h1 className="text-2xl font-bold text-orange-700 mb-4">تفاصيل الاختصاص: {id}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link to={`/specialization/${id}/courses`} className="block bg-orange-100 p-6 rounded-2xl shadow hover:bg-orange-200 transition">
          <h3 className="text-xl text-orange-800 font-bold mb-2">تسلسل المواد</h3>
          <p className="text-orange-700 text-sm">عرض تسلسل المواد المطلوبة في الاختصاص.</p>
        </Link>
        <Link to={`/specialization/${id}/career-paths`} className="block bg-orange-100 p-6 rounded-2xl shadow hover:bg-orange-200 transition">
          <h3 className="text-xl text-orange-800 font-bold mb-2">المسارات المهنية</h3>
          <p className="text-orange-700 text-sm">خيارات العمل والتخصص بعد التخرج.</p>
        </Link>
      </div>
    </div>
  </div>
);

const PlaceholderPage = ({ title }) => (
  <div className="p-8">
    <Sidebar />
    <div className="ml-8">
      <h1 className="text-2xl font-bold text-orange-700">{title}</h1>
      <p className="text-orange-600 mt-4">(هذه الصفحة قيد التطوير وستعرض البيانات من الباكيند قريباً)</p>
    </div>
  </div>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SpecializationsPage />} />
      <Route path="/specialization/:id" element={<SpecializationWrapper />} />
      <Route path="/specialization/:id/courses" element={<PlaceholderPage title="تسلسل المواد" />} />
      <Route path="/specialization/:id/career-paths" element={<PlaceholderPage title="المسارات المهنية" />} />
      <Route path="/community" element={<PlaceholderPage title="المجتمع" />} />
      <Route path="/library" element={<PlaceholderPage title="المكتبة" />} />
    </Routes>
  </Router>
);

const SpecializationWrapper = () => {
  const { id } = useParams();
  return <SpecializationDetail id={id} />;
};

export default App; 