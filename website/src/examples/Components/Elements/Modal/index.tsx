import {
  Button,
  Flex,
  Icon,
  Image,
  Modal,
  Typography,
  useToggle,
} from '@captalys-platform/core';
import BrowserOnly from '@docusaurus/BrowserOnly';
import React, { Fragment } from 'react';

const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim`;

export const ModalVariantExample = () => {
  return (
    <BrowserOnly fallback={<div>Carregando...</div>}>
      {() => (
        <Flex flexDirection="row" gap="small">
          <Modal
            variant="primary"
            tagline={content}
            title="Titulo"
            icon={<Icon name="cog" />}
            trigger={<Button text="Exibir Modal" />}
            onConfirm={({ close }) => close()}
          >
            <Typography variant="p" text={content} />
          </Modal>
          <Modal
            variant="warning"
            tagline={content}
            title="Titulo"
            icon={<Icon name="alertInfo" />}
            trigger={<Button color="warning" text="Exibir Modal" />}
            onConfirm={({ close }) => close()}
          >
            <Typography variant="p" text={content} />
          </Modal>
          <Modal
            variant="success"
            tagline={content}
            title="Titulo"
            icon={<Icon name="check" />}
            trigger={<Button color="success" text="Exibir Modal" />}
            onConfirm={({ close }) => close()}
          >
            <Typography variant="p" text={content} />
          </Modal>
          <Modal
            variant="danger"
            tagline={content}
            title="Titulo"
            icon={<Icon name="trash" />}
            trigger={<Button color="danger" text="Exibir Modal" />}
            onConfirm={({ close }) => close()}
          >
            <Typography variant="p" text={content} />
          </Modal>
        </Flex>
      )}
    </BrowserOnly>
  );
};

export const ControlledExample = () => {
  const { active, disable, enable } = useToggle(false);

  return (
    <BrowserOnly fallback={<div>Carregando...</div>}>
      {() => (
        <Fragment>
          <Button text="Exibir Modal" onClick={enable} />

          <Modal
            isOpen={active}
            onDismiss={disable}
            tagline={content}
            title="Titulo"
            icon={<Icon name="times" />}
          >
            <Typography variant="p" text={content} />
          </Modal>
        </Fragment>
      )}
    </BrowserOnly>
  );
};

export const UncontrolledExample = () => {
  return (
    <BrowserOnly fallback={<div>Carregando...</div>}>
      {() => (
        <Fragment>
          <Modal
            icon={<Icon name="times" />}
            trigger={<Button color="primary" text="Exibir Modal" />}
            tagline={content}
            title="Titulo"
          >
            <Flex
              gap="medium"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                style={{ width: 100, height: 'auto' }}
                src={
                  'https://avatars2.githubusercontent.com/u/19891059?s=460&u=98b1f0d4b0207ad22899b054332e4e87654bcaa3&v=4'
                }
              />
              <Image
                style={{ width: 100, height: 'auto' }}
                src={
                  'https://avatars2.githubusercontent.com/u/19891059?s=460&u=98b1f0d4b0207ad22899b054332e4e87654bcaa3&v=4'
                }
              />
              <Image
                style={{ width: 100, height: 'auto' }}
                src={
                  'https://avatars2.githubusercontent.com/u/19891059?s=460&u=98b1f0d4b0207ad22899b054332e4e87654bcaa3&v=4'
                }
              />
              <Image
                style={{ width: 100, height: 'auto' }}
                src={
                  'https://avatars2.githubusercontent.com/u/19891059?s=460&u=98b1f0d4b0207ad22899b054332e4e87654bcaa3&v=4'
                }
              />
              <Image
                style={{ width: 100, height: 'auto' }}
                src={
                  'https://avatars2.githubusercontent.com/u/19891059?s=460&u=98b1f0d4b0207ad22899b054332e4e87654bcaa3&v=4'
                }
              />
            </Flex>
          </Modal>
        </Fragment>
      )}
    </BrowserOnly>
  );
};

const ModalSize = ({ size, image }: any) => (
  <Modal
    trigger={<Button color="primary" text={`Modal ${size}`} />}
    tagline={content}
    title="Titulo"
    size={size}
  >
    <Flex flexDirection="row" justifyContent="center">
      <Image style={{ width: 300, height: 'auto' }} src={image} />
    </Flex>
  </Modal>
);

export const SizeExample = () => {
  return (
    <BrowserOnly fallback={<div>Carregando...</div>}>
      {() => (
        <Flex flexDirection="row" gap="large">
          <ModalSize
            size="small"
            image="https://media.giphy.com/media/1gUn2j2RKcK0yaLKaO/giphy.gif"
          />
          <ModalSize
            size="base"
            image="https://media.giphy.com/media/Zg7clvqHE3CdW/giphy.gif"
          />
          <ModalSize
            size="medium"
            image="https://media.giphy.com/media/ttK3cEDFJ48r6/giphy.gif"
          />
          <ModalSize
            size="large"
            image="https://media.giphy.com/media/f8XJK4RWej0rK/giphy.gif"
          />
        </Flex>
      )}
    </BrowserOnly>
  );
};

function ModalFooter({ footer }: any) {
  return (
    <Modal
      trigger={<Button color="primary" text={`Exibir "${footer}"`} />}
      tagline={content}
      title="Titulo"
      size="base"
      footer={footer}
      onConfirm={({ close }) => close()}
    >
      <Flex flexDirection="row" justifyContent="center">
        <Image
          style={{ width: 100, height: 'auto' }}
          src={
            'https://avatars2.githubusercontent.com/u/19891059?s=460&u=98b1f0d4b0207ad22899b054332e4e87654bcaa3&v=4'
          }
        />
      </Flex>
    </Modal>
  );
}

export function FooterExample() {
  return (
    <BrowserOnly fallback={<div>Carregando...</div>}>
      {() => (
        <Flex flexDirection="row" gap="large">
          <ModalFooter footer="expanded" />
          <ModalFooter footer="right" />
          <ModalFooter footer="full" />
        </Flex>
      )}
    </BrowserOnly>
  );
}
