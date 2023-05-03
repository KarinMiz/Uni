import axios from "axios";
import { createContext } from "react";

const AuthContext = createContext({});
const apiUrl = "http://localhost:8080/auth/login"; // not existing
export const AuthContextProvider = ({ children }) => {
  const loginApiCall = async (payload) => {
    await axios.post(apiUrl, payload, {
      withCredentials: true,
    });
  };

  return (
    <AuthContext.Provider value={{ loginApiCall }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
