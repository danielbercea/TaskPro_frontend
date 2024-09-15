import {
  Avatar,
  Description,
  InfoProfile,
  Role,
  Username,
  TextContent,
  FooterGithub,
  FooterIconLn,
  Social,
  SocialIcon,
} from './FooterModalTeam.styled';

export default function TeamImageGalleryCard({
  username,
  role,
  avatar,
  linkedin,
  github,
}) {
  return (
    <InfoProfile>
      <Description>
        <Avatar src={avatar} alt={username} />
      </Description>

      <TextContent>
        <Username>{username}</Username>
        <Role>{role}</Role>
        <Social>
          <SocialIcon>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <FooterIconLn />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FooterGithub />
            </a>
          </SocialIcon>
        </Social>
      </TextContent>
    </InfoProfile>
  );
}
