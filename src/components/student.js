import React from 'react';
import './components.css';

export const students =[
"Jack",
"Amy",
"Sarah",
"Mary",
"Gianna",
"Ava",
"Caedmon",
"Teresa",
"Isabelle",
"Hannah",
"Jose ",
"Amanda",
"Eva",
"Aydin",
"John",
"Aaron",
"Gabriel",
"Joseph",
"Zachary",
"Keira",
"Grace",
"Peninah"
];

export default class Student extends React.Component {
    render(){
        return(
            <div className="student-div">
                <p id="student-name">{students[this.props.studentNum]}</p>
            </div>
        )
    }
}