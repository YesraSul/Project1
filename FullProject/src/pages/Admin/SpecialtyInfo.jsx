// src/pages/SpecialtyInfo.jsx
import React from "react";
import "../../assets/css/admin/SpecialtyInfo.css";

const SpecialtyInfo = () => {
  // بيانات تجريبية
  const data = [
    { id: 1, name: "برمجيات", description: "وصف برمجيات" },
    { id: 2, name: "ذكاء", description: "وصف ذكاء" }
  ];

  const handleDelete = (id) => {
    // axios.delete(`/api/specialties/${id}`).then(() => ...)
    alert("تم الحذف");
  };

  return (
    <div className="specialty-info-container">
      <h2>معلومات الاختصاصات</h2>
      <table>
        <thead>
          <tr>
            <th>الاسم</th>
            <th>الوصف</th>
            <th>حذف</th>
          </tr>
        </thead>
        <tbody>
          {data.map((spec) => (
            <tr key={spec.id}>
              <td>{spec.name}</td>
              <td>{spec.description}</td>
              <td>
                <button onClick={() => handleDelete(spec.id)}>حذف</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpecialtyInfo;
