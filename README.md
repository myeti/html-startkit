# HTML Startkit

Hey, welcome to your new `HTML` project ! Please add a description here ;)


## Install

For the development process, you'll need:
- NodeJS & NPM -> download here: [https://nodejs.org/en/download](https://nodejs.org/en/download)
- Ruby (already installed on MacOS) -> download here: [https://www.ruby-lang.org/fr/documentation/installation/](https://www.ruby-lang.org/fr/documentation/installation/)
- SASS -> make sure Ruby is installed then run the command `gem install sass`

Run `npm install` to fetch all dependencies, the project is now ready.


## Development

To start working, run `npm start`, this will:
- process files in `src/` to `dist/`
- watch changes in your code to automatically process them
- open a page in your browser and reflect any changes

Look into `gruntfile.js` to understand and/or customize the process.

### Templates

```
src/
  layouts/
    default.html
  pages/
    index.html
  partials/
    header.html
    footer.html
  data.yml
```

Your pages are located in `src/pages/` and use [Handlebars](http://handlebarsjs.com) templating syntaxe.
- ex. `src/pages/index.html` will be processed to `dist/index.html`

You can write your components into `src/partials/` and include them in your pages using `{{> partial}}`.
- ex. `{{> header}}` for `src/partials/header.html`

All pages inherit from a layout `src/layouts/default.html` in which the page's content is inserted in place of `{{> body}}`.

It's possible to define custom vars in `src/data.yml` to inject in all pages.
- ex. `foo: bar` can be displayed with `{{ foo }}`

### SASS

```
src/
  assets/
    scss/
      common/
        _layout.scss
      partials/
        _header.scss
        _footer.scss
      vendors/
        _normalize.scss
      _fonts.scss
      _variables.scss
      _vendors.scss
      main.scss
```

The `SCSS` entry point file is `src/assets/scss/main.scss` which is compiled into `dist/assets/css/main.css`.
- Normalize and Cornflex are loaded by default, you can change it in `src/assets/scss/_vendors.scss`.

### JS

```
src/
  assets/
    js/
      main.js
```

The `JS` files in `src/assets/js/` are concatened into `dist/assets/js/main.js` (update `gruntfile.js:concat` to add another file in list).


## Production

When the time comes to go into production, run `npm run build` to minify `CSS` and `JS` files and update assets path in templates.
