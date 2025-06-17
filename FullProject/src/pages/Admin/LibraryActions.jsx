import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../../assets/css/admin/LibraryActions.css';

const LibraryActions = () => {
  const navigate = useNavigate(); 

  return (
    <div className="library-actions-container">
      <h2>التحكم بالمكتبة</h2>
      <button onClick={() => navigate('/library-info')}>عرض معلومات المكتبة</button>
      <button onClick={() => navigate('/library-view')}>عرض المكتبة</button>
    </div>
  );
};

export default LibraryActions;
