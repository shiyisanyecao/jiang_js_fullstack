// 前端工作流 webpack parcel babel eslint
import { setAttribute } from './dom'
function _render (vnode) {
    if(typeof vnode === 'string') {
        const textNode = document.createTextNode(vnode);
        return textNode;
    }
    if(typeof vnode.tag === 'function') {
        // 在jsx里 标签<Counter />
        // 普通标签 就会来到_render
        // 不是普通 function Component
        // 实例化 生命周期函数 render方法 
        console.log(vnode);
        const component = createComponent(vnode.tag, vnode.attrs);
        setComponentProps(component, vnode.attrs);
        return component.base;
    }
    const dom = document.createElement(vnode.tag);
    if(vnode.attrs) {
        Object.keys(vnode.attrs).forEach(key => {
            // if(key === 'className') key = 'class';
            // dom.setAttribute(key, vnode.attrs[key]);
            const value = vnode.attrs[key];
            // 不是简单的setAttribute  而是 onClick className {obj}
            setAttribute(dom, key, value);
        })
    }
    vnode.children.forEach(child => render(child, dom));
    return dom;
}
export function render (vnode, container) {
    return container.appendChild(_render(vnode))
}
function setComponentProps (component, props) {
    renderComponent(component);
}
export function renderComponent (component) {
    let base;
    const renderer = component.render();
    base = _render(renderer);
    component.base = base;
}
function createComponent (component, props) {
    // console.log(component, props);
    let inst;
    if(component.prototype && component.prototype.render) {
        inst = new component(props);
    }
    return inst;
}