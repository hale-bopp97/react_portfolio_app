import React from "react";
import Project from './Project';

const projects = [
    {
        id: 0,
        title: 'Just Another Text Editor',
        image: '/mountain.png',
        description: 'Progressive Web Application text editor.',
        repo: 'https://github.com/hale-bopp97/pwa_module19',
        app: 'https://pwa-text-editor-mod19.herokuapp.com/'
    },
    {
        id: 1,
        title: 'Note Taker',
        image: '/gear.png',
        description: 'Express.js online note taking app.',
        repo: 'https://github.com/hale-bopp97/note_taker/tree/main/Develop',
        app: 'https://express-note-taker-module11.herokuapp.com/'
    },
    {
        id: 2,
        title: 'Realy Search',
        image: '/magnify.png',
        description: 'App using thrid party API to serch for available real estate',
        repo: 'https://github.com/ddangeles/Realty-Search',
        app: 'https://ddangeles.github.io/Realty-Search/'
    },
    {
        id: 3,
        title: 'Trivia App',
        image: '/puzzle.png',
        description: 'Trivia Quiz application that requires login.',
        repo: 'https://github.com/Grunt395/Trivia-Game',
        app: 'https://project2-heroku-trivia.herokuapp.com/'
    },
    {
        id: 4,
        title: 'React Portfolio',
        image: '/target.png',
        description: 'React portfolio site.',
        repo: 'https://github.com/hale-bopp97/react_portfolio_app',
        app: 'https://react-portfolio-module-20.herokuapp.com/'
    },
    {
        id: 5,
        title: 'MERN Book Search Engine',
        image: '/tools.png',
        description: 'Book search engine using the MERN stack.',
        repo: 'https://github.com/hale-bopp97/MERN_book_search_engine',
        app: 'https://mern-booksearch-module-21.herokuapp.com/'
    }
];

function PortfolioPage() {
    return (
        <div>
            <p className='content is-medium'>
                Portfolio
                <Project projects={projects}/>
            </p>
        </div>
    );
}

export default PortfolioPage;