import { useEffect, useState } from 'react';
import { WHATSAPP_NUMBER, INSTAGRAM_URL } from './config';

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data/products.json')
      .then((response) => {
        if (!response.ok) throw new Error('Could not load products');
        return response.json();
      })
      .then((data) => setProducts(data.products || []))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="announcement">Thoughtfully handmade • Made with love</div>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Him Craft Studio home">
          <img src="/images/logo.png" alt="Him Craft Studio logo" />
          <span>HIM CRAFT STUDIO<small>HANDMADE WITH LOVE</small></span>
        </a>
        <nav>
          <a href="#home">Home</a><a href="#collection">Collection</a>
          <a href="#story">Our Story</a><a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href={whatsappLink('Hi Him Craft Studio, I would like to know more about your products.')}>Enquire <span>↗</span></a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">THE ART OF HANDMADE</p>
            <h1>Made with love.<br/><em>Crafted by hand.</em></h1>
            <p className="hero-text">Discover thoughtful wool creations, made slowly, carefully and with a little bit of heart.</p>
            <a className="primary-btn" href="#collection">Explore the collection <span>→</span></a>
            <p className="hero-note">Every piece has its own little story.</p>
          </div>
          <div className="hero-art">
            <div className="hero-image">
              <img src="/images/hero.jpg" alt="Him Craft Studio handmade wool collection" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              <div className="image-placeholder"><span>HIM CRAFT STUDIO</span><small>Add your favourite handmade product photo as <b>hero.jpg</b></small></div>
            </div>
            <div className="round-stamp">MADE<br/>BY HAND<br/>WITH LOVE</div>
          </div>
        </section>

        <section className="intro-strip">
          <span>HANDMADE</span><i>✳</i><span>THOUGHTFUL</span><i>✳</i><span>ONE OF A KIND</span><i>✳</i><span>MADE WITH LOVE</span>
        </section>

        <section className="collection section" id="collection">
          <div className="section-heading">
            <div><p className="eyebrow">A LITTLE SOMETHING SPECIAL</p><h2>Our handmade collection</h2></div>
            <p>Beautifully crafted wool pieces<br/>for everyday moments and thoughtful gifting.</p>
          </div>
          <div className="product-grid">
            {products.length ? products.map((product) => (
              <article className="product-card" key={product.id || product.name}>
                <div className="product-image">
                  <img src={product.image || '/images/product-placeholder.jpg'} alt={product.name} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                  <span className="product-tag">{product.category || 'HANDMADE'}</span>
                </div>
                <div className="product-info">
                  <div><h3>{product.name}</h3><p>{product.description}</p></div>
                  {product.price && <strong>{product.price}</strong>}
                </div>
                <a className="text-link" href={whatsappLink(`Hi, I am interested in ${product.name}. Please share more details.`)}>Enquire about this product <span>↗</span></a>
              </article>
            )) : <div className="empty-products"><span>✳</span><h3>Your collection starts here</h3><p>Add your products in the CMS dashboard once we configure it.</p></div>}
          </div>
        </section>

        <section className="story section" id="story">
          <div className="story-mark">HCS</div>
          <div><p className="eyebrow">A STORY IN EVERY STITCH</p><h2>Made by hand,<br/><em>made from the heart.</em></h2>
            <p>At Him Craft Studio, we celebrate the beauty of handmade work. Each creation is made with care, patience and attention to detail.</p>
            <a className="text-link" href="#contact">Get to know us <span>→</span></a>
          </div>
        </section>

        <section className="contact section" id="contact">
          <p className="eyebrow">LET'S CREATE SOMETHING LOVELY</p>
          <h2>Have something in mind?</h2>
          <p>For product details, availability or a custom request, we'd love to hear from you.</p>
          <a className="primary-btn" href={whatsappLink('Hi Him Craft Studio, I have an enquiry.')}>Chat with us on WhatsApp <span>↗</span></a>
        </section>
      </main>

      <footer><a className="footer-brand" href="#home">HIM CRAFT STUDIO</a><span>Handmade with love, always.</span><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram ↗</a></footer>
      <a className="whatsapp-float" href={whatsappLink('Hi Him Craft Studio!')} aria-label="Chat on WhatsApp">☏</a>
    </>
  );
}

export default App;
