import { useState } from "react";
import "./Contact.scss";
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    question: "",
    topic: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleWhatsappSend = () => {
    const { name, phone, email, topic, question } = formData;
  
    const message = `*טופס צור קשר*\n\n` +
      `*שם:* ${name}\n` +
      `*טלפון:* ${phone}\n` +
      `*אימייל:* ${email}\n` +
      `*נושא:* ${topic}\n` +
      `*שאלה:* ${question}`;
  
    const encodedMessage = encodeURIComponent(message);
  
    const phoneNumber = "972549001774";
  
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
    window.open(whatsappURL, "_blank");
  }

  const handleEmailJsSend = async () => {
    const { name,email, topic } = formData;
  
    try {
      await emailjs.send(
        'service_n010aga',
        'template_cp4y52b',
        {name, title:topic, email},
        {
          publicKey: 'XSgKtJS2N8WDjUkWO',
        },
      );
      console.log('SUCCESS!');
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        console.log('EMAILJS FAILED...', err);
        return;
      }
    
      console.log('ERROR', err);
    }
  
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleEmailJsSend();
    handleWhatsappSend();
  };


  return (
    <div className="contact-container" id="contact">
      <h2 className="contact-title">צור קשר</h2>
      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="*שם מלא"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="*טלפון"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="*אימייל"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <select
            className="dropdown"
            name="topic"
            id="topic"
            value={formData.topic}
            onChange={handleChange}
            required
          >
            <option value="" disabled hidden>
              בחר נושא
            </option>
            <option value="בתים משותפים/מקרקעין">בתים משותפים/מקרקעין</option>
            <option value="נזיקין">נזיקין</option>
            <option value="גישור">גישור</option>
            <option value="אחר">אחר</option>
          </select>
          <textarea
            name="question"
            placeholder="שאלה"
            rows={4}
            value={formData.question}
            onChange={handleChange}
          ></textarea>
          <button className="btn-submit" type="submit">שליחה</button>
        </form>

        <div className="contact-info">
          <h3>פרטי יצירת קשר</h3>
          <p>
            <strong>כתובת:</strong> רחוב הדוגמה 123, תל אביב
          </p>
          <p>
            <strong>שעות פעילות:</strong> א'-ה' 09:00–18:00
          </p>
          <div className="map-container">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=32.066157,34.777819&z=15&output=embed"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
