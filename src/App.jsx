import { useEffect, useState } from 'react'
import { wa } from './lib'
import Header from './components/Header'
import Hero from './components/Hero'
import Catalog from './components/Catalog'
import { Collections, Steps, Why, Faq, Contact } from './components/Info'
import Footer from './components/Footer'

export default function App() {
  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState('All')
  const [saved, setSaved] = useState([])
  const toggle = t => setSaved(s => (s.includes(t) ? s.filter(x => x !== t) : [...s, t]))

  useEffect(() => {
    fetch('/data/products.json', { cache: 'no-store' })
      .then(r => { if (!r.ok) throw new Error('Could not load products'); return r.json() })
      .then(d => setProducts(d.products || []))
      .catch(console.error)
  }, [])

  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }), { threshold: 0.12 })
    document.querySelectorAll('.rv').forEach(e => io.observe(e))
    return () => io.disconnect()
  }, [])

  return <>
    <Header saved={saved.length} onSend={() => window.open(wa('Hi! I’d like to enquire about: ' + saved.join(', ')), '_blank')} />
    <main>
      <Hero products={products} />
      <div className="w">
        <Catalog products={products} filter={filter} setFilter={setFilter} saved={saved} toggle={toggle} />
        <Collections products={products} setFilter={setFilter} />
        <Steps /><Why /><Faq /><Contact />
      </div>
    </main>
    <Footer />
  </>
}
