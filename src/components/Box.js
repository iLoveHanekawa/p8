import React from "react";

export default function Box(props) {
    let styles = {
        backgroundColor: props.isBlackApp? "#222222": "#cccccc",
        width: "100px",
        height: "100px",
        border: "1px solid black"
    }
    return <div>
        <div style = {styles} onClick = {() => (props.toggle(props.id))}>
        </div>
    </div>
}