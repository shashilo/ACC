import React, { useState, useEffect } from 'react';
import './Home.scss';
import challengeData from '../../../data/coding_challenge_data.json';
import { OptionsType } from '@atlaskit/select';
import { Results } from '../../Results/Results';
import { ResultsInterface, CategoryInterface } from './HomeInterface';
import { Hero } from '../../Hero/Hero';
import { ResultsFilter } from '../../Results/ResultsFilter';

const Home = () => {
  const [ categories, setCategories ] = useState<OptionsType<CategoryInterface>>([]);
  const [ resultsData, setResultsData ] = useState<ResultsInterface[]>(challengeData);

  useEffect(() => {
    setCategories(getCategoriesOptions());
  }, []);

  const getCategoriesOptions = () => {
    let categories: any[] = [],
        uniqueCategories: Array<string> = [];

    // Only add unique category names to the filter
    challengeData.forEach(data => {
      if (uniqueCategories.indexOf(data.category) < 0) {
        categories.push({ label: data.category, value: data.category });
        uniqueCategories.push(data.category);
      }
    });

    return categories;
  };

  const filterByCategory = (e: any) => {
    let filteredResults: ResultsInterface[] = [];

    // Set list of results that match the selected filter option
    challengeData.forEach(data => {
      if (data.category === e.value) {
        filteredResults.push(data);
      }
    });

    setResultsData(filteredResults);
  };

  return (
    <div className="home">
      
      <Hero />

      <div className="results">
        <ResultsFilter onChange={ filterByCategory } categories={ categories } />
        <Results results={ resultsData } />
      </div>
    </div>
  );
}

export default Home;
