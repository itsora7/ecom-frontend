import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { CustomInpute } from "../customInpute/CustomInpute";

export const FormResetPassword = ({ email, goBack, FormResetPassword }) => {
  const [error, setError] = useState("");
  const [form, setForm] = useState();
  const handleOnChage = (e) => {
    const { name, value } = e.target;

    setError("");
    // let str = "";
    if (name === "password") {
      value.length < 6 && setError("Password must be 6 character long.");
      !/[0-9]/.test(value) && setError("At least one number is required");
      !/[a-z]/.test(value) && setError("At least one lower case is required");
      !/[A-Z]/.test(value) && setError("At least one uppder case is required");
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    const { confirmPassword, ...rest } = form;

    if (confirmPassword !== rest.password) {
      return toast.error("Password do not match!");
    }
  };
  const inputs = [
    {
      label: "Frist Name",
      name: "fName",
      type: "text",
      placeholder: "Sam ",
      required: true,
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      placeholder: "smith ",
      required: true,
    },

    {
      label: "Phone",
      name: "phone",
      type: "number",
      placeholder: "04xxxxx ",
    },
  ];

  return (
    <div className="border py-5 rounded shadow-lg">
      <Button variant="secondary" onClick={goBack}>
        &lt; Back
      </Button>
      <div className="text-center">
        <h3 className="text-center">Reset New Password</h3>
        <hr />
      </div>
      <Form onSubmit={handleOnSubmit}>
        {inputs.map((item, i) => (
          <CustomInpute key={i} {...item} onChange={handleOnChage} />
        ))}
        <Form.Text>
          Your password must contain atleast 6 characters with number, upper
          case and lower case
        </Form.Text>
        {error && (
          <div className="text-danger fw-bolder my-4 fs-4">
            <li>{error}</li>
          </div>
        )}
        <div className="d-gri">
          <Button variant="success" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default FormResetPassword;
