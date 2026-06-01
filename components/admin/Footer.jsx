import React, { useState } from "react";
import Input from "../../components/form/Input";
import Title from "../../components/ui/Title";
import { useFormik } from "formik";
import { footerSchema } from "../../schema/footer";

const Footer = () => {
  const [linkAddress, setLinkAddress] = useState("https://");
  const [iconName, setIconName] = useState("fa fa-facebook");

  const [icons, setIcons] = useState([
    "fa fa-facebook",
    "fa fa-twitter",
    "fa fa-instagram",
  ]);

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));

    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        location: "",
        email: "",
        phoneNumber: "",
        desc: "",
        day: "",
        time: "",
      },
      onSubmit,
      validationSchema: footerSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "location",
      type: "text",
      placeholder: "Your Location",
      value: values.location,
      errorMessage: errors.location,
      touched: touched.location,
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Your Email",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 3,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 4,
      name: "desc",
      type: "text",
      placeholder: "Your Description",
      value: values.desc,
      errorMessage: errors.desc,
      touched: touched.desc,
    },
    {
      id: 5,
      name: "day",
      type: "text",
      placeholder: "Update Day",
      value: values.day,
      errorMessage: errors.day,
      touched: touched.day,
    },
    {
      id: 6,
      name: "time",
      type: "text",
      placeholder: "Update Time",
      value: values.time,
      errorMessage: errors.time,
      touched: touched.time,
    },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="lg:p-8 flex-1 lg:mt-0 mt-5"
    >
      <Title>Footer Settings</Title>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        ))}
      </div>

      <div className="mt-4 flex justify-between md:items-center md:flex-row flex-col gap-4">
        <div className="flex items-center gap-4">
          <Input
            placeholder="Link Address"
            value={linkAddress}
            onChange={(e) => setLinkAddress(e.target.value)}
          />

          <Input
            placeholder="Icon Name"
            value={iconName}
            onChange={(e) => setIconName(e.target.value)}
          />

          <button
            className="btn-primary"
            type="button"
            onClick={() => {
              if (!iconName.trim()) return;

              setIcons([...icons, iconName]);
              setIconName("fa fa-");
            }}
          >
            Add
          </button>
        </div>

        <ul className="flex items-center gap-6 flex-wrap">
          {icons.map((icon, index) => (
            <li
              key={index}
              className="flex items-center"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <i className={`${icon} text-2xl text-black`}></i>
              </div>

              <button
                className="text-danger"
                onClick={() => {
                  setIcons((prev) =>
                    prev.filter((item, i) => i !== index)
                  );
                }}
                type="button"
              >
                <i className="fa fa-trash text-xl"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button type="submit" className="btn-primary mt-4">
        Update
      </button>
    </form>
  );
};

export default Footer;
