import React from 'react';
import './components.css';

const questions = [
"Attitude towards teacher, other students, subject matter.",
"Physical readiness - readiness of workspace; appropriate classroom posture, etc.",
"Eyes on person talking.",
"Taking notes.",
"Raising hand to contribute to discussion.",
"Student asks questions/poses comments which display clearly that he wonders more about the issue at hand than what he needs to know for the test.",
"Student clearly seeks to understand this issue in its entirety, and cares about what the truth learned means in his own life.",
"Student has a disposition of awe or wonder - he is amazed upon discovering new truths, and does not act as though he he knows it all.",
"Initiattive in turning in work, asking questions when he is confused, approaching teacher about an absence without being asked, schedules test and quiz re-takes without needing to be reminded.",
"Student keeps track of class materials and assignments such that he is able to complete and hand in work on time.",
"Use of neat and legible handwriting, full headings, etc.",
"Work is carefully completed",
"Student is able to provide on-topic feedback when called upon at random during classroom discussion.",
"Student cares about the truth for its own sake, not simply because he wants to use it to pass the test.",
"Student remains focused and on-topic in class, refraining from making distracting comments.",
]

export default class Questions extends React.Component {
    render() {
        return(
            <div className="question" id="?" style={{'display': this.props.state.display}}>
                <h1>{questions[this.props.state.questionNum]}</h1>
            </div>
        )
    }
}