"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[81835],{65821:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"admin-api-clusters","title":"Managing Clusters","description":"Learn how to manage clusters using Pulsar CLI and admin APIs.","source":"@site/versioned_docs/version-4.0.x/admin-api-clusters.md","sourceDirName":".","slug":"/admin-api-clusters","permalink":"/docs/4.0.x/admin-api-clusters","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-4.0.x/admin-api-clusters.md","tags":[],"version":"4.0.x","frontMatter":{"id":"admin-api-clusters","title":"Managing Clusters","sidebar_label":"Clusters","description":"Learn how to manage clusters using Pulsar CLI and admin APIs."},"sidebar":"docsSidebar","previous":{"title":"Brokers","permalink":"/docs/4.0.x/admin-api-brokers"},"next":{"title":"Functions","permalink":"/docs/4.0.x/admin-api-functions"}}');var l=a(74848),n=a(28453),t=a(11470),i=a(19365);const c={id:"admin-api-clusters",title:"Managing Clusters",sidebar_label:"Clusters",description:"Learn how to manage clusters using Pulsar CLI and admin APIs."},u=void 0,d={},o=[{value:"Provision cluster",id:"provision-cluster",level:2},{value:"Get cluster configuration",id:"get-cluster-configuration",level:2},{value:"Update cluster",id:"update-cluster",level:2},{value:"Update cluster configuration",id:"update-cluster-configuration",level:3},{value:"Update peer-cluster data",id:"update-peer-cluster-data",level:3},{value:"List cluster",id:"list-cluster",level:2},{value:"Delete cluster",id:"delete-cluster",level:2}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.admonition,{type:"tip",children:(0,l.jsxs)(r.p,{children:["This page only shows ",(0,l.jsx)(r.strong,{children:"some frequently used operations"}),". For the latest and complete information, see the ",(0,l.jsx)(r.strong,{children:"reference docs"})," below."]})}),"\n",(0,l.jsxs)(r.table,{children:[(0,l.jsx)(r.thead,{children:(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.th,{children:"Category"}),(0,l.jsx)(r.th,{children:"Method"}),(0,l.jsx)(r.th,{children:"If you want to manage clusters..."})]})}),(0,l.jsxs)(r.tbody,{children:[(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:(0,l.jsx)(r.a,{href:"/docs/4.0.x/reference-cli-tools",children:"Pulsar CLI"})}),(0,l.jsxs)(r.td,{children:[(0,l.jsx)(r.a,{href:"pathname:///reference/#/4.0.x/pulsar-admin/",children:"pulsar-admin"}),", which lists all commands, flags, descriptions, and more."]}),(0,l.jsxs)(r.td,{children:["See the ",(0,l.jsx)(r.code,{children:"clusters"})," command"]})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:(0,l.jsx)(r.a,{href:"/docs/4.0.x/admin-api-overview",children:"Pulsar admin APIs"})}),(0,l.jsxs)(r.td,{children:[(0,l.jsx)(r.a,{href:"https://pulsar.apache.org/admin-rest-api#/",children:"REST API"}),", which lists all parameters, responses, samples, and more."]}),(0,l.jsxs)(r.td,{children:["See the ",(0,l.jsx)(r.code,{children:"/admin/v2/clusters"})," endpoint"]})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:(0,l.jsx)(r.a,{href:"/docs/4.0.x/admin-api-overview",children:"Pulsar admin APIs"})}),(0,l.jsxs)(r.td,{children:[(0,l.jsx)(r.a,{href:"https://pulsar.apache.org/api/admin/4.0.x/",children:"Java admin API"}),", which lists all classes, methods, descriptions, and more."]}),(0,l.jsxs)(r.td,{children:["See the ",(0,l.jsx)(r.code,{children:"clusters"})," method of the ",(0,l.jsx)(r.code,{children:"PulsarAdmin"})," object"]})]})]})]}),"\n",(0,l.jsxs)(r.p,{children:["You can perform the following operations on ",(0,l.jsx)(r.a,{href:"/docs/4.0.x/reference-terminology#cluster",children:"clusters"}),"."]}),"\n",(0,l.jsx)(r.h2,{id:"provision-cluster",children:"Provision cluster"}),"\n",(0,l.jsx)(r.p,{children:"You can provision new clusters using the admin interface."}),"\n",(0,l.jsx)(r.admonition,{type:"note",children:(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:["\n",(0,l.jsx)(r.p,{children:"This operation requires superuser privileges."}),"\n"]}),"\n",(0,l.jsxs)(r.li,{children:["\n",(0,l.jsxs)(r.p,{children:["When provisioning a new cluster, you need to ",(0,l.jsx)(r.a,{href:"/docs/4.0.x/deploy-bare-metal#initialize-cluster-metadata",children:"initialize cluster metadata"}),". Cluster metadata can be initialized through the pulsar-admin CLI ",(0,l.jsx)(r.strong,{children:"only"}),". It cannot be performed via Pulsar admin APIs (REST API and Java admin API)."]}),"\n"]}),"\n"]})}),"\n",(0,l.jsxs)(t.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,l.jsxs)(i.A,{value:"pulsar-admin",children:[(0,l.jsxs)(r.p,{children:["You can provision a new cluster using the ",(0,l.jsx)(r.a,{href:"pathname:///reference/#/4.0.x/pulsar-admin/clusters?id=create",children:(0,l.jsx)(r.code,{children:"create"})})," subcommand. Here's an example:"]}),(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-shell",children:"pulsar-admin clusters create cluster-1 \\\n    --url http://my-cluster.org.com:8080 \\\n    --broker-url pulsar://my-cluster.org.com:6650\n"})})]}),(0,l.jsx)(i.A,{value:"REST API",children:(0,l.jsx)(r.p,{children:(0,l.jsx)(r.a,{href:"https://pulsar.apache.org/admin-rest-api?version=4.0.3&apiVersion=v2#operation/ClustersBase_createCluster",children:"PUT /admin/v2/clusters/{cluster}"})})}),(0,l.jsx)(i.A,{value:"Java",children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-java",children:"ClusterData clusterData = new ClusterData(\n        serviceUrl,\n        serviceUrlTls,\n        brokerServiceUrl,\n        brokerServiceUrlTls\n);\nadmin.clusters().createCluster(clusterName, clusterData);\n"})})})]}),"\n",(0,l.jsx)(r.h2,{id:"get-cluster-configuration",children:"Get cluster configuration"}),"\n",(0,l.jsxs)(r.p,{children:["You can fetch the ",(0,l.jsx)(r.a,{href:"/docs/4.0.x/reference-configuration",children:"configuration"})," for an existing cluster at any time."]}),"\n",(0,l.jsxs)(t.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,l.jsxs)(i.A,{value:"pulsar-admin",children:[(0,l.jsxs)(r.p,{children:["Use the ",(0,l.jsx)(r.a,{href:"pathname:///reference/#/4.0.x/pulsar-admin/clusters?id=get",children:(0,l.jsx)(r.code,{children:"get"})})," subcommand and specify the name of the cluster. Here's an example:"]}),(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-shell",children:"pulsar-admin clusters get cluster-1\n"})}),(0,l.jsx)(r.p,{children:"Output:"}),(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-json",children:'{\n    "serviceUrl": "http://my-cluster.org.com:8080/",\n    "serviceUrlTls": null,\n    "brokerServiceUrl": "pulsar://my-cluster.org.com:6650/",\n    "brokerServiceUrlTls": null\n    "peerClusterNames": null\n}\n'})})]}),(0,l.jsx)(i.A,{value:"REST API",children:(0,l.jsx)(r.p,{children:(0,l.jsx)(r.a,{href:"https://pulsar.apache.org/admin-rest-api?version=4.0.3&apiVersion=v2#operation/ClustersBase_getCluster",children:"GET /admin/v2/clusters/{cluster}"})})}),(0,l.jsx)(i.A,{value:"Java",children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-java",children:"admin.clusters().getCluster(clusterName);\n"})})})]}),"\n",(0,l.jsx)(r.h2,{id:"update-cluster",children:"Update cluster"}),"\n",(0,l.jsx)(r.h3,{id:"update-cluster-configuration",children:"Update cluster configuration"}),"\n",(0,l.jsx)(r.p,{children:"You can update the configuration for an existing cluster at any time."}),"\n",(0,l.jsxs)(t.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,l.jsxs)(i.A,{value:"pulsar-admin",children:[(0,l.jsxs)(r.p,{children:["Use the ",(0,l.jsx)(r.a,{href:"pathname:///reference/#/4.0.x/pulsar-admin/clusters?id=update",children:(0,l.jsx)(r.code,{children:"update"})})," subcommand and specify new configuration values using flags."]}),(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-shell",children:"pulsar-admin clusters update cluster-1 \\\n    --url http://my-cluster.org.com:4081 \\\n    --broker-url pulsar://my-cluster.org.com:3350\n"})})]}),(0,l.jsx)(i.A,{value:"REST API",children:(0,l.jsx)(r.p,{children:(0,l.jsx)(r.a,{href:"https://pulsar.apache.org/admin-rest-api?version=4.0.3&apiVersion=v2#operation/ClustersBase_updateCluster",children:"POST /admin/v2/clusters/{cluster}"})})}),(0,l.jsx)(i.A,{value:"Java",children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-java",children:"ClusterData clusterData = new ClusterData(\n        serviceUrl,\n        serviceUrlTls,\n        brokerServiceUrl,\n        brokerServiceUrlTls\n);\nadmin.clusters().updateCluster(clusterName, clusterData);\n"})})})]}),"\n",(0,l.jsx)(r.h3,{id:"update-peer-cluster-data",children:"Update peer-cluster data"}),"\n",(0,l.jsxs)(r.p,{children:["Peer clusters can be configured for a given cluster in a Pulsar ",(0,l.jsx)(r.a,{href:"/docs/4.0.x/reference-terminology#instance",children:"instance"}),"."]}),"\n",(0,l.jsxs)(t.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,l.jsxs)(i.A,{value:"pulsar-admin",children:[(0,l.jsxs)(r.p,{children:["Use the ",(0,l.jsx)(r.a,{href:"pathname:///reference/#/4.0.x/pulsar-admin/clusters?id=update",children:(0,l.jsx)(r.code,{children:"update-peer-clusters"})})," subcommand and specify the list of peer-cluster names."]}),(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-shell",children:"pulsar-admin update-peer-clusters cluster-1 --peer-clusters cluster-2\n"})})]}),(0,l.jsx)(i.A,{value:"REST API",children:(0,l.jsx)(r.p,{children:(0,l.jsx)(r.a,{href:"https://pulsar.apache.org/admin-rest-api?version=4.0.3&apiVersion=v2#operation/ClustersBase_setPeerClusterNames",children:"POST /admin/v2/clusters/{cluster}/peers"})})}),(0,l.jsx)(i.A,{value:"Java",children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-java",children:"admin.clusters().updatePeerClusterNames(clusterName, peerClusterList);\n"})})})]}),"\n",(0,l.jsx)(r.h2,{id:"list-cluster",children:"List cluster"}),"\n",(0,l.jsxs)(r.p,{children:["You can fetch a list of all clusters in a Pulsar ",(0,l.jsx)(r.a,{href:"/docs/4.0.x/reference-terminology#instance",children:"instance"}),"."]}),"\n",(0,l.jsxs)(t.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,l.jsxs)(i.A,{value:"pulsar-admin",children:[(0,l.jsxs)(r.p,{children:["Use the ",(0,l.jsx)(r.a,{href:"pathname:///reference/#/4.0.x/pulsar-admin/clusters?id=list",children:(0,l.jsx)(r.code,{children:"list"})})," subcommand."]}),(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-shell",children:"pulsar-admin clusters list\n"})}),(0,l.jsx)(r.p,{children:"Output:"}),(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{children:"cluster-1\ncluster-2\n"})})]}),(0,l.jsx)(i.A,{value:"REST API",children:(0,l.jsx)(r.p,{children:(0,l.jsx)(r.a,{href:"https://pulsar.apache.org/admin-rest-api?version=4.0.3&apiVersion=v2#operation/ClustersBase_getClusters",children:"GET /admin/v2/clusters"})})}),(0,l.jsx)(i.A,{value:"Java",children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-java",children:"admin.clusters().getClusters();\n"})})})]}),"\n",(0,l.jsx)(r.h2,{id:"delete-cluster",children:"Delete cluster"}),"\n",(0,l.jsxs)(r.p,{children:["Clusters can be deleted from a Pulsar ",(0,l.jsx)(r.a,{href:"/docs/4.0.x/reference-terminology#instance",children:"instance"}),"."]}),"\n",(0,l.jsxs)(t.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,l.jsxs)(i.A,{value:"pulsar-admin",children:[(0,l.jsxs)(r.p,{children:["Use the ",(0,l.jsx)(r.a,{href:"pathname:///reference/#/4.0.x/pulsar-admin/clusters?id=delete",children:(0,l.jsx)(r.code,{children:"delete"})})," subcommand and specify the name of the cluster."]}),(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{children:"pulsar-admin clusters delete cluster-1\n"})})]}),(0,l.jsx)(i.A,{value:"REST API",children:(0,l.jsx)(r.p,{children:(0,l.jsx)(r.a,{href:"https://pulsar.apache.org/admin-rest-api?version=4.0.3&apiVersion=v2#operation/ClustersBase_deleteCluster",children:"DELETE /admin/v2/clusters/{cluster}"})})}),(0,l.jsx)(i.A,{value:"Java",children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-java",children:"admin.clusters().deleteCluster(clusterName);\n"})})})]})]})}function p(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},19365:(e,r,a)=>{a.d(r,{A:()=>t});a(96540);var s=a(34164);const l={tabItem:"tabItem_Ymn6"};var n=a(74848);function t(e){let{children:r,hidden:a,className:t}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.A)(l.tabItem,t),hidden:a,children:r})}},11470:(e,r,a)=>{a.d(r,{A:()=>I});var s=a(96540),l=a(34164),n=a(23104),t=a(56347),i=a(205),c=a(57485),u=a(31682),d=a(70679);function o(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:a}=e;return(0,s.useMemo)((()=>{const e=r??function(e){return o(e).map((e=>{let{props:{value:r,label:a,attributes:s,default:l}}=e;return{value:r,label:a,attributes:s,default:l}}))}(a);return function(e){const r=(0,u.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,a])}function p(e){let{value:r,tabValues:a}=e;return a.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:a}=e;const l=(0,t.W6)(),n=function(e){let{queryString:r=!1,groupId:a}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:r,groupId:a});return[(0,c.aZ)(n),(0,s.useCallback)((e=>{if(!n)return;const r=new URLSearchParams(l.location.search);r.set(n,e),l.replace({...l.location,search:r.toString()})}),[n,l])]}function x(e){const{defaultValue:r,queryString:a=!1,groupId:l}=e,n=h(e),[t,c]=(0,s.useState)((()=>function(e){let{defaultValue:r,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=a.find((e=>e.default))??a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:n}))),[u,o]=m({queryString:a,groupId:l}),[x,v]=function(e){let{groupId:r}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(r),[l,n]=(0,d.Dv)(a);return[l,(0,s.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:l}),j=(()=>{const e=u??x;return p({value:e,tabValues:n})?e:null})();(0,i.A)((()=>{j&&c(j)}),[j]);return{selectedValue:t,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);c(e),o(e),v(e)}),[o,v,n]),tabValues:n}}var v=a(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=a(74848);function g(e){let{className:r,block:a,selectedValue:s,selectValue:t,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,n.a_)(),d=e=>{const r=e.currentTarget,a=c.indexOf(r),l=i[a].value;l!==s&&(u(r),t(l))},o=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;r=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;r=c[a]??c[c.length-1];break}}r?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},r),children:i.map((e=>{let{value:r,label:a,attributes:n}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>c.push(e),onKeyDown:o,onClick:d,...n,className:(0,l.A)("tabs__item",j.tabItem,n?.className,{"tabs__item--active":s===r}),children:a??r},r)}))})}function b(e){let{lazy:r,children:a,selectedValue:n}=e;const t=(Array.isArray(a)?a:[a]).filter(Boolean);if(r){const e=t.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function A(e){const r=x(e);return(0,f.jsxs)("div",{className:(0,l.A)("tabs-container",j.tabList),children:[(0,f.jsx)(g,{...r,...e}),(0,f.jsx)(b,{...r,...e})]})}function I(e){const r=(0,v.A)();return(0,f.jsx)(A,{...e,children:o(e.children)},String(r))}},28453:(e,r,a)=>{a.d(r,{R:()=>t,x:()=>i});var s=a(96540);const l={},n=s.createContext(l);function t(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);