
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useToast } from '../hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile:'',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_6jqonbv', // Replace with your EmailJS service ID
        'template_qfjeyht', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          from_mobile: formData.mobile,
          message: formData.message,
          to_email: 'aditya.kr.agrawal1108@gmail.com',
        },
        'gz3CR59Tu2_OGdPdU' // Replace with your EmailJS public key
      );

      if (result.status === 200) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '',mobile:'', message: '' });
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-dark-200 border border-gray-700 focus:border-purple-100 focus:ring-1 focus:ring-purple-100 outline-none transition-colors"
          placeholder="Your name"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-dark-200 border border-gray-700 focus:border-purple-100 focus:ring-1 focus:ring-purple-100 outline-none transition-colors"
          placeholder="your.email@example.com"
        />
      </div>
          <div>
      <label htmlFor="mobile" className="block text-sm font-medium mb-2">
        Mobile
      </label>
      <input
        id="mobile"
        name="mobile"
        type="tel"
        required
        value={formData.mobile}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg bg-dark-200 border border-gray-700 focus:border-purple-100 focus:ring-1 focus:ring-purple-100 outline-none transition-colors"
        placeholder="Your mobile number"
      />
    </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-dark-200 border border-gray-700 focus:border-purple-100 focus:ring-1 focus:ring-purple-100 outline-none transition-colors resize-none"
          placeholder="Your message..."
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="px-6 py-3 bg-gradient-to-br from-green-300 via-green-400 to-green-300 text-black font-medium rounded-lg 
                transition-all flex items-center shadow-lg shadow-green-200/20 animate-scale-in hover:scale-105"
                style={{ boxShadow: "0 0 15px #22ffbf44" }}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
