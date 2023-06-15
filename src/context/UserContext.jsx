import { createContext, useEffect, useState } from "react";
// api call getMe()
import { getMe } from "../api/auth";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // api call
  useEffect(() => {
    getMe();
  }, []);

  const getUser = async () => {
    const fetchedUser = await getMe();
    if (!fetchedUser.error) {
      setUser(fetchedUser);
    }
  };

  const value = {
    user,
    setUser,
    getUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
