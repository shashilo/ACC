import React from 'react';
import './Hero.scss';

export const Hero = () => {
    return (
        <div className="hero">
            <img src="https://www.atlassian.com/dam/jcr:8b081c1f-6a30-46a8-8683-b149a5fa0e2b/5whys.png" alt="" />
            <div className="hero__content">
                <h1>Team Collaboration</h1>
                <p>Find ways to build teams, engage growth and deliver successful solutions with our tool kit below. Know when and how to take your team to the max with these tips and strategies.</p>
            </div>
        </div>
    )
}
