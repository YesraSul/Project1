import React, { useState, useEffect } from "react";
import "./LibraryPage.css";

const categories = ["قسم المواد", "قسم الاختصاصات", "قسم المشاريع"];

const mockLibraries = [
  {
    id: 1,
    name: "مكتبة المواد",
    category: "قسم المواد",
    files: ["ملف 1.pdf", "ملف 2.docx"],
  },
  {
    id: 2,
    name: "مشاريع الذكاء الصنعي",
    category: "قسم المشاريع",
    files: ["مشروع.pdf"],
  },
];

const LibraryPage = () => {
  const [libraries, setLibraries] = useState([]);
  const [filter, setFilter] = useState("");
  const [selectedLibrary, setSelectedLibrary] = useState(null);
  const [newLibraryName, setNewLibraryName] = useState("");
  const [editingLibrary, setEditingLibrary] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [newFileName, setNewFileName] = useState("");

  useEffect(() => {
    setLibraries(mockLibraries);
  }, []);

  const handleCreateLibrary = () => {
    if (!newLibraryName.trim()) return;
    const newLibrary = {
      id: Date.now(),
      name: newLibraryName,
      category: categories[0],
      files: [],
    };
    setLibraries([...libraries, newLibrary]);
    setNewLibraryName("");
  };

  const handleDeleteLibrary = (id) => {
    setLibraries(libraries.filter((lib) => lib.id !== id));
    if (selectedLibrary?.id === id) {
      setSelectedLibrary(null);
    }
  };

  const handleEditLibrary = (lib) => {
    setEditingLibrary(lib.id);
    setEditedName(lib.name);
  };

  const handleSaveEdit = (id) => {
    setLibraries(
      libraries.map((lib) =>
        lib.id === id ? { ...lib, name: editedName } : lib
      )
    );
    setEditingLibrary(null);
  };

  const handleDeleteFile = (fileName) => {
    if (!selectedLibrary) return;
    const updatedLibrary = {
      ...selectedLibrary,
      files: selectedLibrary.files.filter((f) => f !== fileName),
    };
    setLibraries(
      libraries.map((lib) =>
        lib.id === selectedLibrary.id ? updatedLibrary : lib
      )
    );
    setSelectedLibrary(updatedLibrary);
  };

  const handleAddFile = () => {
    if (!newFileName.trim() || !selectedLibrary) return;

    const updatedLibrary = {
      ...selectedLibrary,
      files: [...selectedLibrary.files, newFileName],
    };

    setLibraries(
      libraries.map((lib) =>
        lib.id === selectedLibrary.id ? updatedLibrary : lib
      )
    );
    setSelectedLibrary(updatedLibrary);
    setNewFileName("");
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
        <h1 className="text-2xl font-bold text-orange-600">مكتبة الأستاذ</h1>

        {/* Libraries list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredLibraries.map((lib) => (
            <div
              key={lib.id}
              className="p-4 border rounded-xl bg-gradient-to-br from-orange-100 to-orange-200 hover:shadow-lg transition flex flex-col justify-between"
            >
              {editingLibrary === lib.id ? (
                <div className="space-y-2">
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    className="w-full p-2 rounded-lg border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gradient-to-r from-orange-50 to-white shadow-inner placeholder:text-orange-400 transition"
                  />
                  <button
                    onClick={() => handleSaveEdit(lib.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition"
                  >
                    حفظ
                  </button>
                </div>
              ) : (
                <>
                  <div>
                    <h3 className="text-lg font-semibold text-orange-700">{lib.name}</h3>
                    <p className="text-sm text-gray-600">{lib.category}</p>
                  </div>

                  <div className="mt-2 flex gap-2">
                    <button
                      onClick={() => handleEditLibrary(lib)}
                      className="text-blue-600 hover:underline text-sm"
                    >
                      تعديل
                    </button>
                    <button
                      onClick={() => handleDeleteLibrary(lib.id)}
                      className="text-red-600 hover:underline text-sm"
                    >
                      حذف
                    </button>
                  </div>

                  {/* File List */}
                  <div className="mt-4 bg-white rounded-lg p-3 shadow-inner border">
                    <h4 className="text-sm font-bold text-orange-700 mb-2">📚 الملفات:</h4>
                    {lib.files.length > 0 ? (
                      <ul className="space-y-1 mb-2">
                        {lib.files.map((file, idx) => (
                          <li
                            key={idx}
                            className="flex justify-between items-center bg-orange-50 px-2 py-1 rounded"
                          >
                            <span className="text-sm text-orange-900">📄 {file}</span>
                            <button
                              onClick={() => {
                                setSelectedLibrary(lib);
                                handleDeleteFile(file);
                              }}
                              className="text-red-600 hover:underline text-xs"
                            >
                              حذف
                            </button>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-gray-500">لا توجد ملفات</p>
                    )}

                    {/* Add File Input */}
                    <div className="flex gap-1 mt-2">
                      <input
                        type="text"
                        placeholder="اسم الملف"
                        value={selectedLibrary?.id === lib.id ? newFileName : ""}
                        onChange={(e) => {
                          setSelectedLibrary(lib);
                          setNewFileName(e.target.value);
                        }}
                        className="w-full p-1.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 bg-gradient-to-r from-orange-50 to-white shadow-inner placeholder:text-orange-400"
                      />
                      <button
                        onClick={() => {
                          setSelectedLibrary(lib);
                          handleAddFile();
                        }}
                        className="text-xs bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
                      >
                        إضافة
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Create new library */}
        <div className="mt-6 p-4 border-t pt-4">
          <h2 className="text-lg font-semibold text-orange-700 mb-2">إنشاء مكتبة جديدة</h2>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="اسم المكتبة"
              className="p-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gradient-to-r from-orange-50 to-white shadow-inner placeholder:text-orange-400"
              value={newLibraryName}
              onChange={(e) => setNewLibraryName(e.target.value)}
            />
            <button
              onClick={handleCreateLibrary}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
            >
              إنشاء
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LibraryPage;
