import React from "react";
import Experience from "../landing/Experience";
import Intro from "../landing/Intro";
import Overview from "../landing/Overview";
import Project from "../landing/Project";
import Layout from "../layout/Layout";
import "./page.css"

 function Landing(){
    return(
    <div class = "back"> 
    <Layout>
    <Intro />
    <Overview />
    <Project />
    <Experience />
    </Layout>
    </div>
    );
}

export default Landing;
