import {
  Button,
  Flex,
  UploadCard,
  UploadCardRef as Ref,
  useNotification,
  UploadCardProps,
} from '@captalys-platform/core';
import BrowserOnly from '@docusaurus/BrowserOnly';
import React, { useRef } from 'react';

export function UploadCardExample(props: UploadCardProps) {
  return (
    <BrowserOnly fallback={<div>Carregando ...</div>}>
      {() => <Example {...props} />}
    </BrowserOnly>
  );
}

function Example(props: UploadCardProps) {
  const uploadCardRef = useRef<Ref>(null);

  const { showNotification } = useNotification();

  const submit = async () => {
    if (uploadCardRef?.current?.files.length) {
      const responses = await uploadCardRef.current.submit({
        endpoint: 'https://httpbin.org/post',
      });

      console.log({ responses });
    } else {
      showNotification({
        variant: 'danger',
        message: 'CADE OS ARQUIVOS?',
      });
    }
  };

  return (
    <Flex gap="small">
      <UploadCard
        {...props}
        accept={['image/*', 'video/*', 'application/pdf']}
        acceptLabel="PNG, JPEG, GIF, PDF"
        onChange={(value) => console.log({ value })}
        onUnsupportedFile={(file) => {
          showNotification({
            variant: 'danger',
            message: 'Arquivo não suportado !',
            autoClose: 10,
          });
        }}
        ref={uploadCardRef}
      />
      <Flex flexDirection="row" gap="small">
        <Button size="small" text="Enviar" onClick={submit} />
        <Button
          size="small"
          text="Resetar"
          onClick={() => uploadCardRef.current?.removeAll()}
        />
      </Flex>
    </Flex>
  );
}

export function UploadCardCompactExample(props: UploadCardProps) {
  return (
    <BrowserOnly fallback={<div>Carregando ...</div>}>
      {() => <CompactExample {...props} />}
    </BrowserOnly>
  );
}

function CompactExample(props: UploadCardProps) {
  const uploadCardRef = useRef<Ref>(null);

  const { showNotification } = useNotification();

  const submit = async () => {
    if (uploadCardRef?.current?.files.length) {
      const responses = await uploadCardRef.current.submit({
        endpoint: 'https://httpbin.org/post',
      });

      console.log({ responses });
    } else {
      showNotification({
        variant: 'danger',
        message: 'CADE OS ARQUIVOS?',
      });
    }
  };

  return (
    <Flex gap="small">
      <UploadCard
        {...props}
        compact
        accept={['image/*', 'video/*', 'application/pdf']}
        acceptLabel="PNG, JPEG, GIF, PDF"
        onChange={(value) => console.log({ value })}
        onUnsupportedFile={(file) => {
          showNotification({
            variant: 'danger',
            message: 'Arquivo não suportado !',
            autoClose: 10,
          });
        }}
        ref={uploadCardRef}
      />
      <Flex flexDirection="row" gap="small">
        <Button size="small" text="Enviar" onClick={submit} />
        <Button
          size="small"
          text="Resetar"
          onClick={() => uploadCardRef.current?.removeAll()}
        />
      </Flex>
    </Flex>
  );
}
