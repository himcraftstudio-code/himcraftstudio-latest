import {useEffect, useRef, useState} from 'react'
import {COLOURS, wa} from '../lib'

const key = s => (s || '').trim().toLowerCase()
const photos = x => [...new Set([x.image, ...(x.images || [])].filter(Boolean))]
const fallback = e => { e.currentTarget.onerror = null; e.currentTarget.src = '/images/logo.png' }

export default function Catalog({products, filter, setFilter, saved, toggle}) {
  const [cur, setCur] = useState(null)
  const [col, setCol] = useState('Custom')
  const [note, setNote] = useState('')
  const [gi, setGi] = useState(0)
  const tr = useRef(null)
  const p = cur || {}
  const pics = cur ? photos(cur) : []
  const go = i => tr.current && tr.current.scrollTo({left: i * tr.current.clientWidth, behavior: 'smooth'})
  useEffect(() => { setGi(0); if (tr.current) tr.current.scrollLeft = 0 }, [cur])
  const cats = ['All', ...new Map(products.filter(x => x.category).map(x => [key(x.category), x.category.trim()])).values()]
  const list = products.filter(x => filter === 'All' || key(x.category) === key(filter))
  useEffect(() => {
    document.body.style.overflow = cur ? 'hidden' : ''
    const k = e => e.key === 'Escape' && setCur(null)
    addEventListener('keydown', k)
    return () => removeEventListener('keydown', k)
  }, [cur])
  return <section id="catalog">
    <div className="head rv"><span className="eyebrow">The catalog</span><h2>Handmade pieces to love</h2></div>
    <div className="bar">{cats.map(c => <button key={c} className={'chip' + (key(c) === key(filter) ? ' on' : '')} onClick={() => setFilter(c)}>{c}</button>)}</div>
    <div className="grid">
      {list.map(x => {
        const name = x.name, on = saved.includes(name)
        return <div className="card" key={x.id || name} tabIndex={0} role="button"
          onClick={() => { setCur(x); setNote('') }} onKeyDown={e => e.key === 'Enter' && setCur(x)}>
          <img src={x.image || '/images/logo.png'} alt={name} loading="lazy" onError={fallback}/>
          {photos(x).length > 1 && <span className="more">▣ {photos(x).length}</span>}
          <button className={'hr' + (on ? ' on' : '')} aria-label="Save" onClick={e => { e.stopPropagation(); toggle(name) }}>{on ? '♥' : '♡'}</button>
          <div className="b"><small>{x.category || 'Handmade'}</small><h3>{name}</h3>{x.price && <div className="p">{x.price}</div>}</div>
        </div>
      })}
    </div>
    {!list.length && <div className="empty"><h3>{products.length ? 'Nothing here yet' : 'Our collection is being updated'}</h3>
      <p>Tell us what you have in mind and we’ll make it for you.</p>
      <a className="btn wa" href={wa('Hi Him Craft Studio, I have an enquiry.')} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></div>}
    <div className={'ov' + (cur ? ' open' : '')} onClick={e => e.target === e.currentTarget && setCur(null)}>
      <div className="sheet" style={{position: 'relative'}}>
        <button className="ib x" aria-label="Close" onClick={() => setCur(null)}>✕</button>
        <div className="gal">
          <div className="trk" ref={tr} onScroll={e => setGi(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))}>
            {(pics.length ? pics : ['/images/logo.png']).map(s => <img key={s} src={s} alt={p.name || ''} onError={fallback}/>)}
          </div>
          {pics.length > 1 && <>
            <button className="ib nv l" aria-label="Previous photo" onClick={() => go(Math.max(gi - 1, 0))}>‹</button>
            <button className="ib nv r" aria-label="Next photo" onClick={() => go(Math.min(gi + 1, pics.length - 1))}>›</button>
            <div className="dots">{pics.map((s, i) => <button key={s} className={i === gi ? 'on' : ''} aria-label={'Photo ' + (i + 1)} onClick={() => go(i)}/>)}</div>
          </>}
        </div>
        <div className="sc">
          <span className="eyebrow">{p.category}</span><h3>{p.name}</h3>{p.price && <div className="p">{p.price}</div>}
          {p.description && <p className="d">{p.description}</p>}
          <div style={{marginTop: 16, fontWeight: 600, fontSize: 14}}>Pick a colour</div>
          <div className="sw">{COLOURS.map(([n, c]) => <button key={n} className={n === col ? 'on' : ''} onClick={() => setCol(n)}><i style={{background: c}}/>{n}</button>)}</div>
          <label>Size or notes (optional)<input value={note} onChange={e => setNote(e.target.value)} placeholder="e.g. size M, gift wrap"/></label>
          <a className="btn wa" style={{width: '100%', marginTop: 14}} target="_blank" rel="noopener noreferrer"
            href={wa(`Hi! I’d like to order: ${p.name}. Colour: ${col}. ${note}`)}>Order on WhatsApp</a>
        </div>
      </div>
    </div>
  </section>
}
