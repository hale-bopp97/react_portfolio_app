import React from 'react';

function ResumePage() {
    return <div className='column is-desktop'>
                Resume
                <div>
                    <br></br>
                    <p>
                    SKILLS                    
                    </p>
                    <p>
                    Java, Python, SQL, JPA\Hibernate, PL\I, Microsoft Visual Studio, Eclipse, Intellij, Vim, Git, Docker, JDBC, Springboot, RESTful services, Maven, Gradle, Tomcat, AWS. Can handle problematic situations with tact and confidence; good work ethic with the ability to troubleshoot and meet deadlines.                    
                    </p>
                    <br></br>
                </div>
            {/* <div className='columns'> */}
            <div className='buttons is-centered'>               
                <a className='button is-primary' href={'/dummy_page.pdf'} target='_blank' rel='noreferrer'>Download my resume</a>
                <span></span>
            </div>
            {/* </div> */}
            </div>
}

export default ResumePage;