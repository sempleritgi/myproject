'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Container, Nav, Dropdown, Form, InputGroup, FormControl, Button, Offcanvas } from 'react-bootstrap';
import {
  FaBell,
  FaStar,
  FaQuestionCircle,
  FaSearch,
  FaSignOutAlt,
  FaLightbulb,
  FaUser,
  FaCog,
  FaEnvelope,
  FaChartBar,
  FaCalendarAlt,
  FaFileAlt,
  FaBars
} from 'react-icons/fa';

export default function Navbar() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    router.push('/login');
  };

  const menuItems = [
    { name: 'HOME', path: '/' },
    { name: 'CRM', path: '/crm' },
    { name: 'UTILITIES', path: '/utilities' },
    { name: 'INSURANCE', dropdown: [
        { name: 'Life Insurance', path: '/insurance/life' },
        { name: 'Health Insurance', path: '/insurance/health' },
        { name: 'Car Insurance', path: '/insurance/car' }
      ]
    },
    { name: 'ASSETS', dropdown: [
        { name: 'Real Estate', path: '/assets/real-estate' },
        { name: 'Stocks', path: '/assets/stocks' },
        { name: 'Gold', path: '/assets/gold' }
      ]
    },
    { name: 'MUTUAL', path: '/mutual' },
    { name: 'RESEARCH', path: '/research' },
    { name: 'TRANSACT ONLINE', path: '/transact-online' },
    { name: 'GOAL GPS', path: '/goal-gps' },
    { name: 'FINANCIAL PLANNING', path: '/financial-planning' },
    { name: 'WEALTH REPORT', path: '/wealth-report' },
    { name: 'OTHER', dropdown: [
        { name: 'Settings', path: '/other/settings' },
        { name: 'Support', path: '/other/support' }
      ]
    }
  ];

  return (
    <>
      {/* 🔹 Top Navbar Strip */}
      <div className="top-strip shadow-sm border-bottom py-2 bg-white">
        <Container fluid className="d-flex align-items-center justify-content-between flex-wrap">
          
          {/* 🔹 Logo */}
          <div className="d-flex align-items-center">
            <Image
              src="/wealth-elite-logo.png"
              alt="logo"
              width={80}
              height={32}
              priority
            />
          </div>

          {/* 🔹 Mobile Menu Button */}
          <Button
            className="d-lg-none ms-2"
            variant="light"
            onClick={() => setShowMenu(true)}
          >
            <FaBars />
          </Button>

          {/* 🔹 Search Bar */}
          <div className="flex-grow-1 px-4 d-none d-lg-block">
            <Form role="search">
              <InputGroup className="rounded-pill overflow-hidden shadow-sm">
                <FormControl
                  type="search"
                  placeholder="Search portfolio..."
                  className="border-0 shadow-none"
                />
                <InputGroup.Text className="bg-white border-0">
                  <FaSearch style={{ color: '#6c757d' }} />
                </InputGroup.Text>
              </InputGroup>
            </Form>
          </div>

          {/* 🔹 Right Side Icons */}
          <div className="d-none d-lg-flex align-items-center gap-2 fs-5 text-secondary flex-wrap">
            <FaLightbulb title="Ideas" style={{ cursor: 'pointer' }} />
            <FaBell title="Notifications" style={{ cursor: 'pointer' }} />
            <FaStar title="Favorites" style={{ cursor: 'pointer' }} />
            <FaQuestionCircle title="Help" style={{ cursor: 'pointer' }} />
            <FaUser title="Profile" style={{ cursor: 'pointer' }} />
            <FaCog title="Settings" style={{ cursor: 'pointer' }} />
            <FaEnvelope title="Messages" style={{ cursor: 'pointer' }} />
            <FaChartBar title="Analytics" style={{ cursor: 'pointer' }} />
            <FaCalendarAlt title="Calendar" style={{ cursor: 'pointer' }} />
            <FaFileAlt title="Documents" style={{ cursor: 'pointer' }} />
            <FaLightbulb title="Tips" style={{ cursor: 'pointer' }} />

            {/* 🔹 Logout */}
            <div
              className="d-flex align-items-center gap-1 text-danger fw-semibold"
              style={{ cursor: 'pointer' }}
              onClick={handleLogout}
            >
              <FaSignOutAlt />
              <span style={{ fontSize: '0.9rem' }}>LOGOUT</span>
            </div>
          </div>
        </Container>
      </div>

      {/* 🔹 Red Menu Bar */}
      <div className="menu-bar bg-danger d-none d-lg-block">
        <Container fluid>
          <Nav className="d-flex justify-content-between align-items-center flex-wrap" style={{ padding: '0.4rem 0' }}>
            {menuItems.map((item, idx) => {
              if (item.dropdown) {
                return (
                  <Dropdown key={idx} as={Nav.Item}>
                    <Dropdown.Toggle
                      variant="link"
                      className="text-white fw-semibold nav-link"
                      style={{
                        backgroundColor: 'transparent',
                        borderRadius: '20px',
                        padding: '0.4rem 0.8rem',
                        fontSize: '0.8rem'
                      }}
                    >
                      {item.name}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {item.dropdown.map((subItem, subIdx) => (
                        <Dropdown.Item key={subIdx} as={Link} href={subItem.path}>
                          {subItem.name}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                );
              } else {
                return (
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
                );
              }
            })}
          </Nav>
        </Container>
      </div>

      {/* 🔹 Mobile Offcanvas Menu */}
      <Offcanvas show={showMenu} onHide={() => setShowMenu(false)} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Image src="/wealth-elite-logo.png" alt="logo" width={80} height={32} />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Search */}
          <Form className="mb-3">
            <InputGroup>
              <FormControl placeholder="Search..." />
              <InputGroup.Text>
                <FaSearch />
              </InputGroup.Text>
            </InputGroup>
          </Form>

          {/* Menu Items */}
          <Nav className="flex-column">
            {menuItems.map((item, idx) => {
              if (item.dropdown) {
                return (
                  <Dropdown key={idx} className="mb-2">
                    <Dropdown.Toggle variant="secondary" className="w-100 text-start">
                      {item.name}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {item.dropdown.map((subItem, subIdx) => (
                        <Dropdown.Item key={subIdx} as={Link} href={subItem.path}>
                          {subItem.name}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                );
              } else {
                return (
                  <Nav.Item key={idx} className="mb-1">
                    <Link href={item.path} className="nav-link text-dark fw-semibold">
                      {item.name}
                    </Link>
                  </Nav.Item>
                );
              }
            })}

            {/* Logout */}
            <Button variant="danger" className="mt-3 w-100" onClick={handleLogout}>
              <FaSignOutAlt /> Logout
            </Button>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
