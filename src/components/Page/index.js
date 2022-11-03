import React from "react";
import About from "../../pages/about";
import Portfolio from "../../pages/portfolio";
import Contact from "../../pages/contact";
import Resume from "../../pages/resume";
import PageContent from "../PageContent";

function Page({ currentPage }) {
    const renderPage = () => {
        if(currentPage.name === "about") {
            return <About/>
        } else if (currentPage.name === "portfolio") {
            return <Portfolio/>
        } else if (currentPage.name === "contact") {
            return <Contact/>
        } else if (currentPage.name === "resume") {
            return <Resume/>
        } else {
            return <About/>
        }
    }
    return <section>
        <PageContent>{renderPage()}</PageContent>
    </section>
}

export default Page;