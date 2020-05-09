import React from 'react';
import { useAccess, Access, useModel } from 'umi';

const WelcomePage = () => {
  const access = useAccess();
  const { initialState } = useModel('@@initialState');
  return (
    <div>
      <div>Welcome Page,Hello</div>
      <div>InitState,Data {JSON.stringify(initialState)}</div>
    </div>
  );
};

export default WelcomePage;
