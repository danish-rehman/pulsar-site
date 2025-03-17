"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[15195],{4676:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"document-contribution","title":"Updating document","description":"This guide explains the organization of Pulsar documentation and website repos and the workflow of updating various Pulsar documents.","source":"@site/contribute/document-contribution.md","sourceDirName":".","slug":"/document-contribution","permalink":"/contribute/document-contribution","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/contribute/document-contribution.md","tags":[],"version":"current","lastUpdatedBy":"Lari Hotari","lastUpdatedAt":1741938320000,"frontMatter":{"id":"document-contribution","title":"Updating document"},"sidebar":"sidebarDevelopment","previous":{"title":"Introduction","permalink":"/contribute/document-intro"},"next":{"title":"Release policy","permalink":"/contribute/release-policy"}}');var s=t(74848),a=t(28453);const o={id:"document-contribution",title:"Updating document"},i=void 0,c={},d=[{value:"Source repositories",id:"source-repositories",level:2},{value:"Update versioned docs",id:"update-versioned-docs",level:2},{value:"Update reference docs",id:"update-reference-docs",level:2},{value:"Update configuration docs",id:"update-configuration-docs",level:3},{value:"Update command-line tool docs",id:"update-command-line-tool-docs",level:3},{value:"Update feature matrix",id:"update-feature-matrix",level:2}];function l(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"This guide explains the organization of Pulsar documentation and website repos and the workflow of updating various Pulsar documents."}),"\n",(0,s.jsx)(r.h2,{id:"source-repositories",children:"Source repositories"}),"\n",(0,s.jsxs)(r.p,{children:["Currently, the source of documents and website (where the docs are finally published) are located at the ",(0,s.jsx)(r.a,{href:"https://github.com/apache/pulsar-site",children:"apache/pulsar-site"})," repo."]}),"\n",(0,s.jsx)(r.h2,{id:"update-versioned-docs",children:"Update versioned docs"}),"\n",(0,s.jsxs)(r.p,{children:["Documentation should be up to date for all ",(0,s.jsx)(r.a,{href:"https://pulsar.apache.org/contribute/release-policy/#supported-versions",children:"actively supported versions"}),"."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"# List all supported major.minor.x versions\n./scripts/docs-tool.sh supported_versions\n"})}),"\n",(0,s.jsx)(r.p,{children:"No need to update documentation for versions that are not actively maintained unless the documentation is incorrect."}),"\n",(0,s.jsxs)(r.p,{children:["To update versioned docs, go to ",(0,s.jsx)(r.a,{href:"https://github.com/apache/pulsar-site/tree/main/versioned_docs",children:"versioned_docs folder"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["After committing the changes for the ",(0,s.jsx)(r.code,{children:"docs"})," directory, you can use the ",(0,s.jsx)(r.code,{children:"docs-tool"})," to apply the changes to the versioned docs. This tool is a wrapper around ",(0,s.jsx)(r.code,{children:"git diff"})," and ",(0,s.jsx)(r.code,{children:"patch"}),". If the patch is not applied correctly, you will have to manually apply the changes to the versioned docs."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"./scripts/docs-tool.sh apply_changes_to_versioned_docs\n"})}),"\n",(0,s.jsx)(r.p,{children:"For example, if you want to add docs for an improvement introduced in 4.0.1, you can add the following instructions:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:":::note\n\nThis <fix / improvment> is available for 4.0.1 and later versions.\n\n:::\n"})}),"\n",(0,s.jsx)(r.h2,{id:"update-reference-docs",children:"Update reference docs"}),"\n",(0,s.jsxs)(r.p,{children:["If you want to update ",(0,s.jsx)(r.a,{href:"pathname:///reference/",children:"Pulsar reference docs"}),", you should update the corresponding source files."]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Some reference docs are generated from code ",(0,s.jsx)(r.strong,{children:"automatically"}),". If you want to update the docs, you need to update the source code files."]}),"\n",(0,s.jsxs)(r.li,{children:["Some configuration docs are updated ",(0,s.jsx)(r.strong,{children:"manually"})," using markdown files."]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"update-configuration-docs",children:"Update configuration docs"}),"\n",(0,s.jsxs)(r.p,{children:["Docs for configs of bundled components are generated from command-line tools ",(0,s.jsx)(r.strong,{children:"automatically"}),":"]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Components"}),(0,s.jsx)(r.th,{children:"Update where ..."})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Broker"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/ServiceConfiguration.java",children:"org.apache.pulsar.broker.ServiceConfiguration"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"WebSocket"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-websocket/src/main/java/org/apache/pulsar/websocket/service/WebSocketProxyConfiguration.java",children:"org.apache.pulsar.websocket.service.WebSocketProxyConfiguration"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Proxy"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-proxy/src/main/java/org/apache/pulsar/proxy/server/ProxyConfiguration.java",children:"org.apache.pulsar.proxy.server.ProxyConfiguration"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Standalone"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/ServiceConfiguration.java",children:"org.apache.pulsar.broker.ServiceConfiguration"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Client"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/conf/ClientConfigurationData.java",children:"org.apache.pulsar.client.impl.conf.ClientConfigurationData"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Producer"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/conf/ProducerConfigurationData.java",children:"org.apache.pulsar.client.impl.conf.ProducerConfigurationData"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Consumer"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/conf/ConsumerConfigurationData.java",children:"org.apache.pulsar.client.impl.conf.ConsumerConfigurationData"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Reader"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/conf/ReaderConfigurationData.java",children:"org.apache.pulsar.client.impl.conf.ReaderConfigurationData"})})]})]})]}),"\n",(0,s.jsxs)(r.p,{children:["Docs for configs of external components (whose source code is hosted outside the Pulsar repositories) are updated ",(0,s.jsx)(r.strong,{children:"manually"}),":"]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Components"}),(0,s.jsx)(r.th,{children:"Update where ..."})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"BookKeeper"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/apache/pulsar-site/blob/main/static/reference/next/config/reference-configuration-bookkeeper.md",children:"reference-configuration-bookkeeper.md"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Log4j"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/apache/pulsar-site/blob/main/static/reference/next/config/reference-configuration-log4j.md",children:"reference-configuration-log4j.md"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Log4j shell"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/apache/pulsar-site/blob/main/static/reference/next/config/reference-configuration-log4j-shell.md",children:"reference-configuration-log4j-shell.md"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ZooKeeper"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/apache/pulsar-site/blob/main/static/reference/next/config/reference-configuration-zookeeper.md",children:"reference-configuration-zookeeper.md"})})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"update-command-line-tool-docs",children:"Update command-line tool docs"}),"\n",(0,s.jsxs)(r.p,{children:["Docs for bundled Java-based command-line tools are generated ",(0,s.jsx)(r.strong,{children:"automatically"}),":"]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Components"}),(0,s.jsx)(r.th,{children:"Update where\u2026"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"pulsar"}),(0,s.jsxs)(r.td,{children:["Different subcommands of ",(0,s.jsx)(r.a,{href:"https://github.com/apache/pulsar/blob/master/bin/pulsar",children:"bin/pulsar"})," are updated in different code files"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"pulsar-admin"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/apache/pulsar/tree/master/pulsar-client-tools/src/main/java/org/apache/pulsar/admin/cli",children:"Classes under the admin command-line folder"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"pulsar-client"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/apache/pulsar/tree/master/pulsar-client-tools/src/main/java/org/apache/pulsar/client/cli",children:"Classes under the client command-line folder"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"pulsar-perf"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)("li",{children:(0,s.jsxs)(r.a,{href:"https://github.com/apache/pulsar/tree/master/pulsar-testclient/src/main/java/org/apache/pulsar/proxy/socket/client",children:["The ",(0,s.jsx)(r.code,{children:"websocket-producer"})," subcommand"]})}),(0,s.jsx)("li",{children:(0,s.jsx)(r.a,{href:"https://github.com/apache/pulsar/tree/master/pulsar-testclient/src/main/java/org/apache/pulsar/testclient",children:"Other subcommands"})})]})]})]})]}),"\n",(0,s.jsxs)(r.p,{children:["Docs for external command-line tools or bare scripts are updated ",(0,s.jsx)(r.strong,{children:"manually"}),":"]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Components"}),(0,s.jsx)(r.th,{children:"Update where\u2026"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"pulsar-shell"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/apache/pulsar-site/blob/main/static/reference/next/pulsar-shell/pulsar-shell.md",children:"pulsar-shell.md"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"pulsar-daemon"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/apache/pulsar-site/blob/main/static/reference/next/pulsar-daemon/pulsar-daemon.md",children:"pulsar-daemon.md"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"bookkeeper"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://github.com/apache/pulsar-site/blob/main/static/reference/next/bookkeeper/bookkeeper.md",children:"bookkeeper.md"})})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"update-feature-matrix",children:"Update feature matrix"}),"\n",(0,s.jsx)(r.p,{children:"Pulsar feature matrix introduces the features supported by language-specific clients and functions. It includes:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"pathname:///client-feature-matrix",children:"Client Feature Matrix"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://docs.google.com/spreadsheets/d/1YHYTkIXR8-Ql103u-IMI18TXLlGStK8uJjDsOOA0T20/edit#gid=328808194",children:"Function Feature Matrix"})}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"You need to update the feature matrix as soon as your related commits get merged. The workflow is illustrated as follows."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"Client Feature Matrix Workflow",src:t(1722).A+"",width:"584",height:"442"})}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"Submit your code and doc PRs."}),"\n",(0,s.jsx)(r.li,{children:"Get your PRs reviewed and merged."}),"\n",(0,s.jsx)(r.li,{children:"Update the feature matrix to flag your contribution."}),"\n"]}),"\n",(0,s.jsx)(r.admonition,{type:"note",children:(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["For how to update the ",(0,s.jsx)(r.a,{href:"pathname:///client-feature-matrix",children:"Client Feature Matrix"}),", see ",(0,s.jsx)(r.a,{href:"/contribute/site-intro#how-to-update-data-driven-pages",children:"How to update data-driven pages"}),"."]}),"\n",(0,s.jsxs)(r.li,{children:["If you have problems in editing the spreadsheet of ",(0,s.jsx)(r.a,{href:"https://docs.google.com/spreadsheets/d/1YHYTkIXR8-Ql103u-IMI18TXLlGStK8uJjDsOOA0T20/edit#gid=328808194",children:"Function Feature Matrix"}),", you can reach out to ",(0,s.jsx)(r.code,{children:"dev@pulsar.apache.org"}),"."]}),"\n"]})})]})}function h(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1722:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/client-matrix-workflow-e5e553d47d971e39c37b9ed5cdee3ff3.png"},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>i});var n=t(96540);const s={},a=n.createContext(s);function o(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);