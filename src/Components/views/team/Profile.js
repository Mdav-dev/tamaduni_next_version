import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Profile = ({ name, role, image, description }) => {
  return (
    <section className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
      <div className="mb-4">
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="rounded-full border-4 border-gray-200 shadow-md"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
      <p className="text-sm text-gray-500 font-medium">{role}</p>
      <p className="text-sm text-gray-600 mt-4">{description}</p>
      <div className="flex space-x-4 mt-2">
        <a
          href="#"
          aria-label="Facebook"
          className="text-blue-600 hover:text-blue-800"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="#"
          aria-label="Twitter"
          className="text-blue-400 hover:text-blue-600"
        >
          <FaTwitter size={20} />
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className="text-pink-600 hover:text-pink-800"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="#"
          aria-label="LinkedIn"
          className="text-blue-700 hover:text-blue-900"
        >
          <FaLinkedinIn size={20} />
        </a>
      </div>
    </section>
  );
};

export default Profile;
