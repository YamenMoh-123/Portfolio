import React from "react";
import Experience from "../landing/Experience";
import Intro from "../landing/Intro";
import Overview from "../landing/Overview";
import Project from "../landing/Project";
import Layout from "../layout/Layout";

 function Landing(){
    return(
    <>
    <Layout>
    <Intro />
    <Overview />
    <Project />
    <Experience />
    </Layout>
    </>
    );
}

export default Landing;
