import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import iconImage from '../../images/welcome-icon.png';
import sprite from '../../images/sprite.svg';
import {
  WelcomeWrapper,
  WelcomeIcon,
  WelcomeLogo,
  WelcomeLogoIcon,
  WelcomeLogoTitle,
  WelcomeContainer,
  WelcomeDescription,
  WelcomeLoginButton,
  GoogleLoginButton,
  WelcomeRegisterButton,
} from './WelcomePage.styled';
import Footer from 'components/Footer/Footer';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const WelcomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSuccess = async response => {
    try {
      const res = await fetch('http://localhost:3001/auth/google/callback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          id_token: response.credential,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        sessionStorage.setItem('accessToken', data.accessToken);
        sessionStorage.setItem('refreshToken', data.refreshToken);
        navigate('/current');
      } else {
        console.error('Not signed in:', data.message);
      }
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    window.document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    window.document.body.style.overflow = 'unset';
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <WelcomeWrapper>
        <WelcomeContainer>
          <LanguageSwitcher />
          <WelcomeIcon src={iconImage} alt="man with macbook" />
          <WelcomeLogo>
            <WelcomeLogoIcon>
              <use href={sprite + '#icon-logo'} />
            </WelcomeLogoIcon>
            <WelcomeLogoTitle>
              {t('welcome_title', 'Task Pro')}
            </WelcomeLogoTitle>
          </WelcomeLogo>
          <WelcomeDescription>
            {t(
              'welcome_text',
              "Supercharge your productivity and take control of your tasks with Task Pro - Don't wait, start achieving your goals now!"
            )}
          </WelcomeDescription>
          <WelcomeRegisterButton to="/auth/register">
            {t('registration', 'Registration')}
          </WelcomeRegisterButton>
          <WelcomeLoginButton to="/auth/login">
            {t('log_in', 'Log In')}
          </WelcomeLoginButton>
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={error => console.error('Login Failed:', error)}
            render={renderProps => (
              <GoogleLoginButton
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <img
                  src="/images/google.svg"
                  alt="Google Icon"
                  width="20"
                  height="20"
                />
                {t('sign_in_with_google', 'Sign in with Google')}
              </GoogleLoginButton>
            )}
          />
        </WelcomeContainer>
        <Footer
          openModal={openModal}
          closeModal={closeModal}
          isModalOpen={isModalOpen}
        />
      </WelcomeWrapper>
    </GoogleOAuthProvider>
  );
};

export default WelcomePage;
