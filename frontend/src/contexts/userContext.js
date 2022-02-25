import { createContext, useState } from "react";

export const userContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(() => {
    const userInfo = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;
    return userInfo;
  });

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}