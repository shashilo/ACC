import React, { useState, useEffect } from 'react';
import './Home.scss';
import challengeData from '../../data/coding_challenge_data.json';
import Select from '@atlaskit/select';
import { Link } from 'react-router-dom';
import { Results } from '../Results/Results';

const Home = () => {
  let [ categories, setCategories ] = useState([]);

  useEffect(() => {
    setCategories(getCategoriesOptions());
  }, []);

  const getCategoriesOptions = () => {
    let categories = [];
    let uniqueCategories = [];

    // Only add unique category names to the filter
    challengeData.map((data) => {
      if (uniqueCategories.indexOf(data.category) < 0) {
        categories.push({ label: data.category, value: data.category });
        uniqueCategories.push(data.category);
      }
    });

    return categories;
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
          />
        </div>

        <div className="results-content">
          <Results results={ challengeData } />
        </div>

      </div>

    </div>
  );
}

export default Home;
