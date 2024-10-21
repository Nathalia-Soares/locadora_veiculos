import React from 'react';
import { Analytics } from "@vercel/analytics/react"
import IndexComponent from '../components/index';

function Index() {
  return (
    <div className="Index">
      <Analytics />
      <IndexComponent />
    </div>
  );
}

export default Index;