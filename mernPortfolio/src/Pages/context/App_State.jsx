import React, { useEffect } from "react";
import axios from "axios";
import { AppContext } from "./App_context";


const App_State = (props) => {
  const url = `${window.location.origin}/api`;

  useEffect(() => {
  //  contact['Shalu Yadav', 'shalu123@gmail.com', 'Hii?']
  }, [])
  

  const contact = async (fullname, email, message) => {
    const api = await axios.post(`${url}/contact`,{
      fullname,
      email,
      message,
    }, {
      headers:{
        "Content-Type": "application/json"
      },
      withCredentials: true
    });
    return api;
  };

  return (
    <AppContext.Provider value={{ contact }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default App_State;
