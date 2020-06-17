import { mount } from "@vue/test-utils";
import AppButton from "@/components/button.vue";
// shallowMount和mount的区别？
// shallowMount是浅渲染，只挂载一个组件，不渲染子组件
// 如果一个组件包含很多子组件的话，重复渲染子组件可能会让我们的测试变慢

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
  it("click test", () => {
    const wrapper = mount(AppButton);
    const vm = wrapper.vm;

    // 模拟点击事件
    wrapper.find("button").trigger("click");
    expect(vm.count).toBe(1);

    wrapper.destroy();
  });

  // 使用 nextTick 编写异步测试代码
  // 使用async/await
  // it('updates text', async () => {
  //   const wrapper = mount(AppButton)
  //   await wrapper.trigger('click')
  //   expect(wrapper.text()).toContain('updated')
  //   await wrapper.trigger('click')
  //   wrapper.text().toContain('some different text')
  // })

  // emit
  // 每个挂载的包裹器都会通过其背后的 Vue 实例自动记录所有被触发的事件
  // 可以用 wrapper.emitted() 方法取回这些事件记录。
  it("emit test", () => {
    const wrapper = mount(AppButton);
    const vm = wrapper.vm;
    vm.$emit("foo");
    vm.$emit("aa", "123");
    /**
     * console.log(wrapper.emitted());//{ foo: [ [] ], aa: [ [ '123' ] ] }
     */

    //  断言事件被触发
    expect(wrapper.emitted().foo).toBeTruthy();

    // 断言事件被触发的次数
    expect(wrapper.emitted().foo.length).toBe(2);

    // 断言事件的有效数据
    expect(wrapper.emitted().foo[1]).toEqual([123]);
  });
});
