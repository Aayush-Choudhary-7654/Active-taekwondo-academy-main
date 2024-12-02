'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    parentMobile: '',
    studentMobile: '',
    address: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="py-8 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 font-cinzel mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600">
            Join our academy today. Fill out the form below and we&apos;ll get back to you.
          </p>
        </div>

        <form 
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-8 space-y-6"
        >
          {/* Student Name */}
          <div>
            <label 
              htmlFor="studentName" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Student Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              required
              value={formData.studentName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 
                       focus:ring-red-800 focus:border-transparent"
              placeholder="Enter student's full name"
            />
          </div>

          {/* Parent Name */}
          <div>
            <label 
              htmlFor="parentName" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Parent Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="parentName"
              name="parentName"
              required
              value={formData.parentName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 
                       focus:ring-red-800 focus:border-transparent"
              placeholder="Enter parent's full name"
            />
          </div>

          {/* Parent Mobile */}
          <div>
            <label 
              htmlFor="parentMobile" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Parent Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="parentMobile"
              name="parentMobile"
              required
              value={formData.parentMobile}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 
                       focus:ring-red-800 focus:border-transparent"
              placeholder="Enter parent's mobile number"
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit mobile number"
            />
          </div>

          {/* Student Mobile (Optional) */}
          <div>
            <label 
              htmlFor="studentMobile" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Student Mobile Number (Optional)
            </label>
            <input
              type="tel"
              id="studentMobile"
              name="studentMobile"
              value={formData.studentMobile}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 
                       focus:ring-red-800 focus:border-transparent"
              placeholder="Enter student's mobile number (if any)"
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit mobile number"
            />
          </div>

          {/* Address */}
          <div>
            <label 
              htmlFor="address" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Address <span className="text-red-500">*</span>
            </label>
            <textarea
              id="address"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 
                       focus:ring-red-800 focus:border-transparent resize-none"
              placeholder="Enter complete address"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-red-800 text-white py-3 px-6 rounded-md hover:bg-red-900 
                       transition-colors duration-300 font-semibold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
