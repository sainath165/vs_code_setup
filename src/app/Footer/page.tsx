// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <p>
        "The only way to do great work is to love what you do." <br /> - Steve Jobs
      </p>
      <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '1rem',
  textAlign: 'center' as const,
  position: 'fixed' as const,
  bottom: 0,
  width: '100%',
};

export default Footer;
