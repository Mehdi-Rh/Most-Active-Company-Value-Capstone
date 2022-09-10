// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { useSelector, useDispatch } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { getActiveCompaniesAction } from '../../redux/HomeSlice';
import CompanyCard from './CompanyCard';
import './Home.css';
// import mockState from '../mockState';

const Home = () => {
  // const { companyList } = mockState;

  const state = useSelector((state) => state);
  const { companyList } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActiveCompaniesAction());
  }, []);

  return (
    <div>
      <h1>Most active companies</h1>
      <div id="companiesContainer">
        {companyList.map((company) => (
          <CompanyCard key={company.symbol} company={company} />
        ))}
      </div>
    </div>
  );
};

export default Home;
