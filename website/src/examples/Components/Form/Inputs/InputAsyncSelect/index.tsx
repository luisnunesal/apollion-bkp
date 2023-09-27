import { InputSelect } from '@captalys-platform/core';
import BrowserOnly from '@docusaurus/BrowserOnly';
import React from 'react';
import { Interactive } from '../../../../../components/Interactive';

export function InputAsyncSelectExample() {
  return (
    <BrowserOnly fallback={<div>Carregando ...</div>}>
      {() => (
        <Interactive>
          <InputSelect
            loadOptions={(inputValue) => {
              // return fetchQuery(Environment, graphQLQuery, variables)
              return fetch(
                `https://jsonplaceholder.typicode.com/todos?filter=${inputValue}`
              )
                .then((res) => res.json())
                .then((response) => {
                  const options = response.map((item) => ({
                    value: item.id,
                    label: item.title,
                  }));

                  if (!inputValue) {
                    return options;
                  }

                  return options.filter((item) =>
                    item.label.includes(inputValue)
                  );
                });
            }}
          />
        </Interactive>
      )}
    </BrowserOnly>
  );
}
