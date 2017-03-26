const React = require('react');

const Preview = require('Preview');

var Markdown = React.createClass({
    getInitialState: function() {
        return {
            text: ""
        }
    },
    handlePreview: function(e) {
        var newText = e.target.value;
        console.log(newText);
        this.setState({
            text: newText
        })
    },
    render: function() {
        return (
            <div className="row main">
                <div className="medium-6 columns">
                    <h4 className="text-center">Markdown</h4>
                    <textarea name="markdown" cols="30" placeholder="Enter Markdown Here" onChange={this.handlePreview} value={this.state.text}></textarea>
                </div>
                <div className="medium-6 columns">
                    <Preview onPreview={this.state.text}/>
                </div>
            </div>
        );
    }
});

module.exports = Markdown;
