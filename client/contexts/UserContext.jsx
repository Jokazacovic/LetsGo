import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [userInfo, setUserInfo] = useState({
    trips: [],
  });

  return <UserContext.Provider value={[userInfo, setUserInfo]}>{props.children}</UserContext.Provider>;
};
