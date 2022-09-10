/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { useSelector, useDispatch } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { getActiveCompaniesAction, filterCompanyAction } from '../../redux/HomeSlice';
import CompanyCard from './CompanyCard';
import FilterInput from './FilterInput';
import './Home.css';
// import mockState from '../mockState';

const Home = () => {
  const state = useSelector((state) => state);
  const [filter, setFilter] = useState('');
  const { companyList } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActiveCompaniesAction());
  }, []);

  useEffect(() => {
    console.log(filter);
    dispatch(filterCompanyAction(filter));
    console.log('state');
    console.log(state);
  }, [filter]);

  return (
    <div>
      <FilterInput setFilter={setFilter} />
      <div id="companiesContainer">
        {companyList.map((company) => (
          <CompanyCard key={company.symbol} company={company} />
        ))}
      </div>
    </div>
  );
};

export default Home;
