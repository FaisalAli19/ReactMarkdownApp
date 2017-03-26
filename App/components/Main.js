const React = require('react');

const Header = require('Header');
const Markdown = require('Markdown');

var Main = React.createClass({
    render: function() {
        return (
            <div>
                <Header />
                <Markdown />
            </div>
        );
    }
});

module.exports = Main;
