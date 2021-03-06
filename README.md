## `accordion` feature

Accordion feature using [handorgel](https://github.com/oncode/handorgel).

![example](docs/example.png)

### Global dependencies

* [`gi-js-base`](https://github.com/Goldinteractive/js-base)

### Dependencies

* [`handorgel`](https://github.com/oncode/handorgel)

### Installation

Install this package with sackmesser:

    make feature-install-accordion

or when sackmesser is not used:

    yarn install gi-feature-accordion

After the installation has completed, you can import the module files:

#### JS:

```javascript
// import feature class
import Accordion from 'gi-feature-accordion'
// ...
base.features.add('accordion', Accordion)
```

Make sure you provide the global dependencies in your webpack config file:

```javascript
new webpack.ProvidePlugin({
  base: 'gi-js-base'
})
```

#### Styles:

```sass
@import 'gi-feature-accordion/src/style';
```

### Browser compatibility

* Newest two browser versions of Chrome, Firefox, Safari and Edge
* IE 10 and above

### Development

* `make build` or `npm run build` - Build production version of the feature.
* `make dev` or `npm run dev` - Build demo of the feature, run a watcher and start browser-sync.
* `make test` or `npm run test` - Test the feature.
* `make jsdoc` - Update documentation inside the `docs` folder.
* `make publish` - Publish npm package.
