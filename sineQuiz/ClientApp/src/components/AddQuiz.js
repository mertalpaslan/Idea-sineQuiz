import React, { useState } from 'react';


export function AddQuiz({ history }) {
    const [name, setName] = useState("");
    const [description, setDesc] = useState("")
    const [questions, setQuestions] = useState([{ body: "", answers: [{ body: "", isCorrect: false }, { body: "", isCorrect: false }, { body: "", isCorrect: false }, { body: "", isCorrect: false }] }
])

    async function handleSubmit() {
        try {
            const result = await fetch('/api/quiz', {
                method: 'POST',
                body: JSON.stringify({
                    name, description, "category": {
                        "name": "adsd"
                    }, questions
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });
            await result.json();
            alert("success");
            history.push("/quizzes")
        } catch (e) {
            alert("unsuccess");
        }

    }

    const setQuestionBody = (id, value) => {
        const newArray = questions.slice();
        newArray[id]["body"] = value;
        setQuestions(newArray);
    }

    const setOptionBody = (qIndex, index, value) => {
        const newQuestions = questions.slice();
        newQuestions[qIndex]["answers"][index]["body"] = value;
        setQuestions(newQuestions)
    }

    const setOptionBool = (qIndex, index) => {
        const newQuestions = questions.slice();
        newQuestions[qIndex]["answers"][index]["isCorrect"] = !newQuestions[qIndex]["answers"][index]["isCorrect"];
        setQuestions(newQuestions)
    }


    return (
        <>
            <label>Enter quiz name</label><br />
            <input type="text" value={name} onChange={a => setName(a.target.value)} /><br />
            <label>Enter description</label><br />
            <input type="text" value={description} onChange={a => setDesc(a.target.value)} />

            <hr />
            {
                questions.map((e, j) => {
                    return (
                        <div key={j}>
                            <label>Enter question body</label><br />
                            <input type="text" value={e.body} onChange={a => setQuestionBody(j, a.target.value)} /><br /><br />
                            <label>Enter question options</label><br /><br />
                            {e.answers.map((x, i) =>
                                <div>
                                    <label>Enter option body</label><br />
                                    <input id={`body${i}`} type="text" value={e.answers[i]["body"]} onChange={a => setOptionBody(j, i, a.target.value)} />
                                    <label>Correct Answer</label>
                                    <input id={`desc${i}`} type="checkbox" checked={e.answers[i]["isCorrect"]} onChange={a => setOptionBool(j, i)} />
                                </div>
                            )}

                            <hr />
                        </div>
                    )
                })
            }


            <button onClick={() => setQuestions([...questions, { body: "", answers: [{ body: "", isCorrect: false }, { body: "", isCorrect: false }, { body: "", isCorrect: false }, { body: "", isCorrect: false }] }])}>Add question</button>


            <button onClick={handleSubmit}>Save Quiz</button>
        </>
    );
}