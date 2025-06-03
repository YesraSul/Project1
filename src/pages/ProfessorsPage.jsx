import React from 'react';

const orangeTheme = {
  backgroundColor: '#fff5e6',
  color: '#ff8c00',
  borderColor: '#ffa64d'
};

const ProfessorsPage = ({ users }) => {
  // Filter only "استاذ" entries
  const professors = users?.filter((user) => user.type === 'استاذ');

  return (
    <div className="p-4" style={orangeTheme}>
      <h2 className="text-xl mb-4">بيانات الأساتذة</h2>
      <table className="w-full table-auto border">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">الاسم</th>
            <th className="border p-2">النوع</th>
          </tr>
        </thead>
        <tbody>
          {professors && professors.length > 0 ? (
            professors.map((professor) => (
              <tr key={professor.id}>
                <td className="border p-2">{professor.id}</td>
                <td className="border p-2">{professor.name}</td>
                <td className="border p-2">{professor.type}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="border p-2 text-center">لا توجد بيانات</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProfessorsPage;
