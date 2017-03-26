const React = require('react');
const ReactDOM = require('react-dom');

const Main = require('Main');

//foundation
require("style-loader!css-loader!foundation-sites/dist/css/foundation.min.css")
$(document).foundation();

//css
require("style-loader!css-loader!sass-loader!./styles/app.scss");

const App = document.getElementById("app");

ReactDOM.render(
    <Main />,
    App
);
