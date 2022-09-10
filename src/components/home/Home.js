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
  const { companyList, filteredList } = state;
  console.log('companyList');
  console.log(companyList);
  console.log('filteredList');
  console.log(filteredList);

  const companyListShow = filteredList || companyList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActiveCompaniesAction());
  }, []);

  useEffect(() => {
    dispatch(filterCompanyAction(filter));
  }, [filter]);

  return (
    <div>
      <FilterInput setFilter={setFilter} />
      <div id="companiesContainer">
        {companyListShow.map((company) => (
          <CompanyCard key={company.symbol} company={company} />
        ))}
      </div>
    </div>
  );
};

export default Home;
