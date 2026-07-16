import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
import { CONTACT_INFO } from "@/lib/site-data";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'CAT',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const coursesList = ['CAT', 'CLAT', 'IPMAT', 'MBA CET', 'MCA CET', 'CRT'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          email: '',
          course: 'CAT',
          message: '',
        });
        setIsSubmitted(false);
      }, 4000);
    }
  };

  return (
    <div className="bg-slate-50/50 py-16 font-sans text-slate-800" id="contact-view-root">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="contact-header">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/10 px-3 py-1 rounded-full inline-block mb-3">
            Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand-blue tracking-tight mb-4">
            Connect with our <span className="text-brand-orange">advisors</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-medium">
            Have questions about batches, duration, hybrid mode resources, or want to schedule a
            counselling session? Reach out directly or visit our Dharampeth campus.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="contact-grid">
          {/* Left Column: Coordinates details */}
          <div className="lg:col-span-5 space-y-8" id="contact-details-col">
            <div
              className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm space-y-6"
              id="contact-coords-card"
            >
              <h3 className="text-xl font-bold text-brand-blue">Nagpur Center Details</h3>
              <p className="text-xs text-gray-400 font-semibold leading-relaxed">
                Our advisors are active daily from 10:00 AM to 7:00 PM (IST) to handle admission
                inquiries and mock counselling.
              </p>

              <div className="space-y-6 pt-2" id="contact-coords-list">
                {/* Item 1 */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                    <MapPin className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-blue">Campus Address</h4>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed font-medium">
                      {CONTACT_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                    <Phone className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-blue">Phone Numbers</h4>
                    <p className="text-xs text-gray-500 mt-1 font-semibold">{CONTACT_INFO.phone}</p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                    <Mail className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-blue">Email Channel</h4>
                    <p className="text-xs text-gray-500 mt-1 font-semibold">{CONTACT_INFO.email}</p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                    <Clock className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-blue">Center Timings</h4>
                    <p className="text-xs text-gray-500 mt-1 font-semibold">
                      Mon - Sat: 10:00 AM - 7:00 PM <br />
                      Sunday: Closed (Mocks Online)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interaction form */}
          <div className="lg:col-span-7" id="contact-form-col">
            <div
              className="bg-white border border-slate-100 p-8 sm:p-10 rounded-3xl shadow-md relative overflow-hidden"
              id="contact-form-card"
            >
              {/* Colored top decoration line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#ea580c]" />

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-inquiry-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    id="advisors-query-form"
                  >
                    <div className="space-y-1.5 text-left">
                      <h3 className="text-2xl font-bold text-brand-blue tracking-tight">
                        Send An Inquiry Message
                      </h3>
                      <p className="text-xs text-gray-400 font-semibold">
                        Fill out the details below. Our admissions desk will get in touch with you.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
                      {/* Full Name */}
                      <div className="flex flex-col space-y-1.5">
                        <label className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full border border-slate-200 focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] text-sm font-medium rounded-xl px-4 py-3 focus:outline-none transition-all bg-white text-[#1e293b]"
                        />
                      </div>

                      {/* Contact Number */}
                      <div className="flex flex-col space-y-1.5">
                        <label className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                          Contact Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="Enter mobile number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full border border-slate-200 focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] text-sm font-medium rounded-xl px-4 py-3 focus:outline-none transition-all bg-white text-[#1e293b]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
                      {/* Email Address */}
                      <div className="flex flex-col space-y-1.5">
                        <label className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="Enter email address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full border border-slate-200 focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] text-sm font-medium rounded-xl px-4 py-3 focus:outline-none transition-all bg-white text-[#1e293b]"
                        />
                      </div>

                      {/* Targeted Program */}
                      <div className="flex flex-col space-y-1.5">
                        <label className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                          Select Target Course
                        </label>
                        <select
                          value={formData.course}
                          onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                          className="w-full border border-slate-200 focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] text-sm font-bold text-brand-blue rounded-xl px-4 py-3 focus:outline-none bg-white"
                        >
                          {coursesList.map((course) => (
                            <option key={course} value={course}>
                              {course} Entrance Batch
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Messages text */}
                    <div className="flex flex-col space-y-1.5 text-left">
                      <label className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                        Your Message / Query Notes
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Write down any questions about batch timings, fee structures, offline classes, demo schedule, etc."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full border border-slate-200 focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] text-sm font-medium rounded-xl px-4 py-3 focus:outline-none transition-all resize-none bg-white text-[#1e293b]"
                      />
                    </div>

                    {/* Submit Query */}
                    <button
                      type="submit"
                      className="w-full bg-[#ea580c] hover:bg-[#f97316] text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-md shadow-brand-orange/15 hover:shadow-lg flex items-center justify-center space-x-2 cursor-pointer"
                      id="btn-submit-contact-query"
                    >
                      <span>Submit Query to Admissions Desk</span>
                      <Send className="w-4 h-4 text-white" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="contact-success-screen"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center flex flex-col items-center justify-center space-y-4"
                    id="contact-success-screen"
                  >
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-500 border border-green-200 shadow-md animate-bounce">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-2xl font-bold text-brand-blue">Message Dispatched!</h4>
                      <p className="text-sm text-gray-500 max-w-sm mx-auto font-semibold leading-relaxed">
                        Thank you. Your inquiry regarding{' '}
                        <strong className="text-brand-orange">{formData.course}</strong> has been
                        received successfully. Our coordinator will contact you shortly on{' '}
                        <strong className="text-brand-blue">{formData.phone}</strong>.
                      </p>
                    </div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest pt-4">
                      Nagpur Dharampeth Admissions Desk
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
