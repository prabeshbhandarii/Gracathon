import React from "react";
import { motion } from "framer-motion";
function Contact() {
  const contactbox = [
    {
      title: "Name:",
      box: "text",
    },
    {
      title: "E-mail:",
      box: "email",
    },
    {
      title: "Subject:",
      box: "text",
    },
  ];
  return (
    <>
      <div>
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
          <motion.div
            initial={{ opacity: 0.25, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-2">
              <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                Contact
              </h2>
              <div className="text-gray-600">24hr available</div>
            </div>
            <img
              src="./src/assets/5d2d955df2895ca18dec554b0e716042.jpg"
              alt=""
              className="p-6 h-52 md:h-72 object-cover"
            />
          </motion.div>
          <motion.form
            initial={{ opacity: 0.25, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            noValidate=""
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="text-md">
                Full name
              </label>
              <input
                id="name"
                type="text"
                placeholder=""
                className="w-full p-3 rounded bg-gray-100 border-[1px] border-gray-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-md">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-3 rounded bg-gray-100 border-[1px] border-gray-400"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-md">
                Message
              </label>
              <textarea
                id="message"
                rows="3"
                className="w-full p-3 rounded bg-gray-100 border-[1px] border-gray-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-600 dark:text-gray-50"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </>
  );
}

export default Contact;
