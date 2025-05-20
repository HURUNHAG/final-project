function ContactForm() {
  return (
    <form>
      <input type="text" placeholder="Ad Soyad" required />
      <input type="email" placeholder="Mail" required />
      <textarea placeholder="İçerik" required></textarea>
      <button type="submit">Gönder</button>
    </form>
  );
}

export default ContactForm;
