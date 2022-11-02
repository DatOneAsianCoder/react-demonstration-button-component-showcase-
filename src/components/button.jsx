import React from 'react';
import './button.css';

const STYLES = [
    "btn--primary--solid",
    "btn--primary--outline",
]

export const Button = ({
    children, //content
    type, //type
    onClick, //Gives user to tell computer what to run when clicked
    buttonStyle // Button Style to make the button look unique!
    // These are the properties of the button
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    // Checks if the buttonStyle user put in is in the STYLES arr or if it's blank
    // If it is blank/not in the arr, then automatically default to style "STYLES[0]"

    return (
        <button className={`btn ${checkButtonStyle}`} onClick={onClick} type={type}>
            {children}
        </button>

        // The btn thing is a template string, with each curly bracket being a class/property
        // btn is the standard button class
    )
}

// Good questions:
// Zeel asked what is difference between JSX and JS file?
// JSX makes it so that the component being made can be compiled into an object
// Essentially we're making an object
// Stackoverflow Link to Discussion: https://stackoverflow.com/questions/46169472/reactjs-js-vs-jsx

// Aryan asked about the "children" tag
// the children tag is essentially the content that goes into the button (Ie. Text)
// The terms "parent view" and "child view" do come up frequently
// This refers to the main view (parent view) containing all the child views (children view)
// Think of it like "the parent holds all the children dear to them"!