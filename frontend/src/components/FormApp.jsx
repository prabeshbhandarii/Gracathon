import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Appointmentpdf from "./Appointmentpdf";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
const schema = Yup.object().shape({
  name: Yup.string().required("This section is necessary"),
  duration: Yup.string().required("Please! fill the Duration"),
  category: Yup.string().required("Select the category"),
  Description: Yup.string().required("This section is necessary"),
});
const Adddoctor = () => {
  const location = useLocation();
  const Navigation = useNavigate();
  console.log(location);
  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={{
          course: "",
          duration: "",
          category: "",
          instructor: "",
          image: "",
        }}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log("values");
          console.log("actions");
        }}
      >
        {({ handleSubmit, values }) => {
          return (
            <div className="w-full h-screen ">
              <div className=" text-6xl font-black flex justify-center items-center py-10">
                <span>Appointment Name</span>
              </div>
              <Form
                onSubmit={handleSubmit}
                className=" flex flex-col gap-5  mt-20 mx-44"
              >
                <div className="relative z-0 w-full  group">
                  <Field
                    type="text"
                    name="floating_email"
                    id="floating_email"
                    className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_email"
                    className="peer-focus:font-medium absolute text-lg text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Patients Name
                  </label>
                </div>
                <div className="relative z-0 w-full  group">
                  <Field
                    type="text"
                    name="floating_password"
                    id="floating_password"
                    className="block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_password"
                    className="peer-focus:font-medium absolute text-lg text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Age
                  </label>
                </div>
                <div className="relative z-0 w-full  group">
                  <Field
                    type="text"
                    name="repeat_password"
                    id="floating_repeat_password"
                    className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_repeat_password"
                    className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Gender
                  </label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full  group">
                    <Field
                      type="date"
                      name="floating_first_name"
                      id="floating_first_name"
                      className="block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                  </div>
                  <div className="relative z-0 w-full  group">
                    <Field
                      type="time"
                      name="floating_last_name"
                      id="floating_last_name"
                      className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      for="floating_last_name"
                      className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Time
                    </label>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full  group">
                    <Field
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      name="floating_phone"
                      id="floating_phone"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      for="floating_phone"
                      className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Description
                    </label>
                  </div>
                  <div className="relative z-0 w-full  group">
                    <Field
                      type="text"
                      name="floating_company"
                      id="floating_company"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      for="floating_company"
                      className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Phone Number
                    </label>
                  </div>
                </div>
                <div>
                  <Link
                    to="/Appointment"
                    state={{
                      doctor: [location.state.doctor],
                      patient: [values],
                    }}
                  >
                    <button
                      type="submit"
                      className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Submit
                    </button>
                  </Link>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </>
  );
};

export default Adddoctor;
