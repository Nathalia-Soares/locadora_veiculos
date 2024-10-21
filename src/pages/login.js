import React from 'react';
import { Analytics } from "@vercel/analytics/react"
import LoginComponent from '../components/login/login';

function Login() {
  return (
    <div className="Index">
      <Analytics />
      <LoginComponent />
    </div>
  );
}

export default Login;