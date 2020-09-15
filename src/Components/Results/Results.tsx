import React from 'react'
import { ResultsInterface } from '../Pages/Home/HomeInterface';
import './Results.scss';

export const Results: React.FC<any> = ({ results }) => {
    return (
        <>
            { results.map((item: ResultsInterface) => {
                return([
                    <div className="results-content__item">
                        <img src={ item.image } alt="" />
                        <h2 className="-mt-25">{ item.title }</h2>
                        <p>{ item.description }</p>
                        <a href={ item.link } target="_blank" rel="noopener noreferrer">Learn more</a>
                    </div>
                ])
            }
            )}
        </>
    )
}
