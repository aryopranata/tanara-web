export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <h1>Tanara</h1>
        <p>Artisan fragrances crafted from nature.</p>
      </section>
      <section className="scents">
        <h2>Signature Scents</h2>
        <ul>
          <li>Amber Dusk</li>
          <li>Cedar Bloom</li>
          <li>Ocean Whisper</li>
        </ul>
      </section>
      <section className="story">
        <h2>Our Story</h2>
        <p>Founded in the heart of the mountains, Tanara blends traditional methods with modern sensibilities.</p>
      </section>
      <section className="sustainability">
        <h2>Sustainability</h2>
        <p>We source renewable ingredients and package with recycled materials.</p>
      </section>
      <section className="newsletter">
        <h2>Join our newsletter</h2>
        <form>
          <input type="email" placeholder="Email address" />
          <button type="submit" disabled>Subscribe</button>
        </form>
      </section>
    </main>
  );
}
