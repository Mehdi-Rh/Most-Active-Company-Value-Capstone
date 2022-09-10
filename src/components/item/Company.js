/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetailsAction } from '../../redux/HomeSlice';
import './Company.css';

const Company = () => {
  const [currCompany, setCurrCompany] = useState({});
  const [companyProfileComponent, setCompanyProfileComponent] = useState([]);
  const [companyValueComponent, setCompanyValueComponent] = useState([]);
  const [companyProfile, setCompanyProfile] = useState([]);
  const { name } = useParams();
  console.log(name);

  const state = useSelector((state) => state);
  const { companyDetails, companyList } = state;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailsAction(name));
    console.log(companyDetails);
  }, []);

  useEffect(() => {
    setCurrCompany(companyList.find((company) => company.symbol === name));
    setCompanyProfile({
      name: currCompany.name,
      symbol: currCompany.symbol,
      image: companyDetails.companyLogo,
    });
  }, []);
  // const currCompany = companyList.find((company) => company.symbol === name);

  // const companyProfile = {
  //   name: currCompany.name,
  //   symbol: currCompany.symbol,
  //   image: companyDetails.companyLogo,
  // };

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
    if (companyDetails.value.length > 0) {
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
