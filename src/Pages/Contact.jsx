import React, { useState, useEffect } from "react";
import { User, Mail, MessageSquare, Send } from "lucide-react";
import SocialLinks from "../components/SocialLinks";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    const isLocalhost = window.location.hostname === "localhost";
    if (!isLocalhost) {
      // In production, allow the browser to POST the form natively to FormSubmit
      return;
    }

    // Localhost: prevent default and simulate success
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: "Sending Message...",
      html: "Please wait while we send your message",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully!",
        icon: "success",
        confirmButtonColor: "#6366f1",
        timer: 1500,
        timerProgressBar: true,
      });

      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        window.location.href = "/thank-you";
      }, 1500);
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonColor: "#6366f1",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="text-center lg:mt-[5%] mt-10 mb-2 sm:px-0 px-[5%]">
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        >
          <span
            style={{
              color: "#6366f1",
              backgroundImage:
                "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Contact Me
          </span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1100"
          className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2"
        >
          Got a question? Send me a message, and I'll get back to you soon.
        </p>
      </div>

      <div
        className="h-auto py-10 flex items-center justify-center px-[5%] md:px-0"
        id="Contact"
      >
        <div className="container px-[1%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[50%_50%] 2xl:grid-cols-[45%_55%] gap-12">
          {/* Left Section - Connect With Me */}
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10 transform transition-all duration-300 hover:shadow-[#6366f1]/10 text-center"
          >
            <h2 className="text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
              Connect With Me
            </h2>
            <p className="text-gray-400 mb-6">
              Let's collaborate and create something amazing together!
            </p>
            <SocialLinks />
          </div>

{/* Right Section - Get in Touch */}
<div
  data-aos="fade-left"
  data-aos-duration="1200"
  className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10 text-center lg:mr-8"
>
  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
    Get in Touch
  </h2>

  {/* Direct Contact Info */}


  {/* Contact Form */}
  <form
    action="https://formsubmit.co/sparsh.yadav.work@gmail.com"
    method="POST"
    onSubmit={handleSubmit}
    className="space-y-6"
  >
    {/* Hidden Inputs for FormSubmit customization */}
    <input type="hidden" name="_template" value="table" />
    <input type="hidden" name="_captcha" value="false" />
    <input
      type="hidden"
      name="_next"
      value="https://portfoliosparshh.netlify.app/thank-you"

    />
    <input
      type="hidden"
      name="_subject"
      value="New message from portfolio contact form"
    />

    {/* Name Field */}
    <div className="relative group">
      <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        disabled={isSubmitting}
        className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white"
        required
      />
    </div>

    {/* Email Field */}
    <div className="relative group">
      <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        disabled={isSubmitting}
        className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white"
        required
      />
    </div>

    {/* Message Field */}
    <div className="relative group">
      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        disabled={isSubmitting}
        className="w-full resize-none p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white"
        required
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-3 rounded-lg font-semibold transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 active:scale-[0.98]"
    >
      <Send className="w-5 h-5" />
      <span className="text-base">
        {isSubmitting ? "Sending..." : "Send Message"}
      </span>
    </button>
  </form>
</div>

        </div>
      </div>
    </>
  );
};

export default ContactPage;
