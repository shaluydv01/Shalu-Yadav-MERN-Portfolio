import "./Form.css";
import React, { useContext, useState } from "react";
import { AppContext } from "../../Pages/context/App_context";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const { contact } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [message, setMessage] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    const result = await contact(fullname, email, message);

    // console.log(result);

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

    setEmail("");
    setFullname("");
    setMessage("");
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
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="abc123@gmail.com"
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            placeholder="Write your message here..."
            id="message"
          />

          <input type="submit" id="submit-btn" />
        </form>
      </div>
    </>
  );
};

export default Form;
