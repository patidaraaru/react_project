// ✅ useForm.js
import { useState } from "react";

const useForm = (initialValues) => {
  const [store, setStore] = useState(initialValues); // store = object

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStore((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", store);
  };

  return { store, handleChange, handleSubmit };
};

export default useForm;
