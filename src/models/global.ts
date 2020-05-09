import { Effect, ImmerReducer } from 'umi';

export interface GlobalModelState {
  name: string;
}

export interface GlobalModelType {
  namespace: 'global';
  state: GlobalModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: ImmerReducer<GlobalModelState>;
  };
}

const DvaModel: GlobalModelType = {
  namespace: 'global',
  state: {
    name: '',
  },
  effects: {
    *query({ payload }, { call, put }) {
      yield put({
        type: 'save',
        payload: {
          name: 'xxx',
        },
      });
    },
  },
  reducers: {
    // 启用 immer 之后
    save(state, action) {
      state.name = action.payload;
    },
  },
};

export default DvaModel;
