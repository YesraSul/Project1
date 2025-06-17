import React, { useState } from 'react';
import axios from 'axios';
import '../../assets/css/admin/CreateLibrary.css';
import { useNavigate } from 'react-router-dom';

const CreateLibrary = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('مواد');
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('type', type);
    formData.append('file', file);

    try {
      await axios.post('/api/libraries', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      navigate('/library-info');
    } catch (error) {
      console.error('فشل إنشاء المكتبة:', error);
    }
  };

  return (
    <div className="create-library-container">
      <h2>إنشاء مكتبة</h2>
      <form className="create-library-form" onSubmit={handleSubmit}>
        <label>اسم المكتبة:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>وصف المكتبة:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

        <label>النمط:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="مواد">مواد</option>
          <option value="اختصاصات">اختصاصات</option>
          <option value="مشاريع">مشاريع</option>
        </select>

        <label>ارفاق ملفات:</label>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} required />

        <button type="submit">إنشاء مكتبة</button>
      </form>
    </div>
  );
};

export default CreateLibrary;
