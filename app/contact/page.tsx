export default function ContactPage() {
  return (
    <main>
      <h1>Contact</h1>
      <form>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Message
          <textarea name="message" />
        </label>
        <button type="submit" disabled>Send</button>
      </form>
    </main>
  );
}
