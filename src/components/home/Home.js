import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getActiveCompaniesAction, filterCompanyAction } from '../../redux/HomeSlice';
import CompanyCard from './CompanyCard';
import FilterInput from './FilterInput';
import './Home.css';

const Home = () => {
  const state = useSelector((state) => state);
  const [filter, setFilter] = useState('');
  const { companyList, filteredList } = state;
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
