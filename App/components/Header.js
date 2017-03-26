const React = require('react');

var Header = React.createClass({
    render: function() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <h3>React Markdown</h3>
                </div>
                <div className="top-bar-right">
                    <p>Build with <i className="fa fa-heart"></i> by Faisal Ali.</p>
                </div>
            </div>
        );
    }
});

module.exports = Header;
