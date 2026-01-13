import React from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoDark from '@assets/logo-dark.svg';

// Navigation Component
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-start pt-2 justify-between">
        <a href="/" className="flex flex-col items-start -mt-4">
          <img src={logoDark} alt="ShardCFO" className="h-20 w-auto" />
          <span className="hidden sm:block text-sm text-muted-foreground -mt-5">Fractional strategic finance that enables builders to focus on building.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 mt-4">
          <a href="/#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="/resources" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Resources</a>
          <a href="/contact">
            <Button variant="default" size="sm" className="rounded-full px-6">
              Get Started
            </Button>
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden p-2 mt-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border p-6 flex flex-col gap-4">
          <a href="/#services" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Services</a>
          <a href="/resources" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Resources</a>
          <a href="/contact">
            <Button className="w-full rounded-full">Get Started</Button>
          </a>
        </div>
      )}
    </nav>
  );
};

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    company: "",
    email: "",
    details: ""
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [submitted, setSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState("");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
    setSubmitError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit to API
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to send message");
      }

      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-4">Thank you for reaching out!</h3>
        <p className="text-muted-foreground mb-8">We'll get back to you within 24 hours.</p>
        <a href="/">
          <Button variant="outline" className="rounded-full px-8">
            Back to Home
          </Button>
        </a>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
            errors.name ? "border-red-500" : "border-border"
          }`}
          placeholder="Your full name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      {/* Company Field */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-2">
          Company Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
            errors.company ? "border-red-500" : "border-border"
          }`}
          placeholder="Your company name"
        />
        {errors.company && (
          <p className="mt-1 text-sm text-red-500">{errors.company}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
            errors.email ? "border-red-500" : "border-border"
          }`}
          placeholder="you@company.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      {/* Additional Details Field */}
      <div>
        <label htmlFor="details" className="block text-sm font-medium mb-2">
          Additional Details <span className="text-muted-foreground">(optional)</span>
        </label>
        <textarea
          id="details"
          name="details"
          value={formData.details}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
          placeholder="Tell us about your company and what you're looking for..."
        />
      </div>

      {/* Submit Error */}
      {submitError && (
        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
          {submitError}
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full rounded-full text-base"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </Button>
    </form>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/40 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <a href="/" className="flex items-center gap-2">
          <img src={logoDark} alt="ShardCFO" className="h-20 w-auto" />
        </a>
        <div className="flex gap-8 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
        </div>
        <div className="text-sm text-muted-foreground">
          © 2025 ShardCFO. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10 selection:text-primary">
      <Navbar />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to take control of your startup's financial future? Let's talk.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-secondary/20 border border-border/40 rounded-2xl p-8 md:p-12"
          >
            <ContactForm />
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
