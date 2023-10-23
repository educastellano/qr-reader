[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/webcomponent-qr-reader)

# &lt;qr-code&gt;

Web Component for reading QR Codes.

## Demo

> [Check it live](http://educastellano.github.io/qr-reader/demo).

## Install

```sh
npm install webcomponent-qr-reader
```

## Usage

```js
import 'webcomponent-qr-reader'

const reader = document.querySelector('qr-reader')
reader.addEventListener('read', event => {
  console.log(event.detail)
})
```

```html
<qr-reader></qr-reader>
```

**Custom element name**

```js
import QRReader from 'webcomponent-qr-reader/qr-reader'

customElements.define('myapp-reader', QRReader)
```

```html
<myapp-reader></myapp-reader>
```

**Custom styles**

Use the `part` pseudo-element to style shadow DOM elements:

```css
qr-code::part(video) {}
```

## Options

Attribute       | Options                   | Default             | Description
---             | ---                       | ---                 | ---
`scanInterval`  | *int*.                    | `100`               | Scan interval time in ms.
`debounceTime`  | *int*                     | `2000`              | Time to ignore subsequent reads in ms.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Changelog
* v1.0.0 October 23, 2023
	* Complete re-write
* v0.0.3 September 18, 2013
	* jsqrcode it's not called from the component. It needs now to be added as a dependency.
* v0.0.2 September 18, 2013
	* First working version of the component.
* v0.0.1 September 16, 2013
	* Started project using [boilerplate-element](https://github.com/customelements/boilerplate-element)

## License

[MIT License](http://opensource.org/licenses/MIT)
