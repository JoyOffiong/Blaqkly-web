import { useState } from "react";
import { Button } from "../components/ui/Button";
import { useForm, Controller } from "react-hook-form";
import { Input } from "../../src/components/ui/input";
import { checkout } from "@/data/checkoutInfo";

function Payment() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      lagosLocation: "",
    },
  });

  const lagosLocations = [
    "Ikoyi",
    "Victoria Island",
    "Lekki",
    "Ajah",
    "Ikeja",
    "Surulere",
    "Yaba",
    "Bariga",
    "Shomolu",
    "Mushin",
    "Alimosho",
    "Ifako-Ijaiye",
    "Agege",
    "Badagry",
    "Epe",
    "Ibeju-Lekki",
  ];

  const onSubmit = async (data: checkout) => {
    setIsSubmitting(true);
    try {
      console.log("Form Data:", data);
      // Add your payment processing logic here
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen mt-20 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl bg-white rounded-lg shadow-md p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Checkout</h1>
          <p className="text-gray-600">Please enter your details below</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Personal Details Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-4 border-b border-gray-200">
              Personal Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  First Name <span className="text-red-500">*</span>
                </label>
                <Controller
                  name="firstName"
                  control={control}
                  rules={{ required: "First name is required" }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      placeholder="John"
                      className={errors.firstName ? "border-red-500" : ""}
                    />
                  )}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Last Name <span className="text-red-500">*</span>
                </label>
                <Controller
                  name="lastName"
                  control={control}
                  rules={{ required: "Last name is required" }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      placeholder="Doe"
                      className={errors.lastName ? "border-red-500" : ""}
                    />
                  )}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="email"
                      placeholder="john@example.com"
                      className={errors.email ? "border-red-500" : ""}
                    />
                  )}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <Controller
                  name="phone"
                  control={control}
                  rules={{ required: "Phone number is required" }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="tel"
                      placeholder="+234 801 234 5678"
                      className={errors.phone ? "border-red-500" : ""}
                    />
                  )}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Billing Address Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-4 border-b border-gray-200">
              Billing Address
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="lagosLocation"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Location in Lagos <span className="text-red-500">*</span>
                </label>
                <Controller
                  name="lagosLocation"
                  control={control}
                  rules={{ required: "Please select a location" }}
                  render={({ field }) => (
                    <select
                      {...field}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.lagosLocation
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    >
                      <option value="">Choose a location...</option>
                      {lagosLocations.map((location) => (
                        <option key={location} value={location}>
                          {location}
                        </option>
                      ))}
                    </select>
                  )}
                />
                {errors.lagosLocation && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lagosLocation.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="billingAddress"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Street Address <span className="text-red-500">*</span>
              </label>
              <Controller
                name="address"
                control={control}
                rules={{ required: "Street address is required" }}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    placeholder="e.g., 123 Main Street, Plot 456"
                    className={`w-full ${
                      errors.address ? "border-red-500" : ""
                    }`}
                  />
                )}
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.address.message}
                </p>
              )}
            </div>
          </section>

          {/* Submit Button */}
          <div className="flex gap-4 pt-8 border-t border-gray-200">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
            >
              {isSubmitting ? "Processing..." : "Continue to Payment"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Payment;
