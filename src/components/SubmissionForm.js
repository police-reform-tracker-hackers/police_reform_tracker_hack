import React from 'react';
import styled from 'styled-components';


const states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
  'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
  'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
  'West Virginia', 'Wisconsin', 'Wyoming'];

const legStatuses = ['No Action Taken', 'Commitment to Act', 'Bill in Progress', 'Bill Passed'];

const question2entry = {
  state: "entry.324818163",
  legStatus: "entry.918943089",
  link: "entry.1762728094",
  date: "entry.267144032",
  firstName: "entry.395727606",
  lastName: "entry.1087655281",
  email: "entry.1832616597"
};


const StyledForm = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  justify-content: space-between;
  padding-bottom: 2em;
`;

const StyledTitle = styled.h2`
  font-size: 24px;
  padding: 1em;
`;

const StyledLabel = styled.label`
  margin: 5px;
`;

const StyledInput = styled.input`
  margin-bottom: 5px;
`;

const StyledOption = styled.option`
  margin-bottom: 5px;
`;

const StyledSelect = styled.select`
  margin-bottom: 5px;
`;


const SubmissionForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const googleFormURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeHIWw6gyf5N9z5t-Inywv4Elce8cGsS-vbRtLKHy_yApH0sw/formResponse";
    const data = {}
    const urlData = []
    Object.entries(question2entry).forEach(([q, e]) => {
      data[e] = event.target[q].value;
      urlData.push(`${e}=${event.target[q].value}`)
    })
    const dataStr = urlData.join('&');

    window.open(googleFormURL + '?' + dataStr, '_blank');
  };

  return (

    <div>
      <StyledTitle>Submit an update</StyledTitle>
      <StyledForm
        className={"submit-update-form"}
        onSubmit={handleSubmit}
      >
        <p>State *</p>
        <StyledSelect name="state">
          <option selected disabled>Choose</option>
          {
            states.map(state => <option key={state} value={state}>{state}</option>)
          }
        </StyledSelect>

        <p>Legislative Status *</p>
        <StyledSelect name="legStatus">
          <option selected disabled>Choose</option>
          {
            legStatuses.map(status => <option key={status} value={status}>{status}</option>)
          }
        </StyledSelect>

        <StyledLabel htmlFor="link">Link to Your Source *</StyledLabel>
        <StyledInput name="link" type="text" id="link" />

        <StyledLabel htmlFor="date">Date of Your Source *</StyledLabel>
        <StyledInput name="date" type="date" placeholder="YYYY-MM-DD" />

        <StyledLabel htmlFor="firstName">Your First Name *</StyledLabel>
        <StyledInput name="firstName" type="text" id="first-name" />

        <StyledLabel htmlFor="lastName">Your Last Name *</StyledLabel>
        <StyledInput name="lastName" type="text" id="last-name" />

        <StyledLabel htmlFor="email">Best Email to Ask You a Follow-up Question, If Needed *</StyledLabel>
        <StyledInput name="email" type="text" id="email" />

        <StyledInput type="submit"></StyledInput>
      </StyledForm>
    </div>
  )
};

export default SubmissionForm;