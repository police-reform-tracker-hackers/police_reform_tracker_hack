import React from 'react';
import './SectionContainer.css';
import {Typography} from '@material-ui/core';
import styled from 'styled-components';
import Card from '../components/Card.js';


const StyledSectionContainer = styled.div`
  padding: 2em;
  padding-top: 0;
  padding-bottom: 4em;
  text-align: center;
  align-content: center;
`

const SectionContainer = ({ sectionTitle, component, id }) => {
  let contents;
  if (sectionTitle) {
    contents = (
      <div>
        <Typography variant="h3" className="section-title">
          {sectionTitle}
        </Typography>
        {component}
      </div>
    );
  } else {
    contents = component;
  }
  
  return (
    <section id={id}>
      <Card className={component}>
        {contents}
      </Card>
    </section>
  )
};

export default SectionContainer;

/*
export default class SectionContainer extends React.Component {
    render() {
        let style = {};
        if (this.props.backgroundColor) {
            style['backgroundColor'] = this.props.backgroundColor;
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
*/