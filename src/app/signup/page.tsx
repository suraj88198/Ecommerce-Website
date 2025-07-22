'use client';
import React, { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import GoogleButton from '@/components/GoogleButton';

interface AuthPageProps {
  mode?: 'signup' | 'login';
}

const SignUp: React.FC<AuthPageProps> = ({ mode = 'signup' }) => {
  const [authMode, setAuthMode] = useState<'signup' | 'login'>(mode);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (authMode === 'signup' && !formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (authMode === 'signup' && formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      if (authMode === 'signup') {
        alert('Account created successfully! (This is a demo)');
      } else {
        alert('Logged in successfully! (This is a demo)');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleAuth = () => {
    alert('Google OAuth integration requires backend setup. This is the UI implementation.');
  };

  const toggleAuthMode = () => {
    setAuthMode(authMode === 'signup' ? 'login' : 'signup');
    setFormData({ name: '', email: '', password: '' });
    setErrors({});
  };

  return (
    <div className="min-h-[85vh] container flex items-center justify-center">
      <div className="flex-1 flex">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-30">
            {/* Left Side - Illustration */}
            <div className="w-full">
              <Image
                src="/images/signUp-left.png"
                alt=""
                width={500}
                height={500}
                className="object-contain w-full h-full"
              />
            </div>

            {/* Right Side - Form */}
            <div className="flex items-center justify-center">
              <div className="w-full">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="mb-8">
                    <h2 className="text-[36px] font-medium text-black mb-2">
                      {authMode === 'signup' ? 'Create an account' : 'Log in to Exclusive'}
                    </h2>
                    <p className="text-[16px] font-regular text-black">
                      Enter your details below
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {authMode === 'signup' && (
                      <div>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Name"
                            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-0 hover:border-[#DB4444] transition-all ${
                              errors.name ? 'border-[#DB4444]' : 'border-gray-300'
                            }`}
                          />
                        </div>
                        {errors.name && (
                          <p className="text-[#DB4444] text-sm mt-1">{errors.name}</p>
                        )}
                      </div>
                    )}

                    <div>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email or Phone Number"
                          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-0 hover:border-[#DB4444] transition-all ${
                            errors.email ? 'border-[#DB4444]' : 'border-gray-300'
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          placeholder="Password"
                          className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:outline-0 hover:border-[#DB4444] transition-all ${
                            errors.password ? 'border-[#DB4444]' : 'border-gray-300'
                          }`}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                      {errors.password && (
                        <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                      )}

                      {/* Forgot Password Button - Only in Login Mode */}
                      {authMode === 'login' && (
                        <div className="text-right mt-2">
                          <button
                            type="button"
                            onClick={() => alert('Password reset feature is coming soon.')}
                            className="text-sm text-[#DB4444] hover:text-red-600 transition-colors font-medium"
                          >
                            Forgot Password?
                          </button>
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-[#DB4444] text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Processing...
                        </div>
                      ) : (
                        authMode === 'signup' ? 'Create Account' : 'Sign In'
                      )}
                    </button>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or</span>
                      </div>
                    </div>

                    <GoogleButton onClick={handleGoogleAuth} />

                    <p className="text-center text-gray-600">
                      {authMode === 'signup'
                        ? 'Already have account?'
                        : "Don't have an account?"}{' '}
                      <button
                        type="button"
                        onClick={toggleAuthMode}
                        className="text-[#DB4444] font-medium hover:text-red-600 transition-colors cursor-pointer"
                      >
                        {authMode === 'signup' ? 'Log In' : 'Sign Up'}
                      </button>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
