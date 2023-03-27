import React from 'react'
import './card.css'
import user from '../../assets/user.png'
import dollar from '../../assets/dollar.png'
import file from "../../assets/file.png";


const card = () => {  const stepInfos = [
    {   
        id: 0,
        icon: user,
        title: "Create an account",
        text: "Fill in your personnal data to register in the website",
    },
    {
        id: 1,
        icon: file,
        title: "Create your CV",
        text: "Complete your skills and create your CV.",
    },
    {
        id: 2,
        icon: dollar,
        title: "Find a job" ,
        text: "Search for your dream job depending on your skills.",
    },
    {
        id: 3,
        icon: dollar,
        title: "Find a job" ,
        text: "Search for your dream job depending on your skills.",
    },
    {
        id: 4,
        icon: dollar,
        title: "Find a job" ,
        text: "Search for your dream job depending on your skills.",
    },
    {
        id: 5,
        icon: dollar,
        title: "Find a job" ,
        text: "Search for your dream job depending on your skills.",
    },
];
return (
<div className='cs'>
<div className='job-section-wrapper'>
    <div className='job-section-top'>
        <h1 className='primary-subheading'> Latest job offers </h1>
        <p> Browse the latest job offers and apply to the one most suited for your skills. Your dream career is here.</p>
    </div>
    <div className='job-section-bottom' >
        {stepInfos.map(data => 
            <div className='job-section-info' key={data.id}> 
                <div className='info-boxes-img-container'> 
                    <img src={data.icon} alt=""/>
                    <h2>{data.title}</h2>
                </div>
                <p>{data.text}</p>
            </div>
        )}
        {/* <button className='secondary-button'> see more </button> */}
    </div>
</div>
</div>
)
}

export default card