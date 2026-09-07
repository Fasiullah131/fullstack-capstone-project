import React, { useState } from 'react';

function LoginPage() {
  const [formData, setFormData] = useState({email: '', password: ''});

  const handleLogin = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token'); // token save ہوگا login کے بعد
    
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {              // headers object ✅
        'Content-Type': 'application/json',  // content-type ✅
        'Authorization': `Bearer ${token}`   // Authorization ✅
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" placeholder="Email" onChange={e => setFormData({...formData, email: e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setFormData({...formData, password: e.target.value})} />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginPage;
