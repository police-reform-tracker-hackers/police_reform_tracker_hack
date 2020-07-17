import React from 'react';
import './SectionContainer.css'


export default class SectionContainer extends React.Component {
    render() {
        let style = {};
        if (this.props.backgroundColor) {
            style['background-color'] = this.props.backgroundColor;
        }
        return (
            <section id={this.props.id}>
                <div className="section" style={style}>
                    <div className="component">
                        {this.props.component}
                    </div>
                </div>
            </section>
        )
    }
}
