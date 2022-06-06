import React from 'react'
import { IMG, ImgBotton } from '../styles/StyledGlobal'

const Footer = () => {
    return (
        <div className='mt-5'>
            <ImgBotton className='d-flex flex-column'>
                <div className='d-flex justify-content-center gap-5 my-5'>
                    <a href="#" className='my-auto'><IMG className='' src="https://i.ibb.co/9qwb5jj/icon-facebook-1.png" alt="" /></a>
                    <a href="#" className='my-auto'><IMG className='' src="https://i.ibb.co/mBZQMLs/icon-instagram-1.png" alt="" /></a>
                    <a href="#" className='my-auto'><IMG className='' src="https://i.ibb.co/RDbN7QH/icon-pinterest-1.png" alt="" /></a>
                </div>
                <div className="attribution mt-2">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                    Coded by <a href="#">Marlon Vivas</a>.
                </div>
            </ImgBotton>
        </div>
    )
}

export default Footer;