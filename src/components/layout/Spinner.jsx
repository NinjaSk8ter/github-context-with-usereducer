import React from 'react'
import spinner from './assets/spinner.gif'

const Spinner = () => {
    return (
        <div className='w-100 mt-20'>
            <img
                src={spinner}
                alt='Loading...'
                style={{ width: '180px', margin: 'auto', display: 'block' }}
            />
        </div>
    )
}

export default Spinner