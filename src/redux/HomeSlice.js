import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_TECH_COMPANY = 'stock/GET_ALL';
const GET_DETAILS = 'stock/GET_DETAILS';
const FILTER = 'stock/FILTER';

// Initial State
const initialState = {
  companyDetails: [],
  companyList: [],
  filteredList: [],
  status: null,
};

const stockReducer = (state = initialState, action) => {
  // console.log('state');
  // console.log(state);
  switch (action.type) {
    case `${GET_TECH_COMPANY}/pending`:
      return {
        companyDetails: [],
        companyList: [],
        status: 'Active companies ... loading',
      };
    case `${GET_TECH_COMPANY}/fulfilled`:
      return {
        companyDetails: [],
        companyList: action.payload,
        status: 'Stock fetched successfully',
      };
    case `${GET_DETAILS}/pending`:
      return {
        companyDetails: [...state.companyDetails],
        companyList: [...state.companyList],
        status: 'Details Loading',
      };
    case `${GET_DETAILS}/fulfilled`:
      return {
        companyDetails: [...state.companyDetails, action.payload],
        companyList: [...state.companyList],
        status: 'Details fetched successfully',
      };
    case `${FILTER}/pending`:
      return state;
    case `${FILTER}/fulfilled`:
      return {
        ...state,
        filteredList: state.companyList.filter((company) => company.name.toLowerCase().includes(action.payload) || action.payload === ''),
        status: 'Details fetched successfully',
      };
    default:
      return state;
  }
};

// companyList.filter((company) => company.name.includes(filter) || filter === '')

// eslint-disable-next-line max-len
// const filteredCompanyList = companyList.filter((company) => company.name.includes(filter) || filter === '');
// console.log(companyList);
// return filteredCompanyList;

// Fetch general details
const fetchActiveCompanies = async () => {
  const baseUrl = 'https://financialmodelingprep.com/api/v3/';
  const endpoint = 'stock_market/actives?apikey=';
  const apiKey = 'd38e7160b14b35d4a74c33d9db00cc42';
  const urlGeneral = baseUrl + endpoint + apiKey;
  const companyGeneral = [];
  let general = await fetch(urlGeneral);
  general = await general.json();
  general.map((company) => {
    const companyDetail = {
      symbol: company.symbol,
      name: company.name,
      change: company.change,
      price: company.price,
      changesPercentage: company.changesPercentage,
    };
    companyGeneral.push(companyDetail);
    return companyGeneral;
  });
  return companyGeneral;
};

const fetchProfile = async (symbol) => {
  const baseUrl = 'https://financialmodelingprep.com/api/v3/';
  const apiKey = 'd38e7160b14b35d4a74c33d9db00cc42';
  const profileEndpoint = `profile/${symbol}?limit=40&apikey=`;
  const urlProfile = baseUrl + profileEndpoint + apiKey;
  let profile = await fetch(urlProfile);
  profile = await profile.json();
  return profile;
};

const fetchValue = async (symbol) => {
  const baseUrl = 'https://financialmodelingprep.com/api/v3/';
  const apiKey = 'd38e7160b14b35d4a74c33d9db00cc42';
  const valueEndpoint = `enterprise-values/${symbol}?limit=40&apikey=`;
  const urlValue = baseUrl + valueEndpoint + apiKey;
  let value = await fetch(urlValue);
  value = await value.json();
  return value;
};

export const getDetailsAction = createAsyncThunk(GET_DETAILS, async (symbol) => {
  try {
    const profile = await fetchProfile(symbol);
    const value = await fetchValue(symbol);
    const companyLogo = profile[0].image;
    return { companyLogo, value };
  } catch (err) {
    return console.log(err.message);
  }
});

export const getActiveCompaniesAction = createAsyncThunk(
  GET_TECH_COMPANY, async () => fetchActiveCompanies(),
);

export const filterCompanyAction = createAsyncThunk(FILTER, async (filter) => filter);

export default stockReducer;
