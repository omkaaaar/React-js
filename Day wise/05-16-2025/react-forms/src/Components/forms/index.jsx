import { useState } from "react";

const FormComponent = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (event) => {
    console.log(event);
    const { value } = event.target;
    setNameValue(value);
  };

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handleOnChangeEvent = (event) => {
    console.log(event.target.name);

    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(nameValue);
  };
  console.log(formData);

  return (
    <div>
      <h1>This is form</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          id="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleOnChangeEvent}
        />

        <input
          name="email"
          id="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleOnChangeEvent}
        />
        <button type="submit">Submit</button>
      </form>
      <p>My name is: {nameValue}</p>
    </div>
  );
};

export default FormComponent;
