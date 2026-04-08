import React from "react";

const inputClass = "w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-transparent";

const FormField = ({ id, name, label, type = "text", value, onChange, as, rows }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium mb-1">{label}</label>
    {as === "textarea" ? (
      <textarea
        id={id}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        className={inputClass}
      />
    ) : (
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={inputClass}
      />
    )}
  </div>
);

export default FormField;
