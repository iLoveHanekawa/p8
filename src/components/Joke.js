import React from "react";

export default function Joke(props) {
    let [isShown, setShown] = React.useState(false)
    function toggleShown() {
        console.log(isShown)
        setShown(i => !i)
    }
    return <div>
        <h2>{props.main}</h2>
        {isShown && <p>{props.punchline}</p>}
        <button onClick={toggleShown}>{isShown? "Hide": "Show"} punchline</button>
    </div>
}