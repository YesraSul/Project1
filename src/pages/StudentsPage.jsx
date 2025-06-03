import React from 'react';

const orangeTheme = {
  backgroundColor: '#fff5e6',
  color: '#ff8c00',
  borderColor: '#ffa64d'
};

const StudentsPage = ({ users }) => {
  const students = users?.filter((user) => user.type === 'طالب');

  return (
    <div className="p-4" style={orangeTheme}>
      <h2 className="text-xl mb-4">بيانات الطلاب</h2>
      <table className="w-full table-auto border">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">الاسم</th>
            <th className="border p-2">النوع</th>
          </tr>
        </thead>
        <tbody>
          {students && students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>
                <td className="border p-2">{student.id}</td>
                <td className="border p-2">{student.name}</td>
                <td className="border p-2">{student.type}</td>
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

export default StudentsPage;
