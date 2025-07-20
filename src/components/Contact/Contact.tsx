import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h2 className="contact-title">צור קשר</h2>
      <div className="contact-content">
        {/* צד שמאל – טופס */}
        <form className="contact-form">
          <input type="text" placeholder="שם מלא" required />
          <input type="tel" placeholder="טלפון" required />
          <input type="email" placeholder="אימייל" required />
          <input type="text" placeholder="נושא" />
          <textarea placeholder="טקסט חופשי" rows={5}></textarea>
          <button type="submit">שליחה</button>
        </form>

        {/* צד ימין – מידע ומפה */}
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
