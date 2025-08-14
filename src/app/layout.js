'use client';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts for better UI */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          backgroundColor: '#f8f9fa',
          fontFamily: "'Inter', sans-serif",
          color: '#212529',
        }}
      >
        {/* Top Navbar */}
        <Navbar />

        {/* Main Content Wrapper */}
        <main
          style={{
            padding: '1.5rem',
            minHeight: 'calc(100vh - 60px)',
            backgroundColor: '#f8f9fa',
          }}
        >
          <div
            style={{
              maxWidth: '1400px',
              margin: '0 auto',
              background: '#ffffff',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            }}
          >
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer
          style={{
            textAlign: 'center',
            padding: '1rem',
            fontSize: '0.9rem',
            color: '#6c757d',
            borderTop: '1px solid #dee2e6',
            marginTop: '1rem',
            background: '#fff',
          }}
        >
          © {new Date().getFullYear()} Wealth Elite. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
