import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setErrorMessage("All fields are required.");
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Server error. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-indigo-800">Get In Touch</h1>
          <p className="text-gray-600 text-lg max-w-lg mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          {/* Contact Information */}
          <div className="bg-indigo-700 md:w-1/3 p-8 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="mb-6 opacity-75">Have questions or feedback? We're here to help.</p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-indigo-200" />
                  <span className="ml-4 text-indigo-100">kumarsinghabhay77@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-indigo-200" />
                  <span className="ml-4 text-indigo-100">+91 7067328563</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-indigo-200" />
                  <span className="ml-4 text-indigo-100">Startup Enclave, CSIT Campus, Durg, Chhattisgarh</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
              <p className="opacity-75">Mon - Sat: 10AM - 2PM</p>
              <p className="opacity-75">Sunday: Closed</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-2/3 p-8">
            <div className="flex items-center mb-6">
              <MessageSquare className="h-8 w-8 text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-800 ml-2">Send us a message</h2>
            </div>

            {submitted && (
              <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded mb-6">
                <div className="font-bold">Thank you for your message!</div>
                <div>We've received your inquiry and will get back to you shortly.</div>
              </div>
            )}

            {errorMessage && (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded mb-6">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" rows="5" value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required></textarea>
              </div>

              <button type="submit" className="w-full flex items-center justify-center gap-2 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
  <Send className="w-5 h-5" />
  <span>Send Message</span>
</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
