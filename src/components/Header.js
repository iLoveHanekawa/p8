import React from "react";

export default function Header(props) {
    return <div>
        <h1>
            current user: {props.userName}
        </h1>
    </div>
}