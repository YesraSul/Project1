import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/LibraryView.css';

const LibraryView = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchLibraryFiles = async () => {
      try {
        const response = await axios.get('/api/library-files');
        setFiles(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error('فشل في جلب الملفات:', error);
      }
    };
    fetchLibraryFiles();
  }, []);

  const handleDelete = async (fileId) => {
    if (window.confirm('هل أنت متأكد أنك تريد حذف هذا الملف؟')) {
      try {
        await axios.delete(`/api/library-files/${fileId}`);
        setFiles(files.filter(file => file.id !== fileId));
      } catch (error) {
        console.error('فشل في حذف الملف:', error);
      }
    }
  };

  return (
    <div className="library-view-container">
      <h2>عرض محتوى المكتبة</h2>
      <ul>
        {files.map((file) => (
          <li key={file.id}>
            <a href={file.url} target="_blank" rel="noopener noreferrer">
              {file.name}
            </a>
            <button
              className="delete-button"
              onClick={() => handleDelete(file.id)}
            >
              حذف
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LibraryView;
