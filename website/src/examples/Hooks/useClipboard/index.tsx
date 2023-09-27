import React, { useState } from 'react';
import { Flex, TextArea, Button, useClipboard } from '@captalys-platform/core';

export function UseClipboardExample() {
  const [inputValue, setInputValue] = useState(
    'super important text to long to type manually'
  );

  const { onCopy, hasCopied } = useClipboard(inputValue);

  return (
    <Flex gap="large">
      <TextArea
        size="compact"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <Button
        size="extraSmall"
        variant="outlined"
        onClick={onCopy}
        text={hasCopied ? 'Copiado' : 'Copiar'}
      />

      <TextArea size="compact" placeholder="Cole Aqui" />
    </Flex>
  );
}
