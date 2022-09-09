import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTechCompanyAction } from '../../redux/HomeSlice';

const Home = () => {
  const state = useSelector((state) => state);
  console.log(state);
  const dispatch = useDispatch();
  // dispatch(getTechCompanyAction());

  useEffect(() => {
    console.log('aaa');
    dispatch(getTechCompanyAction());
  }, []);

  return (
    <div>Home</div>
  );
};

export default Home;
