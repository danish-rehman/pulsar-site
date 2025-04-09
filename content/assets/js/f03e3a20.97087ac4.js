"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[83447],{83955:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>t,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"admin-api-permissions","title":"Managing permissions","description":"Learn how to manage permissions using Pulsar CLI and admin APIs.","source":"@site/versioned_docs/version-4.0.x/admin-api-permissions.md","sourceDirName":".","slug":"/admin-api-permissions","permalink":"/docs/4.0.x/admin-api-permissions","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-4.0.x/admin-api-permissions.md","tags":[],"version":"4.0.x","frontMatter":{"id":"admin-api-permissions","title":"Managing permissions","sidebar_label":"Permissions","description":"Learn how to manage permissions using Pulsar CLI and admin APIs."},"sidebar":"docsSidebar","previous":{"title":"Packages","permalink":"/docs/4.0.x/admin-api-packages"},"next":{"title":"Schemas","permalink":"/docs/4.0.x/admin-api-schemas"}}');var r=n(74848),i=n(28453),l=n(11470),o=n(19365);const t={id:"admin-api-permissions",title:"Managing permissions",sidebar_label:"Permissions",description:"Learn how to manage permissions using Pulsar CLI and admin APIs."},c=void 0,d={},u=[{value:"Grant permissions",id:"grant-permissions",level:2},{value:"Get permissions",id:"get-permissions",level:2},{value:"Revoke permissions",id:"revoke-permissions",level:2}];function p(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.admonition,{type:"tip",children:[(0,r.jsxs)(s.p,{children:["This page only shows ",(0,r.jsx)(s.strong,{children:"some frequently used operations"}),"."]}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["For the latest and complete information about ",(0,r.jsx)(s.code,{children:"Pulsar admin"}),", including commands, flags, descriptions, and more, see ",(0,r.jsx)(s.a,{href:"pathname:///reference/#/4.0.x/pulsar-admin/",children:"Pulsar admin docs"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["For the latest and complete information about ",(0,r.jsx)(s.code,{children:"REST API"}),", including parameters, responses, samples, and more, see ",(0,r.jsx)(s.a,{href:"https://pulsar.apache.org/admin-rest-api#/",children:"REST"})," API doc."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["For the latest and complete information about ",(0,r.jsx)(s.code,{children:"Java admin API"}),", including classes, methods, descriptions, and more, see ",(0,r.jsx)(s.a,{href:"https://pulsar.apache.org/api/admin/4.0.x/",children:"Java admin API doc"}),"."]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsx)(s.p,{children:"Pulsar allows you to grant namespace-level or topic-level permission to users."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"If you grant namespace-level permission to a user, then the user can access all the topics under the namespace."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"If you grant topic-level permission to a user, then the user can access only the topic."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["The chapters below demonstrate how to grant namespace-level permissions to users. For how to grant topic-level permissions to users, see ",(0,r.jsx)(s.a,{href:"/docs/4.0.x/admin-api-topics#grant-permission",children:"manage topics"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"grant-permissions",children:"Grant permissions"}),"\n",(0,r.jsxs)(s.p,{children:["You can grant permissions to specific roles for lists of operations such as ",(0,r.jsx)(s.code,{children:"produce"})," and ",(0,r.jsx)(s.code,{children:"consume"}),"."]}),"\n",(0,r.jsxs)(l.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,r.jsxs)(o.A,{value:"pulsar-admin",children:[(0,r.jsxs)(s.p,{children:["Use the ",(0,r.jsx)(s.a,{href:"pathname:///reference/#/4.0.x/pulsar-admin/namespaces?id=grant-permission",children:(0,r.jsx)(s.code,{children:"grant-permission"})})," subcommand and specify a namespace, actions using the ",(0,r.jsx)(s.code,{children:"--actions"})," flag, and a role using the ",(0,r.jsx)(s.code,{children:"--role"})," flag:"]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"pulsar-admin namespaces grant-permission test-tenant/namespace1 \\\n    --actions produce,consume \\\n    --role admin10\n"})}),(0,r.jsxs)(s.p,{children:["Wildcard authorization can be performed when ",(0,r.jsx)(s.code,{children:"authorizationAllowWildcardsMatching"})," is set to ",(0,r.jsx)(s.code,{children:"true"})," in ",(0,r.jsx)(s.code,{children:"broker.conf"}),"."]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Example"})}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"pulsar-admin namespaces grant-permission test-tenant/namespace1 \\\n      --actions produce,consume \\\n      --role 'my.role.*'\n"})}),(0,r.jsxs)(s.p,{children:["Then, roles ",(0,r.jsx)(s.code,{children:"my.role.1"}),", ",(0,r.jsx)(s.code,{children:"my.role.2"}),", ",(0,r.jsx)(s.code,{children:"my.role.foo"}),", ",(0,r.jsx)(s.code,{children:"my.role.bar"}),", etc. can produce and consume."]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"pulsar-admin namespaces grant-permission test-tenant/namespace1 \\\n      --actions produce,consume \\\n      --role '*.role.my'\n"})}),(0,r.jsxs)(s.p,{children:["Then, roles ",(0,r.jsx)(s.code,{children:"1.role.my"}),", ",(0,r.jsx)(s.code,{children:"2.role.my"}),", ",(0,r.jsx)(s.code,{children:"foo.role.my"}),", ",(0,r.jsx)(s.code,{children:"bar.role.my"}),", etc. can produce and consume."]}),(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["A wildcard matching works at ",(0,r.jsx)(s.strong,{children:"the beginning or end of the role name only"}),"."]})}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Example"})}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"pulsar-admin namespaces grant-permission test-tenant/namespace1 \\\n      --actions produce,consume \\\n      --role 'my.*.role'\n"})}),(0,r.jsxs)(s.p,{children:["In this case, only the role ",(0,r.jsx)(s.code,{children:"my.*.role"})," has permissions.\nRoles ",(0,r.jsx)(s.code,{children:"my.1.role"}),", ",(0,r.jsx)(s.code,{children:"my.2.role"}),", ",(0,r.jsx)(s.code,{children:"my.foo.role"}),", ",(0,r.jsx)(s.code,{children:"my.bar.role"}),", etc. ",(0,r.jsx)(s.strong,{children:"cannot"})," produce and consume."]})]}),(0,r.jsx)(o.A,{value:"REST API",children:(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://pulsar.apache.org/admin-rest-api?version=4.0.4&apiVersion=v2#operation/Namespaces_grantPermissionOnNamespace",children:"POST /admin/v2/namespaces/{tenant}/{namespace}/permissions/{role}"})})}),(0,r.jsx)(o.A,{value:"Java",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:"admin.namespaces().grantPermissionOnNamespace(namespace, role, getAuthActions(actions));\n"})})})]}),"\n",(0,r.jsx)(s.h2,{id:"get-permissions",children:"Get permissions"}),"\n",(0,r.jsx)(s.p,{children:"You can see which permissions have been granted to which roles in a namespace."}),"\n",(0,r.jsxs)(l.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,r.jsxs)(o.A,{value:"pulsar-admin",children:[(0,r.jsxs)(s.p,{children:["Use the ",(0,r.jsx)(s.a,{href:"pathname:///reference/#/4.0.x/pulsar-admin/namespaces?id=grant-permission",children:(0,r.jsx)(s.code,{children:"permissions"})})," subcommand and specify a namespace:"]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"pulsar-admin namespaces permissions test-tenant/namespace1\n"})}),(0,r.jsx)(s.p,{children:"Example output:"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"my.role.*    [produce, consume]\n"})})]}),(0,r.jsx)(o.A,{value:"REST API",children:(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://pulsar.apache.org/admin-rest-api?version=4.0.4&apiVersion=v2#operation/Namespaces_getPermissions",children:"GET /admin/v2/namespaces/{tenant}/{namespace}/permissions"})})}),(0,r.jsx)(o.A,{value:"Java",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:"admin.namespaces().getPermissions(namespace);\n"})})})]}),"\n",(0,r.jsx)(s.h2,{id:"revoke-permissions",children:"Revoke permissions"}),"\n",(0,r.jsx)(s.p,{children:"You can revoke permissions from specific roles, which means that those roles will no longer have access to the specified namespace."}),"\n",(0,r.jsxs)(l.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,r.jsxs)(o.A,{value:"pulsar-admin",children:[(0,r.jsxs)(s.p,{children:["Use the ",(0,r.jsx)(s.a,{href:"pathname:///reference/#/4.0.x/pulsar-admin/namespaces?id=revoke-permission",children:(0,r.jsx)(s.code,{children:"revoke-permission"})})," subcommand and specify a namespace and a role using the ",(0,r.jsx)(s.code,{children:"--role"})," flag:"]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"pulsar-admin namespaces revoke-permission test-tenant/namespace1 \\\n      --role admin10\n"})})]}),(0,r.jsx)(o.A,{value:"REST API",children:(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://pulsar.apache.org/admin-rest-api?version=4.0.4&apiVersion=v2#operation/Namespaces_revokePermissionsOnNamespace",children:"DELETE /admin/v2/namespaces/{tenant}/{namespace}/permissions/{role}"})})}),(0,r.jsx)(o.A,{value:"Java",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:"admin.namespaces().revokePermissionsOnNamespace(namespace, role);\n"})})})]})]})}function m(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,s,n)=>{n.d(s,{A:()=>l});n(96540);var a=n(34164);const r={tabItem:"tabItem_Ymn6"};var i=n(74848);function l(e){let{children:s,hidden:n,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,l),hidden:n,children:s})}},11470:(e,s,n)=>{n.d(s,{A:()=>A});var a=n(96540),r=n(34164),i=n(23104),l=n(56347),o=n(205),t=n(57485),c=n(31682),d=n(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:s,children:n}=e;return(0,a.useMemo)((()=>{const e=s??function(e){return u(e).map((e=>{let{props:{value:s,label:n,attributes:a,default:r}}=e;return{value:s,label:n,attributes:a,default:r}}))}(n);return function(e){const s=(0,c.XI)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function m(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function h(e){let{queryString:s=!1,groupId:n}=e;const r=(0,l.W6)(),i=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,t.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const s=new URLSearchParams(r.location.search);s.set(i,e),r.replace({...r.location,search:s.toString()})}),[i,r])]}function x(e){const{defaultValue:s,queryString:n=!1,groupId:r}=e,i=p(e),[l,t]=(0,a.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!m({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:i}))),[c,u]=h({queryString:n,groupId:r}),[x,j]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[r,i]=(0,d.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),g=(()=>{const e=c??x;return m({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{g&&t(g)}),[g]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);t(e),u(e),j(e)}),[u,j,i]),tabValues:i}}var j=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function f(e){let{className:s,block:n,selectedValue:a,selectValue:l,tabValues:o}=e;const t=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const s=e.currentTarget,n=t.indexOf(s),r=o[n].value;r!==a&&(c(s),l(r))},u=e=>{let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=t.indexOf(e.currentTarget)+1;s=t[n]??t[0];break}case"ArrowLeft":{const n=t.indexOf(e.currentTarget)-1;s=t[n]??t[t.length-1];break}}s?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},s),children:o.map((e=>{let{value:s,label:n,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===s?0:-1,"aria-selected":a===s,ref:e=>t.push(e),onKeyDown:u,onClick:d,...i,className:(0,r.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":a===s}),children:n??s},s)}))})}function b(e){let{lazy:s,children:n,selectedValue:i}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=l.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,s)=>(0,a.cloneElement)(e,{key:s,hidden:e.props.value!==i})))})}function y(e){const s=x(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,v.jsx)(f,{...s,...e}),(0,v.jsx)(b,{...s,...e})]})}function A(e){const s=(0,j.A)();return(0,v.jsx)(y,{...e,children:u(e.children)},String(s))}},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>o});var a=n(96540);const r={},i=a.createContext(r);function l(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);