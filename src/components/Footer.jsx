import {S, wa, INSTAGRAM_URL} from '../lib'
export default function Footer() {
  return <>
    <footer><div className="w fg">
      <div><a className="logo" href="#top"><img src="/images/logo.png" alt="Him Craft Studio"/></a>
        <p>Handmade woollen creations, crafted by hand and inspired by the Himalayas.</p></div>
      <div><b>Explore</b><a href="#catalog">Catalog</a><a href="#how">How it works</a><a href="#faq">FAQ</a></div>
      <div><b>Reach us</b><a href={`tel:+${S.phone}`} style={{color: 'var(--ink)', fontWeight: 600}}>{S.phone_display}</a><a href={wa('Hi!')} style={{color: 'var(--wa)'}}>Chat on WhatsApp</a><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram ↗</a></div>
      <div style={{gridColumn: 'span 2', fontSize: 13}}>© {new Date().getFullYear()} Him Craft Studio. All pieces handmade to order.</div>
    </div></footer>
    <nav className="bn">
      <a href="#top"><span>⌂</span>Home</a><a href="#catalog"><span>❀</span>Shop</a>
      <a className="c" href={wa('Hi!')} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><path d="M3 21l1.6-4.8A8.5 8.5 0 1 1 8 19.5z"/></svg></a>
      <a href="#how"><span>✦</span>How</a><a href="#contact"><span>✉</span>Enquire</a>
    </nav>
  </>
}
