import React from 'react';
import ImageSlider from '../components/ImageSlider';
const images = [
    { src: process.env.PUBLIC_URL+'/png/strings.png', alt: 'Image 1' },
    { src: process.env.PUBLIC_URL+'/png/strings.png', alt: 'Image 2' },
    { src: process.env.PUBLIC_URL+'/png/strings.png', alt: 'Image 3' },
];
const data = [
    {
      "id": 1,
      "name": 'Raj Kumar Phagami',
      "profession": "AI Engineer",
      "email": "magar.fagami@gmail.com",
      "phone": "+1 647 404 0000",
      "image": "https://picsum.photos/id/1018/200/200",
      "text": "Lorem ipsume lorem ipsum lorem ipsum"
    },
    {
      "id": 2,
      "name": 'Mandil Karki',
      "profession": "NLP Engineer",
      "email": "mandilkarki4444@gmail.com",
      "phone": "+1 647 404 0000",
      "image": "https://picsum.photos/id/1025/200/200",
      "text": "Lorem ipsume lorem ipsum lorem ipsum"
    },
    {
      "id": 3,
      "name": 'Kshitiz Bhattarai',
      "profession": "ML Engineer",
      "email": "xhitiz1@gmail.com",
      "phone": "+1 672 985 0000",
      "image": "https://picsum.photos/id/1031/200/200",
      "text": "Lorem ipsume lorem ipsum lorem ipsum"
    },
    {
      "id": 4,
      "name": 'Rajiv Luitel',
      "profession": "Data Engineer",
      "email": "raziv.luilel@gmail.com",
      "phone": "+1 672 985 0000",
      "image": "https://picsum.photos/id/106/200/200",
      "text": "Lorem ipsume lorem ipsum lorem ipsum"
    },
    {
      "id": 5,
      "name": 'Trishala Pradhan',
      "profession": "Data Analyst",
      "email": "trishalapradhan.tp@gmail.com",
      "phone": "+1 672 985 0000",
      "image": "https://picsum.photos/id/1074/200/200",
      "text": "Lorem ipsume lorem ipsum lorem ipsum"
    }
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