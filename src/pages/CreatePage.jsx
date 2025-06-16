import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/CreatePage.css';
import { useNavigate } from 'react-router-dom';

const CreatePage = ({ users, setUsers }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    password: '',
    type: 'طالب',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/api/users', formData)
      .then((res) => {
        setUsers([...users, res.data]);
        navigate(formData.type === 'طالب' ? '/students' : '/professors');
      })
      .catch((err) => {
        console.error(err);
        alert('❌ حدث خطأ أثناء إنشاء المستخدم');
      });
  };

  return (
    <div className="create-page">
      <h2>إنشاء مستخدم جديد</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <label>رقم المعرف (ID):</label>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          required
        />

        <label>الاسم:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>كلمة المرور:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label>النوع:</label>
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="طالب">طالب</option>
          <option value="استاذ">أستاذ</option>
        </select>

        <button type="submit">إنشاء</button>
      </form>
    </div>
  );
};

export default CreatePage;
