import React, {useState} from 'react';
import defaultAnswers from '../answers.json';
import '../styles/EightBall.css';

const EightBall = function({answers = defaultAnswers}){

    const [color, setColor] = useState('black');
    const [message, setMessage] = useState('Think of a question');

    const handleClick = function(){
        let ranNum = Math.floor(Math.random()*answers.length);
        console.log(ranNum);
        console.log(answers);
        console.log(answers[ranNum]);
        setColor(answers[ranNum].color);
        setMessage(answers[ranNum].msg);
    }

    return(
        <div className="circle" onClick={handleClick} style={{backgroundColor : color}}>
            <b>{message}</b>
        </div>
    );
}

export default EightBall;