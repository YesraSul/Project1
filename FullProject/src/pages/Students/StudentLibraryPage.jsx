import React, { useState, useEffect } from "react";
import "../../assets/css/LibraryPage.css";

// قائمة التصنيفات
const categories = ["قسم المواد", "قسم الاختصاصات", "قسم المشاريع"];

// اسم الطالب الحالي (يفترض أنه معروف من تسجيل الدخول)
const currentStudentName = "أحمد علي";

// مكتبات تجريبية مع معلومات الرافع لكل ملف
const mockLibraries = [
  {
    id: 1,
    name: "مكتبة المواد",
    category: "قسم المواد",
    files: [
      { name: "ملف 1.pdf", uploadedBy: "أحمد علي" },
      { name: "ملف 2.docx", uploadedBy: "سارة محمد" },
    ],
  },
  {
    id: 2,
    name: "مشاريع الذكاء الصنعي",
    category: "قسم المشاريع",
    files: [
      { name: "مشروع.pdf", uploadedBy: "أحمد علي" },
    ],
  },
];

const LibraryPage = () => {
  const [libraries, setLibraries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setLibraries(mockLibraries);
  }, []);

  const handleDeleteFile = (libraryId, fileName) => {
    const updatedLibraries = libraries.map((lib) => {
      if (lib.id === libraryId) {
        return {
          ...lib,
          files: lib.files.filter((f) => f.name !== fileName),
        };
      }
      return lib;
    });
    setLibraries(updatedLibraries);
  };

  const filteredLibraries = filter
    ? libraries.filter((lib) => lib.category === filter)
    : libraries;

  return (
    <div className="flex flex-col md:flex-row p-6 bg-orange-50 min-h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-64 mb-4 md:mb-0 md:mr-4">
        <h2 className="text-lg font-bold text-orange-700 mb-2">فلترة حسب القسم:</h2>
        <select
          className="w-full p-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">كل المكتبات</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </aside>

      {/* Main content */}
      <main className="flex-1 space-y-6">
        <h1 className="text-2xl font-bold text-orange-600">مكتبة الطالب</h1>

        {/* Libraries list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredLibraries.map((lib) => (
            <div
              key={lib.id}
              className="p-4 border rounded-xl bg-gradient-to-br from-orange-100 to-orange-200 hover:shadow-lg transition flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-orange-700">{lib.name}</h3>
                <p className="text-sm text-gray-600">{lib.category}</p>
              </div>

              {/* File List */}
              <div className="mt-4 bg-white rounded-lg p-3 shadow-inner border">
                <h4 className="text-sm font-bold text-orange-700 mb-2">📚 الملفات:</h4>
                {lib.files.length > 0 ? (
                  <ul className="space-y-1">
                    {lib.files.map((file, idx) => (
                      <li
                        key={idx}
                        className="flex justify-between items-center bg-orange-50 px-2 py-1 rounded text-sm text-orange-900"
                      >
                        <span>
                          📄 {file.name}{" "}
                          <span className="text-xs text-gray-500">({file.uploadedBy})</span>
                        </span>
                        {file.uploadedBy === currentStudentName && (
                          <button
                            onClick={() => handleDeleteFile(lib.id, file.name)}
                            className="text-red-600 hover:underline text-xs"
                          >
                            حذف
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-500">لا توجد ملفات</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LibraryPage;
