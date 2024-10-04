import React, { useState, useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';

const QrPage = () => {
  const [name, setName] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [branch, setBranch] = useState('');
  const [year, setYear] = useState('');
  const [isQrGenerated, setIsQrGenerated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const qrCodeRef = useRef(null);

  // Function to generate QR data
  const generateQrData = () => {
    if (name && vehicleNumber && contactNumber && rollNumber && branch && year && year !== 'Choose') {
      return `Campus ScanShield\nName: ${name}\nVehicle: ${vehicleNumber}\nContact: ${contactNumber}\nRoll No: ${rollNumber}\nBranch: ${branch}\nYear: ${year}`;
    }
    return '';
  };

  const handleGenerate = () => {
    if (!name || !vehicleNumber || !contactNumber || !rollNumber || !branch || !year || year === 'Choose') {
      setErrorMessage('All fields are required.');
    } else {
      setErrorMessage('');
      setIsQrGenerated(true);
    }
  };

  const handleNewQrCode = () => {
    setName('');
    setVehicleNumber('');
    setContactNumber('');
    setRollNumber('');
    setBranch('');
    setYear('Choose');
    setIsQrGenerated(false);
  };

  // Function to download QR code with company name
  const handleDownload = () => {
    const svg = qrCodeRef.current.querySelector('svg');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const svgData = new XMLSerializer().serializeToString(svg);

    const img = new Image();
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height + 40; // Extra space for the company name
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);

      // Add company name
      ctx.font = 'bold 16px Sans';
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.fillText('Campus ScanShield', canvas.width / 2, canvas.height - 20);

      const pngFile = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = pngFile;
      link.download = 'Campus-scanshield.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    img.src = url;
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <nav className="bg-black p-4 text-white fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer">
            <img src="/assets/1.jpeg" alt="Campus ScanShield Logo" className="h-8 w-8" />
          </div>
          <ul className="flex space-x-10">
            <li><a href="/" className="hover:text-gray-200">Home</a></li>
          </ul>
        </div>
      </nav>

      <div className="flex-grow flex items-center justify-center p-19">
        <div className="bg-orange-700 p-8 rounded-lg shadow-lg w-full max-w-md">
          {!isQrGenerated ? (
            <>
              <h2 className="text-2xl font-bold mb-6 text-center text-black">Generate QR Code</h2>
              {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
              <form className="space-y-4">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-black text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="Enter the name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="vehicleNumber" className="block text-black text-sm font-semibold mb-2">Vehicle Number</label>
                  <input
                    type="text"
                    id="vehicleNumber"
                    value={vehicleNumber}
                    onChange={(e) => setVehicleNumber(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="Enter the vehicle number"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="contactNumber" className="block text-black text-sm font-semibold mb-2">Contact Number</label>
                  <input
                    type="number"
                    id="contactNumber"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="Enter the contact number"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="rollNumber" className="block text-black text-sm font-semibold mb-2">Roll Number</label>
                  <input
                    type="text"
                    id="rollNumber"
                    value={rollNumber}
                    onChange={(e) => setRollNumber(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="Enter the roll number"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="branch" className="block text-black text-sm font-semibold mb-2">Branch</label>
                  <input
                    type="text"
                    id="branch"
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="Enter the branch"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="year" className="block text-black text-sm font-semibold mb-2">Year</label>
                  <select
                    id="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    required
                  >
                    <option value="Choose">Choose</option>
                    <option value="1st">1st Year</option>
                    <option value="2nd">2nd Year</option>
                    <option value="3rd">3rd Year</option>
                    <option value="4th">4th Year</option>
                  </select>
                </div>
                <button
                  type="button"
                  onClick={handleGenerate}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Generate QR Code
                </button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Your QR Code</h2>
              <div ref={qrCodeRef} className="flex justify-center mb-4 relative">
                <QRCodeSVG
                  value={generateQrData()}
                  size={256}
                  level="H"
                  includeMargin={true}
                />
              </div>
              <div className="mt-2 text-3xl font-bold text-white">
                <strong>Campus ScanShield</strong> {/* Company Name as Text */}
              </div>
              <div className="mt-6 flex justify-center space-x-4">
                <button
                  onClick={handleDownload}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Download QR Code
                </button>
                <button
                  onClick={handleNewQrCode}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Generate New QR Code
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QrPage;
