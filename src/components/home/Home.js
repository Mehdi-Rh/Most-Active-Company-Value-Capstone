import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getActiveCompaniesAction, getDetailsAction } from '../../redux/HomeSlice';

const Home = () => {
  const state = useSelector((state) => state);
  // const { general } = state;
  console.log('state');
  console.log(state);


  const dispatch = useDispatch();
  // dispatch(getTechCompanyAction());

  useEffect(() => {
    dispatch(getDetailsAction('F'));
    console.log(state);
  }, []);

  return (
    <div>Home</div>
  );
};

export default Home;
