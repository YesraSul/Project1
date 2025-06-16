// src/pages/SubjectInfo.jsx
import React from "react";
import "../assets/css/SubjectInfo.css";

const SubjectInfo = () => {
  const data = [
    { id: 1, name: "برمجة 1", description: "مقدمة في البرمجة", specialty: "برمجيات" },
    { id: 2, name: "ذكاء اصطناعي", description: "مفاهيم الذكاء", specialty: "ذكاء" }
  ];

  return (
    <div className="subject-info-container">
      <h2>معلومات المواد</h2>
      <table>
        <thead>
          <tr>
            <th>الاسم</th>
            <th>التوصيف</th>
            <th>الاختصاص</th>
          </tr>
        </thead>
        <tbody>
          {data.map((subj) => (
            <tr key={subj.id}>
              <td>{subj.name}</td>
              <td>{subj.description}</td>
              <td>{subj.specialty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubjectInfo;
