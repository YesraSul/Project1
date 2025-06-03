import React from 'react';
import axios from 'axios';
import Form from '../components/Form'; 

const CreatePage = ({ users, setUsers }) => {
  const handleCreate = (data) => {
    axios.post('/api/users', data).then((res) => setUsers([...users, res.data]));
  };

  return <Form mode="create" onSubmit={handleCreate} />;
};

export default CreatePage;
