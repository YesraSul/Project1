import React from 'react';
import '../../assets/css/admin/ProfessorsPage.css';

const ProfessorsPage = ({ users = [] }) => {
  const professors = Array.isArray(users)
    ? users.filter((u) => u.type === 'استاذ')
    : [];

  return (
    <div className="professors-page ">
      <h2>بيانات الأساتذة</h2>
      <table>
        <thead>
          <tr><th>ID</th><th>الاسم</th><th>النوع</th></tr>
        </thead>
        <tbody>
          {professors.map((p) => (
            <tr key={p.id}><td>{p.id}</td><td>{p.name}</td><td>{p.type}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfessorsPage;
