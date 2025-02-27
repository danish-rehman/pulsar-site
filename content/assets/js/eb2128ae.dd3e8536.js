"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[63777],{15918:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>u,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"admin-api-tutorial","title":"Tutorial","description":"Learn how to configure Pulsar admin interfaces if authentication is enabled in your Pulsar instance.","source":"@site/versioned_docs/version-4.0.x/admin-api-tutorial.md","sourceDirName":".","slug":"/admin-api-tutorial","permalink":"/docs/4.0.x/admin-api-tutorial","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-4.0.x/admin-api-tutorial.md","tags":[],"version":"4.0.x","frontMatter":{"id":"admin-api-tutorial","title":"Tutorial","sidebar_label":"Tutorial","description":"Learn how to configure Pulsar admin interfaces if authentication is enabled in your Pulsar instance."},"sidebar":"docsSidebar","previous":{"title":"Get started","permalink":"/docs/4.0.x/admin-api-get-started"},"next":{"title":"Kafka client wrapper","permalink":"/docs/4.0.x/adaptors-kafka"}}');var r=a(74848),s=a(28453),l=a(11470),i=a(19365);const u={id:"admin-api-tutorial",title:"Tutorial",sidebar_label:"Tutorial",description:"Learn how to configure Pulsar admin interfaces if authentication is enabled in your Pulsar instance."},o=void 0,c={},d=[{value:"Admin setup",id:"admin-setup",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"admin-setup",children:"Admin setup"}),"\n",(0,r.jsxs)(t.p,{children:["Each of the three admin interfaces (the ",(0,r.jsx)(t.code,{children:"pulsar-admin"})," CLI tool, the ",(0,r.jsx)(t.a,{href:"/docs/4.0.x/reference-rest-api-overview",children:"REST API"}),", and the ",(0,r.jsx)(t.a,{href:"https://pulsar.apache.org/api/admin/4.0.x/",children:"Java admin API"}),") requires some special setup if you have enabled authentication in your Pulsar instance."]}),"\n",(0,r.jsxs)(l.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,r.jsxs)(i.A,{value:"pulsar-admin",children:[(0,r.jsxs)(t.p,{children:["If you have enabled authentication, you need to provide an auth configuration to use the ",(0,r.jsx)(t.code,{children:"pulsar-admin"})," tool. By default, the configuration for the ",(0,r.jsx)(t.code,{children:"pulsar-admin"})," tool is in the ",(0,r.jsx)(t.a,{href:"https://github.com/apache/pulsar/blob/master/conf/client.conf",children:(0,r.jsx)(t.code,{children:"conf/client.conf"})})," file. The following are the available parameters:"]}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"webServiceUrl"}),(0,r.jsx)(t.td,{children:"The web URL for the cluster."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"http://localhost:8080/",children:"http://localhost:8080/"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"brokerServiceUrl"}),(0,r.jsx)(t.td,{children:"The Pulsar protocol URL for the cluster."}),(0,r.jsx)(t.td,{children:"pulsar://localhost:6650/"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"authPlugin"}),(0,r.jsx)(t.td,{children:"The authentication plugin."}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"authParams"}),(0,r.jsx)(t.td,{children:"The authentication parameters for the cluster, as a comma-separated string."}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"useTls"}),(0,r.jsx)(t.td,{children:"Whether or not TLS authentication will be enforced in the cluster."}),(0,r.jsx)(t.td,{children:"false"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tlsAllowInsecureConnection"}),(0,r.jsx)(t.td,{children:"Accept untrusted TLS certificate from client."}),(0,r.jsx)(t.td,{children:"false"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tlsTrustCertsFilePath"}),(0,r.jsx)(t.td,{children:"Path for the trusted TLS certificate file."}),(0,r.jsx)(t.td,{})]})]})]})]}),(0,r.jsxs)(i.A,{value:"REST API",children:[(0,r.jsxs)(t.p,{children:["You can find details for the REST API exposed by Pulsar brokers in the ",(0,r.jsx)(t.a,{href:"pathname:///admin-rest-api/?version=4.0.3",children:"REST API doc"}),"."]}),(0,r.jsxs)(t.p,{children:["If you want to test REST APIs in postman, you can use the REST API JSON files ",(0,r.jsx)(t.a,{href:"pathname:///swagger/",children:"here"}),"."]})]}),(0,r.jsxs)(i.A,{value:"Java",children:[(0,r.jsxs)(t.p,{children:["To use the Java admin API, instantiate a ",(0,r.jsx)(t.a,{href:"https://pulsar.apache.org/api/admin/4.0.x/org/apache/pulsar/client/admin/PulsarAdmin",children:"PulsarAdmin"})," object, and specify a URL for a Pulsar broker and a ",(0,r.jsx)(t.a,{href:"https://pulsar.apache.org/api/admin/4.0.x/org/apache/pulsar/client/admin/PulsarAdminBuilder",children:"PulsarAdminBuilder"})," object. The following is a minimal example using ",(0,r.jsx)(t.code,{children:"localhost"}),"."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'String url = "http://localhost:8080";\n// Pass auth-plugin class fully-qualified name if Pulsar-security enabled\nString authPluginClassName = "com.org.MyAuthPluginClass";\n// Pass auth-param if auth-plugin class requires it\nString authParams = "param1=value1";\nboolean tlsAllowInsecureConnection = false;\nString tlsTrustCertsFilePath = null;\nPulsarAdmin admin = PulsarAdmin.builder()\n    .authentication(authPluginClassName,authParams)\n    .serviceHttpUrl(url)\n    .tlsTrustCertsFilePath(tlsTrustCertsFilePath)\n    .allowTlsInsecureConnection(tlsAllowInsecureConnection)\n    .build();\n'})}),(0,r.jsx)(t.p,{children:"If you use multiple brokers, you can use multi-host like Pulsar service. For example,"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'String url = "http://localhost:8080,localhost:8081,localhost:8082";\n// Below are the same to the line 2 - line 13 in the code snippet above\n// Pass auth-plugin class fully-qualified name if Pulsar-security enabled\nString authPluginClassName = "com.org.MyAuthPluginClass";\n// Pass auth-param if auth-plugin class requires it\nString authParams = "param1=value1";\nboolean tlsAllowInsecureConnection = false;\nString tlsTrustCertsFilePath = null;\nPulsarAdmin admin = PulsarAdmin.builder()\n    .authentication(authPluginClassName,authParams)\n    .serviceHttpUrl(url)\n    .tlsTrustCertsFilePath(tlsTrustCertsFilePath)\n    .allowTlsInsecureConnection(tlsAllowInsecureConnection)\n    .build();\n'})})]})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>l});a(96540);var n=a(34164);const r={tabItem:"tabItem_Ymn6"};var s=a(74848);function l(e){let{children:t,hidden:a,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,l),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>y});var n=a(96540),r=a(34164),s=a(23104),l=a(56347),i=a(205),u=a(57485),o=a(31682),c=a(70679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,o.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=h(e),[l,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[o,d]=m({queryString:a,groupId:r}),[f,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),x=(()=>{const e=o??f;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{x&&u(x)}),[x]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=a(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(74848);function j(e){let{className:t,block:a,selectedValue:n,selectValue:l,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),c=e=>{const t=e.currentTarget,a=u.indexOf(t),r=i[a].value;r!==n&&(o(t),l(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:i.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function g(e){let{lazy:t,children:a,selectedValue:s}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function P(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,v.jsx)(j,{...t,...e}),(0,v.jsx)(g,{...t,...e})]})}function y(e){const t=(0,b.A)();return(0,v.jsx)(P,{...e,children:d(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>l,x:()=>i});var n=a(96540);const r={},s=n.createContext(r);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);