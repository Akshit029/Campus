import React from 'react';

const ForgotPassword = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Forgot Password</h2>
        <p className="text-center text-black mb-6">Enter your email address below, and we'll send you instructions to reset your password.</p>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-black text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800"
          >
            Send Reset Link
          </button>
          <p className="mt-4 text-center text-black">
            Remember your password? <a href="/login" className="text-blue-600 hover:underline">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
