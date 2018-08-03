import { setAttribute } from './dom.js';
/**
 * 将虚拟DOM变真实DOM
 * @params vnode 虚拟DOM
 * @return 返回DOM
 */
function _render(vnode) {
    // 1. 递归 将结点转成DOM 子结点递归 出口就是文本结点
    // 2. 结点类型 三种情况：文本结点 return createTextNode() 退出
    // 标签结点 createElement attrs children递归_render
    // component render(return jsx)
    // return document.createTextNode('render');
    if(vnode === undefined || vnode === null || typeof vnode === 'boolean') {
        vnode = '';
    }
    if(typeof vnode === 'string') {
        let textNode = document.createTextNode(vnode);
        return textNode;
    }
    const dom = document.createElement(vnode.tag);
    if(vnode.attrs) {
        Object.keys(vnode.attrs).forEach(key => {
            const value = vnode.attrs[key];
            setAttribute(dom, key, value);
        })
    }

    if(vnode.children) {
        vnode.children.forEach(child => render(child, dom));
    }
    return dom;
}

export function render (vnode, container) {
    // console.log(vnode, container);
    return container.appendChild(_render(vnode));
}