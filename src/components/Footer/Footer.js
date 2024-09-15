import React from 'react';
import { FooterContainer, FooterData, FooterSpan } from './Footer.styled';
import FooterTeamBtn from './FooterTeamBtn';
import { FooterModalTeam } from './FooterModalTeam/FooterModalTeam';
import FooterModalTeamList from './FooterModalTeam/TeamImageGalleryList';
import { teams } from './FooterModalTeam/users';

export default function Footer({ openModal, closeModal, isModalOpen }) {
  return (
    <>
      {isModalOpen && (
        <FooterModalTeam closeModal={closeModal}>
          <FooterModalTeamList users={teams} />
        </FooterModalTeam>
      )}
      <FooterContainer>
        <FooterData>
          <FooterSpan>
            © 2024 | All Rights Reserved | Developed by{' '}
            <FooterTeamBtn openModal={openModal} />
          </FooterSpan>
        </FooterData>
      </FooterContainer>
    </>
  );
}
