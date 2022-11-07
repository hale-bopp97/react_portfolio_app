import React from 'react';

function Project(_props) {
    
    return(
        <div>
            <div className='columns is-desktop is-justify-content-center is-flex-wrap is-flex-drection-row'>
                {_props.projects.map((project) => (
                    <div className='column is-half'>
                        <div className='card'>
                            <div className='card-image'>
                                <br></br>
                                <figure className='image is-4by3'>

                                    <img src={project.image} alt='image not found'></img>
                                </figure>
                            </div>
                            <div className='card-content'>
                                <div className='media'>
                                    <div className='media-left'>

                                    </div>
                                    <div className='media-content'>
                                        <p className='title is-4 has-text-centered' key={project.id}>
                                            {project.title}
                                        </p>
                                    </div>
                                </div>

                                <div className='content has-text-left'>
                                    {project.description}
                                    <div className='card'>
                                        <a href={project.repo} classname='card-footer-item' target='_blank' rel='noreferrer'>
                                            Repository
                                        </a>
                                        <br>
                                        </br>
                                        <a href={project.app} classname='card-footer-item' target='_blank' rel='noreferrer'>
                                            Live App
                                        </a>
                                    </div>    
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Project;