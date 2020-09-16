import React from 'react';
import Select, { ValueType } from '@atlaskit/select';
import './ResultsFilter.scss';
import { ResultsFilterInterface } from '../../../shared/types/resultsInterface';

export const ResultsFilter = ({ onChange, categories }: any) => {
    
    const filterByCategory = (event: ValueType<String>) => {
        onChange(event);
    }
    
    return (
        <>
            <div className="results__filter -mb-30">
            Filter Plays By:
            </div>

            <div className="results__category">
                <label>Category</label>
                <Select
                    className="single-select"
                    classNamePrefix="react-select"
                    options= { categories }
                    placeholder="Any"
                    onChange={ filterByCategory }
                />
            </div>
        </>
    )
}
