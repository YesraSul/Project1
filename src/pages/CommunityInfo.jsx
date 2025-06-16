import React from 'react';
import '../assets/css/CommunityInfo.css';

const CommunityInfo = ({ communities = [] }) => {
  return (
    <div className="community-info">
      <h2>معلومات المجتمعات</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>الاسم</th>
            <th>الوصف</th>
            <th>النوع</th>
            <th>النمط</th>
          </tr>
        </thead>
        <tbody>
          {communities.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.description}</td>
              <td>{c.type}</td>
              <td>{c.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommunityInfo;
