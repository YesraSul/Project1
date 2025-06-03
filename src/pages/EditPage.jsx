import React from 'react';
import axios from 'axios';
import Form from '../components/Form';

const EditPage = ({ users, setUsers }) => {
  const handleEdit = (data) => {
    axios.put('/api/users/${data.id}', data).then((res) =>
      setUsers(users.map((u) => (u.id === data.id ? res.data : u)))
    );
  };

  return <Form mode="edit" onSubmit={handleEdit} />;
};

export default EditPage;