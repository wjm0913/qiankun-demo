// /src/qiankun/action.js
function emptyAction() {
  // 提示当前使用的是空 Action
  console.warn("Current execute action is empty!");
}

class BaseAction {
  // 默认值为空 Action
  actions = {
    onGlobalStateChange: emptyAction,
    setGlobalState: emptyAction,
  };

  /**
   * 设置 actions
   */
  setActions(actions) {
    this.actions = actions;
  }

  /**
   * 映射
   */
  onGlobalStateChange() {
    return this.actions.onGlobalStateChange(...arguments);
  }

  /**
   * 映射
   */
  setGlobalState() {
    return this.actions.setGlobalState(...arguments);
  }
}

const baseAction = new BaseAction();
export default baseAction;
