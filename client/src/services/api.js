import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

// Register user
export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  
  if (response.data) {
    localStorage.setItem('userInfo', JSON.stringify(response.data));
  }
  
  return response.data;
};

// Login user
export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  
  if (response.data) {
    localStorage.setItem('userInfo', JSON.stringify(response.data));
  }
  
  return response.data;
};

// Logout user
export const logout = () => {
  localStorage.removeItem('userInfo');
};

// Get user from localStorage
export const getCurrentUser = () => {
  const userInfo = localStorage.getItem('userInfo');
  return userInfo ? JSON.parse(userInfo) : null;
}; 