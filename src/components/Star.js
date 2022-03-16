import React from "react";
import {AiFillStar} from "react-icons/ai"
import {AiOutlineStar} from "react-icons/ai"

export default function Star(props) {
    return <div onClick={props.onClick}>
        {props.isFilled === true? <AiFillStar/>: <AiOutlineStar/>}
    </div>
}