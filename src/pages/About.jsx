import React, { Fragment } from 'react'

const About = () => {
    return (
        <Fragment>
            <h1 className='text-6xl mb-4'>Github Finder</h1>
            <p className='mb-4 text-2xl font-light'>
                React App
            </p>
            <p className='text-lg text-gray-400'>
                Version <span className='text-gray-400'>1.0.0</span>
            </p>
            <p className='text-lg text-gray-400'>
                Layout By:&nbsp;
                <a className='text-gray-400' href='https://twitter.com/hassibmoddasser'>
                    Hassib Moddasser
                </a>
            </p>
        </Fragment>
    )
}

export default About