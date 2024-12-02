// import "./Form.css";
// import React, { useContext, useState } from "react";
// import { AppContext } from "../../Pages/context/App_context";
// import { ToastContainer, toast, Bounce } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Form = () => {
//   const { contact } = useContext(AppContext);
//   const [email, setEmail] = useState("");
//   const [fullname, setFullname] = useState("");
//   const [message, setMessage] = useState("");

//   const loginHandler = async (e) => {
//     e.preventDefault();
    
    
//     try{
//       const result = await contact(fullname, email, message);

//     // console.log(result);

//     toast.success("Message sent successfully", {
//       position: "top-right",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//       transition: Bounce,
//     });

//     setEmail("");
//     setFullname("");
//     setMessage("");
//   }catch(error) {
//     toast.error("Failed to send message", {
//       position: "top-right",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//       transition: Bounce,
//     });
//   }
// };


//   return (
//     <>
//       <ToastContainer />

//       <div className="form-container">
//         <form onSubmit={loginHandler}>
//           <input
//             value={fullname}
//             onChange={(e) => setFullname(e.target.value)}
//             type="text"
//             placeholder="Enter your full name"
//             id="fullname"
//           />

//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             id="email"
//             placeholder="abc123@gmail.com"
//           />

//           <textarea
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             type="text"
//             placeholder="Write your message here..."
//             id="message"
//           />

//           <input type="submit" id="submit-btn" />
//         </form>
//       </div>
//     </>
//   );
// };

// export default Form;


import "./Form.css";
import React, { useContext, useState } from "react";
import { AppContext } from "../../Pages/context/App_context";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  // Using context to access the contact function
  const { contact } = useContext(AppContext);
  
  // Local state for the form fields
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form submission handler
  const loginHandler = async (e) => {
    e.preventDefault();

    // Basic validation to check if fields are filled
    if (!fullname || !email || !message) {
      toast.error("Please fill in all fields", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }

    // Set submitting state to disable form during submission
    setIsSubmitting(true);

    try {
      // Call the contact function passed via context
      const result = await contact(fullname, email, message);
      
      // Show success message
      toast.success("Message sent successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });

      // Clear form fields
      setEmail("");
      setFullname("");
      setMessage("");
    } catch (error) {
      // Handle errors and show failure message
      toast.error("Failed to send message", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } finally {
      // Reset submitting state after the request completes
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer />

      <div className="form-container">
        <form onSubmit={loginHandler}>
          <input
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            type="text"
            placeholder="Enter your full name"
            id="fullname"
            disabled={isSubmitting}
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="abc123@gmail.com"
            disabled={isSubmitting}
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message here..."
            id="message"
            disabled={isSubmitting}
          />

          <input
            type="submit"
            id="submit-btn"
            disabled={isSubmitting}
            value={isSubmitting ? "Sending..." : "Send Message"}
          />
        </form>
      </div>
    </>
  );
};

export default Form;
