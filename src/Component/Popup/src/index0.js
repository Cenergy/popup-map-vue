import Vue from "vue";

class Component2HTML {
  constructor(options) {
    const { type, option, components } = options;
    this.type = type;
    this.option = option;
    this.components = components;
    this.Template = null;
    this.instance = null;
  }
  getDOMElement() {
    if (!this.type) return;
    this.getPopover(this.type);
  }
  getPopover(_str) {
    this.Template = Vue.extend(components[_str]);
  }
  initInstance(data) {
    this.instance = new this.Template({
      data,
      el: document.createElement("div")
    });
    this.instance.callback = defaultCallback;
  }
}
