"use client";

import { useState } from "react";
import { toast } from "react-toastify";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [pending, setPending] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setPending(true);
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setPending(false);
        toast.success("Message sent successfully!");
        setFormData({ email: "", message: "" });
      } else {
        setPending(false);
        toast.error("Something went wrong !");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setPending(false);

      toast.error("Something went wrong. Please try again later.");
    }
  };

  const handleChange = (field: "email" | "message", value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Your Email"
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
        onChange={(e) => handleChange("email", e.target.value)}
        value={formData.email}
      />
      <textarea
        rows={5}
        placeholder="Your Message"
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
        onChange={(e) => handleChange("message", e.target.value)}
        value={formData.message}
      />
      <button
        type="submit"
        className="px-6 py-3 bg-success-200 text-black rounded-xl text-sm md:text-lg font-medium hover:bg-success-300 transition cursor-pointer w-fulltext-center"
      >
        {pending ? (
          <span className="text-nowrap">sending ...</span>
        ) : (
          <span className="text-nowrap">Send</span>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
