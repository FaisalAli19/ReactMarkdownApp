const React = require('react');
var marked = require('marked');

var Preview = React.createClass({
    render: function() {
        return (
            <div className="preview-container">
                <h4 className="text-center">Preview</h4>
                <div className="preview" dangerouslySetInnerHTML={{__html: marked(this.props.onPreview)}}>

                </div>
            </div>
        );
    }
});

module.exports = Preview;
