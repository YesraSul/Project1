import React, { useState } from 'react';
import '../../assets/css/admin/CreateCommunity.css';

const CreateCommunity = ({ communities, setCommunities }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    type: 'عام',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/api/communities', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) throw new Error('فشل في إنشاء المجتمع');
        return res.json();
      })
      .then((newCommunity) => {
        setCommunities([...communities, newCommunity]);
        alert('✅ تم إنشاء المجتمع بنجاح');
        setFormData({ name: '', description: '', type: 'عام' }); // إعادة ضبط النموذج
      })
      .catch((err) => {
        console.error(err);
        alert('❌ حدث خطأ أثناء إنشاء المجتمع');
      });
  };

  return (
    <div className="create-community-page">
      <h2>إنشاء مجتمع جديد</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <label>اسم المجتمع:</label>
        <input
          type="text"
          name="name"
          placeholder="اسم المجتمع"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>الوصف:</label>
        <textarea
          name="description"
          placeholder="وصف المجتمع"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label>النوع:</label>
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="عام">عام</option>
          <option value="خاص">خاص</option>
        </select>

        <button type="submit">إنشاء</button>
      </form>
    </div>
  );
};

export default CreateCommunity;
