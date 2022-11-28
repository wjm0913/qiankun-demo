import { initGlobalState } from 'qiankun';
import baseAction from "./baseAction";


const initialState = {
  user: {
    name:'wjm',
    age: 18
  }
};

const actions = initGlobalState(initialState);

actions.onGlobalStateChange((state, prev) => {
  for(const key in state) {
    initialState[key] = state[key];
  }
})
actions.getGlobalState = (key) => {
  return key ? initialState[key] : initialState;
}

export default actions;
baseAction.setActions(actions)
