import React, { useState } from "react";

const coursesData = [
  {
    name: "البرمجة 1",
    description: "مقدمة في البرمجة باستخدام C++...",
    completed: false,
    children: [
      {
        name: "البرمجة 2",
        description: "مفاهيم متقدمة في البرمجة وتطبيقات OOP...",
        completed: false,
        children: [
          {
            name: "هياكل البيانات",
            description: "تصميم وتحليل هياكل البيانات المختلفة...",
            completed: false,
          },
        ],
      },
    ],
  },
];

export default function CoursePageTeacher() {
  const [courses] = useState(coursesData);
  const [activeTab, setActiveTab] = useState("courses");

  const completedCoursesCount = (nodes) => {
    let count = 0;
    for (const node of nodes) {
      if (node.completed) count++;
      if (node.children) count += completedCoursesCount(node.children);
    }
    return count;
  };

  const totalCoursesCount = (nodes) => {
    let count = 0;
    for (const node of nodes) {
      count++;
      if (node.children) count += totalCoursesCount(node.children);
    }
    return count;
  };

  const renderTree = (nodes, path = []) => (
    <ul style={{ listStyle: 'none', paddingLeft: '2rem', position: 'relative' }}>
      {nodes.map((node, index) => {
        const currentPath = [...path, index];
        return (
          <li key={index} style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '2rem' }}>
            {/* خط أفقي من العنصر الأب */}
            <div
              style={{
                position: 'absolute',
                top: '1.25rem',
                left: '0',
                width: '1.5rem',
                height: '2px',
                backgroundColor: '#FF6600',
              }}
            />
            {/* العقدة الدائرية */}
            <div
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: node.completed ? '#FF6600' : '#FFDAB9',
                border: '2px solid #FF6600',
                position: 'absolute',
                left: '-10px',
                top: '1rem',
              }}
            />
            {/* محتوى المادة */}
            <div
              style={{
                backgroundColor: '#FFF',
                padding: '1rem',
                borderRadius: '8px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                marginLeft: '1rem',
              }}
            >
              <h3 style={{ fontWeight: 'bold', color: '#FF6600' }}>{node.name}</h3>
              <p style={{ fontSize: '14px', color: '#555' }}>{node.description}</p>
              <span style={{ fontSize: '13px', color: node.completed ? 'green' : 'red' }}>
                {node.completed ? 'مكتملة' : 'غير مكتملة'}
              </span>
            </div>

            {/* تكرار العقد الفرعية إن وجدت */}
            {node.children && renderTree(node.children, currentPath)}
          </li>
        );
      })}
    </ul>
  );

  const goToPage = (path) => {
    window.location.href = path;
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#FFF8F0', color: '#333', marginTop: '100px' }}>
      {/* Sidebar */}
      <aside style={{ width: '20%', backgroundColor: '#FFE4B5', padding: '1rem' }}>
        <button
          style={{ cursor: 'pointer', color: '#FF6600', background: 'none', border: 'none', fontWeight: 'bold', marginBottom: '1rem' }}
          onClick={() => goToPage('/community')}
        >
          المجتمع
        </button>
        <button
          style={{ cursor: 'pointer', color: '#FF6600', background: 'none', border: 'none', fontWeight: 'bold' }}
          onClick={() => goToPage('/library')}
        >
          المكتبة
        </button>
      </aside>

      {/* Main Content */}
      <main style={{ width: '80%', padding: '2rem' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#FF6600' }}>شجرة المواد</h1>

        {/* Tabs */}
        <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
          <button
            onClick={() => setActiveTab("courses")}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: activeTab === "courses" ? '#FFCC99' : '#FFDAB9',
              border: 'none',
              borderRadius: '5px'
            }}
          >
            المواد
          </button>
          <button
            onClick={() => setActiveTab("progress")}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: activeTab === "progress" ? '#FFCC99' : '#FFDAB9',
              border: 'none',
              borderRadius: '5px'
            }}
          >
            التقدم
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "courses" && (
          <div style={{ marginTop: '1.5rem' }}>
            {renderTree(courses)}
          </div>
        )}

        {activeTab === "progress" && (
          <div style={{ marginTop: '1.5rem' }}>
            <h3 style={{ fontWeight: 'bold', color: '#FF6600' }}>التقدم الدراسي</h3>
            <p style={{ fontSize: '14px' }}>
              أنهيت {completedCoursesCount(courses)} من {totalCoursesCount(courses)} مادة.
            </p>

            {/* عرض المواد غير المكتملة */}
            <ul style={{ listStyle: 'none', paddingLeft: '2rem', marginTop: '1rem' }}>
              {(() => {
                const getIncomplete = (nodes, path = []) => {
                  let items = [];
                  nodes.forEach((node, index) => {
                    const currentPath = [...path, index];
                    if (!node.completed) {
                      items.push({ name: node.name, path: currentPath });
                    }
                    if (node.children) {
                      items = items.concat(getIncomplete(node.children, currentPath));
                    }
                  });
                  return items;
                };

                return getIncomplete(courses).map(({ name }, index) => (
                  <li key={index} style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '2rem' }}>
                    <div
                      style={{
                        position: 'absolute',
                        top: '1.25rem',
                        left: '0',
                        width: '1.5rem',
                        height: '2px',
                        backgroundColor: '#FF6600',
                      }}
                    />
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: '#FFDAB9',
                        border: '2px solid #FF6600',
                        position: 'absolute',
                        left: '-10px',
                        top: '1rem',
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: '#FFF',
                        padding: '1rem',
                        borderRadius: '8px',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                        marginLeft: '1rem',
                      }}
                    >
                      <h4 style={{ fontWeight: 'bold', color: '#FF6600', margin: 0 }}>{name}</h4>
                    </div>
                  </li>
                ));
              })()}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}
