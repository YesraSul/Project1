// src/pages/EditSubject.jsx
import React, { useState } from "react";
import "../assets/css/EditSubject.css";
import { useNavigate } from "react-router-dom";

const EditSubject = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [specialty, setSpecialty] = useState("برمجيات");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios.post('/api/subjects/edit', { name, description, specialty }).then(() => {
    navigate("/subject-info");
  };

  return (
    <div className="edit-subject-container">
      <h2>تعديل معلومات مادة</h2>
      <form onSubmit={handleSubmit} className="subject-form">
        <label>اسم المادة:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} required />

        <label>توصيف المادة:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

        <label>الاختصاص:</label>
        <select value={specialty} onChange={(e) => setSpecialty(e.target.value)} required>
          <option>برمجيات</option>
          <option>ذكاء</option>
          <option>شبكات</option>
          <option>مادة عامة</option>
        </select>

        <button type="submit">تعديل</button>
      </form>
    </div>
  );
};

export default EditSubject;
