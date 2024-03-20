import React from "react";
import * as stylex from "@stylexjs/stylex";

const line = stylex.create({
    text : {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 50,
        fontSize: 100,
        color : 'black',
        fontFamily: 'Bebas Neue',
        fontWeight: 400,
        marginLeft: 10,
        paddingTop: 15
    }
    
});


export default function About() {
        return (
                <div{...stylex.props(line.text)}>
                    <p>PASSION DUTY <span>
                    LEARNING MORE</span>
                    </p>
                </div>
        )
}