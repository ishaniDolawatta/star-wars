<h1>Welcome to StarWars 👋</h1>
<p>
  <a href="https://swapi.dev/documentation" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
</p>

> Star wars combined search and view application using SWAPI.

### ✨ [Demo](https://google.com)

## Install

```sh
npm install
```

## Usage

```sh
npm start
```

## Run tests

```sh
npm test
```
## Technologies

* Main tech : react, react-query, typescript,
* Styling : styled-components, scss
* Testing : Jest, Cypress.io
* Internationalisation : i18next
* Icons : react-icons

## Discussion for BE support

* Dev Search endpoints return all properties for each record. I think that is not necessary. It would be nice if the FE can specify which properties to include in the response, perhaps using a query parameter called "include".

* This API uses cursor pagination. There is a trade-off with cursor pagination, as we cannot skip pages.

* Here, the next cursor is a URL. I suggest it would be better to use a keyword or ID instead of the complete URL as the next cursor.

* There is some data that is unavailable but named as null or unknown. It might be better to use an optional property mechanism or provide more understandable names for those values.

* When requesting data by ID, some properties include arrays that reference other Star Wars properties as list of URLs. The front-end cannot display these URLs as-is in the view. Therefore, had to fetch data for each URL to obtain a name tag for the UI. This is expensive for the user. If the back-end can return UID and name or title tags directly instead of sending URLs, the front-end can decide whether to fetch new data or process existing data.

## Author

👤 **Ishani Dolawatta**

* Github: [@ishaniDolawatta](https://github.com/ishaniDolawatta)
* LinkedIn: [@ishani-dolawatta](https://linkedin.com/in/ishani-dolawatta)

## Show your support

Give a ⭐️ if this project helped you!