import {
  Flex,
  Icon as IconComponent,
  IconProps,
  Typography,
  useClipboard,
  useNotification,
} from '@captalys-platform/core';
import BrowserOnly from '@docusaurus/BrowserOnly';
import React from 'react';

export function Icon(props) {
  return (
    <BrowserOnly fallback={<div>Carregando...</div>}>
      {() => <IconComponent {...props} />}
    </BrowserOnly>
  );
}

export function IconSrcExample(props: IconProps) {
  return (
    <BrowserOnly fallback={<div>Carregando...</div>}>
      {() => (
        <IconComponent
          src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/regular/clipboard.svg"
          {...props}
        />
      )}
    </BrowserOnly>
  );
}

const Container: React.FC = ({ children }) => {
  return (
    <BrowserOnly fallback={<div>Carregando...</div>}>
      {() => (
        <div
          style={{
            display: 'grid',
            gridGap: '1rem',
            gridTemplateColumns: 'repeat(auto-fill, minmax(6rem, 1fr))',
            fontSize: '2rem',
          }}
        >
          {children}
        </div>
      )}
    </BrowserOnly>
  );
};

const IconBox = ({ name }) => {
  const { onCopy, hasCopied } = useClipboard(name);
  const { showNotification } = useNotification();

  React.useEffect(() => {
    if (hasCopied) {
      showNotification({
        autoClose: 2,
        title: 'Copiado',
        message: name,
      });
    }
  }, [hasCopied, name]);

  return (
    <Flex
      p="xs"
      alignItems="center"
      justifyContent="center"
      borderWidth="thin"
      borderStyle="solid"
      borderColor="grayscale.20"
      round="micro"
      onClick={onCopy}
      gap="medium"
    >
      <IconComponent name={name} />
      <Typography text={name} fontSize="micro" />
    </Flex>
  );
};

export function IconArrow() {
  return (
    <Container>
      <IconBox name="arrowLeft" />
      <IconBox name="arrowRight" />
      <IconBox name="sort" />
      <IconBox name="sortUp" />
      <IconBox name="sortDown" />
      <IconBox name="chevronLeft" />
      <IconBox name="chevronRight" />
      <IconBox name="chevronUp" />
      <IconBox name="chevronDown" />
      <IconBox name="arrowCircleUp" />
      <IconBox name="arrowCircleDown" />
      <IconBox name="arrowCircleLeft" />
      <IconBox name="arrowCircleRight" />
    </Container>
  );
}

export function IconEmoji() {
  return (
    <Container>
      <IconBox name="emojiAngry" />
      <IconBox name="emojiBeamSweat" />
      <IconBox name="emojiSadTear" />
      <IconBox name="emojiSquintTear" />
      <IconBox name="emojiTired" />
      <IconBox name="emojiTongue" />
      <IconBox name="emojiTongueSquint" />
      <IconBox name="emojiStar" />
    </Container>
  );
}

export function IconAlert() {
  return (
    <Container>
      <IconBox name="alertInfo" />
      <IconBox name="attention" />
      <IconBox name="roundedInfo" />
      <IconBox name="roundedAttention" />
    </Container>
  );
}

export function IconAlign() {
  return (
    <Container>
      <IconBox name="alignCenter" />
      <IconBox name="alignJustify" />
      <IconBox name="alignLeft" />
      <IconBox name="alignRight" />
    </Container>
  );
}

export function IconFile() {
  return (
    <Container>
      <IconBox name="file" />
      <IconBox name="filePdf" />
      <IconBox name="picture" />
      <IconBox name="pictures" />
      <IconBox name="upload" />
    </Container>
  );
}

export function IconInterface() {
  return (
    <Container>
      <IconBox name="pen" />
      <IconBox name="spinner" />
      <IconBox name="roundedCheck" />
      <IconBox name="ellipsisH" />
      <IconBox name="menuBars" />
      <IconBox name="trash" />
      <IconBox name="times" />
      <IconBox name="clock" />
      <IconBox name="minus" />
      <IconBox name="check" />
      <IconBox name="plus" />
      <IconBox name="cog" />
      <IconBox name="edit" />
      <IconBox name="signIn" />
      <IconBox name="signOut" />
      <IconBox name="search" />
    </Container>
  );
}

export function IconMedia() {
  return (
    <Container>
      <IconBox name="playCircle" />
    </Container>
  );
}

export function IconSocial() {
  return (
    <Container>
      <IconBox name="shareAlt" />
      <IconBox name="shareSquare" />
      <IconBox name="thumbsUp" />
      <IconBox name="thumbsDown" />
    </Container>
  );
}

export function IconStatus() {
  return (
    <Container>
      <IconBox name="ban" />
      <IconBox name="unlink" />
      <IconBox name="phoneAlt" />
      <IconBox name="phoneSlash" />
      <IconBox name="running" />
    </Container>
  );
}

export function IconUser() {
  return (
    <Container>
      <IconBox name="user" />
      <IconBox name="users" />
      <IconBox name="userConfig" />
      <IconBox name="userAdd" />
      <IconBox name="userDelete" />
      <IconBox name="userLocked" />
      <IconBox name="userEdit" />
      <IconBox name="userCheck" />
      <IconBox name="userBlock" />
      <IconBox name="userInvalid" />
    </Container>
  );
}

export const colors = [
  'primary',
  'primary.light',
  'primary.action',
  'primary.dark',
  'secondary',
  'secondary.light',
  'secondary.action',
  'secondary.dark',
  'danger',
  'danger.light',
  'danger.action',
  'danger.dark',
  'success',
  'success.light',
  'success.action',
  'success.dark',
  'warning',
  'warning.light',
  'warning.action',
  'warning.dark',
  'neutral.0',
  'neutral.5',
  'neutral.10',
  'neutral.20',
  'neutral.30',
  'neutral.40',
  'neutral.50',
  'neutral.60',
  'neutral.70',
  'neutral.80',
  'neutral.90',
  'neutral.100',
  'neutral.110',
  'neutral.120',
  'neutral.130',
  'neutral.150',
  'neutral.160',
  'neutral.170',
  'neutral.180',
  'grayscale.0',
  'grayscale.5',
  'grayscale.10',
  'grayscale.20',
  'grayscale.30',
  'grayscale.40',
  'grayscale.50',
  'grayscale.60',
  'grayscale.70',
  'grayscale.80',
  'grayscale.90',
  'grayscale.100',
];

export const sizes = ['xs', 'small', 'medium', 'large', 'xl', 'xxl', 'giant'];
