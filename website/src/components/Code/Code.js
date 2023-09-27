import React from 'react';
import components from '@theme/MDXComponents';

export function Code({ children, language = 'jsx' }) {
  return (
    <components.pre>
      <components.code
        children={children}
        className={`language-${language}`}
        mdxType="code"
        originalType="code"
        parentName="pre"
      />
    </components.pre>
  );
}
