import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa"; 

function Footer() {

    const gitHubLink = "https://github.com/hale-bopp97";
    const linkedInLink = "https://www.linkedin.com/in/matthew-hendricks-029a25a8/";

    const LinkStyle = {
        textdecoration: "none",
        color: "black",
        cursor: "pointer"
    }

    const FooterStyle = {
        height: "70px",
        backgroundColor: "darkGreen",
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridGap: "15px"
    }

    return (

        <footer style={FooterStyle}>
            <section>
                <a href={linkedInLink} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href={gitHubLink} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                {/* {icons.map(icon => (
                    return <a href={icon.links} key={icon.name} target="_blank" rel="noopener noreferrer" style={LinkStyle}><i className={icons.name}></i></a>
                ))} */}
                <p>
                    <span style={{paddingRight: "15px"}}>© {new Date().getFullYear()}</span>
                </p>
            </section>   
        </footer>

    )

}

export default Footer;