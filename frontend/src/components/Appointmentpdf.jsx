import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast ,{Toaster} from "react-hot-toast"
const Appointmentpdf = () => {
  const location = useLocation();
  console.log(location);
  const Navigation = useNavigate();

  return (
    <>
      <form className="bg-white py-10">
        <div className=" w-10/12 mx-auto">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-xl  font-bold leading-7 text-gray-900">
                Personal Information of Doctor
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Use a permanent address where you can receive mail.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                {location &&
                  location.state &&
                  location.state.doctor.map((val, i) => {
                    return (
                      <>
                        <div className="col-span-6">
                          <label
                            for="first-name"
                            className="block text-sm font-medium leading-6 text-black"
                          >
                            Doctor Name
                          </label>
                          <div className="mt-2 col">
                            <input
                              value={val.name}
                              type="text"
                              name="first-name"
                              id="first-name"
                              autocomplete="given-name"
                              className="block w-full pl-2 rounded-md border-0 py-1.5 bg-white text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-6  w-full  ">
                          <label
                            for="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            qualification
                          </label>
                          <div className="mt-2">
                            <input
                              value={val.qualification}
                              id="email"
                              name="email"
                              type="text"
                              autocomplete="email"
                              className="block w-full pl-2 rounded-md   border-0 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-6  w-full grid grid-cols-2 gap-20  ">
                          <div className="">
                            <label
                              for="email"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              From
                            </label>
                            <div className="mt-2">
                              <input
                                value={val.to}
                                id=""
                                name="email"
                                type="text"
                                autocomplete="email"
                                className="block w-full pl-2 rounded-md  col-span-2  border-0 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              for="email"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              To
                            </label>
                            <div className="mt-2">
                              <input
                                value={val.from}
                                id="email"
                                name="email"
                                type="text"
                                autocomplete="email"
                                className="block w-full rounded-md  pl-2 border-0 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-span-full">
                          <label
                            for="street-address"
                            className="block text-sm pl-2 font-medium leading-6 text-gray-900"
                          >
                            Phone Number
                          </label>
                          <div className="mt-2">
                            <input
                              value={val.phonenumber}
                              type="text"
                              name="street-address"
                              id="street-address"
                              autocomplete="street-address"
                              className="block w-full pl-2 bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        {/* <fieldset>
                          <legend className="text-sm font-semibold leading-6 text-gray-900">
                            Gender
                          </legend>

                          <div className="mt-6 flex justify-center items-center gap-7  ">
                            <div className="flex items-center gap-x-3">
                              <input
                                id="push-everything"
                                name="push-notifications"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                              <label
                                for="push-everything"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Male
                              </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                              <input
                                id="push-email"
                                name="push-notifications"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                              <label
                                for="push-email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Female
                              </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                              <input
                                id="push-nothing"
                                name="push-notifications"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                              <label
                                for="push-nothing"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Others
                              </label>
                            </div>
                          </div>
                        </fieldset> */}
                      </>
                    );
                  })}
              </div>
            </div>
          </div>

          <div className="space-y-12 mt-10">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-xl  font-bold leading-7 text-gray-900">
                Personal Information of Patients
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Use a permanent address where you can receive mail.
              </p>

              {location &&
                location.state &&
                location.state.patient.map((val, i) => {
                  return (
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-6">
                        <label
                          for="first-name"
                          className="block text-sm font-medium leading-6 text-black"
                        >
                          name
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            value={val.floating_email}
                            name="first-name"
                            id="first-name"
                            autocomplete="given-name"
                            className="block pl-2 w-full rounded-md border-0 py-1.5 bg-white text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-6  w-full  ">
                        <label
                          for="email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Age
                        </label>
                        <div className="mt-2">
                          <input
                            id="email"
                            name="email"
                            value={val.floating_password}
                            type="text"
                            autocomplete="email"
                            className="block pl-2 w-full rounded-md   border-0 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-6  w-full grid grid-cols-2 gap-14  ">
                        <div className="">
                          <label
                            for="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Time
                          </label>
                          <div className="mt-2">
                            <input
                              id="email"
                              name="email"
                              value={val.floating_last_name}
                              type="text"
                              autocomplete="email"
                              className="block w-full pl-2 rounded-md  col-span-2  border-0 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            for="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Date
                          </label>
                          <div className="mt-2">
                            <input
                              id="email"
                              name="email"
                              type="text"
                              value={val.floating_first_name}
                              autocomplete="email"
                              className="block w-full pl-2 rounded-md   border-0 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-span-full">
                        <label
                          for="street-address"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Phone Number
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            value={val.floating_company}
                            name="street-address"
                            id="street-address"
                            autocomplete="street-address"
                            className="block w-full pl-2 bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <fieldset>
                        <legend className="text-sm font-semibold leading-6 text-gray-900">
                          Gender
                        </legend>

                        
                      </fieldset>
                    </div>
                  );
                })}
            </div>
          </div>

          <div class="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              class="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                Navigation("/")
                  Toaster("Data has been submitted successfully")
              }}
              type="submit"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Appointmentpdf;
