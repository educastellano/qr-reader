# &lt;qr-reader&gt;

Webcomponent wrapper to read QR codes, using [jsqrcode](https://github.com/LazarSoft/jsqrcode) lib.

> Maintained by [Eduard C.](https://github.com/educastellano).

## Demo

> [Check it live](http://educastellano.github.io/qr-reader). (works at least on Chrome Canary 32.0.1657.2)

## Usage

1. Import Web Components' polyfill:

	```html
	<script src="//cdnjs.cloudflare.com/ajax/libs/polymer/0.0.20130711/polymer.min.js"></script>
	```

2. Import Custom Element:

	```html
	<link rel="import" href="src/qr-reader.html">
	```

3. Import [jsqrcode](https://github.com/LazarSoft/jsqrcode) lib:

	```html
	<script src="src/jsqrcode.js"></script>
	```

4. Start using it!

	```html
	<qr-reader output></qr-reader>
	```

## Options

Attribute     | Options                | Default             | Description
---           | ---                    | ---                 | ---
`output`      | *string*               | `undefined`         | Default output if set, or CSS selectors of an external tag.
`outputAttr`  | *string*          	   | `textContent`       | Attribute of the external tag where the value will be set.
`onRead`      | *string*          	   | `undefined`         | String containing a function name to be executed after read. It can contain namespaces, i.e.: "App.ctrl.onRead".
`interval`    | *int*                  | `1000`              | Interval of time in each capture (in ms).


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

* v0.0.3 September 18, 2013
	* jsqrcode it's not called from the component. It needs now to be added as a dependency.
* v0.0.2 September 18, 2013
	* First working version of the component.
* v0.0.1 September 16, 2013
	* Started project using [boilerplate-element](https://github.com/customelements/boilerplate-element)

## License

[MIT License](http://opensource.org/licenses/MIT)