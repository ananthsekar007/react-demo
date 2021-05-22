import React, {Component} from "react";

function Paragraph(props) {
    const {welcome, name, dept} = props;
    return(
        <div>
        <p>{welcome}</p>
        <p>{name}</p>
        <p>{dept}</p>
      </div>
    )
}
export default Paragraph;