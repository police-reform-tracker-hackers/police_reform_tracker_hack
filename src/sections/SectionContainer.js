import React from 'react';
import './SectionContainer.css';
import {Typography} from '@material-ui/core';

export default class SectionContainer extends React.Component {
    render() {
        let style = {};
        if (this.props.backgroundColor) {
            style['background-color'] = this.props.backgroundColor;
        }
        let contents;
        if (this.props.sectionTitle) {
            contents = (
                <div>
                <Typography variant="h3" className="section-title">
                    {this.props.sectionTitle}
                </Typography>
                {this.props.component}
                </div>
            )
        } else {
            contents = this.props.component

        }
        return (
            <section id={this.props.id}>
                <div className="section" style={style}>
                    <div className="component">
                        {contents}
                    </div>
                </div>
            </section>
        )
    }
}
