import React from 'react';
import ImageSlider from '../components/ImageSlider';
import {data} from '../Env.js';
const images = [
    { src: process.env.PUBLIC_URL+'/png/strings.png', alt: 'Image 1' },
    { src: process.env.PUBLIC_URL+'/png/strings.png', alt: 'Image 2' },
    { src: process.env.PUBLIC_URL+'/png/strings.png', alt: 'Image 3' },
];

function Contact(){
    return (
        <>
            <div className="row">
                <h1>Team Members</h1>
                {/* <p>Please add content here</p> */}
            </div>
            <div className="row mt-5 justify-content-center">
                <ImageSlider images={data} />
            </div>


        </>
    )
};

export default Contact;