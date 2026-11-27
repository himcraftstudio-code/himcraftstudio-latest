import { WHATSAPP_NUMBER, PHONE_DISPLAY, INSTAGRAM_URL } from './config'

export { INSTAGRAM_URL }
export const S = {
  phone: WHATSAPP_NUMBER,
  phone_display: PHONE_DISPLAY,
  faqs: [
    { q: 'Are all pieces really handmade?', a: 'Yes. Every piece is individually hand-crocheted or hand-knit at Him Craft Studio.' },
    { q: 'Can I choose my own colours and sizes?', a: 'Yes. Most pieces are made to order, so colours and sizes can be customised.' },
    { q: 'How do I place an order?', a: 'Tap any piece, pick a colour and send it to us on WhatsApp. We’ll confirm price and timelines.' },
    { q: 'Do you deliver across India?', a: 'Yes. We confirm shipping to your pin code on WhatsApp.' },
    { q: 'Can I ask for something custom?', a: 'Absolutely. Tell us the colours, size and occasion and we’ll take it from there.' },
  ],
}
export const COLOURS = [['Pink', '#f4a6b7'], ['Red', '#d33a3a'], ['Blue', '#6aa5e0'], ['Yellow', '#f2c230'], ['Black', '#222'], ['Custom', 'conic-gradient(#f4a6b7,#f2c230,#6aa5e0,#d33a3a,#f4a6b7)']]
export const wa = t => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t)}`
