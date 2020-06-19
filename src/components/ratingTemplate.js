import React from 'react';
import './components.css';
import Questions from './questions';
import Student, {students} from './student';

let student_score = [];
let sum= 0;

export default class RatingTemplate extends React.Component {
    state ={
        questionNum: 0,
        studentNum: 0,
        value: 0,
        display: 'block'
    }

    handleClick = (event) => {
        if(this.state.questionNum < 15){
            this.setState({
                questionNum: this.state.questionNum + 1,
                value: event.target.dataset.value
            },() => {
                student_score.push(this.state.value);
                if(this.state.questionNum === 15){
                    this.setState({
                        display: 'none'
                    })
                }

            })
        }
    }

    handleButton = () =>{
        this.setState({
            questionNum: 0,
            value: 0,
            display: 'block',
            studentNum: this.state.studentNum +1
        })
        sum = 0;
        student_score = [];
    }

    render() {
        let table;
        if(this.state.questionNum < 15){
            table = 
                (
            <table className="rating-table">
                <tr id="row1" onClick={this.handleClick}>
                    <td id="cell1" className="cell" data-value='1'>1</td>
                    <td id="cell2" className="cell" data-value="2">2</td>
                    <td id="cell3" className="cell" data-value="3">3</td>
                    <td id="cell4" className="cell" data-value='4'>4</td>
                    <td id="cell5" className="cell" data-value='5'>5</td>
                </tr>
            </table>
                )
        }else{
            sum = student_score.reduce(function(prev,curr){
                return (Number(prev)||0) +(Number(curr)||0);
            });
            table = (
            <div className="score-div">
                <h1 id="avg-score">Average Score:</h1>
                <p className="score">{Math.round((sum/((this.state.questionNum)*5))*100)}%</p>
                <button onClick={this.handleButton} className='next-button'>Next</button>
            </div>
            )
        }
        return(
            <div className="rating-template">
                <Student studentNum = {this.state.studentNum}/>
                <Questions state={this.state} />
                {table}
            </div>
            
        )
    }   
}