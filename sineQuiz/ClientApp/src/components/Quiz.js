import React, { Component } from 'react';
import { Button } from "reactstrap";
import { Link } from 'react-router-dom';

function classNameChanger(id, classname) {
    const element = document.getElementById(id);
    element.className = classname;
}

export class Quiz extends Component {
    static displayName = Quiz.name;

    constructor(props) {
        super(props);
        this.state = {
            quiz: {}, current_question: {}, current_question_count: 0, loading: true, question_count: 0, isFinished: false, true_answer_count: 0
        };
        this.nextQuestion = this.nextQuestion.bind(this);
    }

    componentDidMount() {
        this.fetchQuestions();
    }

    async fetchQuestions() {
        const response = await fetch(`api/quiz/${this.props.match.params.id}`);
        const data = await response.json();
        console.log(data)
        this.setState({ quiz: data, current_question: data.questions[this.state.current_question_count], loading: false });
    }



    nextQuestion() {
        if (this.state.current_question_count + 1 === this.state.quiz.questions.length) {
            setTimeout(() => {

                this.setState({ isFinished: true });
            }, 2000)
        } else {
            this.setState((prevState) => ({
                current_question_count: prevState.current_question_count + 1
            }), () => {
                setTimeout(() => {
                    this.setState({
                        current_question: this.state.quiz.questions[this.state.current_question_count]
                    })
                }, 2000)
            })
        }
    }


    NextQuestionHandler(event, isCorrect) {
        if (isCorrect) {
            classNameChanger(event.target.id, "btn btn-success btn-lg btn-block")
            this.setState({
                true_answer_count: this.state.true_answer_count + 1
            });
        }
        else {
            classNameChanger(event.target.id, "btn btn-danger btn-lg btn-block")
        }

        this.nextQuestion();
    }

    render() {
        if (this.state.loading) {
            return (<p><em>Loading...</em></p>)
        }
        else if (this.state.isFinished) {
            return (
                <div>
                <h1>Quiz is over.</h1>
                    <p> You got <b>{this.state.true_answer_count}</b> correct answers out of <b>{this.state.quiz.questions.length}</b> questions. </p>
                    <p>Overall success: <b>%{this.state.true_answer_count / this.state.quiz.questions.length * 100}</b></p>
                    <Button tag={Link} className="text-dark" to="/quizzes">Take a new Quiz</Button>
                </div>
                );
        }
        else {
            return (
                <div>
                    <h1>{this.state.current_question.body}</h1>
                    {this.state.current_question.answers.map(answer => (
                        <Button onClick={(event) => this.NextQuestionHandler(event, answer.isCorrect)} color="primary" size="lg" key={`button${answer.answerId}`} id={`button${answer.answerId}`} block>{answer.body}</Button>
                    ))}
                </div>
            );
        }

    }
}
