import React, { Key } from 'react'
import { ResultsInterface } from '../Pages/Home/HomeInterface';
import './Results.scss';

export const Results: React.FC<any> = ({ results }) => {
    return (
        <div className="results-content">
            { results.map((item: ResultsInterface, index: Key) => {
                return([
                    <div className="results-content__item" key={ index }>
                        <img src={ item.image } alt="" data-testid="image" />
                        <h2 className="-mt-25" data-testid="title">{ item.title }</h2>
                        <p data-testid="description">{ item.description }</p>
                        <a href={ item.link } target="_blank" rel="noopener noreferrer" data-testid="link">Learn more</a>
                    </div>
                ])
            })}
        </div>
    )
}
