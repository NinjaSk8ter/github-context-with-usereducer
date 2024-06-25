//import React from 'react'
import { React, Fragment } from 'react'
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'


const Home = () => {
    return (
        <Fragment>
            <UserResults />
            <UserSearch />
        </Fragment>
    )
}

export default Home