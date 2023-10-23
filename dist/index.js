(() => {
  // qr-reader.js
  var {
    HTMLElement,
    BarcodeDetector
  } = window;
  var QRReader = class _QRReader extends HTMLElement {
    #barcodeDetector = new BarcodeDetector({ formats: ["qr_code"] });
    #timer = 0;
    video = null;
    canvas = null;
    constructor() {
      super();
      this._defineProperty = this._defineProperty.bind(this);
      this.detectCode = this.detectCode.bind(this);
      this.attachShadow({ mode: "open" });
      Object.keys(_QRReader.defaultAttributes).map(this._defineProperty);
    }
    static get defaultAttributes() {
      return {
        scanInterval: 100,
        debounceTime: 2e3
      };
    }
    static get observedAttributes() {
      return Object.keys(_QRReader.defaultAttributes);
    }
    // LifeCycle Callbacks
    //
    connectedCallback() {
      this.initialize();
    }
    attributeChangedCallback(attributeName, oldValue, newValue) {
      const fn = this[attributeName + "Changed"];
      if (fn && typeof fn === "function") {
        fn.call(this, oldValue, newValue);
      }
    }
    // Methods
    //
    _defineProperty(attributeName) {
      Object.defineProperty(this, attributeName, {
        get: () => {
          const value = this.getAttribute(attributeName);
          return value === null ? _QRReader.defaultAttributes[attributeName] : value;
        },
        set: (value) => {
          this.setAttribute(attributeName, value);
        }
      });
    }
    async initialize() {
      const div = document.createElement("div");
      div.style = "position: relative;";
      this.canvas = document.createElement("canvas");
      this.canvas.style = "position: absolute; z-index: 1; width: 100%; height: 100%;";
      this.video = document.createElement("video");
      this.video.style = "width: 100%; height: 100%;";
      this.video.setAttribute("part", "video");
      this.video.autoplay = true;
      div.appendChild(this.canvas);
      div.appendChild(this.video);
      this.shadowRoot.appendChild(div);
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        this.video.addEventListener("loadeddata", (event) => {
          setInterval(this.detectCode, this.scanInterval);
        });
        this.video.srcObject = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false
        });
      }
    }
    async detectCode() {
      try {
        const codes = await this.#barcodeDetector.detect(this.video);
        if (codes.length === 0) {
          return this.paintFrame();
        }
        for (const code of codes) {
          this.paintFrame(code);
          if (Date.now() - this.#timer > this.debounceTime) {
            this.dispatchEvent(
              new CustomEvent("read", {
                bubbles: true,
                detail: code.rawValue
              })
            );
            this.#timer = Date.now();
          }
        }
      } catch (e) {
        console.error(e);
      }
    }
    paintFrame({ cornerPoints } = {}) {
    }
  };

  // index.js
  if (!customElements.get("qr-reader")) {
    customElements.define("qr-reader", QRReader);
  }
})();
