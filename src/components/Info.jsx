import {useState} from 'react'
import {S, wa} from '../lib'

const STEPS = [
  ['Tell us what you love', 'Browse and message us on WhatsApp for pricing and timelines.'],
  ['Pick colours & size', 'Most pieces are made to order, so you choose what suits you.'],
  ['Made just for you', 'Hand-crocheted or hand-knit, one stitch at a time, with real care.'],
  ['Delivered across India', 'We confirm shipping to your pin code and send it to your door.']]
const WHY = [
  ['✿', 'Made with care', 'Every piece is individually hand-crocheted or hand-knit. No mass production.'],
  ['✦', 'Made to order', 'Pieces are crafted fresh once you enquire, so colours and sizes can be customised.'],
  ['♥', 'Real human replies', 'Message us on WhatsApp for quick answers, quotes and order updates.']]

export const Collections = ({products = [], setFilter}) => {
  const groups = new Map()
  products.forEach(x => {
    const c = (x.category || '').trim(); if (!c) return
    const k = c.toLowerCase(), g = groups.get(k) || {name: c, n: 0, img: x.image}
    g.n++; groups.set(k, g)
  })
  return <section id="collections">
    <div className="head rv"><span className="eyebrow">Our collections</span><h2>Timeless pieces for every season</h2></div>
    <div className="rail rv">
      {[...groups.values()].map(g => <a key={g.name} href="#catalog" onClick={() => setFilter(g.name)}>
        {g.img && <img src={g.img} alt=""/>}<h3>{g.name}</h3><p>{g.n} handmade {g.n === 1 ? 'piece' : 'pieces'}</p></a>)}
      <a href="#contact" className="dec"><h3>Something custom</h3><p>Tell us your idea, colours & occasion</p></a>
    </div>
  </section>
}

export const Steps = () => <section id="how">
  <div className="head rv"><span className="eyebrow">The art of handmade</span><h2>From your idea to your doorstep</h2></div>
  <div className="steps rv">{STEPS.map(([t, d], i) => <div className="step" key={t}><b>{i + 1}</b><div><h3>{t}</h3><p>{d}</p></div></div>)}</div>
</section>

export const Why = () => <section style={{paddingTop: 0}}>
  <div className="head rv"><span className="eyebrow">Why Him Craft Studio</span><h2>Made slowly, made to last</h2></div>
  <div className="why rv">{WHY.map(([i, t, d]) => <div key={t}><i>{i}</i><h3>{t}</h3><p>{d}</p></div>)}</div>
</section>

export const Faq = () => <section id="faq" style={{paddingTop: 0}}>
  <div className="head rv"><span className="eyebrow">Good to know</span><h2>Questions, answered</h2></div>
  <div className="rv">{S.faqs.map((f, i) => <details key={f.q} open={i === 0}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div>
</section>

export function Contact() {
  const [f, setF] = useState({n: '', p: 'Something custom', m: ''})
  const set = k => e => setF({...f, [k]: e.target.value})
  return <section id="contact" style={{paddingTop: 0}}><div className="contact rv">
    <div><span className="eyebrow" style={{color: '#e3b867'}}>Get in touch</span>
      <h2>Have a question, or want something custom?</h2><div className="ph">{S.phone_display}</div>
      <p>Send an enquiry and we’ll reply with pricing, availability and delivery timelines.</p></div>
    <form onSubmit={e => e.preventDefault()}>
      <label>Your name<input value={f.n} onChange={set('n')} autoComplete="name"/></label>
      <label>Interested in<select value={f.p} onChange={set('p')}>{['Something custom', 'Flower bouquet', 'Keychain', 'Bag', 'Winter wear', 'Home décor'].map(o => <option key={o}>{o}</option>)}</select></label>
      <label>Message<textarea rows={3} value={f.m} onChange={set('m')} placeholder="Colours, size, occasion…"/></label>
      <button className="btn wa" onClick={() => window.open(wa(`Hi! I’m ${f.n || 'a customer'}. Interested in: ${f.p}. ${f.m}`), '_blank')}>Send on WhatsApp</button>
    </form></div></section>
}
