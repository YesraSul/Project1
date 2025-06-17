import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/admin/CommunityActions.css';

const CommunityActions = () => {
  return (
    <div className="community-actions">
      <h2>التحكم بالمجتمعات</h2>
      <Link to="/community-info" className="btn-orange">عرض معلومات المجتمع</Link>
      <Link to="/community-view" className="btn-orange">عرض المجتمع</Link>
    </div>
  );
};

export default CommunityActions;
