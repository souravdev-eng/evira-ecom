'use strict';

module.exports.handler = async (event) => {
  console.log(JSON.stringify(event));

  const returnValue = [
    {
      id: '123',
      name: 'demo',
    },
    {
      id: '345',
      name: 'demo 1122',
    },
  ];
  return [];
};
