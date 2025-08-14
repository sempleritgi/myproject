'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Navbar as BSNavbar,
  Container,
  Nav,
  Form,
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap';
import { FaBell, FaStar, FaQuestionCircle, FaSearch } from 'react-icons/fa';

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    // 🔹 Example: Clear local storage/session
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');

    // Optionally: Call API to invalidate session
    // await fetch('/api/logout', { method: 'POST' });

    // 🔹 Redirect to login page
    router.push('/login');
  };

  const menuItems = [
    { name: 'HOME', path: '/' },
    { name: 'CRM', path: '/crm' },
    { name: 'UTILITIES', path: '/utilities' },
    { name: 'INSURANCE', path: '/insurance' },
    { name: 'ASSETS', path: '/assets' },
    { name: 'MUTUAL', path: '/mutual' },
    { name: 'RESEARCH', path: '/research' },
    { name: 'TRANSACT ONLINE', path: '/transact-online' },
    { name: 'GOAL GPS', path: '/goal-gps' },
    { name: 'FINANCIAL PLANNING', path: '/financial-planning' },
    { name: 'WEALTH REPORT', path: '/wealth-report' },
    { name: 'OTHER', path: '/other' }
  ];

  return (
    <>
      {/* Top Navbar */}
      <BSNavbar bg="white" expand="lg" className="top-strip border-bottom shadow-sm py-2">
        <Container fluid>
          {/* Logo */}
          <BSNavbar.Brand href="/" className="d-flex align-items-center gap-2">
            <img
              src="https://dummyimage.com/120x28/1e88e5/ffffff&text=Wealth+Elite"
              alt="logo"
              height="28"
              className="rounded"
            />
          </BSNavbar.Brand>

          {/* Search Box */}
          <Form className="d-none d-md-flex ms-3 flex-grow-1" role="search">
            <InputGroup className="shadow-sm rounded-pill overflow-hidden">
              <InputGroup.Text className="bg-white border-0">
                <FaSearch style={{ color: '#6c757d' }} />
              </InputGroup.Text>
              <FormControl
                type="search"
                placeholder="Search portfolio..."
                aria-label="Search"
                className="border-0 shadow-none"
              />
            </InputGroup>
          </Form>

          {/* Right Icons */}
          <div className="d-flex align-items-center gap-2 ms-auto">
            <Button variant="light" className="icon-btn rounded-circle shadow-sm" title="Help">
              <FaQuestionCircle />
            </Button>
            <Button variant="light" className="icon-btn rounded-circle shadow-sm" title="Notifications">
              <FaBell />
            </Button>
            <Button variant="light" className="icon-btn rounded-circle shadow-sm" title="Favorites">
              <FaStar />
            </Button>
            <Button
              variant="outline-danger"
              className="ms-2 rounded-pill px-3 py-1 fw-semibold"
              style={{ fontSize: '0.85rem' }}
              onClick={handleLogout} // ✅ Logout handler
            >
              LOGOUT
            </Button>
          </div>
        </Container>
      </BSNavbar>

      {/* Red Menu Bar */}
      <div
        className="menu-bar"
        style={{
          background: 'linear-gradient(90deg, #d32f2f, #b71c1c)',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
      >
        <Container fluid>
          <Nav
            className="d-flex justify-content-between align-items-center flex-wrap"
            style={{ padding: '0.4rem 0' }}
          >
            {menuItems.map((item, idx) => (
              <Nav.Item key={idx}>
                <Link
                  href={item.path}
                  className={`text-white fw-semibold nav-link ${idx === 0 ? 'active' : ''}`}
                  style={{
                    backgroundColor: idx === 0 ? 'rgba(255,255,255,0.2)' : 'transparent',
                    borderRadius: '20px',
                    padding: '0.4rem 0.8rem',
                    fontSize: '0.8rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {item.name}
                </Link>
              </Nav.Item>
            ))}
          </Nav>
        </Container>
      </div>
    </>
  );
}
