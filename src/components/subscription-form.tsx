"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { client } from "@/lib/sanity";

const Subscribe = () => {
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
        _type: "subscribe", // This should match the Sanity document type
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="input-group"
        noValidate
      >
        <input
          type="text"
          className="form-control border-light"
          style={{ padding: 30 }}
          placeholder="Your Email Address"
          {...register("email", { required: true })}
          required
        />
        <div className="input-group-append">
          {error && <div className="alert alert-danger">{error}</div>}
          {success && (
            <div className="alert alert-success">
              Form submitted successfully!
            </div>
          )}
          <button disabled={submitting} className="btn btn-primary px-4">
            {submitting ? "Signing Up..." : "Sign Up"}
          </button>
        </div>
      </form>
    </>
  );
};

export default Subscribe;
