import {Button, Modal} from "react-bootstrap";
import React from "react";

import './Question.css'


export default function Question(props){

    return(
        <section className='question-box'>
                    <p>{props.question}</p>
        </section>
    )
}