/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetailsAction } from '../../redux/HomeSlice';
import './Company.css';
import mockState from '../mockState';

const Company = () => {
  const [companyProfileComponent, setCompanyProfileComponent] = useState([]);
  const [companyValueComponent, setCompanyValueComponent] = useState([]);
  const { name } = useParams();

  // const { companyDetails, companyList } = mockState;

  const state = useSelector((state) => state);
  console.log('state');
  console.log(state.status);
  const dispatch = useDispatch();

  const { companyDetails, companyList } = state;
  useEffect(() => {
    if (companyDetails.length === 0) {
      dispatch(getDetailsAction(name));
    }
  }, []);

  const currCompany = companyList.find((company) => company.symbol === name);
  const companyProfile = {
    name: currCompany.name,
    symbol: currCompany.symbol,
    image: companyDetails.companyLogo,
  };

  useEffect(() => {
    setCompanyProfileComponent((
      <div className="profile">
        <div className="profileName">
          <span>{companyProfile.name}</span>
          <span>{companyProfile.symbol}</span>
        </div>
        <div>
          <img src={companyProfile.image} alt="Logo" />
        </div>
      </div>
    ));
  }, []);
  useEffect(() => {
    if (state.status === 'Details fetched successfully') {
      setTimeout(() => {
        try {
          setCompanyValueComponent(companyDetails.value.map((metric) => (
            <div className="valueContainer" key={metric.date}>
              <span>{`Date: ${metric.date}`}</span>
              <span>{`Enterprise Value: ${metric.enterpriseValue}`}</span>
              <span>{`Market Capitalization: ${metric.marketCapitalization}`}</span>
              <span>{`Stock Price: ${metric.stockPrice}`}</span>
              <span>{`Add Total Debt: ${metric.addTotalDebt}`}</span>
              <span>{`Minus Cash And Cash Equivalents: ${metric.minusCashAndCashEquivalents}`}</span>
              <span>{`Number Of Shares: ${metric.numberOfShares}`}</span>
            </div>
          )));
        } catch (err) {
          console.log(err.message);
        }
      }, 2000);
    }
  }, []);

  return (
    <div>
      {companyProfileComponent}
      {companyValueComponent}
    </div>

  );
};

export default Company;
