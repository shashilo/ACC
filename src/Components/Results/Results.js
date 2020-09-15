import React from 'react'

export const Results = ({ results }) => {
    return (
        <>
            { results.map(item => {
                return([
                    <div className="results-content__item">
                        <img src={ item.image } alt="" />
                        <h2 className="-mt-25">{ item.title }</h2>
                        <p>{ item.description }</p>
                        <a href={ item.link } target="_blank" rel="noopener noreferrer">Learn more</a>
                    </div>
                ])
            })}
        </>
    )
}
