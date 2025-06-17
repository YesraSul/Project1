import React, { useState, useEffect } from 'react';
import '../../assets/css/admin/CreateCommunity.css'; // إعادة استخدام نفس CSS

const EditCommunity = ({ communityToEdit, communities, setCommunities }) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
    type: 'عام',
  });

  useEffect(() => {
    if (communityToEdit) {
      setFormData(communityToEdit);
    }
  }, [communityToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`/api/communities/${formData.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) throw new Error('فشل في تعديل المجتمع');
        return res.json();
      })
      .then((updatedCommunity) => {
        const updated = communities.map((c) =>
          c.id === updatedCommunity.id ? updatedCommunity : c
        );
        setCommunities(updated);
        alert('✅ تم تعديل المجتمع بنجاح');
      })
      .catch((err) => {
        console.error(err);
        alert('❌ حدث خطأ أثناء تعديل المجتمع');
      });
  };

  return (
    <div className="create-community-page">
      <h2>تعديل المجتمع</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <label>اسم المجتمع:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>الوصف:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label>النوع:</label>
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="عام">عام</option>
          <option value="خاص">خاص</option>
        </select>

        <button type="submit">تعديل</button>
      </form>
    </div>
  );
};

export default EditCommunity;
