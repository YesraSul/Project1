import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/CreatePage.css'; // استخدام نفس CSS
import { useNavigate } from 'react-router-dom';

const EditPage = ({ userToEdit, users, setUsers }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    password: '',
    type: 'طالب',
  });

  useEffect(() => {
    if (userToEdit) {
      setFormData(userToEdit);
    }
  }, [userToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/api/users/${formData.id}`, formData)
      .then((res) => {
        setUsers(users.map((u) => (u.id === formData.id ? res.data : u)));
        navigate(formData.type === 'طالب' ? '/students' : '/professors');
      })
      .catch((err) => {
        console.error(err);
        alert('❌ حدث خطأ أثناء تعديل المستخدم');
      });
  };

  return (
    <div className="create-page">
      <h2>تعديل مستخدم</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <label>رقم المعرف (ID):</label>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          readOnly // لا نسمح بتعديل المعرف
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

        <button type="submit">تعديل</button>
      </form>
    </div>
  );
};

export default EditPage;
