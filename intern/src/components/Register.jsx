import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '', 
    agency: 'No',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(formData));
    navigate('/profile');
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col w-full max-w-sm p-8">
        <div className="flex-shrink-0">
          <h1 className="text-3xl font-bold text-gray-900">
            Create your PopX account
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        <form className="flex flex-col flex-grow mt-8" onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div className="relative">
              <label htmlFor="fullName" className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-violet-600">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName" 
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Enter full name"
                className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm"
              />
            </div>

            <div className="relative">
              <label htmlFor="phoneNumber" className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-violet-600">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber" 
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                placeholder="Enter phone number"
                className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm"
              />
            </div>

            <div className="relative">
              <label htmlFor="email" className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-violet-600">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter email address"
                className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm"
              />
            </div>

            <div className="relative">
              <label htmlFor="password" className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-violet-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password" 
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter password"
                className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm"
              />
            </div>
            

            <fieldset className="pt-2">
              <legend className="text-sm font-medium text-gray-900">
                Are you an Agency?<span className="text-red-500">*</span>
              </legend>
              <div className="mt-2 space-x-6 flex">
                <div className="flex items-center">
                  <input id="agency-yes" name="agency" type="radio" value="Yes" checked={formData.agency === 'Yes'} onChange={handleChange} className="h-5 w-5 appearance-none rounded-full border-2 p-1 border-gray-300 checked:bg-violet-600 checked:border-violet-600 bg-clip-content" />
                  <label htmlFor="agency-yes" className="ml-2 block text-sm font-medium text-gray-700">Yes</label>
                </div>
                <div className="flex items-center">
                  <input id="agency-no" name="agency" type="radio" value="No" checked={formData.agency === 'No'} onChange={handleChange} className="h-5 w-5 appearance-none rounded-full border-2 p-1 border-gray-300 checked:bg-violet-600 checked:border-violet-600 bg-clip-content" />
                  <label htmlFor="agency-no" className="ml-2 block text-sm font-medium text-gray-700">No</label>
                </div>
              </div>
            </fieldset>
          </div>

          <div className="mt-auto pt-6">
            <button
              type="submit"
              className="w-full rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;