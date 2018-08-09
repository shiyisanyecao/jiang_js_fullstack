1. jsx(react-jsx-plugin)->vnode(createElement)->DOM(render)

2. Component(render的第三种方式 react-jsx vnode.tag 变成function Counter) -> 标签化组件 -> Counter(extends) -> Component类 -> render(jsx) -> reactDOM.render()

3. 响应式setState() 为了达到DOM的更新 将整个DOM片段都替换掉了
a. 新生成整个的组件DOM树 重新挂载 100行DOMhtml
b. 只将setState关联的那一小段DOM 在原来DOM的基础上做一下修改 将修改反应到DOM上 1行
100:1 html树 DOM开销是一般开销计算的100-1000倍 
重绘 replaceChild
重排 

react DOM diff 算法
需求是：减少DOM操作
setState 对应的DOM 部分
setState 返回新的vnode -> 跟旧的DOM对比 将新的内存DOM (虚拟DOM) 旧的DOM 对比
树状结构 都是一棵树 采用算法 就可以比较出差异点 在相差的地方 进行真实DOM操作