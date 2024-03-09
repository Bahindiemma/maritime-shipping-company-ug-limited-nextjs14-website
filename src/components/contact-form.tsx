"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { client } from "@/lib/sanity";

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data: any) => {
    setSubmitting(true);
    setError(null);
    try {
      // Post data to Sanity
      const response = await client.create({
        _type: "contact", // This should match the Sanity document type
        ...data,
      });
      console.log("Data posted to Sanity:", response);
      setSuccess(true);
      reset(); // Reset form after successful submission
    } catch (error: any) {
      console.error("Error posting data to Sanity:", error.message);
      setError("Error submitting form. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} id="contactForm" noValidate>
        <div className="control-group">
          <input
            type="text"
            className="form-control border-0 p-4"
            id="name"
            placeholder="Your Name"
            required
            {...register("name", { required: true })}
          />
          <p className="help-block text-danger" />
        </div>
        <div className="control-group">
          <input
            type="email"
            className="form-control border-0 p-4"
            id="email"
            placeholder="Your Email"
            {...register("email", { required: true })}
            required
          />
          <p className="help-block text-danger" />
        </div>
        <div className="control-group">
          <input
            type="text"
            className="form-control border-0 p-4"
            id="subject"
            placeholder="Subject"
            {...register("subject", { required: true })}
            required
          />
          <p className="help-block text-danger" />
        </div>
        <div className="control-group">
          <textarea
            className="form-control border-0 py-3 px-4"
            rows={3}
            id="message"
            placeholder="Message"
            {...register("message", { required: true })}
            required
            defaultValue={""}
          />
          <p className="help-block text-danger" />
        </div>
        <div>
          {error && <div className="alert alert-danger">{error}</div>}
          {success && (
            <div className="alert alert-success">
              Form submitted successfully!
            </div>
          )}
          <button
            type="submit"
            className="btn btn-primary py-3 px-4"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
