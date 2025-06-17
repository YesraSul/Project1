import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../assets/css/admin/CreateLibrary.css';  // استخدم نفس CSS للاتساق

const EditLibrary = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('مواد');
  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchLibrary = async () => {
      try {
        const response = await axios.get(`/api/libraries/${id}`);
        const data = response.data;
        setName(data.name);
        setDescription(data.description);
        setType(data.type);
      } catch (error) {
        console.error('فشل في جلب بيانات المكتبة:', error);
      }
    };
    fetchLibrary();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('type', type);
    if (file) {
      formData.append('file', file);
    }

    try {
      await axios.put(`/api/libraries/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('✅ تم تعديل المكتبة بنجاح');
      navigate('/library-info');  // التنقل بعد التعديل مثل إنشاء المكتبة
    } catch (error) {
      console.error('❌ فشل في تعديل المكتبة:', error);
      alert('حدث خطأ أثناء تعديل المكتبة');
    }
  };

  return (
    <div className="create-library-container">
      <h2>تعديل مكتبة</h2>
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

        <label>إرفاق ملفات (اختياري):</label>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />

        <button type="submit">تعديل المكتبة</button>
      </form>
    </div>
  );
};

export default EditLibrary;
