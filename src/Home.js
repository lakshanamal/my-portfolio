import React from 'react'
import HomeImg from "./assests/img/index.png"

const Home =()=>{
    return (
        <div className="home">
            <div className="intro">
                <div className="header-title">
                    <div className="squre"></div>
                    <div className="main-title"><h2>HOME</h2> </div>
                </div>
                <div className="name">
                    <h1>HI! I'M <span style={{color:"#044A73"}}>LAKSHAN</span></h1>
                    <h5 style={{color:"#044A73"}}>I'm an web developer</h5>
                </div>
            </div>
            <div className="homeImg">
                <img src={HomeImg} alt="" />
            </div>
        </div>
    );
}
export default Home;