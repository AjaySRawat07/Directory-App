import { createContext, useState } from "react";

const UserDataContext = createContext();

export const UserDataProvider = ({children}) => {
  const [usersData, setUsersData] = useState([])

  return(
    <UserDataContext.Provider value={{usersData, setUsersData}}>
      {children}
    </UserDataContext.Provider>
  )
} 

export default UserDataContext;