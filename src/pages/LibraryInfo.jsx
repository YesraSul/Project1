import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/LibraryInfo.css';

const LibraryInfo = () => {
  const [libraries, setLibraries] = useState([]);

  useEffect(() => {
    const fetchLibraries = async () => {
      try {
        const response = await axios.get('/api/libraries');
        console.log('Data from API:', response.data);
  
        // إذا كانت البيانات ليست مصفوفة، حاول أن تستخرج المصفوفة الصحيحة
        const libs = Array.isArray(response.data) ? response.data : response.data.libraries || [];
        setLibraries(libs);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLibraries();
  }, []);
  

  return (
    <div className="library-info-container">
      <h2>معلومات المكتبات</h2>
      <table>
        <thead>
          <tr>
            <th>الاسم</th>
            <th>الوصف</th>
            <th>النمط</th>
          </tr>
        </thead>
        <tbody>
          {libraries.map((library) => (
            <tr key={library.id}>
              <td>{library.name}</td>
              <td>{library.description}</td>
              <td>{library.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LibraryInfo;
