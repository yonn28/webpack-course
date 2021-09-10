import HelloWorldButton from "./components/hello-world-button/hello-world-button.js";
import Heading from "./components/heading/heading";
import React from "react";


const heading = new Heading();


const button = new HelloWorldButton.render;

if(process.env.NODE_ENV === "production"){
    console.log("production mode")
} else if(process.env.NODE_ENV === "development"){
    console.log("development mode")
}

