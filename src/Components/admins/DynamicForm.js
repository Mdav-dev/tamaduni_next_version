import React, { useState } from "react";

const DynamicForm = ({ formTitle, fields, onSubmit }) => {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => {
      acc[field.label] = field.defaultValue || ""; // Support default values
      return acc;
    }, {})
  );
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission status


  const handleChange = (label, value) => {
    setFormData((prev) => ({ ...prev, [label]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    if (onSubmit) {
      onSubmit(formData); // Pass form data to parent component (AdminsForms)
    }

    setFormData(
      fields.reduce((acc, field) => {
        acc[field.label] = "";
        return acc;
      }, {})
    ); // Clear the form

    setIsSubmitted(true); // Indicate the form was submitted

    // Hide the success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">{formTitle}</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {fields.map((field, index) => (
          <div key={index} className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">
              {field.label}
              {field.required && <span className="text-red-500">*</span>}
            </label>
            {field.type === "textarea" ? (
              <textarea
                required={field.required}
                className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData[field.label]}
                onChange={(e) => handleChange(field.label, e.target.value)}
                placeholder={field.placeholder || ""}
              />
            ) : (
              <input
                type={field.type}
                required={field.required}
                className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData[field.label]}
                onChange={(e) => handleChange(field.label, e.target.value)}
                placeholder={field.placeholder || ""}
              />
            )}
          </div>
        ))}

        {isSubmitted && (
          <div className="mb-4 text-green-700 bg-green-100 border border-green-400 p-3 rounded-md">
            Form submitted successfully!
          </div>
        )}

        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DynamicForm;

// Example Usage:
// const artistsFields = [
//   { label: 'Name', type: 'text', required: true, placeholder: 'Enter artist name' },
//   { label: 'Age', type: 'number', required: false, placeholder: 'Enter artist age' },
//   { label: 'Genre', type: 'text', required: true, placeholder: 'Enter artist genre' },
// ];
// <DynamicForm formTitle="Artists" fields={artistsFields} onSubmit={handleSubmit} />
