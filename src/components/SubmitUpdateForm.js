import React from 'react';
import './SubmitUpdateForm.css';
import { Card, Typography } from '@material-ui/core';

const states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 
  'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 
  'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 
  'West Virginia', 'Wisconsin', 'Wyoming'];

const legStatuses = ['No Action Taken', 'Commitment to Act', 'Bill in Progress', 
  'Bill Passed'];

export default function SubmitUpdateForm() {
  const question2entry = {
    state: "entry.324818163",
    legStatus: "entry.918943089",
    link: "entry.1762728094",
    date: "entry.267144032",
    firstName: "entry.395727606",
    lastName: "entry.1087655281",
    email: "entry.1832616597"
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const googleFormURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeHIWw6gyf5N9z5t-Inywv4Elce8cGsS-vbRtLKHy_yApH0sw/formResponse";
    const data = {}
    const urlData = []
    Object.entries(question2entry).forEach(([q, e]) => {
      data[e] = event.target[q].value;
      urlData.push(`${e}=${event.target[q].value}`)
    })
    const dataStr = urlData.join('&');

    window.open(googleFormURL + '?' + dataStr, '_blank');
  }

    return (
        <Card className={"submit-update-form-container"}>
          <Typography component="h6" variant="h6">
            Submit a Legislative Update
          </Typography>
          <form
              className={"submit-update-form"}
              onSubmit={handleSubmit}
          >
            <p>State *</p>
              <select name="state">
                <option selected disabled>Choose</option>
                {
                  states.map(state => <option key={state} value={state}>{state}</option>)
                }
              </select>

              <p>Legislative Status *</p>
              <select name="legStatus">
                <option selected disabled>Choose</option>
                {
                  legStatuses.map(status => <option key={status} value={status}>{status}</option>)
                }
              </select>

              <label htmlFor="link">Link to Your Source *</label>
              <input name="link" type="text" id="link"/>

              <label htmlFor="date">Date of Your Source *</label>
              <input name="date" type="date" placeholder="YYYY-MM-DD" />

              <label htmlFor="firstName">Your First Name *</label>
              <input name="firstName" type="text" id="first-name"/>

              <label htmlFor="lastName">Your Last Name *</label>
              <input name="lastName" type="text" id="last-name"/>

              <label htmlFor="email">Best Email to Ask You a Follow-up Question, If Needed *</label>
              <input name="email" type="text" id="email"/>

              <input type="submit"></input>
            </form>
        </Card>
    );
}
