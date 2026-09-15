import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact = ({ darkMode }) => {
  const [status, setStatus] = useState('') // '', 'sending', 'success', 'error'

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "carlos_alberto-lira@outlook.com",
      href: "mailto:carlos_alberto-lira@outlook.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+52 552 179 5946",
      href: "tel:+525521795946",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mexico",
      href: "",
    },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.target
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/mojnyepd', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
        setTimeout(() => setStatus(''), 5000)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      style={{
        backgroundColor: darkMode ? '#111827' : '#f9fafb',
      }}
      className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          className="text-center mb-8 sm:mb-10 md:mb-12"
          data-aos="fade-up"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3"
            style={{
              color: darkMode ? 'white' : '#1f2937',
            }}
          >
            Get In{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #1d64bf, #20afd9)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Touch
            </span>
          </h2>

          <p
            className="text-base sm:text-lg md:text-xl"
            style={{
              color: darkMode ? '#d1d5db' : '#6b7280',
            }}
          >
            Let's discuss your project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-start">
          {/* Contact Info */}
          <div
            className="flex flex-col gap-4 order-1 lg:order-1"
            data-aos="fade-right"
          >
            {contactInfo.map((item, index) => (
              <div
                key={index}
                style={{
                  background: darkMode
                    ? 'linear-gradient(to right, #1f2937, #111827)'
                    : 'linear-gradient(to right, #ffffff, #f9fafb)',
                  borderColor: darkMode ? '#374151' : '#e5e7eb',
                }}
                className="flex items-center gap-4 rounded-xl border p-4 sm:p-5 shadow-md hover:shadow-lg hover:shadow-brand-1/10 transition-all"
              >
                <div
                  className={`p-3 rounded-full shrink-0 ${
                    darkMode
                      ? 'bg-brand-1/15 text-brand-3'
                      : 'bg-brand-1/10 text-brand-1'
                  }`}
                >
                  <item.icon size={22} />
                </div>
                <div className="min-w-0">
                  <p
                    className="text-xs font-semibold uppercase tracking-wide mb-0.5"
                    style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}
                  >
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm sm:text-base font-medium break-all hover:text-brand-1 dark:hover:text-brand-3 transition-colors"
                      style={{ color: darkMode ? 'white' : '#1f2937' }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p
                      className="text-sm sm:text-base font-medium"
                      style={{ color: darkMode ? 'white' : '#1f2937' }}
                    >
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/carlos-de-jesus-alberto-lira"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-2 rounded-xl border py-3 text-sm font-semibold transition-all hover:scale-[1.02] ${
                  darkMode
                    ? 'bg-gray-800 border-gray-700 text-white hover:border-brand-1/50'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-brand-1/50 shadow-md'
                }`}
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://github.com/carlosalberto05"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-2 rounded-xl border py-3 text-sm font-semibold transition-all hover:scale-[1.02] ${
                  darkMode
                    ? 'bg-gray-800 border-gray-700 text-white hover:border-brand-1/50'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-brand-1/50 shadow-md'
                }`}
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            style={{
              background: darkMode
                ? 'linear-gradient(to right, #1f2937, #111827)'
                : 'linear-gradient(to right, #ffffff, #f9fafb)',
              borderColor: darkMode ? '#374151' : '#e5e7eb',
            }}
            className="rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg order-1 lg:order-2"
            data-aos="fade-left"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
              {/* First Name */}
              <input
                name="firstName"
                type="text"
                placeholder="First Name"
                style={{
                  backgroundColor: darkMode ? '#374151' : '#c6efed80',
                  borderColor: darkMode ? '#4b5563' : '#d1d5db',
                  color: darkMode ? 'white' : '#1f2937',
                }}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-brand-1 focus:ring-2 focus:ring-brand-1/20 transition-all"
                required
              />

              {/* Last Name */}
              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                style={{
                  backgroundColor: darkMode ? '#374151' : '#c6efed80',
                  borderColor: darkMode ? '#4b5563' : '#d1d5db',
                  color: darkMode ? 'white' : '#1f2937',
                }}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-brand-1 focus:ring-2 focus:ring-brand-1/20 transition-all"
                required
              />
            </div>

            {/* Email */}
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              style={{
                backgroundColor: darkMode ? '#374151' : '#c6efed80',
                borderColor: darkMode ? '#4b5563' : '#d1d5db',
                color: darkMode ? 'white' : '#1f2937',
              }}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-brand-1 focus:ring-2 focus:ring-brand-1/20 transition-all mb-3 sm:mb-4"
              required
            />

            {/* Phone */}
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              style={{
                backgroundColor: darkMode ? '#374151' : '#c6efed80',
                borderColor: darkMode ? '#4b5563' : '#d1d5db',
                color: darkMode ? 'white' : '#1f2937',
              }}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-brand-1 focus:ring-2 focus:ring-brand-1/20 transition-all mb-3 sm:mb-4"
              required
            />

            {/* Message */}
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              style={{
                backgroundColor: darkMode ? '#374151' : '#c6efed80',
                borderColor: darkMode ? '#4b5563' : '#d1d5db',
                color: darkMode ? 'white' : '#1f2937',
              }}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-brand-1 focus:ring-2 focus:ring-brand-1/20 transition-all mb-4 sm:mb-6 resize-none"
              required
            />

            <button
              type="submit"
              disabled={status === 'sending'}
              style={{
                background: 'linear-gradient(to right, #1d64bf, #20afd9)',
              }}
              className="w-full py-2 sm:py-3 text-white font-semibold rounded-lg text-sm sm:text-base hover:shadow-lg hover:shadow-brand-1/25 hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="mt-4 text-green-500 font-medium text-center animate-bounce">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-red-500 font-medium text-center">
                There was an error sending your message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
