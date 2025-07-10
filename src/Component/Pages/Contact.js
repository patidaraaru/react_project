import React from 'react';
import useForm from '../CustomHook/useForm';

const Contact = () => {
  const { store, handleChange, handleSubmit } = useForm({
    name: '',
    email: '',
    password: ''
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={store.name}
          placeholder="Name"
          onChange={handleChange}
        /><br />

        <input
          type="email"
          name="email"
          value={store.email}
          placeholder="Email"
          onChange={handleChange}
        /><br />

        <input
          type="password"
          name="password"
          value={store.password}
          placeholder="Password"
          onChange={handleChange}
        /><br />

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
