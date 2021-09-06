(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{681:function(t,s,a){"use strict";a.r(s);var e=a(59),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title)+" "),a("MigrationBadges",{attrs:{badges:t.$frontmatter.badges}})],1),t._v(" "),a("h2",{attrs:{id:"概览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概览"}},[t._v("#")]),t._v(" 概览")]),t._v(" "),a("p",[t._v("过渡类名 "),a("code",[t._v("v-enter")]),t._v(" 修改为 "),a("code",[t._v("v-enter-from")]),t._v("、过渡类名 "),a("code",[t._v("v-leave")]),t._v(" 修改为 "),a("code",[t._v("v-leave-from")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"_2-x-语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-x-语法"}},[t._v("#")]),t._v(" 2.x 语法")]),t._v(" "),a("p",[t._v("在 v2.1.8 版本之前，为过渡指令提供了两个过渡类名对应初始和激活状态。")]),t._v(" "),a("p",[t._v("在 v2.1.8 版本中，引入 "),a("code",[t._v("v-enter-to")]),t._v(" 来定义 enter 或 leave 变换之间的过渡动画插帧，为了向下兼容，并没有变动 "),a("code",[t._v("v-enter")]),t._v(" 类名：")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".v-enter,\n.v-leave-to")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("opacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".v-leave,\n.v-enter-to")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("opacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("这样做会带来很多困惑，类似 "),a("em",[t._v("enter")]),t._v(" 和 "),a("em",[t._v("leave")]),t._v(" 含义过于宽泛并且没有遵循类名钩子的命名约定。")]),t._v(" "),a("h2",{attrs:{id:"_3-x-语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-x-语法"}},[t._v("#")]),t._v(" 3.x 语法")]),t._v(" "),a("p",[t._v("为了更加明确易读，我们现在将这些初始状态重命名为：")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".v-enter-from,\n.v-leave-to")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("opacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".v-leave-from,\n.v-enter-to")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("opacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("现在，这些状态之间的区别就清晰多了。")]),t._v(" "),a("p",[a("code",[t._v("<transition>")]),t._v(" 组件相关属性名也发生了变化：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("leave-class")]),t._v(" 已经被重命名为 "),a("code",[t._v("leave-from-class")]),t._v(" (在渲染函数或 JSX 中可以写为："),a("code",[t._v("leaveFromClass")]),t._v(")")]),t._v(" "),a("li",[a("code",[t._v("enter-class")]),t._v(" 已经被重命名为 "),a("code",[t._v("enter-from-class")]),t._v(" (在渲染函数或 JSX 中可以写为："),a("code",[t._v("enterFromClass")]),t._v(")")])]),t._v(" "),a("h2",{attrs:{id:"迁移策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#迁移策略"}},[t._v("#")]),t._v(" 迁移策略")]),t._v(" "),a("ol",[a("li",[t._v("将 "),a("code",[t._v(".v-enter")]),t._v(" 字符串实例替换为 "),a("code",[t._v(".v-enter-from")])]),t._v(" "),a("li",[t._v("将 "),a("code",[t._v(".v-leave")]),t._v(" 字符串实例替换为 "),a("code",[t._v(".v-leave-from")])]),t._v(" "),a("li",[t._v("过渡组件相关属性名也需要进行字符串实例替换，规则如上所述。")])]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/guide/migration/transition-as-root.html"}},[a("code",[t._v("<Transition>")]),t._v(" 作为根元素不再从外界被切换")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/guide/migration/transition-group.html"}},[a("code",[t._v("<TransitionGroup>")]),t._v(" 现在默认不渲染包裹器元素")])],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);