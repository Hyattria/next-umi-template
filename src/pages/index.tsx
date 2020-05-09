import React from 'react';
import { GlobalModelState, ConnectRC, Loading, useModel, connect } from 'umi';

interface PageProps {
  global: GlobalModelState;
  loading: boolean;
}

const IndexPage: ConnectRC<PageProps> = ({ global }) => {
  const { name } = global;
  // const { initialState } = useModel('@@initialState');

  return (
    <React.Fragment>
      {/* <div>InitState,Data {JSON.stringify(initialState)}</div> */}
      Hello {name}
    </React.Fragment>
  );
};

export default connect(({ global, loading }: { global: GlobalModelState; loading: Loading }) => ({
  global,
  loading: loading.models.index,
}))(IndexPage);
