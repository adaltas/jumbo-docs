(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{161:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(484),o=n(291),l=n.n(o),s=(n(310),n(93),n(66),n(38),n(311),n(313),n(91),n(315),n(7)),i=n.n(s),u=n(171),d=n(486),m=(n(166),n(187)),f=n.n(m),p=d.b.SubMenu,h=function(e){function t(t){var n;(n=e.call(this,t)||this).findCurrentSection=function(){var e=2;return"docs/"===n.props.docs.edges.find(function(e){return e.node.id===n.props.id}).node.fields.slug&&(e=1),n.state.docsSections.some(function(t){return n.props.docs.edges.find(function(e){return e.node.id===n.props.id}).node.fields.slug.split("/").slice(0,e).join("/")===t.slug})?[n.state.docsSections.find(function(t){return n.props.docs.edges.find(function(e){return e.node.id===n.props.id}).node.fields.slug.split("/").slice(0,e).join("/")===t.slug}).id]:[]},n.compareSections=function(e,t){return e.frontmatter.sort>t.frontmatter.sort?1:t.frontmatter.sort>e.frontmatter.sort?-1:0},n.state={docsSections:[],currentSectionId:""};var a=[];return t.docs.edges.forEach(function(e){var t=e.node.fields.slug.split("/")[1];Object.keys(e.node.fields.slug.split("/")).length<=2?a.push(e.node):(n.state.docsSections.some(function(e){return e.name===t})||n.state.docsSections.push({name:t,slug:"docs/"+t,frontmatter:{sort:0},nodes:[]}),n.state.docsSections.find(function(e){return e.name===t}).nodes.push(e.node))}),a.forEach(function(e){n.state.docsSections.some(function(t){return t.slug===e.fields.slug})?(n.state.docsSections.find(function(t){return t.slug===e.fields.slug}).id=e.id,n.state.docsSections.find(function(t){return t.slug===e.fields.slug}).title=e.frontmatter.title,n.state.docsSections.find(function(t){return t.slug===e.fields.slug}).frontmatter.sort+=e.frontmatter.sort,n.state.docsSections.find(function(t){return t.slug===e.fields.slug}).nodes.unshift(e)):n.state.docsSections.push(e)}),n.state.docsSections=n.state.docsSections.sort(n.compareSections),n}return i()(t,e),t.prototype.render=function(){return r.a.createElement(d.b,{mode:"inline",selectedKeys:[this.props.id],defaultOpenKeys:this.findCurrentSection()},this.state.docsSections.map(function(e){return void 0!==e.nodes?r.a.createElement(p,{key:e.id,title:e.title},e.nodes.map(function(e){return r.a.createElement(d.b.Item,{key:e.id},r.a.createElement(u.a,{to:"/"+e.fields.slug,className:f.a.navItem},e.frontmatter.title))})):r.a.createElement(d.b.Item,{key:e.id},r.a.createElement(u.a,{to:"/"+e.fields.slug,className:f.a.navItem},e.frontmatter.title))}))},t}(r.a.Component),E=function(e){var t=e.version;return r.a.createElement("div",{className:f.a.docsVersion},r.a.createElement("span",null,"Jumbo Documentation v",t))},g=c.a.Sider,v=function(e){var t=e.id,n=e.docs,a=e.version;return r.a.createElement(g,{className:f.a.sider,width:300,breakpoint:"xxl",collapsible:"true",collapsedWidth:0},r.a.createElement(E,{version:a}),r.a.createElement(h,{id:t,docs:n}))},b=n(184),y=n(185),w=n(483),C=n(217),S=n(488),k=(r.a.Component,n(383)),N=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).type=function(e){switch(t.props.type){case"warning":return f.a.warning;case"tip":return f.a.tip;default:return f.a.info}}(),t.icon=function(e){switch(t.props.type){case"warning":return"warning";case"tip":return"check-circle";default:return"info-circle"}}(),t}return i()(t,e),t.prototype.render=function(){return r.a.createElement("div",{className:[f.a.box,this.type].join(" ")},r.a.createElement(C.a,{type:this.icon,theme:"filled",className:f.a.icon}),r.a.createElement("span",{className:f.a.boxContent},r.a.createElement(k,{source:this.props.text,className:this.props.type})))},t}(a.Component);N.defaultProps={type:"info",text:""};var x=N;n.d(t,"query",function(){return j}),n(461);var M=c.a.Content,R=new l.a({createElement:r.a.createElement,components:{"hint-box":x}}).Compiler,j="1639425734";t.default=function(e){var t=e.data,n=t.markdownRemark,a=t.allMarkdownRemark,o=t.site.siteMetadata.version;return r.a.createElement(c.a,{hasSider:!0},r.a.createElement(v,{id:n.id,docs:a,version:o}),r.a.createElement(c.a,{className:f.a.docsLayout},r.a.createElement(b.a,null),r.a.createElement(M,null,r.a.createElement("div",{className:f.a.markdown},R(n.htmlAst))),r.a.createElement(y.a,null)))}},171:function(e,t,n){"use strict";n.d(t,"b",function(){return d});var a=n(0),r=n.n(a),c=n(5),o=n.n(c),l=n(35),s=n.n(l);n.d(t,"a",function(){return s.a});n(173);var i=r.a.createContext({});function u(e){var t=e.staticQueryData,n=e.data,a=e.query,c=e.render,o=n?n.data:t[a]&&t[a].data;return r.a.createElement(r.a.Fragment,null,o&&c(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,n=e.query,a=e.render,c=e.children;return r.a.createElement(i.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:n,render:a||c,staticQueryData:e})})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},173:function(e,t,n){var a;e.exports=(a=n(178))&&a.default||a},178:function(e,t,n){"use strict";n.r(t);n(36);var a=n(0),r=n.n(a),c=n(5),o=n.n(c),l=n(62),s=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},183:function(e){e.exports={data:{site:{siteMetadata:{title:"Jumbo",github:"http://github.com/adaltas/jumbo"}}}}},184:function(e,t,n){"use strict";var a=n(183),r=n(0),c=n.n(r),o=n(171),l=n(484),s=n(487),i=n(486),u=n(217),d=(n(36),function(){return c.a.createElement("svg",{width:"1.6em",height:"1.2em",strokeMiterlimit:"10",strokeLinecap:"square",stroke:"none",fill:"currentColor",viewBox:"0 0 800 600"},c.a.createElement("clipPath",{id:"p.0"},c.a.createElement("path",{id:"path2",clipRule:"nonzero",d:"m0 0l800.0 0l0 600.0l-800.0 0l0 -600.0z"})),c.a.createElement("g",{id:"g13",clipPath:"url(#p.0)"},c.a.createElement("path",{id:"path5",fillRule:"evenodd",d:"m0 0l800.0 0l0 600.0l-800.0 0z",fillOpacity:"0.0",fill:"#000000"}),c.a.createElement("path",{id:"path7",fillRule:"evenodd",d:"m500.40945 38.15223c-7.480316 0 -14.545929 4.2257233 -17.706055 11.456696l-9.524933 31.619423l-8.976379 -4.005249c-1.8923645 -0.83727264 -3.8608704 -1.2309723 -5.792633 -1.2309723c-5.3989563 0 -10.506561 3.089241 -12.845154 8.2729645l-4.005249 9.251968c-3.1758423 7.041992 0 15.325462 7.041992 18.501312l73.868744 32.997375c1.8556519 0.837265 3.7979126 1.2335968 5.7113037 1.2335968c5.3412476 0 10.451477 -3.0892334 12.790039 -8.275589l4.1417236 -9.249344c3.1758423 -7.042 0 -15.325462 -7.041992 -18.501312l-9.112854 -4.005249l17.259827 -28.16536c4.4173584 -9.803146 0 -21.262463 -9.803162 -25.682411l-28.02884 -12.564304c-2.6062927 -1.1207352 -5.3175964 -1.6535454 -7.9763794 -1.6535454z",fill:"#ffffff"}),c.a.createElement("path",{id:"path9",fillRule:"evenodd",d:"m404.41733 265.0c-11.45932 0 -20.847778 9.249329 -20.847778 20.708649c0 11.461945 9.388458 20.711304 20.847778 20.711304c11.322815 0 20.711273 -9.249359 20.711273 -20.711304c0 -11.45932 -9.388458 -20.708649 -20.711273 -20.708649z",fill:"#ffffff"}),c.a.createElement("path",{id:"path11",fillRule:"evenodd",d:"m404.41733 243.59842c23.196838 0 41.973755 18.916016 41.973755 42.11023c0 23.196869 -18.776917 42.112885 -41.973755 42.112885c-23.194244 0 -42.11023 -18.916016 -42.11023 -42.112885c0 -23.194214 18.915985 -42.11023 42.11023 -42.11023zm-141.979 -47.40944c4.173218 0 8.241455 2.1784668 10.535431 6.1259766c3.314972 5.800522 1.3832092 13.254593 -4.417328 16.569565c-2.346466 1.3805695 -56.74803 34.65616 -67.93176 123.29657c-5.5223083 43.07614 15.740158 62.40683 25.13124 68.619446c8.089233 5.370056 17.173233 8.086609 26.118103 8.086609c7.3884735 0 14.682419 -1.8530273 21.238846 -5.6010437c20.157501 -11.59845 30.65094 -39.34909 28.443573 -76.07614c-0.27819824 -6.766388 4.8320312 -12.425171 11.598419 -12.839874c0.25460815 -0.01574707 0.5118103 -0.023620605 0.76379395 -0.023620605c6.422577 0 11.677155 4.973755 12.076111 11.482941c2.6220398 46.391052 -12.149597 82.2887 -40.73227 98.71915c-10.35434 5.800537 -21.81366 8.83728 -33.27298 8.83728c-13.669296 0 -27.477692 -4.141754 -39.766403 -12.288727c-27.335953 -18.362213 -40.72966 -52.60367 -35.897644 -91.95538c12.839905 -101.20471 77.18111 -139.72702 79.942276 -141.24408c1.9422302 -1.157486 4.070862 -1.708664 6.1705933 -1.708664zm109.08661 -79.02363c-98.07349 0 -206.1286 49.61155 -257.88452 137.47769c-5.2467194 9.112869 -10.078743 18.364822 -14.220474 27.89238c-51.7769 27.060364 -65.44619 56.194214 -60.335957 67.37796c1.1417351 2.5590515 4.0393715 3.5590515 7.855644 3.5590515c9.556431 0 24.881893 -6.259857 32.87402 -9.910767l0 0c-21.26247 95.26773 -5.9370117 190.12076 -5.9370117 190.12076l0 4.6954956c0 11.59845 9.527557 20.986877 21.125984 20.986877l37.278214 0c11.598434 0 20.986877 -9.388428 20.986877 -20.986877l0 -22.50653l0.41470337 0c1.7952728 -9.800537 10.21785 -17.120728 20.572174 -17.120728c10.21785 0 18.776901 7.3201904 20.433075 17.120728l0.69029236 0l0 22.50653c0 11.59845 9.3910675 20.986877 20.986862 20.986877l37.417328 0c11.598434 0 20.986893 -9.388428 20.986893 -20.986877l0 -22.50653l0.6902771 0c1.7952881 -9.800537 10.217834 -17.120728 20.572174 -17.120728c10.217834 0 18.640411 7.3201904 20.4357 17.120728l0.41470337 0l0 22.50653c0 11.59845 9.388458 20.986877 20.986877 20.986877l37.417328 0c11.598419 0 20.986877 -9.388428 20.986877 -20.986877l0 -22.50653l0.41204834 0c1.6588135 -9.800537 10.217865 -17.120728 20.4357 -17.120728c10.217865 0 18.776917 7.3201904 20.572174 17.120728l0.6903076 0l0 22.50653c0 11.59845 9.388458 20.986877 20.986877 20.986877l37.2782 0c11.737549 0 21.126007 -9.388428 21.126007 -20.986877l0 -32.99997l0 -28.855652l0 -20.986877c-127.299225 -1.2414551 -145.93964 -73.58792 -145.93964 -73.590546l0 0c0 0.0026245117 34.931763 36.173218 79.38843 46.666656c7.4356995 1.7611694 14.677185 2.5039368 21.506561 2.5039368c33.88977 0 57.685028 -18.270325 45.044647 -21.141724c-15.188995 -3.4514465 -52.6037 -63.09973 -30.375336 -86.293976c6.1679688 -6.475067 12.506561 -9.367432 18.94226 -9.367432c16.763763 0 34.199493 19.611542 51.060333 46.64566c22.24939 35.548553 68.22839 77.624664 119.97638 77.624664c2.5223389 0 5.0551147 -0.099731445 7.601074 -0.30444336c95.2677 -7.4566956 101.34381 -145.52756 27.750671 -167.61682c-9.076111 -2.7480164 -17.078735 -3.9475098 -24.068237 -3.9475098c-48.23889 0 -48.328125 57.102386 -20.456726 57.102386c0.7821655 0 1.5879517 -0.0446167 2.414734 -0.13650513c1.3070679 -0.14959717 2.569519 -0.2230835 3.784729 -0.2230835c24.551208 0 29.931763 29.299225 13.750671 36.53543c-3.0236206 1.3543396 -6.005249 1.994751 -8.958008 1.994751c-21.734924 0 -41.742798 -34.758545 -62.288696 -75.724396c-20.018372 -40.454086 -48.73755 -117.223114 -164.58005 -156.43309c-25.041992 -8.532806 -52.50656 -12.66404 -80.80316 -12.66404z",fill:"#ffffff"})))}),m=function(e){return c.a.createElement(u.a,Object.assign({component:d},e))},f=(n(166),n(213)),p=n.n(f),h=l.a.Header;t.a=function(){return c.a.createElement(o.b,{query:"833004775",render:function(e){return c.a.createElement(s.a,{offsetTop:0},c.a.createElement(h,{className:p.a.header},c.a.createElement(i.b,{mode:"horizontal",theme:"dark",className:p.a.headerMenu},c.a.createElement(i.b.Item,{key:"home"},c.a.createElement(o.a,{to:"/",className:p.a.headerLink},c.a.createElement(m,{className:p.a.headerLogo}),c.a.createElement("span",null,e.site.siteMetadata.title))),c.a.createElement(i.b.Item,{key:"about"},c.a.createElement(o.a,{to:"/about/"},"About")),c.a.createElement(i.b.Item,{key:"docs"},c.a.createElement(o.a,{to:"/docs/"},"Docs")),c.a.createElement(i.b.Item,{key:"github"},c.a.createElement("a",{href:e.site.siteMetadata.github,target:"_blank",rel:"noopener noreferrer"},c.a.createElement(u.a,{type:"github",style:{fontSize:"22px"}}))))))},data:a})}},185:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(484),o=n(485),l=(n(36),n(217)),s=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 330 250",width:"3.3em",height:"2.5em"},r.a.createElement("g",{id:"g90"},r.a.createElement("path",{d:" M 0 164.061 C 73.969 164.254 117.925 123.764 145.461 94.301 C 155.756 83.287 177.257 84.47 183.779 94.686 C 185.875 97.972 190.737 101.451 193.596 101.74 C 196.456 102.029 198.457 105.474 192.929 105.508 C 144.696 105.799 147.556 163.479 0 164.061 Z ",fill:"rgb(152,0,0)"}),r.a.createElement("path",{d:" M 128.682 42.319 C 76.638 41.739 15.865 81.953 27.264 142.61 C 29.55 154.784 53.621 146.636 51.333 134.462 C 38.56 66.487 90.936 42.319 128.682 42.319 Z ",fill:"rgb(152,0,0)"}),r.a.createElement("path",{d:" M 271.092 45.218 C 329.428 211.596 134.727 298.196 66.667 177.034 C 59.063 163.499 36.428 173.235 43.848 188.021 C 110.763 321.354 337.816 223.77 271.092 45.218 Z ",fill:"rgb(152,0,0)"}),r.a.createElement("path",{d:" M 330 0 C 248.788 0 192.809 41.783 158.876 80.432 C 171.029 75.196 183.159 79.493 189.307 88.986 C 208.943 48.987 264.992 6.57 330 0 Z ",fill:"rgb(152,0,0)"})))},i=function(e){return r.a.createElement(l.a,Object.assign({component:s},e))},u=(n(166),n(214)),d=n.n(u),m=c.a.Footer;t.a=function(){return r.a.createElement(m,{className:d.a.footer},r.a.createElement(i,{className:d.a.adaltasLogo}),r.a.createElement("span",null,"Adaltas 2019"),r.a.createElement(o.a,{type:"vertical"}),r.a.createElement("span",null,r.a.createElement("a",{href:"http://github.com/adaltas/jumbo-docs",target:"_blank",rel:"noopener noreferrer"},"Edit this page")))}}}]);
//# sourceMappingURL=component---src-templates-docs-js-3a0b2108e6f669c6f522.js.map