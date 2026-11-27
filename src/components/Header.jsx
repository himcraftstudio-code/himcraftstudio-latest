import {useState} from 'react'
const L = [['Catalog', '#catalog'], ['Collections', '#collections'], ['How it works', '#how'], ['FAQ', '#faq']]
export default function Header({saved, onSend}) {
  const [open, setOpen] = useState(false)
  return <>
    <header><div className="w nav">
      <a className="logo" href="#top" aria-label="Him Craft Studio home"><img src="/images/logo.png" alt="Him Craft Studio"/></a>
      <nav>{L.map(([t, h]) => <a key={h} href={h}>{t}</a>)}</nav>
      {saved > 0 && <button className="ib on" id="sv" onClick={onSend} aria-label="Send saved items on WhatsApp">♥ {saved}</button>}
      <a className="btn wa" style={{minHeight: 44, padding: '0 20px', fontSize: 15}} href="#contact">Enquire</a>
      <button className="ib" id="mb" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
    </div></header>
    <div className={'menu' + (open ? ' open' : '')} onClick={() => setOpen(false)}>
      {[...L, ['Contact', '#contact']].map(([t, h]) => <a key={h} href={h}>{t}</a>)}
    </div>
  </>
}
