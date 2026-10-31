import { useState } from 'react';
import { motion } from 'framer-motion';
import { PHONE, HOURS, BRAND } from '../config';
import CallButton from './CallButton';

// TODO: Connect form backend to Formspree (https://formspree.io) or Web3Forms (https://web3forms.com)
// by setting VITE_FORM_ENDPOINT in your .env or hosting environment variables.
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || '';

export default function ContactBlock() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    postcode: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'not_connected' | 'submitting' | 'success' | 'error'

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    }

    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!cleanPhone) {
      errs.phone = 'Please provide a valid phone number.';
    } else if (cleanPhone.length < 9) {
      errs.phone = 'Please enter a valid UK phone number.';
    }

    if (!formData.postcode.trim()) {
      errs.postcode = 'Please provide your London postcode.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide details about your lock or enquiry.';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    // If no form endpoint is configured, do not pretend to send!
    if (!FORM_ENDPOINT) {
      setSubmissionStatus('not_connected');
      return;
    }

    try {
      setSubmissionStatus('submitting');
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({ name: '', phone: '', postcode: '', message: '' });
      } else {
        setSubmissionStatus('error');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setSubmissionStatus('error');
    }
  };

  return (
    <section aria-label="Contact options" className="py-16 sm:py-24 bg-mist">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column: Fastest way: call us */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-coral">
                Immediate Response
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-forest tracking-tight mt-1">
                Fastest way: call us
              </h2>
              <p className="text-text/80 text-base sm:text-lg leading-relaxed mt-3">
                For emergency lockouts, snapped keys, or urgent securing, calling our
                phone line is always the fastest way to get an engineer dispatched.
              </p>
            </div>

            {/* Direct Phone Call Card */}
            <div className="bg-white p-7 rounded-[20px] shadow-sm border border-sage/80 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-forest/70 block">
                Direct London Line
              </span>
              <a
                href={PHONE.tel}
                className="text-2xl sm:text-3xl font-extrabold font-heading text-forest hover:text-coral transition-colors block"
              >
                {PHONE.display}
              </a>
              <CallButton label="Call" className="w-full py-3.5 text-base shadow-md" />
              <p className="text-xs text-text/70 pt-1">
                Fixed quote agreed over the phone before we travel.
              </p>
            </div>

            {/* Service Details */}
            <div className="space-y-6 pt-2">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-sage/60 rounded-xl text-coral shrink-0">
                  <svg className="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-forest">
                    Service area
                  </h3>
                  <p className="text-sm text-text/80 leading-relaxed mt-0.5">
                    All Greater London boroughs (Central, North, South, East, and West London postcodes).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-sage/60 rounded-xl text-coral shrink-0">
                  <svg className="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-forest">
                    Operating hours
                  </h3>
                  <p className="text-sm text-text/80 leading-relaxed mt-0.5">
                    {HOURS} — 365 days a year.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Message Form */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-[20px] shadow-sm border border-sage/80">
            <h3 className="text-2xl font-bold font-heading text-forest tracking-tight">
              Send a non-urgent enquiry
            </h3>
            <p className="text-sm text-text/80 mt-1 mb-6 leading-relaxed">
              For planned lock replacements, security consultations, or general questions.
            </p>

            {/* Submission Status Alerts */}
            {submissionStatus === 'not_connected' && (
              <div
                role="alert"
                className="mb-6 p-4 rounded-xl bg-sage border border-forest/20 text-forest text-sm space-y-2"
              >
                <p className="font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
                  Online enquiries not yet connected
                </p>
                <p className="text-text/85 leading-relaxed">
                  The online form backend is not yet connected. For immediate lock assistance or a fixed quote, please call our 24/7 line at <strong>{PHONE.display}</strong>.
                </p>
                <div className="pt-1">
                  <CallButton label="Call" className="py-2 px-4 text-xs" />
                </div>
              </div>
            )}

            {submissionStatus === 'success' && (
              <div
                role="alert"
                className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm"
              >
                Thank you. Your message has been sent. We will get back to you shortly.
              </div>
            )}

            {submissionStatus === 'error' && (
              <div
                role="alert"
                className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-sm"
              >
                There was a problem sending your message. Please call us directly at {PHONE.display}.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-bold text-forest mb-1.5"
                >
                  Full name <span className="text-coral">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  className={`w-full px-4 py-3 rounded-xl border bg-mist/40 text-text placeholder:text-text/40 transition-colors focus:bg-white focus-visible:outline-2 focus-visible:outline-coral ${
                    errors.name ? 'border-rose-500' : 'border-sage/90 focus:border-forest'
                  }`}
                  placeholder="e.g. David Smith"
                />
                {errors.name && (
                  <p id="contact-name-error" role="alert" className="text-xs text-rose-600 mt-1 font-semibold">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="contact-phone"
                  className="block text-sm font-bold text-forest mb-1.5"
                >
                  Phone number <span className="text-coral">*</span>
                </label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                  className={`w-full px-4 py-3 rounded-xl border bg-mist/40 text-text placeholder:text-text/40 transition-colors focus:bg-white focus-visible:outline-2 focus-visible:outline-coral ${
                    errors.phone ? 'border-rose-500' : 'border-sage/90 focus:border-forest'
                  }`}
                  placeholder="e.g. 07700 900123"
                />
                {errors.phone && (
                  <p id="contact-phone-error" role="alert" className="text-xs text-rose-600 mt-1 font-semibold">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Postcode */}
              <div>
                <label
                  htmlFor="contact-postcode"
                  className="block text-sm font-bold text-forest mb-1.5"
                >
                  London postcode <span className="text-coral">*</span>
                </label>
                <input
                  type="text"
                  id="contact-postcode"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                  aria-invalid={!!errors.postcode}
                  aria-describedby={errors.postcode ? 'contact-postcode-error' : undefined}
                  className={`w-full px-4 py-3 rounded-xl border bg-mist/40 text-text placeholder:text-text/40 transition-colors focus:bg-white focus-visible:outline-2 focus-visible:outline-coral ${
                    errors.postcode ? 'border-rose-500' : 'border-sage/90 focus:border-forest'
                  }`}
                  placeholder="e.g. SW1A 1AA or E1 6AN"
                />
                {errors.postcode && (
                  <p id="contact-postcode-error" role="alert" className="text-xs text-rose-600 mt-1 font-semibold">
                    {errors.postcode}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-bold text-forest mb-1.5"
                >
                  How can we help? <span className="text-coral">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  className={`w-full px-4 py-3 rounded-xl border bg-mist/40 text-text placeholder:text-text/40 transition-colors focus:bg-white focus-visible:outline-2 focus-visible:outline-coral ${
                    errors.message ? 'border-rose-500' : 'border-sage/90 focus:border-forest'
                  }`}
                  placeholder="Describe your lock issue, number of doors, or general questions..."
                />
                {errors.message && (
                  <p id="contact-message-error" role="alert" className="text-xs text-rose-600 mt-1 font-semibold">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submissionStatus === 'submitting'}
                  className="w-full py-3.5 px-6 rounded-full bg-forest text-mist font-bold text-sm tracking-wide shadow-sm hover:bg-forest2 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-coral disabled:opacity-60 disabled:pointer-events-none"
                >
                  {submissionStatus === 'submitting' ? 'Sending...' : 'Send message'}
                </button>
              </div>

              {/* Honest demonstration note */}
              <p className="text-xs text-text/70 text-center italic pt-1">
                Note: Online enquiries are monitored during business hours. For immediate 24/7 lockout service, please call directly.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

