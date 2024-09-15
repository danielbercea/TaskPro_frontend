import React, { useRef } from 'react';
import { Wrapper } from './MainDashboard.styled';
import { useSelector } from 'react-redux';
import { selectColumnsLength } from '../../../redux/dashboards/dashboardsSelectors.js';
import Boardm from './Boardm';

const MainDashboard = () => {
  const columnLength = useSelector(selectColumnsLength);

  const scrollRef = useRef(null);

  return (
    <Wrapper $length={columnLength} ref={scrollRef}>
      <Boardm />
    </Wrapper>
  );
};

export default MainDashboard;
