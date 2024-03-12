"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { client } from "@/lib/sanity";
import Link from "next/link";
import { sendQuote } from "../../../utils/send-email";

export default function Page() {
  // const { register, handleSubmit, reset } = useForm();
  // const [submitting, setSubmitting] = useState(false);
  // const [error, setError] = useState<string | null>(null);
  // const [success, setSuccess] = useState(false);

  // const onSubmit = async (data: any) => {
  //   setSubmitting(true);
  //   setError(null);
  //   try {
  //     // Post data to Sanity
  //     const response = await client.create({
  //       _type: "quote", // This should match the Sanity document type
  //       ...data,
  //     });
  //     console.log("Data posted to Sanity:", response);
  //     setSuccess(true);
  //     reset(); // Reset form after successful submission
  //   } catch (error: any) {
  //     console.error("Error posting data to Sanity:", error.message);
  //     setError("Error submitting form. Please try again later.");
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any) => {
    setSubmitting(true);
    setError(null);
    try {
      // Post data to Gmail
      await sendQuote(data);
      
      // Post data to Sanity
      const response = await client.create({
        _type: "quote", // This should match the Sanity document type
        ...data,
      });
      console.log("Data posted to Sanity:", response);
      
      setSuccess(true);
      reset(); // Reset form after successful submission
    } catch (error: any) {
      console.error("Error:", error.message);
      setError("Error submitting form. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <>
      <div className="jumbotron jumbotron-fluid mb-5">
        <div className="container text-center py-5">
          <h1 className="text-white display-3">Call To Action</h1>
          <div className="d-inline-flex align-items-center text-white">
            <p className="m-0">
              <Link className="text-white" href="/">
                Home
              </Link>
            </p>
            <i className="fa fa-circle px-3" />
            <p className="m-0">Request Quote</p>
          </div>
        </div>
      </div>
      <div className="container">
        <header className="header">
          <h1 id="title" className="text-center">
            Quote Request Form
          </h1>
          <p id="description" className="text-center">
            The details requested below are very important. It can help Maritime
            to provide the best rate to you as soon as possible.
          </p>
        </header>
        <div className="form-wrap">
          <form id="survey-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label id="name-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    id="name"
                    placeholder="Enter your name"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label id="email-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    id="email"
                    placeholder="Enter your email"
                    className="form-control"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label id="number-label" htmlFor="number">
                    Company{" "}
                    <small className="text-danger" style={{ fontSize: "18px" }}>
                      *
                    </small>
                  </label>
                  <input
                    type="text"
                    {...register("company")}
                    id="number"
                    className="form-control"
                    placeholder="Company"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label id="whatsapp" htmlFor="whatsapp">
                    WhatsApp Number
                  </label>
                  <input
                    type="text"
                    {...register("whatsappNumber")}
                    id="whatsapp"
                    className="form-control"
                    placeholder="e.g (+256) 773165989"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label id="number-label" htmlFor="number">
                    Commodity
                    <small className="text-danger" style={{ fontSize: "18px" }}>
                      *
                    </small>
                  </label>
                  <input
                    type="text"
                    {...register("commodity", { required: true })}
                    id="commodity"
                    className="form-control"
                    placeholder="Commodity"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Type of Terms</label>
                  <select
                    id="terms"
                    {...register("terms", { required: true })}
                    className="form-control"
                    required
                  >
                    <option disabled selected>
                      Select Type of Terms
                    </option>
                    <option value="">Select type of terms</option>
                    <option value="CIF">CIF (Cost, Insurance, Freight)</option>
                    <option value="FOB">FOB (Free On Board)</option>
                    <option value="EXW">EXW (Ex Works)</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label id="readyDate" htmlFor="readyDate">
                    Cargo Ready Date
                  </label>
                  <input
                    type="date"
                    {...register("cargoReadyDate")}
                    id="readyDate"
                    className="form-control"
                    placeholder="Cargo Ready Date"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label id="deliveryDate" htmlFor="deliveryDate">
                    Cargo Delivery Date
                  </label>
                  <input
                    type="date"
                    {...register("deliveryDate")}
                    id="deliveryDate"
                    className="form-control"
                    placeholder="Cargo Delivery Date"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label id="number-label" htmlFor="number">
                    Ship From
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    {...register("shipFrom.city", { required: true })}
                    id="city"
                    className="form-control"
                    placeholder="City"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    {...register("shipFrom.country", { required: true })}
                    id="country"
                    className="form-control"
                    placeholder="Country"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label id="number-label" htmlFor="number">
                    Ship To
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    {...register("shipTo.city", { required: true })}
                    id="city"
                    className="form-control"
                    placeholder="City"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    {...register("shipTo.country", { required: true })}
                    id="country"
                    className="form-control"
                    placeholder="Country"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Factory Address</label>
                  <textarea
                    id="factoryAddress"
                    className="form-control"
                    {...register("factoryAddress")}
                    placeholder="Enter your Factory Address"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label id="number-label" htmlFor="number">
                    Container Load
                    <small className="text-danger" style={{ fontSize: "18px" }}>
                      *
                    </small>
                  </label>{" "}
                  <select
                    id="dropdown"
                    {...register("containerLoad", { required: true })}
                    className="form-control"
                    required
                  >
                    <option disabled selected>
                      Select container load
                    </option>
                    <option value="">Select container load type</option>
                    <option value="FCL">FCL (Full Container Load)</option>
                    <option value="LCL">LCL (Less than Container Load)</option>
                    <option value="AIR">AIR (Air Freight)</option>
                    <option value="FBA_EXPRESS">FBA EXPRESS</option>
                    <option value="FCL_TO_DOOR">FCL TO DOOR</option>
                    <option value="LCL_TO_DOOR">LCL TO DOOR</option>
                    <option value="AIR_TO_DOOR">AIR TO DOOR</option>
                    <option value="BREAK_BULK">BREAK BULK</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label id="number-label" htmlFor="number">
                    Container Type
                  </label>
                  <input
                    type="text"
                    {...register("containerType")}
                    id="containerType"
                    className="form-control"
                    placeholder="Container Type"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label id="number-label" htmlFor="number">
                    Container Quantity
                  </label>
                  <input
                    type="number"
                    {...register("containerQty")}
                    id="quantity"
                    className="form-control"
                    placeholder="Container Quantity"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label id="number-label" htmlFor="number">
                    Commodity Weight
                  </label>
                  <input
                    type="number"
                    {...register("commodityWeight")}
                    id="weight"
                    className="form-control"
                    placeholder="Container Weight"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Other Service Requirements</label>
                  <textarea
                    id="otherRequirements"
                    className="form-control"
                    {...register("serviceRequirements")}
                    placeholder="Enter any other service requirements"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mx-auto">
                {error && <div className="alert alert-danger">{error}</div>}
                {success && (
                  <div className="alert alert-success">
                    Form submitted successfully!
                  </div>
                )}
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={submitting}
                >
                  {submitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
