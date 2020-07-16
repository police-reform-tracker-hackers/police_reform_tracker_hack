import React from 'react';
import './SectionContainer.css'


export default class SectionContainer extends React.Component {
    render() {
        return (
            <section id={this.props.id}>
                <div class="section">
                    <div class="component">
                        {this.props.component}
                    </div>
                </div>
            </section>
        )
    }
}
