// src/pages/EditSpecialty.jsx
import React, { useState } from "react";
import "../assets/css/EditSpecialty.css";
import { useNavigate } from "react-router-dom";

const EditSpecialty = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // إرسال البيانات للـ backend
    // axios.post("/api/specialties/edit", { name, description }).then(() => {
    navigate("/specialty-info");
  };

  return (
    <div className="edit-specialty-container">
      <h2>تعديل معلومات اختصاص</h2>
      <form onSubmit={handleSubmit} className="specialty-form">
        <label>اسم الاختصاص:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} required />

        <label>وصف الاختصاص:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

        <button type="submit">تعديل</button>
      </form>
    </div>
  );
};

export default EditSpecialty;
