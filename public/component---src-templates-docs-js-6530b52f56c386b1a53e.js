(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{141:function(e,t,n){"use strict";n.r(t);var o=n(0),s=n.n(o),r=n(454),a=n(266),i=n.n(a),c=(n(52),n(282),n(53),n(283),n(77),n(78),n(285),n(79),n(54),n(76),n(7)),d=n.n(c),u=n(157),l=n(453),m=(n(151),n(167)),f=n.n(m),p=l.a.SubMenu,g=function(e){function t(t){var n;(n=e.call(this,t)||this).findCurrentSection=function(){var e=2;return"docs/"===n.props.docs.edges.find(function(e){return e.node.id===n.props.id}).node.fields.slug&&(e=1),n.state.docsSections.some(function(t){return n.props.docs.edges.find(function(e){return e.node.id===n.props.id}).node.fields.slug.split("/").slice(0,e).join("/")===t.slug})?[n.state.docsSections.find(function(t){return n.props.docs.edges.find(function(e){return e.node.id===n.props.id}).node.fields.slug.split("/").slice(0,e).join("/")===t.slug}).id]:[]},n.compareSections=function(e,t){return e.frontmatter.sort>t.frontmatter.sort?1:t.frontmatter.sort>e.frontmatter.sort?-1:0},n.state={docsSections:[],currentSectionId:""};var o=[];return t.docs.edges.forEach(function(e){var t=e.node.fields.slug.split("/")[1];Object.keys(e.node.fields.slug.split("/")).length<=2?o.push(e.node):(n.state.docsSections.some(function(e){return e.name===t})||n.state.docsSections.push({name:t,slug:"docs/"+t,frontmatter:{sort:0},nodes:[]}),n.state.docsSections.find(function(e){return e.name===t}).nodes.push(e.node))}),o.forEach(function(e){n.state.docsSections.some(function(t){return t.slug===e.fields.slug})?(n.state.docsSections.find(function(t){return t.slug===e.fields.slug}).id=e.id,n.state.docsSections.find(function(t){return t.slug===e.fields.slug}).title=e.frontmatter.title,n.state.docsSections.find(function(t){return t.slug===e.fields.slug}).frontmatter.sort+=e.frontmatter.sort,n.state.docsSections.find(function(t){return t.slug===e.fields.slug}).nodes.unshift(e)):n.state.docsSections.push(e)}),n.state.docsSections=n.state.docsSections.sort(n.compareSections),n}return d()(t,e),t.prototype.render=function(){return s.a.createElement(l.a,{mode:"inline",selectedKeys:[this.props.id],defaultOpenKeys:this.findCurrentSection()},this.state.docsSections.map(function(e){return void 0!==e.nodes?s.a.createElement(p,{key:e.id,title:e.title},e.nodes.map(function(e){return s.a.createElement(l.a.Item,{key:e.id},s.a.createElement(u.Link,{to:"/"+e.fields.slug,className:f.a.navItem},e.frontmatter.title))})):s.a.createElement(l.a.Item,{key:e.id},s.a.createElement(u.Link,{to:"/"+e.fields.slug,className:f.a.navItem},e.frontmatter.title))}))},t}(s.a.Component),h=function(e){var t=e.version;return s.a.createElement("div",{className:f.a.docsVersion},s.a.createElement("span",null,"Jumbo Documentation v",t))},v=r.a.Sider,E=function(e){var t=e.id,n=e.docs,o=e.version;return s.a.createElement(v,{className:f.a.sider,width:300,breakpoint:"xl",collapsible:"true",collapsedWidth:0},s.a.createElement(h,{version:o}),s.a.createElement(g,{id:t,docs:n}))},w=n(189),y=n(190),S=n(451),k=n(188),b=n(455),x=(s.a.Component,n(359)),C=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))||this).type=function(e){switch(t.props.type){case"warning":return f.a.warning;case"tip":return f.a.tip;default:return f.a.info}}(),t.icon=function(e){switch(t.props.type){case"warning":return"warning";case"tip":return"check-circle";default:return"info-circle"}}(),t}return d()(t,e),t.prototype.render=function(){return s.a.createElement("div",{className:[f.a.box,this.type].join(" ")},s.a.createElement(k.a,{type:this.icon,theme:"filled",className:f.a.icon}),s.a.createElement("span",{className:f.a.boxContent},s.a.createElement(x,{source:this.props.text,className:this.props.type})))},t}(o.Component);C.defaultProps={type:"info",text:""};var N=C;n.d(t,"query",function(){return L}),n(436);var I=r.a.Content,j=new i.a({createElement:s.a.createElement,components:{"hint-box":N}}).Compiler,L="1639425734";t.default=function(e){var t=e.data,n=t.markdownRemark,o=t.allMarkdownRemark,a=t.site.siteMetadata.version;return s.a.createElement(r.a,{hasSider:!0},s.a.createElement(E,{id:n.id,docs:o,version:a}),s.a.createElement(r.a,{className:f.a.docsLayout},s.a.createElement(w.a,null),s.a.createElement(I,null,s.a.createElement("div",{className:f.a.markdown},j(n.htmlAst))),s.a.createElement(y.a,null)))}},167:function(e,t,n){e.exports={sider:"docs-module--sider--mMVkg",docsLayout:"docs-module--docs-layout--i6yHq",drawerButton:"docs-module--drawer-button--3tSPW",navItem:"docs-module--nav-item--1CYRy",docsVersion:"docs-module--docs-version--2Ongw",markdown:"docs-module--markdown--1yFWf",box:"docs-module--box--2eF3r",info:"docs-module--info--O4AY0",warning:"docs-module--warning--2Z4vu",tip:"docs-module--tip--2gh6C",icon:"docs-module--icon--2_N23",boxContent:"docs-module--box-content--mqjXE"}}}]);
//# sourceMappingURL=component---src-templates-docs-js-6530b52f56c386b1a53e.js.map