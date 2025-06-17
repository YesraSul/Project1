import React, { useState } from 'react';
import '../assets/css/admin/Form.css';

const Form = ({ mode, onSubmit }) => {
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
    onSubmit(formData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>{mode === 'create' ? 'إنشاء مستخدم' : 'تعديل المستخدم'}</h2>
      <input name="id" placeholder="ID" onChange={handleChange} required />
      <input name="name" placeholder="الاسم" onChange={handleChange} required />
      <input name="password" type="password" placeholder="كلمة السر" onChange={handleChange} required />
      <select name="type" onChange={handleChange}>
        <option value="طالب">طالب</option>
        <option value="استاذ">أستاذ</option>
      </select>
      <button type="submit">{mode === 'create' ? 'إنشاء' : 'تعديل'}</button>
    </form>
  );
};

export default Form;
