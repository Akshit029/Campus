import React, { useState, useEffect } from 'react';

const Home = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scrolling down
        setScrollingDown(true);
      } else {
        // Scrolling up
        setScrollingDown(false);
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Navbar */}
      <nav
        className={`bg-black p-4 text-white fixed top-0 left-0 w-full z-50 transition-transform ${
          scrollingDown ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Left Section - Logo */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <img src="/assets/1.jpeg" alt="Campus ScanShield Logo" className="h-8 w-8" />
          </div>

          {/* Center Section - Features, About, Contact */}
          <ul className="flex space-x-6">
            <li><a href="#features" className="hover:text-gray-200">Features</a></li>
            <li><a href="#about" className="hover:text-gray-200">About</a></li>
            <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
            <li><a href="#qr" className="hover:text-gray-200">QR</a></li>
            <li><a href="/record" className="hover:text-gray-200">Record</a></li>
          </ul>

          {/* Right Section - Login, Sign up */}
          <ul className="flex space-x-6">
            <li><a href="/login" className="hover:text-gray-200">Login</a></li>
            <li><a href="/signup" className="hover:text-gray-200">Sign up</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-60 mt-16"
        style={{ backgroundImage: "url('/assets/2.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
        <div className="relative container mx-auto text-center text-white">
          <h2 className="text-4xl font-bold">Efficient Vehicle Attendance System</h2>
          <p className="mt-4 mb-5 text-lg">Monitor and manage the attendance of vehicles effortlessly with Campus ScanShield.</p>
          <a href="/login" className="mt-16 px-8 py-3 mb-6 bg-blue-600 hover:bg-blue-700 rounded-lg hover:text-gray-200">Get Started</a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h4 className="text-xl font-bold">Real-time Scanning</h4>
              <p>Track vehicles in real time with advanced scanning technology.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h4 className="text-xl font-bold">Detailed Reports</h4>
              <p>Get comprehensive attendance reports and analytics.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h4 className="text-xl font-bold">Secure Data</h4>
              <p>Your data is encrypted and secured at all times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold">About Us</h3>
          <p className="mt-4 text-lg">
            Developed for QR Based system for vehicle details at MIET Jammu.<br />
            Please mention your friends about our website.<br />
            Thank you.
          </p>
        </div>
      </section>

      {/* QR SECTION */}
      <section id="qr" className="bg-white py-20">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Generate Your QR</h3>
          <a href="/qr" className="mt-10 px-8 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg">Click Here</a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg mb-4">If you have any questions or concerns, feel free to reach out to us.</p>
          {/* Mailto link for contact */}
          <a href="mailto:2023a1r048@mietjammu.in" className="text-White text-md hover:underline">
          <button className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg">Click Here</button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;