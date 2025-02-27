"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[4937],{98437:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"admin-api-tools","title":"Pulsar admin interfaces - Tools","description":"Get a comprehensive understanding of concepts and difference of Pulsar admin CLI and Pulsar admin APIs.","source":"@site/docs/admin-api-tools.md","sourceDirName":".","slug":"/admin-api-tools","permalink":"/docs/next/admin-api-tools","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/docs/admin-api-tools.md","tags":[],"version":"current","frontMatter":{"id":"admin-api-tools","title":"Pulsar admin interfaces - Tools","sidebar_label":"Tools","description":"Get a comprehensive understanding of concepts and difference of Pulsar admin CLI and Pulsar admin APIs."},"sidebar":"docsSidebar","previous":{"title":"Transactions","permalink":"/docs/next/admin-api-transactions"},"next":{"title":"Get started","permalink":"/docs/next/admin-api-get-started"}}');var s=t(74848),r=t(28453);t(11470),t(19365);const i={id:"admin-api-tools",title:"Pulsar admin interfaces - Tools",sidebar_label:"Tools",description:"Get a comprehensive understanding of concepts and difference of Pulsar admin CLI and Pulsar admin APIs."},l=void 0,o={},d=[{value:"Related topics",id:"related-topics",level:3}];function c(e){const n={a:"a",h3:"h3",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"You can manage Pulsar entities through the Pulsar admin layer via one of the following tools:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Pulsar admin APIs"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://pulsar.apache.org/api/admin/4.0.x/",children:"Java admin API"}),": It\u2019s a programmable interface written in Java."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Go admin API (coming soon)"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"pathname:///admin-rest-api/?version=4.0.3",children:"REST API"}),": HTTP calls, which are made against the admin APIs provided by brokers. In addition, both the Java admin API and pulsar-admin CLI use the REST API."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"pathname:///reference/#/next/pulsar-admin/",children:"pulsar-admin CLI"}),": It\u2019s a command-line tool and is available in the bin folder of your Pulsar installation."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Tools of Pulsar admin layer",src:t(40144).A+"",width:"872",height:"587"})}),"\n",(0,s.jsx)(n.p,{children:"Here are the explanations and comparisons of these tools."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Category"}),(0,s.jsx)(n.th,{children:"Tools"}),(0,s.jsx)(n.th,{children:"When to use"}),(0,s.jsx)(n.th,{children:"Considerations"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Pulsar admin APIs"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://pulsar.apache.org/api/admin/4.0.x/",children:"Java admin API"})}),(0,s.jsxs)(n.td,{children:["- If you want to implement your own admin interface client using Java and manage clusters. ",(0,s.jsx)("br",{}),(0,s.jsx)("br",{})," - If you want to manage resources programmatically rather than relying on external tools inside of unit tests.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{})," - If you want to use admin APIs in Java applications."]}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)("br",{}),(0,s.jsx)("br",{})," - This method is only available in Java. ",(0,s.jsx)("br",{}),(0,s.jsx)("br",{})," - It needs more development work if you want to use it to build applications."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Pulsar admin APIs"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"pathname:///admin-rest-api/?version=4.0.3",children:"REST API"})}),(0,s.jsx)(n.td,{children:"- If you want to implement your own admin interface client using other languages and manage clusters using scripts."}),(0,s.jsxs)(n.td,{children:["- This method is the most complicated. ",(0,s.jsx)("br",{}),(0,s.jsx)("br",{})," - It needs more development work if you want to use it to build applications."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Pulsar admin CLI"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"pathname:///reference/#/next/pulsar-admin/",children:"pulsar-admin CLI"})}),(0,s.jsxs)(n.td,{children:["- If you want to get started with Pulsar admin APIs with minimal effort (e.g., no need to prepare an extra environment). ",(0,s.jsx)("br",{}),(0,s.jsx)("br",{})," - If you want to perform common administrative tasks."]}),(0,s.jsxs)(n.td,{children:["- This method is the most easy-to-use. ",(0,s.jsx)("br",{}),(0,s.jsx)("br",{})," - It\u2019s challenging to use this method to build applications.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{})," - It takes a little more time because JVM starts slowly."]})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"related-topics",children:"Related topics"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["To understand the basics, see ",(0,s.jsx)(n.a,{href:"/docs/next/admin-api-overview",children:"Pulsar admin API - Overview"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["To learn usage scenarios, see ",(0,s.jsx)(n.a,{href:"/docs/next/admin-api-use-cases",children:"Pulsar admin API - Use cases"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["To learn common administrative tasks, see ",(0,s.jsx)(n.a,{href:"/docs/next/admin-api-features",children:"Pulsar admin API - Features"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["To get up quickly, see ",(0,s.jsx)(n.a,{href:"/docs/next/admin-api-get-started",children:"Pulsar admin API - Get started"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"To check the detailed usage, see the API references below."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://pulsar.apache.org/api/admin/4.0.x/",children:"Java admin API"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference-rest-api-overview",children:"REST API"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var a=t(34164);const s={tabItem:"tabItem_Ymn6"};var r=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>P});var a=t(96540),s=t(34164),r=t(23104),i=t(56347),l=t(205),o=t(57485),d=t(31682),c=t(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=h(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[d,u]=p({queryString:t,groupId:s}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,c.Dv)(t);return[s,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),b=(()=>{const e=d??f;return m({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),x(e)}),[u,x,r]),tabValues:r}}var x=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function v(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),s=l[t].value;s!==a&&(d(n),i(s))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:u,onClick:c,...r,className:(0,s.A)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function I(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,j.jsx)(v,{...n,...e}),(0,j.jsx)(g,{...n,...e})]})}function P(e){const n=(0,x.A)();return(0,j.jsx)(I,{...e,children:u(e.children)},String(n))}},40144:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/admin-api-tools-95a5ddbed922e7976be922e4c85fffbe.svg"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var a=t(96540);const s={},r=a.createContext(s);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);