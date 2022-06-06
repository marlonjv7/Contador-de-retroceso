import React from 'react'
import Temporizador from '../components/Temporizador';

const Main = () => {


    return (
        <div className='mb-5 d-flex flex-column align-items-center justify-content-center'>
            <h1 className='text-center pt-5 my-5'>WE´RE LAUNCHING SOON</h1>

            <Temporizador />
        </div>
    )
}

export default Main;
