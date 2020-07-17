import React from 'react';
import './SectionContainer.css'


export default class SectionContainer extends React.Component {
    render() {
        return (
            <section id={this.props.id}>
                <div className="section">
                    <div className="component">
                        {this.props.component}
                    </div>
                </div>
            </section>
        )
    }
}
