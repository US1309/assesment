import React, { useState } from 'react';

export default function Accordian() {
    const [accordianIndex, setaccordianIndex] = useState(null);

    const toggleAccordion = (index) => {
        if (accordianIndex === index) {
            setaccordianIndex(null);
        } else {
            setaccordianIndex(index);
        }
    };

    return (
        <div className='container-fluid'>
            <div className="container">
                <h2>Accordion Component</h2>

                <button 
                    className={`accordion ${accordianIndex === 0 ? 'active' : ''}`} 
                    onClick={() => toggleAccordion(0)}
                >
                    Accordion 1
                </button>
                <div className="accordianText" style={{ display: accordianIndex === 0 ? 'block' : 'none' }}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores neque beatae deserunt ea illum, facere expedita iusto, eveniet animi nisi itaque ipsum reiciendis mollitia nihil quam commodi voluptatum in sapiente eum! Exercitationem quod enim, est magni hic pariatur libero laborum?</p>
                </div>

                <button 
                    className={`accordion ${accordianIndex === 1 ? 'active' : ''}`} 
                    onClick={() => toggleAccordion(1)}
                >
                    Accordion 2
                </button>
                <div className="accordianText" style={{ display: accordianIndex === 1 ? 'block' : 'none' }}>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis sapiente harum earum repellendus blanditiis, doloremque laboriosam deserunt dolorem? Nulla nobis enim nihil cumque ipsum eaque! Vitae quos tenetur molestias velit commodi maxime ipsa possimus unde omnis animi, voluptates quo at?</p>
                </div>

                <button 
                    className={`accordion ${accordianIndex === 2 ? 'active' : ''}`} 
                    onClick={() => toggleAccordion(2)}
                >
                    Accordion 3
                </button>
                <div className="accordianText" style={{ display: accordianIndex === 2 ? 'block' : 'none' }}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus deserunt soluta laboriosam praesentium fugiat labore delectus nemo, facere molestiae ea optio quibusdam odio, voluptatum similique a blanditiis alias quisquam sequi temporibus doloremque dolore vero reiciendis excepturi? Commodi reprehenderit quisquam aliquid.</p>
                </div>
            </div>

            <style jsx>{`
                .accordion {
                    background-color: #eee;
                    color: #446;
                    cursor: pointer;
                    padding: 25px;
                    width: 100%;
                    text-align: left;
                    outline: none;
                    font-size: 18px;
                    transition: 0.5s;
                }

                .active, .accordion:hover {
                    background-color: #ccc;
                }

                .accordianText {
                    padding:1px 20px;
                    display: none;
                    text-align:justify;
                    background-color: white;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
}
