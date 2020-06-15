import { mount } from "@vue/test-utils";
import AppButton from "@/components/button.vue";

describe("button.vue", () => {
  // 每个it测试一个小项目

  // 测试内容：props
  it("props test", () => {
    // 用mount挂载组件，生成一个包裹器wrapper
    // 自定义props传递给AppButton,判断组件是否有获取到props
    const wrapper = mount(AppButton, {
      propsData: {
        type: "success",
      },
    });

    // 断言已经获取到props
    expect(wrapper.props().type).toBe("success");

    // 每个it最后都应该销毁wrapper
    wrapper.destroy();
  });

  // 测试内容：computed
  it("computed test", () => {
    const wrapper = mount(AppButton);
    // 你可以通过 `wrapper.vm` 访问实际的 Vue 实例
    const vm = wrapper.vm;
    // console.log(vm, "vm-----",wrapper,)
    expect(vm.cssClasses).toBe("app-button app-button--primary");

    wrapper.destroy();
  });

  // 测试内容：methods
  // 点击按钮组件，正确触发事件
  it("click test", ()=>{
    const wrapper = mount(AppButton);
    const vm =  wrapper.vm;

    // 模拟点击事件
    wrapper.find("button").trigger('click')
    expect(vm.count).toBe(1);

    wrapper.destroy()
  })
});
