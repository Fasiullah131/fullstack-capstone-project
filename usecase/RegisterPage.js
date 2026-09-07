import React, { useState } from 'react';

function RegisterPage() {
  const [formData, setFormData] = useState({name: '', email: '', password: ''});

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('/api/register', {
      method: 'POST',  // method attribute ✅
      headers: {       // headers attribute ✅
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" onChange={e => setFormData({...formData, name: e.target.value})} />
      <input type="email" placeholder="Email" onChange={e => setFormData({...formData, email: e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setFormData({...formData, password: e.target.value})} />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterPage;
