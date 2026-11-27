import {wa} from '../lib'
const words = ['Hand-crocheted', 'Hand-knit', 'Made to order', 'Custom colours', 'Made with patience']
export default function Hero({products = []}) {
  const cats = new Set(products.map(x => (x.category || '').trim().toLowerCase()).filter(Boolean)).size
  const row = [...words, ...words]
  return <>
    <div className="w hero">
      <div className="blob" style={{width: 300, height: 300, background: '#f4a6b7', top: -60, left: -90}}/>
      <div className="blob" style={{width: 260, height: 260, background: '#f2c230', bottom: 0, right: -80}}/>
      <div className="rv">
        <span className="chipk">Woollen &amp; crochet · entirely by hand</span>
        <h1>Every stitch, <em>made by hand,</em> made to last.</h1>
        <p>Cosy hand-knit winter wear and blooming crochet keepsakes, made one stitch at a time and made just for you.</p>
        <div className="cta">
          <a className="btn dark" href="#catalog">Browse the catalog</a>
          <a className="btn wa" href={wa('Hi Him Craft Studio!')} target="_blank" rel="noopener noreferrer">Order on WhatsApp</a>
        </div>
      </div>
      <div className="coll rv">
        <div className="a"><img src="/images/hand.jpg" alt="Crochet flower keychain in hand"/></div>
        <div><img src="/images/blue.jpg" alt="Blue crochet flowers in a pot"/></div>
        <div><img src="/images/bottle.jpg" alt="Crochet strawberry charm"/></div>
        <span className="fl f1"><b>100%</b>handmade</span><span className="fl f2">Made to order ✦</span>
      </div>
    </div>
    <div className="strip"><div><span>{row.map((w, i) => <span key={i} style={{animation: 'none'}}>{w}<i>✦</i></span>)}</span></div></div>
    <div className="w"><div className="trust rv">
      <div><b>{products.length || '–'}</b><span>Handmade pieces</span></div>
      <div><b>100%</b><span>Handmade, no mass production</span></div>
      <div><b>{cats || '–'}</b><span>Categories for every occasion</span></div>
    </div></div>
  </>
}
