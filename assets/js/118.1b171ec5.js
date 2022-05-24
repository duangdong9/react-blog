(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{530:function(t,e,s){"use strict";s.r(e);var a=s(18),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("本章我们会讲解"),s("code",[t._v("Fiber节点")]),t._v("是如何被创建并构建"),s("code",[t._v("Fiber树")]),t._v("的。")]),t._v(" "),s("p",[s("code",[t._v("render阶段")]),t._v("开始于"),s("code",[t._v("performSyncWorkOnRoot")]),t._v("或"),s("code",[t._v("performConcurrentWorkOnRoot")]),t._v("方法的调用。这取决于本次更新是同步更新还是异步更新。")]),t._v(" "),s("p",[t._v("我们现在还不需要学习这两个方法，只需要知道在这两个方法中会调用如下两个方法：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// performSyncWorkOnRoot会调用该方法")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("workLoopSync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workInProgress "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("performUnitOfWork")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workInProgress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// performConcurrentWorkOnRoot会调用该方法")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("workLoopConcurrent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workInProgress "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shouldYield")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("performUnitOfWork")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workInProgress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("可以看到，他们唯一的区别是是否调用"),s("code",[t._v("shouldYield")]),t._v("。如果当前浏览器帧没有剩余时间，"),s("code",[t._v("shouldYield")]),t._v("会中止循环，直到浏览器有空闲时间后再继续遍历。")]),t._v(" "),s("p",[s("code",[t._v("workInProgress")]),t._v("代表当前已创建的"),s("code",[t._v("workInProgress fiber")]),t._v("。")]),t._v(" "),s("p",[s("code",[t._v("performUnitOfWork")]),t._v("方法会创建下一个"),s("code",[t._v("Fiber节点")]),t._v("并赋值给"),s("code",[t._v("workInProgress")]),t._v("，并将"),s("code",[t._v("workInProgress")]),t._v("与已创建的"),s("code",[t._v("Fiber节点")]),t._v("连接起来构成"),s("code",[t._v("Fiber树")]),t._v("。")]),t._v(" "),s("blockquote",[s("p",[t._v("你可以从"),s("a",{attrs:{href:"https://github.com/facebook/react/blob/970fa122d8188bafa600e9b5214833487fbf1092/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L1599",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("看到"),s("code",[t._v("workLoopConcurrent")]),t._v("的源码")])]),t._v(" "),s("p",[t._v("我们知道"),s("code",[t._v("Fiber Reconciler")]),t._v("是从"),s("code",[t._v("Stack Reconciler")]),t._v("重构而来，通过遍历的方式实现可中断的递归，所以"),s("code",[t._v("performUnitOfWork")]),t._v("的工作可以分为两部分：“递”和“归”。")]),t._v(" "),s("h2",{attrs:{id:"递-阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#递-阶段"}},[t._v("#")]),t._v(" “递”阶段")]),t._v(" "),s("p",[t._v("首先从"),s("code",[t._v("rootFiber")]),t._v("开始向下深度优先遍历。为遍历到的每个"),s("code",[t._v("Fiber节点")]),t._v("调用"),s("a",{attrs:{href:"https://github.com/facebook/react/blob/970fa122d8188bafa600e9b5214833487fbf1092/packages/react-reconciler/src/ReactFiberBeginWork.new.js#L3058",target:"_blank",rel:"noopener noreferrer"}},[t._v("beginWork方法"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("该方法会根据传入的"),s("code",[t._v("Fiber节点")]),t._v("创建"),s("code",[t._v("子Fiber节点")]),t._v("，并将这两个"),s("code",[t._v("Fiber节点")]),t._v("连接起来。")]),t._v(" "),s("p",[t._v("当遍历到叶子节点（即没有子组件的组件）时就会进入“归”阶段。")]),t._v(" "),s("h2",{attrs:{id:"归-阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#归-阶段"}},[t._v("#")]),t._v(" “归”阶段")]),t._v(" "),s("p",[t._v("在“归”阶段会调用"),s("a",{attrs:{href:"https://github.com/facebook/react/blob/970fa122d8188bafa600e9b5214833487fbf1092/packages/react-reconciler/src/ReactFiberCompleteWork.new.js#L652",target:"_blank",rel:"noopener noreferrer"}},[t._v("completeWork"),s("OutboundLink")],1),t._v("处理"),s("code",[t._v("Fiber节点")]),t._v("。")]),t._v(" "),s("p",[t._v("当某个"),s("code",[t._v("Fiber节点")]),t._v("执行完"),s("code",[t._v("completeWork")]),t._v("，如果其存在"),s("code",[t._v("兄弟Fiber节点")]),t._v("（即"),s("code",[t._v("fiber.sibling !== null")]),t._v("），会进入其"),s("code",[t._v("兄弟Fiber")]),t._v("的“递”阶段。")]),t._v(" "),s("p",[t._v("如果不存在"),s("code",[t._v("兄弟Fiber")]),t._v("，会进入"),s("code",[t._v("父级Fiber")]),t._v("的“归”阶段。")]),t._v(" "),s("p",[t._v("“递”和“归”阶段会交错执行直到“归”到"),s("code",[t._v("rootFiber")]),t._v("。至此，"),s("code",[t._v("render阶段")]),t._v("的工作就结束了。")]),t._v(" "),s("h2",{attrs:{id:"例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),s("p",[t._v("以上一节的例子举例：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("App")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      i am\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("span"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("KaSong"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("span"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nReactDOM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("App "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("对应的"),s("code",[t._v("Fiber树")]),t._v("结构：\n"),s("img",{attrs:{src:t.$withBase("/img/fiber.png"),alt:"Fiber架构"}})]),t._v(" "),s("p",[s("code",[t._v("render阶段")]),t._v("会依次执行：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(". rootFiber beginWork\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(". App Fiber beginWork\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(". div Fiber beginWork\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(". "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"i am"')]),t._v(" Fiber beginWork\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(". "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"i am"')]),t._v(" Fiber completeWork\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(". span Fiber beginWork\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(". span Fiber completeWork\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(". div Fiber completeWork\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(". App Fiber completeWork\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(". rootFiber completeWork\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("之所以没有 “KaSong” Fiber 的 beginWork/completeWork，是因为作为一种性能优化手段，针对只有单一文本子节点的"),s("code",[t._v("Fiber")]),t._v("，"),s("code",[t._v("React")]),t._v("会特殊处理。")])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("自己试一试 Demo")]),t._v(" "),s("p",[t._v("我在"),s("code",[t._v("beginWork")]),t._v("和"),s("code",[t._v("completeWork")]),t._v("调用时打印"),s("code",[t._v("fiber.tag")]),t._v("和"),s("code",[t._v("fiber.type")]),t._v("。")]),t._v(" "),s("p",[t._v("你可以从"),s("a",{attrs:{href:"https://github.com/facebook/react/blob/970fa122d8188bafa600e9b5214833487fbf1092/packages/react-reconciler/src/ReactWorkTags.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("ReactWorkTags.js"),s("OutboundLink")],1),t._v("看到"),s("code",[t._v("Fiber节点")]),t._v("的所有"),s("code",[t._v("tag")]),t._v("定义。")]),t._v(" "),s("p",[t._v("相信多调试几次，你一定能明白方法的调用顺序")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/source-code/me.html"}},[t._v("关注公众号")]),t._v("，后台回复"),s("strong",[t._v("904")]),t._v("获得在线Demo地址")],1)]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("performUnitOfWork 的递归版本")]),t._v(" "),s("p",[t._v("如果将"),s("code",[t._v("performUnitOfWork")]),t._v("转化为递归版本，大体代码如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("performUnitOfWork")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fiber")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行beginWork")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fiber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("performUnitOfWork")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fiber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行completeWork")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fiber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sibling"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("performUnitOfWork")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fiber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sibling"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("本节我们介绍了"),s("code",[t._v("render阶段")]),t._v("会调用的方法。在接下来两节中，我们会讲解"),s("code",[t._v("beginWork")]),t._v("和"),s("code",[t._v("completeWork")]),t._v("做的具体工作。")]),t._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://indepth.dev/the-how-and-why-on-reacts-usage-of-linked-list-in-fiber-to-walk-the-components-tree/",target:"_blank",rel:"noopener noreferrer"}},[t._v("The how and why on React’s usage of linked list in Fiber to walk the component’s tree"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://indepth.dev/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Inside Fiber: in-depth overview of the new reconciliation algorithm in React"),s("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);