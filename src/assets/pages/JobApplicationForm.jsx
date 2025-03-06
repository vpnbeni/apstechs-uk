"use client"

import { useState, useEffect } from "react"
import emailjs from "@emailjs/browser"

export default function JobApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "", 
    phone: "",
    country: "",   
    position: "",
    linkedin: "",  
    cvLink: "",
    comments: "",
  })
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" })

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  }, [])

  const countries = [
    "United Kingdom",
    "India",
    "Uzbekistan"
  ]

  const positionsByCountry = {
    "United Kingdom": [
      "Power System Engineer",
      "Protection and Control Engineer",
      "Electrical Design Manager",
      "Electrical Design Engineer",
      "Graduate Engineer Trainee",
      "Other: Submit Your CV",
    ],
    "India": [
      "Software Developer",
      "Power System Engineer",
      "Protection Engineer",
      "Electrical Design Engineer",
      "Graduate Trainee",
      "Other: Submit Your CV",
    ],
    "Uzbekistan": [
      "Power System Engineer",
      "Control Systems Engineer",
      "Electrical Engineer",
      "Project Manager",
      "Graduate Engineer",
      "Other: Submit Your CV",
    ]
  }

  const positions = formData.country ? positionsByCountry[formData.country] : []

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: "", message: "" })

    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone_number: formData.phone,
        country: formData.country,
        position: formData.position,
        linkedin_url: formData.linkedin,
        cv_url: formData.cvLink,
        message: formData.comments,
        to_email: "info@apstechs.co.uk",
      }

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_JOB_TEMPLATE_ID,
        templateParams,
      )

      setSubmitStatus({
        type: "success",
        message: "Thank you for your application. We will review it and get back to you soon!",
      })

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        position: "",
        linkedin: "",
        cvLink: "",
        comments: "",
      })
      setStep(1)
    } catch (error) {
      console.error("Error sending application:", error)
      setSubmitStatus({
        type: "error",
        message: "Sorry, there was an error submitting your application. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (step === 3) {
      handleSubmit(e)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br mt-16 from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primaryText mb-4">Join Our Team</h1>
          <div className="flex justify-center gap-2 mb-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`h-2 w-16 rounded-full transition-all duration-300 ${
                  i <= step ? "bg-secondary" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-8 bg-white shadow-lg rounded-2xl px-8 py-4">
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">Personal Information</h2>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200 outline-none"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200 outline-none"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">Professional Details</h2>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                  Country <span className="text-red-500">*</span>
                </label>
                <select
                  id="country"
                  name="country"
                  required
                  value={formData.country}
                  onChange={(e) => {
                    const newCountry = e.target.value;
                    setFormData(prev => ({
                      ...prev,
                      country: newCountry,
                      position: "" // Reset position when country changes
                    }));
                  }}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200 outline-none appearance-none bg-white"
                >
                  <option value="">Select a country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                  Position <span className="text-red-500">*</span>
                </label>
                <select
                  id="position"
                  name="position"
                  required
                  value={formData.position}
                  onChange={handleInputChange}
                  disabled={!formData.country}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200 outline-none appearance-none bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                  <option value="">
                    {formData.country ? "Select a position" : "Please select a country first"}
                  </option>
                  {positions.map((pos) => (
                    <option key={pos} value={pos}>
                      {pos}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
                  LinkedIn URL
                </label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="https://linkedin.com/in/your-profile"
                />
              </div>

              <div>
                <label htmlFor="cvLink" className="block text-sm font-medium text-gray-700 mb-1">
                  CV Link <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  id="cvLink"
                  name="cvLink"
                  required
                  value={formData.cvLink}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="Enter your CV link"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">Additional Information</h2>

              <div>
                <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                  Tell Us About Yourself
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  rows={6}
                  value={formData.comments}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200 outline-none resize-none"
                  placeholder="Share your experience, skills, and why you'd be a great fit for this position..."
                />
              </div>
            </div>
          )}

          {/* Status Message */}
          {submitStatus.message && (
            <div
              className={`mb-6 p-4 rounded-md text-center ${
                submitStatus.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <div className="flex justify-between pt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-6 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                Back
              </button>
            )}
            <button
              type="button"
              onClick={() => {
                if (step < 3) {
                  setStep(step + 1)
                } else if (step === 3) {
                  handleSubmit(new Event('submit'))
                }
              }}
              disabled={isSubmitting}
              className={`ml-auto px-6 py-3 bg-secondary text-white rounded-lg ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-secondary"
              } focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-all duration-200`}
            >
              {step === 3
                ? isSubmitting
                  ? "Submitting..."
                  : "Submit Application"
                : "Continue"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
