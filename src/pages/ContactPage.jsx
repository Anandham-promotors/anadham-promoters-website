function ContactPage() {
  return (
    <main className="section section-alt">
      <div className="container contact-wrapper">
        <div>
          <p className="section-kicker">Get in Touch</p>
          <h1>Talk to Our Land Expert</h1>
          <p>Share your details and our property expert will contact you with layout and pricing.</p>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
          <input type="tel" placeholder="Phone" />
          <select defaultValue="">
            <option value="" disabled>
              Select interest
            </option>
            <option>Residential Plot</option>
            <option>Commercial Plot</option>
            <option>Gated Community</option>
          </select>
          <button type="button">Submit</button>
        </form>
      </div>
    </main>
  )
}

export default ContactPage
