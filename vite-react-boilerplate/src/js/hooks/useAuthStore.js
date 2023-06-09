import { create } from "zustand";

const useAuthStore = create(set => ({
    // Storage for the user object retrieved from the auth API
    user: null,

    isAuthenticated: function() {
        return this.user !== null;

        // let resp = await axios.get('/auth/validate-token', {withCredentials: true});
    },
    
    // Method for storing the user object as well as the auth token
    authenticate: (user) => {
      // Store the auth token in the localStorage manually
      localStorage.setItem('token', user.token);
  
      // Store the user object
      set({ user: user });
    },
  
    // Method for retrieving the stored auth token from the user storage
    getToken: () => localStorage.getItem('token'),
  
    // Method for logging out (removing the user object as well as the auth token)
    logout: () => {
      // delete auth token from localStorage
      localStorage.removeItem('token');
  
      // delete user object from storage
      set({user: null});
    }
}));
  
export default useAuthStore;