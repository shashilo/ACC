import React, { useState, useEffect } from 'react';
import './Home.scss';
import challengeData from '../../data/coding_challenge_data.json';
import Select from '@atlaskit/select';
import { Results } from '../Results/Results';

const Home = () => {
  const [ categories, setCategories ] = useState([]);
  const [ resultsData, setResultsData ] = useState(challengeData);

  useEffect(() => {
    setCategories(getCategoriesOptions());
  }, []);

  const getCategoriesOptions = () => {
    let categories =  [],
        uniqueCategories = [];

    // Only add unique category names to the filter
    challengeData.map((data) => {
      if (uniqueCategories.indexOf(data.category) < 0) {
        categories.push({ label: data.category, value: data.category });
        uniqueCategories.push(data.category);
      }
    });

    return categories;
  };

  const filterByCategory = ({ value }) => {
    let filteredResults = [];

    // Set list of results that match the selected filter option
    challengeData.map((data) => {
      if (data.category === value) {
        filteredResults.push(data);
      }
    });

    setResultsData(filteredResults);
  };

  return (
    <div className="home page">

      <div className="hero">
        <img src="https://www.atlassian.com/dam/jcr:8b081c1f-6a30-46a8-8683-b149a5fa0e2b/5whys.png" alt="" />
        <div className="content">
          <h1>Team Collaboration</h1>
          <p>Find ways to build teams, engage growth and deliver successful solutions with our tool kit below. Know when and how to take your team to the max with these tips and strategies.</p>
        </div>
      </div>

      <div className="results">

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
            onChange={ e => filterByCategory(e) }
          />
        </div>

        <div className="results-content">
          <Results results={ resultsData } />
        </div>

      </div>

    </div>
  );
}

export default Home;
