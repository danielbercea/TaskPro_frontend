import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { logOut } from '../../redux/auth/authOperations.js';
import { selectUserTheme } from '../../redux/auth/authSelectors.js';
import { selectIsMenuOpen } from '../../redux/menuMode/menuModeSelectors.js';

import BoardList from './BoardList';
import NeedHelpBlock from 'components/Sidebar/NeedHelpBlock/NeedHelpBlock.js';
import BasicModal from 'components/Modals/BasicModal/BasicModal.js';
import AddBoardModal from 'components/Modals/BoardModal/AddBoardModal/AddBoardModal.js';

import sprite from '../../images/sprite.svg';
import {
  Aside,
  Logo,
  IconLogo,
  LogoText,
  MyBoardsText,
  AddBoardBlock,
  CreateNewBoard,
  BtnAdd,
  IconPlus,
  BtnLogOut,
  IconLogOut,
  TextLogOut,
  IconClose,
} from './Sidebar.styled';
import { closeMenuMode } from '../../redux/menuMode/menuModeSlice';

export const Sidebar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const activeUserTheme = useSelector(selectUserTheme);
  const menuMode = useSelector(selectIsMenuOpen);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const setIconLogo = () => {
    if (activeUserTheme === 'dark' || activeUserTheme === 'light') {
      return '#icon-logo';
    } else if (activeUserTheme === 'violet') {
      return '#icon-logo-violet';
    }
  };

  return (
    <Aside $isOpen={menuMode}>
      <div style={{ width: '100%' }}>
        <Logo>
          <IconLogo aria-label={t('logo_icon_label')}>
            <use href={sprite + setIconLogo()} />
          </IconLogo>

          <LogoText>{t('task_pro')}</LogoText>

          <IconClose onClick={() => dispatch(closeMenuMode())}>
            <use href={sprite + '#icon-x-close'} />
          </IconClose>
        </Logo>

        <MyBoardsText>{t('my_boards')}</MyBoardsText>

        <AddBoardBlock>
          <CreateNewBoard onClick={handleOpen}>
            {t('create_new_board')}
          </CreateNewBoard>

          <BtnAdd type="button" onClick={handleOpen}>
            <IconPlus aria-label={t('add_icon_label')}>
              <use href={sprite + `#icon-plus`} />
            </IconPlus>
          </BtnAdd>

          <BoardList />
        </AddBoardBlock>

        <BasicModal
          open={open}
          closeModal={handleClose}
          children={<AddBoardModal closeModal={handleClose} />}
        />
      </div>

      <div style={{ width: '100%' }}>
        <NeedHelpBlock />

        <BtnLogOut type="button" onClick={() => dispatch(logOut())}>
          <IconLogOut aria-label={t('logout_icon_label')}>
            <use href={sprite + `#icon-login`} />
          </IconLogOut>

          <TextLogOut>{t('log_out')}</TextLogOut>
        </BtnLogOut>
      </div>
    </Aside>
  );
};
