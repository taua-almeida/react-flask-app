export const isAuthenticated = () => localStorage.getItem('token') !== null;
export const getToken = () => localStorage.getItem('token');