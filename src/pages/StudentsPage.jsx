import '../assets/css/StudentsPage.css';
const StudentsPage = ({ users = [] }) => {
  const students = Array.isArray(users)
    ? users.filter((u) => u.type === 'طالب')
    : [];

  return (
    <div className="students-page">
      <h2>بيانات الطلاب</h2>
      <table>
        <thead>
          <tr><th>ID</th><th>الاسم</th><th>النوع</th></tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}><td>{s.id}</td><td>{s.name}</td><td>{s.type}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default StudentsPage;