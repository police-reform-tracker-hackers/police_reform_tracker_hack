import React from 'react';
import ReactMarkdown from 'react-markdown';
import './MarkdownText.css';
import {Typography} from '@material-ui/core';


export default class MarkdownText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {content: null};
    }
    componentDidMount() {
        fetch(this.props.file)
        .then(resp => resp.text())
        .then(x => {
            this.setState({content: x})
        })
    }
    render() {
        if (this.state.content) {
            const contentBlock = (
                <div className="content">
                    <ReactMarkdown source={this.state.content}/>
                </div>
            );
            if (this.props.title) {
                return (
                    <div className="section-title">
                        <Typography variant="h3">{this.props.title}</Typography>
                        {contentBlock}
                    </div>
                );
            } else {
                return contentBlock;
            }
        } else {
            return (
                <div>Loading...</div>
            )
        }
    }
}
