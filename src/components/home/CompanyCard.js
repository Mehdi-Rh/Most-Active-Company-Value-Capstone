/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const CompanyCard = (props) => {
  const { company } = props;
  const {
    symbol, name, change, price, changesPercentage,
  } = company;
  return (
    <Link key={symbol} to={{ pathname: `/company/${symbol}` }}>
      <div className="metricsContainer">
        <div className="metrics">
          <div className="metricsName">
            <span>{name}</span>
            <span className="symbol">{symbol}</span>
          </div>
          <span>{`Change: ${change}`}</span>
          <span>{`Price: ${price}`}</span>
          <span>{`Changes Percentage: ${changesPercentage}`}</span>
        </div>
      </div>
    </Link>
  );
};

export default CompanyCard;
