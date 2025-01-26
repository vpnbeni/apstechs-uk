import React from "react";
import { IoIosMailUnread } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { useForm } from "react-hook-form";

const ContactMap = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="w-full h-auto lg:h-screen flex flex-col lg:flex-row justify-center items-center lg:space-x-8 ">
      {/* Left side map */}
      <div className="w-full bg-primaryText lg:w-1/2 h-full flex justify-center items-center ">
        <img
          src="/assets/contact/map.svg"
          alt="map"
          className="object-contain w-full h-full lg:w-[55%] "
        />
      </div>

      {/* Right side form */}
      <div className="w-full lg:w-1/2 px-8 md:px-10 lg:px-28 py-8 lg:py-8 flex flex-col gap-6 ">
        {/* Address */}
        <div className="flex justify-start items-center gap-4 mb-6">
          <div className="bg-primaryText text-white p-4 rounded-full flex justify-center items-center">
            <SlLocationPin size={25} />
          </div>
          <span className="text-sm lg:text-base">
            Suite-12, 1st Floor, Cautrac Services Office Great Horkesley,
            Colchester CO6 4EJ
          </span>
        </div>

        {/* Email */}
        <div className="flex justify-start items-center gap-4 mb-6">
          <div className="bg-primaryText text-white p-4 rounded-full flex justify-center items-center">
            <IoIosMailUnread size={25} />
          </div>
          <a
            href="mailto:info@apstechs.co.uk"
            className="text-primaryText underline text-sm lg:text-base"
          >
            info@apstechs.co.uk
          </a>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* First Name and Last Name */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/2">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                {...register("firstName", {
                  required: "First Name is required",
                })}
                className={`mt-1 p-2 block w-full sm:text-sm ${
                  errors.firstName
                    ? "border-secondary border-b"
                    : "border-b border-primary focus:outline-none"
                }`}
              />
              {errors.firstName && (
                <p className="text-secondary text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="w-full lg:w-1/2">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                {...register("lastName", { required: "Last Name is required" })}
                className={`mt-1 p-2 block w-full sm:text-sm ${
                  errors.lastName
                    ? "border-secondary border-b"
                    : "border-b border-primary focus:outline-none"
                }`}
              />
              {errors.lastName && (
                <p className="text-secondary text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className={`mt-1 p-2 block w-full sm:text-sm ${
                errors.email
                  ? "border-secondary border-b"
                  : "border-b border-primary focus:outline-none"
              }`}
            />
            {errors.email && (
              <p className="text-secondary text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be 10 digits",
                },
              })}
              className={`mt-1 p-2 block w-full sm:text-sm ${
                errors.phone
                  ? "border-secondary border-b"
                  : "border-b border-primary focus:outline-none"
              }`}
            />
            {errors.phone && (
              <p className="text-secondary text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              {...register("message", { required: "Message is required" })}
              rows="4"
              className={`mt-1 p-2 block w-full sm:text-sm ${
                errors.message
                  ? "border-secondary border-b"
                  : "border-b border-primary focus:outline-none"
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-secondary text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 hover:bg-opacity-90 focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMap;
