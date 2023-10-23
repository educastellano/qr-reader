import QRReader from './qr-reader'

if (!customElements.get('qr-reader')) {
  customElements.define('qr-reader', QRReader)
}
