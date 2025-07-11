import React from "react";
import useForm from "../CustomHook/useForm";
import { TextField } from "@mui/material";

const Contact = () => {
  const { store, handleChange, handleSubmit } = useForm({
    name: "",
    email: "",
    password: "",
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Text"
          name="name"
          variant="outlined"
          margin="normal"
          type="text"
          value={store.name}
          onChange={handleChange}
          required
        />
        <br />
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          margin="normal"
          type="email"
          value={store.email}
          onChange={handleChange}
          required
        />
        <br />
        <TextField
          label="password"
          variant="outlined"
          margin="normal"
          type="password"
          name="password"
          value={store.password}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      <h3>Live Preview</h3>
      <p>Name: {store.name}</p>
      <p>Email: {store.email}</p>
      <p>Password: {store.password}</p>
    </>
  );
};

export default Contact;
