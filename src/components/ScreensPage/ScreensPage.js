import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from './ScreensPage.styled';
import { selectIsMenuOpen } from '../../redux/menuMode/menuModeSelectors.js';
import { closeMenuMode } from '../../redux/menuMode/menuModeSlice.js';

import HeaderDashboard from './HeaderDashboard/HeaderDashboard.js';
import MainDashboard from './MainDashboard/MainDashboard.js';

const ScreensPage = () => {
  const dispatch = useDispatch();

  const menuMode = useSelector(selectIsMenuOpen);
  const currentBg = useSelector(state => state?.dashboards?.currentBg);
  const currentName = useSelector(state => state?.dashboards?.currentName);

  const handleScreenClick = () => {
    if (menuMode) {
      dispatch(closeMenuMode());
    }
  };

  return (
    <Wrapper onClick={handleScreenClick} $bgcUrl={currentBg} $isOpen={menuMode}>
      <HeaderDashboard children={currentName} />

      <MainDashboard />
    </Wrapper>
  );
};

export default ScreensPage;
