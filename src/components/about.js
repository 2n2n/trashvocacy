import React from 'react'
import { OneColumn, base } from '../styled/base.js'

const About = () => (
    <OneColumn>
        <h1 style={{
            margin: 0,
            color: base.color.yellow,
            background: base.color.black,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 30,
            paddingRight: 30
        }}>AGRICYCLE</h1>
        <p
            style={{ margin: 0, color: "#fff", background: "rgba(29,47,56,0.51)", padding: 30 }}
        >We're a startup that aims to make our community cleaner
                <br />
            <a href="#" style={{
                display: "inline-block",
                marginTop: 20,
                padding: 10,
                background: base.color.yellow,
                textDecoration: "none",
                color: base.color.black
            }}>
                Become a volunteer
            </a>    
        </p>
    </OneColumn>
)

export default About