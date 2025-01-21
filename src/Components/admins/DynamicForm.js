import React, { useState } from "react";

const DynamicForm = ({ formTitle, fields, onSubmit }) => {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => {
      acc[String(field.key)] = field.defaultValue || "";
      return acc;
    }, {})
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [String(key)]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Convert keys to string format explicitly
    const stringifiedFormData = {};
    for (const key in formData) {
      stringifiedFormData[String(key)] = formData[key];
    }

    console.log("Form Data:", JSON.stringify(stringifiedFormData, null, 2));
   

    if (onSubmit) {
      onSubmit(JSON.stringify(stringifiedFormData, null, 2));
    }

    // Reset the form
    setFormData(
      fields.reduce((acc, field) => {
        acc[String(field.key)] = "";
        return acc;
      }, {})
    );

    setIsSubmitted(true);

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
                value={formData[String(field.key)]}
                onChange={(e) => handleChange(field.key, e.target.value)}
                placeholder={field.placeholder || ""}
              />
            ) : (
              <input
                type={field.type}
                required={field.required}
                className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData[String(field.key)]}
                onChange={(e) => handleChange(field.key, e.target.value)}
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
