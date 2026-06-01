import { useFormik } from "formik";
import Image from "next/image";

import Input from "@/components/form/Input";
import Title from "@/components/ui/Title";

const Order = () => {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      persons: "",
      date: "",
    },
    onSubmit: () => {},
  });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      value: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 4,
      name: "persons",
      type: "number",
      placeholder: "How Many Persons?",
      value: values.persons,
      errorMessage: errors.persons,
      touched: touched.persons,
    },
    {
      id: 5,
      name: "date",
      type: "datetime-local",
      value: values.date,
      errorMessage: errors.date,
      touched: touched.date,
    },
  ];

  return (
    <div className="overflow-x-auto">
      <div className="min-h-[calc(100vh_-_436px)] flex justify-center items-center flex-col p-10 min-w-[1000px]">
        <div className="flex items-center flex-1 w-full max-h-28">
          <table className="w-full text-sm text-center text-gray-500">
            <thead className="text-xs text-gray-400 uppercase bg-gray-700">
              <tr>
                <th scope="col" className="py-3 px-6">
                  ORDER ID
                </th>
                <th scope="col" className="py-3 px-6">
                  CUSTOMER
                </th>
                <th scope="col" className="py-3 px-6">
                  ADDRESS
                </th>
                <th scope="col" className="py-3 px-6">
                  TOTAL
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary">
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                  63107f5559...
                </td>

                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  Emin Başbayan
                </td>

                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  Adana
                </td>

                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  $18
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-between w-full p-10 bg-primary mt-6">
          <div className="relative flex flex-col items-center gap-y-1">
            <Image
              src="/images/paid.png"
              alt="payment"
              width={40}
              height={40}
            />
            <span>Payment</span>
          </div>

          <div className="relative flex flex-col items-center gap-y-1 animate-pulse">
            <Image
              src="/images/bake.png"
              alt="preparing"
              width={40}
              height={40}
            />
            <span>Preparing</span>
          </div>

          <div className="relative flex flex-col items-center gap-y-1">
            <Image
              src="/images/bike.png"
              alt="on the way"
              width={40}
              height={40}
            />
            <span>On the way</span>
          </div>

          <div className="relative flex flex-col items-center gap-y-1">
            <Image
              src="/images/delivered.png"
              alt="delivered"
              width={40}
              height={40}
            />
            <span>Delivered</span>
          </div>
        </div>
      </div>

      <div className="p-7">
        <Title>Account Settings</Title>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-4 mt-5"
        >
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))}
        </form>
      </div>
    </div>
  );
};

export default Order;
