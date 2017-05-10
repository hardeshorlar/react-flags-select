# react-flags-select

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

A customizable svg flags select components for React Js.

## Demo and Example
Live demo: [ekwonye-richard.github.io/react-flags-select/](https://ekwonye-richard.github.io/react-flags-select/)

## Installation
The package can be installed via NPM:
```
npm install react-flags-select --save
```
react-flags-select can be imported as follows

```javascript
import ReactFlagsSelect from 'react-flags-select';

//import css module
import ReactFlagsSelect from 'react-flags-select/css/react-flags-select.css';

//OR import sass module
import ReactFlagsSelect from 'react-flags-select/scss/react-flags-select.scss';

```

## Usage

```javascript
    <ReactFlagsSelect />
```

### Countries

You can use an array of countries rather than the full list of countries.

```javascript
    <ReactFlagsSelect 
    countries={["US", "GB", "FR", "DE", "IT", "NG"]} />
```

## License
MIT Licensed. Copyright (c) Richard Ekwonye 2017.

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/react-flags-select.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-flags-select

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
