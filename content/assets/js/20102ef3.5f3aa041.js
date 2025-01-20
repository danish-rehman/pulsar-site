"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[51164],{76649:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"admin-api-brokers","title":"Managing Brokers","description":"Learn how to manage brokers using Pulsar CLI and admin APIs.","source":"@site/versioned_docs/version-4.0.x/admin-api-brokers.md","sourceDirName":".","slug":"/admin-api-brokers","permalink":"/docs/4.0.x/admin-api-brokers","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-4.0.x/admin-api-brokers.md","tags":[],"version":"4.0.x","frontMatter":{"id":"admin-api-brokers","title":"Managing Brokers","sidebar_label":"Brokers","description":"Learn how to manage brokers using Pulsar CLI and admin APIs."},"sidebar":"docsSidebar","previous":{"title":"Features","permalink":"/docs/4.0.x/admin-api-features"},"next":{"title":"Clusters","permalink":"/docs/4.0.x/admin-api-clusters"}}');var s=r(74848),l=r(28453),i=r(11470),t=r(19365);const o={id:"admin-api-brokers",title:"Managing Brokers",sidebar_label:"Brokers",description:"Learn how to manage brokers using Pulsar CLI and admin APIs."},c=void 0,d={},u=[{value:"List active broker",id:"list-active-broker",level:2},{value:"List namespace owned by broker",id:"list-namespace-owned-by-broker",level:2},{value:"Update broker conf",id:"update-broker-conf",level:2},{value:"List updatable broker conf",id:"list-updatable-broker-conf",level:3},{value:"Update broker conf dynamically",id:"update-broker-conf-dynamically",level:3},{value:"List updated broker conf",id:"list-updated-broker-conf",level:3},{value:"Get info of leader broker",id:"get-info-of-leader-broker",level:2}];function h(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.admonition,{type:"tip",children:(0,s.jsxs)(a.p,{children:["This page only shows ",(0,s.jsx)(a.strong,{children:"some frequently used operations"}),". For the latest and complete information, see the ",(0,s.jsx)(a.strong,{children:"reference docs"})," below."]})}),"\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"Category"}),(0,s.jsx)(a.th,{children:"Method"}),(0,s.jsx)(a.th,{children:"If you want to manage brokers..."})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.a,{href:"/docs/4.0.x/reference-cli-tools",children:"Pulsar CLI"})}),(0,s.jsxs)(a.td,{children:[(0,s.jsx)(a.a,{href:"pathname:///reference/#/4.0.x/pulsar-admin/",children:"pulsar-admin"}),", which lists all commands, flags, descriptions, and more."]}),(0,s.jsxs)(a.td,{children:["See the ",(0,s.jsx)(a.code,{children:"broker"})," command"]})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.a,{href:"/docs/4.0.x/admin-api-overview",children:"Pulsar admin APIs"})}),(0,s.jsxs)(a.td,{children:[(0,s.jsx)(a.a,{href:"https://pulsar.apache.org/admin-rest-api#/",children:"REST API"}),", which lists all parameters, responses, samples, and more."]}),(0,s.jsxs)(a.td,{children:["See the ",(0,s.jsx)(a.code,{children:"/admin/v2/brokers"})," endpoint"]})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.a,{href:"/docs/4.0.x/admin-api-overview",children:"Pulsar admin APIs"})}),(0,s.jsxs)(a.td,{children:[(0,s.jsx)(a.a,{href:"https://pulsar.apache.org/api/admin/4.0.x/",children:"Java admin API"}),", which lists all classes, methods, descriptions, and more."]}),(0,s.jsxs)(a.td,{children:["See the ",(0,s.jsx)(a.code,{children:"brokers"})," method of the ",(0,s.jsx)(a.code,{children:"PulsarAdmin"})," object"]})]})]})]}),"\n",(0,s.jsx)(a.h2,{id:"list-active-broker",children:"List active broker"}),"\n",(0,s.jsx)(a.p,{children:"Fetch all available active brokers that are serving traffic with cluster name."}),"\n",(0,s.jsxs)(i.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,s.jsxs)(t.A,{value:"pulsar-admin",children:[(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"pulsar-admin brokers list use\n"})}),(0,s.jsx)(a.p,{children:"Example output:"}),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"localhost:8080\n"})})]}),(0,s.jsx)(t.A,{value:"REST API",children:(0,s.jsx)(a.p,{children:(0,s.jsx)(a.a,{href:"https://pulsar.apache.org/admin-rest-api?version=4.0.2&apiVersion=v2#operation/BrokersBase_getActiveBrokers",children:"GET /admin/v2/brokers/{cluster}"})})}),(0,s.jsx)(t.A,{value:"Java",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-java",children:"admin.brokers().getActiveBrokers(clusterName)\n"})})})]}),"\n",(0,s.jsx)(a.h2,{id:"list-namespace-owned-by-broker",children:"List namespace owned by broker"}),"\n",(0,s.jsx)(a.p,{children:"You can list all namespaces which are owned and served by a given broker."}),"\n",(0,s.jsxs)(i.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,s.jsxs)(t.A,{value:"pulsar-admin",children:[(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"pulsar-admin brokers namespaces use \\\n    --url localhost:8080\n"})}),(0,s.jsx)(a.p,{children:"Example output:"}),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"public/default/0x00000000_0x40000000    [broker_assignment=shared is_controlled=false is_active=true]\npublic/default/0xc0000000_0xffffffff    [broker_assignment=shared is_controlled=false is_active=true]\npublic/functions/0x40000000_0x80000000    [broker_assignment=shared is_controlled=false is_active=true]\npublic/functions/0x00000000_0x40000000    [broker_assignment=shared is_controlled=false is_active=true]\npulsar/standalone/localhost:8080/0x00000000_0xffffffff    [broker_assignment=shared is_controlled=false is_active=true]\npulsar/localhost:8080/0x00000000_0xffffffff    [broker_assignment=shared is_controlled=false is_active=true]\npublic/functions/0x80000000_0xc0000000    [broker_assignment=shared is_controlled=false is_active=true]\npublic/default/0x80000000_0xc0000000    [broker_assignment=shared is_controlled=false is_active=true]\n"})})]}),(0,s.jsx)(t.A,{value:"REST API",children:(0,s.jsx)(a.p,{children:(0,s.jsx)(a.a,{href:"https://pulsar.apache.org/admin-rest-api?version=4.0.2&apiVersion=v2#operation/BrokersBase_getOwnedNamespaces",children:"GET /admin/v2/brokers/{clusterName}/{brokerId}/ownedNamespaces"})})}),(0,s.jsx)(t.A,{value:"Java",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-java",children:"admin.brokers().getOwnedNamespaces(cluster,brokerUrl);\n"})})})]}),"\n",(0,s.jsx)(a.h2,{id:"update-broker-conf",children:"Update broker conf"}),"\n",(0,s.jsx)(a.p,{children:"You can update broker configurations using one of the following ways:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:["Supply ",(0,s.jsx)(a.a,{href:"pathname:///reference/#/4.0.x/config/reference-configuration-broker",children:"configurations"})," when starting up brokers."]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"#update-broker-conf-dynamically",children:"Update configurations dynamically"})," ",(0,s.jsx)(a.strong,{children:"when running brokers"}),"."]}),"\n",(0,s.jsx)(a.p,{children:"Since all broker configurations in Pulsar are stored in ZooKeeper, configuration values can also be dynamically updated when brokers are running. When you update broker configurations dynamically, ZooKeeper will notify the broker of the change and then the broker will override any existing configuration values."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"list-updatable-broker-conf",children:"List updatable broker conf"}),"\n",(0,s.jsx)(a.p,{children:"Fetch a list of all potentially updatable configuration parameters."}),"\n",(0,s.jsxs)(i.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,s.jsxs)(t.A,{value:"pulsar-admin",children:[(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"pulsar-admin brokers list-dynamic-config\n"})}),(0,s.jsx)(a.p,{children:"Example output:"}),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"forceDeleteNamespaceAllowed\nloadBalancerMemoryResourceWeight\nallowAutoTopicCreation\nbrokerDeleteInactivePartitionedTopicMetadataEnabled\nmanagedLedgerInactiveLedgerRolloverTimeSeconds\nloadBalancerNamespaceBundleMaxMsgRate\nresourceUsageTransportPublishIntervalInSecs\n# omit...\n"})})]}),(0,s.jsx)(t.A,{value:"REST API",children:(0,s.jsx)(a.p,{children:(0,s.jsx)(a.a,{href:"https://pulsar.apache.org/admin-rest-api?version=4.0.2&apiVersion=v2#operation/BrokersBase_getDynamicConfigurationName",children:"GET /admin/v2/brokers/configuration"})})}),(0,s.jsx)(t.A,{value:"Java",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-java",children:"admin.brokers().getDynamicConfigurationNames();\n"})})})]}),"\n",(0,s.jsx)(a.h3,{id:"update-broker-conf-dynamically",children:"Update broker conf dynamically"}),"\n",(0,s.jsxs)(i.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,s.jsxs)(t.A,{value:"pulsar-admin",children:[(0,s.jsxs)(a.p,{children:["The ",(0,s.jsx)(a.a,{href:"pathname:///reference/#/4.0.x/pulsar-admin/brokers?id=update-dynamic-config",children:(0,s.jsx)(a.code,{children:"update-dynamic-config"})})," subcommand will update existing configuration. It takes two arguments: the name of the parameter and the new value using the ",(0,s.jsx)(a.code,{children:"config"})," and ",(0,s.jsx)(a.code,{children:"value"})," flag respectively. Here's an example of the ",(0,s.jsx)(a.a,{href:"/docs/4.0.x/reference-configuration#broker-brokerShutdownTimeoutMs",children:(0,s.jsx)(a.code,{children:"brokerShutdownTimeoutMs"})})," parameter:"]}),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"pulsar-admin brokers update-dynamic-config --config brokerShutdownTimeoutMs --value 100\n"})})]}),(0,s.jsx)(t.A,{value:"REST API",children:(0,s.jsx)(a.p,{children:(0,s.jsx)(a.a,{href:"https://pulsar.apache.org/admin-rest-api?version=4.0.2&apiVersion=v2#operation/BrokersBase_updateDynamicConfiguration",children:"POST /admin/v2/brokers/configuration/{configName}/{configValue}"})})}),(0,s.jsx)(t.A,{value:"Java",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-java",children:"admin.brokers().updateDynamicConfiguration(configName, configValue);\n"})})})]}),"\n",(0,s.jsx)(a.h3,{id:"list-updated-broker-conf",children:"List updated broker conf"}),"\n",(0,s.jsx)(a.p,{children:"Fetch a list of all parameters that have been dynamically updated."}),"\n",(0,s.jsxs)(i.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,s.jsxs)(t.A,{value:"pulsar-admin",children:[(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"pulsar-admin brokers get-all-dynamic-config\n"})}),(0,s.jsx)(a.p,{children:"Example output:"}),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"brokerShutdownTimeoutMs    100\n"})})]}),(0,s.jsx)(t.A,{value:"REST API",children:(0,s.jsx)(a.p,{children:(0,s.jsx)(a.a,{href:"https://pulsar.apache.org/admin-rest-api?version=4.0.2&apiVersion=v2#operation/BrokersBase_getAllDynamicConfigurations",children:"GET /admin/v2/brokers/configuration/values"})})}),(0,s.jsx)(t.A,{value:"Java",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-java",children:"admin.brokers().getAllDynamicConfigurations();\n"})})})]}),"\n",(0,s.jsx)(a.h2,{id:"get-info-of-leader-broker",children:"Get info of leader broker"}),"\n",(0,s.jsx)(a.p,{children:"Fetch the information of the leader broker, for example, the service URL."}),"\n",(0,s.jsxs)(i.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,s.jsxs)(t.A,{value:"pulsar-admin",children:[(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"pulsar-admin brokers leader-broker\n"})}),(0,s.jsx)(a.p,{children:"Example output:"}),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-json",children:'{\n  "serviceUrl" : "http://localhost:8080"\n}\n'})})]}),(0,s.jsx)(t.A,{value:"REST API",children:(0,s.jsx)(a.p,{children:(0,s.jsx)(a.a,{href:"https://pulsar.apache.org/admin-rest-api?version=4.0.2&apiVersion=v2#operation/BrokersBase_getLeaderBroker",children:"GET /admin/v2/brokers/leaderBroker"})})}),(0,s.jsxs)(t.A,{value:"Java",children:[(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-java",children:"admin.brokers().getLeaderBroker()\n"})}),(0,s.jsxs)(a.p,{children:["For the detail of the code above, see ",(0,s.jsx)(a.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-client-admin/src/main/java/org/apache/pulsar/client/admin/internal/BrokersImpl.java#L80",children:"here"})]})]})]})]})}function p(e={}){const{wrapper:a}={...(0,l.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,a,r)=>{r.d(a,{A:()=>i});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var l=r(74848);function i(e){let{children:a,hidden:r,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,i),hidden:r,children:a})}},11470:(e,a,r)=>{r.d(a,{A:()=>y});var n=r(96540),s=r(34164),l=r(23104),i=r(56347),t=r(205),o=r(57485),c=r(31682),d=r(70679);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:a,children:r}=e;return(0,n.useMemo)((()=>{const e=a??function(e){return u(e).map((e=>{let{props:{value:a,label:r,attributes:n,default:s}}=e;return{value:a,label:r,attributes:n,default:s}}))}(r);return function(e){const a=(0,c.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,r])}function p(e){let{value:a,tabValues:r}=e;return r.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:r}=e;const s=(0,i.W6)(),l=function(e){let{queryString:a=!1,groupId:r}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:a,groupId:r});return[(0,o.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(s.location.search);a.set(l,e),s.replace({...s.location,search:a.toString()})}),[l,s])]}function f(e){const{defaultValue:a,queryString:r=!1,groupId:s}=e,l=h(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:l}))),[c,u]=m({queryString:r,groupId:s}),[f,b]=function(e){let{groupId:a}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(a),[s,l]=(0,d.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:s}),x=(()=>{const e=c??f;return p({value:e,tabValues:l})?e:null})();(0,t.A)((()=>{x&&o(x)}),[x]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var b=r(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(74848);function g(e){let{className:a,block:r,selectedValue:n,selectValue:i,tabValues:t}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),d=e=>{const a=e.currentTarget,r=o.indexOf(a),s=t[r].value;s!==n&&(c(a),i(s))},u=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;a=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;a=o[r]??o[o.length-1];break}}a?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},a),children:t.map((e=>{let{value:a,label:r,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>o.push(e),onKeyDown:u,onClick:d,...l,className:(0,s.A)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":n===a}),children:r??a},a)}))})}function j(e){let{lazy:a,children:r,selectedValue:l}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(a){const e=i.find((e=>e.props.value===l));return e?(0,n.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==l})))})}function k(e){const a=f(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,v.jsx)(g,{...a,...e}),(0,v.jsx)(j,{...a,...e})]})}function y(e){const a=(0,b.A)();return(0,v.jsx)(k,{...e,children:u(e.children)},String(a))}},28453:(e,a,r)=>{r.d(a,{R:()=>i,x:()=>t});var n=r(96540);const s={},l=n.createContext(s);function i(e){const a=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(l.Provider,{value:a},e.children)}}}]);