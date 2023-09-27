import { AutoTable } from '@captalys-platform/core';
import React from 'react';
import './clear.css';

const formatToBRL = numb => `RS ${numb},00`;

export const headerSource = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sortable: true,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Number',
    dataIndex: 'number',
    key: 'number',
    dataHandler: numb => formatToBRL(numb)
  },
  {
    title: 'Nickname',
    dataIndex: 'nickname',
    key: 'nickname'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Address1',
    dataIndex: 'address1',
    key: 'address1',
    sortable: true,
  },
  {
    title: 'Address2',
    dataIndex: 'address2',
    key: 'address2'
  },
  {
    title: 'Address3',
    dataIndex: 'address3',
    key: 'address3'
  }
];

export const dataSource = [
  {
    name: 'Mike',
    nickname: 'Mike',
    age: '32',
    number: '32',
    address: '10 Downing Street',
    address1: '10 Downing Street',
    address2: '10 Downing Street',
    address3: '10 Downing Street'
  },
  {
    name: 'John Cena',
    nickname: 'John Cena',
    age: '42',
    number: '42',
    address: '10 Downing Street',
    address1: '10 Downing Street',
    address2: '10 Downing Street',
    address3: '10 Downing Street'
  },
  {
    name: 'John',
    nickname: 'John',
    age: '42',
    number: '42',
    address: '10 Downing Street',
    address1: '10 Downing Street',
    address2: '10 Downing Street',
    address3: '10 Downing Street'
  }
];

export const AutoTableWithSortExample = () => (
  <AutoTable sortable={true} headerSource={headerSource} dataSource={dataSource} />
);
