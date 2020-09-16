import React from 'react';
import Select from '@atlaskit/select';
import './ResultsFilter.scss';

export const ResultsFilter = (props: any) => {
    
    const filterByCategory = (event: any) => {
        props.onChange(event);
    }
    
    return (
        <>
            <div className="results__filter -mb-30">
            Filter Plays By:
            </div>

            <div className="results__category" data-testid="category-filter">
                <label>Category</label>
                <Select
                    className="single-select"
                    classNamePrefix="react-select"
                    options= { props.categories }
                    placeholder="Any"
                    onChange={ filterByCategory }
                />
            </div>
        </>
    )
}
