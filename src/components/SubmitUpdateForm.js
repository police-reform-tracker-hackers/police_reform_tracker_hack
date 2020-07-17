import React from 'react';

const states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 
  'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 
  'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 
  'West Virginia', 'Wisconsin', 'Wyoming'];

const legStatuses = ['No Action Taken Yet', 'Commitment to Act / Pledge', 'Bill in Progress', 
  'Bill Passed'];

export default function SubmitUpdateForm() {
    return (
        <div className={"submit-update-form-container"}>
            <form 
              action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeHIWw6gyf5N9z5t-Inywv4Elce8cGsS-vbRtLKHy_yApH0sw/formResponse"
              >
              <p>State *</p>
              <select name="entry.324818163">
                <option selected disabled>Choose</option>
                {
                  states.map(state => <option key={state} value={state}>{state}</option>)
                }
              </select>
              <p>Legislative Status *</p>
              <select name="entry.918943089">
                <option selected disabled>Choose</option>
                {
                  legStatuses.map(status => <option key={status} value={status}>{status}</option>)
                }
              </select>
              <label for="link">Link to Your Source *</label>
              <input name="entry.1762728094" type="text" id="link"/>
              <label for="date">Date of Your Source *</label>
              <input name="entry.267144032" type="date"/>
              <label for="first-name">Your First Name *</label>
              <input name="entry.395727606" type="text" id="first-name"/>
              <label for="last-name">Your Last Name *</label>
              <input name="entry.1087655281" type="text" id="last-name"/>
              <label for="email">Best Email to Ask You a Follow-up Question, If Needed *</label>
              <input name="entry.1832616597" type="text" id="email"/>
            </form>
        </div>
    );
}
