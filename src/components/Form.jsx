import React, { useState } from 'react';

const orangeTheme = {
  backgroundColor: '#fff5e6',
  color: '#ff8c00',
  borderColor: '#ffa64d'
};

const Form = ({ mode, onSubmit }) => {
  const [formData, setFormData] = useState({ id: '', password: '', name: '', type: 'طالب' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="p-4 rounded shadow-md" style={orangeTheme}>
      <h2 className="text-xl mb-4">{mode === 'crneate' ? 'إنشاء حساب' : 'تعديل حساب'}</h2>
      <input name="id" placeholder="ID" className="block w-full mb-2 p-2 rounded" value={formData.id} onChange={handleChange} />
      <input name="password" type="password" placeholder="كلمة السر" className="block w-full mb-2 p-2 rounded" value={formData.password} onChange={handleChange} />
      <input name="name" placeholder="الاسم" className="block w-full mb-2 p-2 rounded" value={formData.name} onChange={handleChange} />
      <select name="type" className="block w-full mb-4 p-2 rounded" value={formData.type} onChange={handleChange}>
        <option value="طالب">طالب</option>
        <option value="استاذ">استاذ</option>
      </select>
      <button className="bg-orange-500 text-white px-4 py-2 rounded" onClick={() => onSubmit(formData)}>
        {mode === 'create' ? 'إنشاء' : 'تعديل'}
      </button>
    </div>
  );
};

export default Form;