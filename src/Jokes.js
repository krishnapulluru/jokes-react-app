import React from "react";

export default function Joke(props) {

    return (
        <div id={"jokecont"+props.id}>
          <h2 style={{ display: props.setup ? "block" : "none" }} >{props.setup}</h2>
          <p>Punchline : {props.punchline}</p>
          <small>Type : {props.type}</small>
            <hr/>
        </div>
      )
}