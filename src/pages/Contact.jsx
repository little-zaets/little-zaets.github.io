import React, { useState } from "react";
import { SocialIcons, Hero } from "../components/molecules";
import { Content, FormField, SubmitButton } from "../components/atoms";
import axios from "axios";

function Contact({ title }) {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
    disabled: false,
    emailSent: null
  });

  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;
    setState(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextState = { ...state, disabled: true };
    setState(nextState);

    axios.post('https://portfolio-nodebackend.herokuapp.com/api/email', nextState)
      .then((res) => {
        setState(prev => ({ ...prev, disabled: false, emailSent: res.data.success ? true : false }));
      })
      .catch(() => {
        setState(prev => ({ ...prev, disabled: false, emailSent: false }));
      });
  };

  return (
    <div>
      <Hero title={title} />
      <Content>
        <form onSubmit={handleSubmit}>
          <FormField id="full-name" name="name" label="Full Name" type="text" value={state.name} onChange={handleChange} />
          <FormField id="email" name="email" label="Email" type="email" value={state.email} onChange={handleChange} />
          <FormField id="message" name="message" label="Message" as="textarea" rows="3" value={state.message} onChange={handleChange} />
          <SubmitButton disabled={state.disabled}>Send</SubmitButton>
          {state.emailSent === true && <p className="inline success-msg">Email Sent</p>}
          {state.emailSent === false && <p className="inline err-msg">Email Not Sent</p>}
        </form>
        <SocialIcons />
      </Content>
    </div>
  );
}

export default Contact;

