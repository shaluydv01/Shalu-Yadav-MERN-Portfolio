// import React, { useEffect } from "react";
// import axios from "axios";
// import { AppContext } from "/App_context";


// const App_State = (props) => {
//   const url = `${window.location.origin}/api`;

//   // useEffect(() => {
//   // //  contact['Shalu Yadav', 'shalu123@gmail.com', 'Hii?']
//   // }, [])
  

//   const contact = async (fullname, email, message) => {
//     const api = await axios.post(`${url}/contact`,{
//       fullname,
//       email,
//       message,
//     }, {
//       headers:{
//         "Content-Type": "application/json"
//       },
//       withCredentials: true
//     });
//     return api;
//   };

//   return (
//     <AppContext.Provider value={{ contact }}>
//       {props.children}
//     </AppContext.Provider>
//   );
// };

// export default App_State;


import React from "react";
import axios from "axios";
import AppContext from "./App_Context";  // Corrected import path

const App_State = (props) => {
  const url = `${window.location.origin}/api`;

  // useEffect(() => {
  //   // Uncomment and use this if you want to test the contact function during the initial load
  //   // contact('Shalu Yadav', 'shalu123@gmail.com', 'Hii?')
  //   //   .then((response) => {
  //   //     console.log("Message sent successfully", response);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error("Error sending message:", error);
  //   //   });
  // }, []);  // Empty dependency array means this effect runs only once on mount
  
  // The contact function that will be used in the AppContext
  const contact = async (fullname, email, message) => {
    try {
      const api = await axios.post(
        `${url}/contact`, 
        { fullname, email, message },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,  // Sends cookies with the request (if needed)
        }
      );
      return api; // Return the response from the API call
    } catch (error) {
      console.error("Error in contact API:", error);  // Handle error
      throw error;  // Re-throw error to be handled by the component that calls contact
    }
  };

  return (
    <AppContext.Provider value={{ contact }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default App_State;
