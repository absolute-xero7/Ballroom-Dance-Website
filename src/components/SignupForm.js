import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    year: '',
    preFirstName: '',
    danceExperience: '',
    uoftEmail: '',
    howHeard: '',
    partner: '',
    questions: '',
    instagram: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.year.trim()) newErrors.year = 'Year of study is required';

    if (!formData.uoftEmail.trim()) {
      newErrors.uoftEmail = 'UofT email is required';
    } else if (!/^[A-Z0-9._%+-]+@mail\.utoronto\.ca$/i.test(formData.uoftEmail)) {
      newErrors.uoftEmail = 'Please enter a valid UofT email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });

    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setFormStatus({ submitted: false, error: false, message: 'Submitting...' });

      // Google Form ID from your form URL (replace with your actual form ID)
      const formId = '1FAIpQLSd05ibTnjPxDtkrp0h8nHMtBLyCzsMQhw5n2RBTLdd9lVq3ZQ';

      // Create form data object with Google Form field IDs
      const googleFormData = new FormData();
      googleFormData.append('entry.1951851101', formData.fullName); // Example entry ID
      googleFormData.append('entry.22590857', formData.year);  // Replace with your actual entry IDs
      googleFormData.append('entry.1541195092', formData.preFirstName);
      googleFormData.append('entry.751747774', formData.danceExperience);
      googleFormData.append('entry.684069553', formData.uoftEmail);
      googleFormData.append('entry.1971980529', formData.howHeard);
      googleFormData.append('entry.108817508', formData.partner);
      googleFormData.append('entry.308878977', formData.questions);
      googleFormData.append('entry.984202028', formData.instagram);

      // Google Form submission URL
      const googleFormUrl = `https://docs.google.com/forms/d/e/${formId}/formResponse`;

      // Create a hidden iframe for submission (works around CORS issues)
      const iframe = document.createElement('iframe');
      iframe.setAttribute('style', 'display: none');
      document.body.appendChild(iframe);

      // Create a form inside the iframe
      const iframeDocument = iframe.contentWindow.document;
      const iframeForm = iframeDocument.createElement('form');
      iframeForm.method = 'POST';
      iframeForm.action = googleFormUrl;
      iframeDocument.body.appendChild(iframeForm);

      // Add form data to the iframe form
      for (const [key, value] of googleFormData.entries()) {
        const input = iframeDocument.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        iframeForm.appendChild(input);
      }

      // Submit the form
      iframeForm.submit();

      // Show success message and reset form
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you for signing up! We will contact you shortly.'
      });

      // Reset form after successful submission
      setFormData({
        fullName: '',
        year: '',
        preFirstName: '',
        danceExperience: '',
        uoftEmail: '',
        howHeard: '',
        partner: '',
        questions: '',
        instagram: ''
      });

      // Remove the iframe after submission
      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 1000);
    } else {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fix the errors in the form.'
      });
    }
  };

  return (
    <section id="signup" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Join Our Dance Society
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-accent mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.p
              className="text-lg text-primary-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Ready to begin your dance journey? Sign up below and become part of our vibrant community!
            </motion.p>
          </div>

          {formStatus.submitted && (
            <motion.div
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="block sm:inline">{formStatus.message}</span>
            </motion.div>
          )}

          {formStatus.error && (
            <motion.div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="block sm:inline">{formStatus.message}</span>
            </motion.div>
          )}

          <motion.form
            onSubmit={handleSubmit}
            className="bg-secondary rounded-lg shadow-md p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-primary mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.fullName ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
                )}
              </div>

              {/* Year of Study */}
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-primary mb-1">
                  Year of Study <span className="text-red-500">*</span>
                </label>
                <select
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.year ? 'border-red-500' : 'border-gray-300'
                    }`}
                >
                  <option value="">Please select</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                  <option value="5+">5+ Year</option>
                  <option value="graduate">Graduate Student</option>
                  <option value="alumni">Alumni</option>
                  <option value="other">Other</option>
                </select>
                {errors.year && (
                  <p className="mt-1 text-xs text-red-500">{errors.year}</p>
                )}
              </div>

              {/* Preferred First Name */}
              <div>
                <label htmlFor="preFirstName" className="block text-sm font-medium text-primary mb-1">
                  Preferred First Name
                </label>
                <input
                  type="text"
                  id="preFirstName"
                  name="preFirstName"
                  value={formData.preFirstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Dance Experience */}
              <div>
                <label htmlFor="danceExperience" className="block text-sm font-medium text-primary mb-1">
                  Dance Experience
                </label>
                <select
                  id="danceExperience"
                  name="danceExperience"
                  value={formData.danceExperience}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Please select</option>
                  <option value="none">No Experience</option>
                  <option value="beginner">Have experience in ballroom dance</option>
                  <option value="intermediate">Have experience in other dances (ballet, gymnastics, hip-hop etc)</option>
                </select>
              </div>

              {/* UofT Email */}
              <div>
                <label htmlFor="uoftEmail" className="block text-sm font-medium text-primary mb-1">
                  UofT Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="uoftEmail"
                  name="uoftEmail"
                  value={formData.uoftEmail}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.uoftEmail ? 'border-red-500' : 'border-gray-300'
                    }`}
                  placeholder="name@mail.utoronto.ca"
                />
                {errors.uoftEmail && (
                  <p className="mt-1 text-xs text-red-500">{errors.uoftEmail}</p>
                )}
              </div>

              {/* How did you hear about us */}
              <div>
                <label htmlFor="howHeard" className="block text-sm font-medium text-primary mb-1">
                  How did you hear about us?
                </label>
                <select
                  id="howHeard"
                  name="howHeard"
                  value={formData.howHeard}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Please select</option>
                  <option value="friend">Referral (e.g. by friend)</option>
                  <option value="social">Instagram</option>
                  <option value="clubs">UTSU Clubs Fair</option>
                  <option value="poster">Website</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Partner */}
              <div className="md:col-span-2">
                <label htmlFor="partner" className="block text-sm font-medium text-primary mb-1">
                  Do you have a dance partner?
                </label>
                <input
                  type="text"
                  id="partner"
                  name="partner"
                  value={formData.partner}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Questions/Comments */}
              <div className="md:col-span-2">
                <label htmlFor="questions" className="block text-sm font-medium text-primary mb-1">
                  Questions or Comments
                </label>
                <textarea
                  id="questions"
                  name="questions"
                  value={formData.questions}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>

              {/* Instagram */}
              <div className="md:col-span-2">
                <label htmlFor="instagram" className="block text-sm font-medium text-primary mb-1">
                  Instagram Handle (Optional)
                </label>
                <input
                  type="text"
                  id="instagram"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="@yourusername"
                />
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                type="submit"
                className="btn btn-primary w-full md:w-auto"
              >
                Submit Registration
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;