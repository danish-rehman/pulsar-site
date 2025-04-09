"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[78685],{6360:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"client-libraries-java","title":"Pulsar Java client","description":"You can use a Pulsar Java client to create Pulsar producers, consumers, and readers in Java and perform administrative tasks. All the methods in Java clients are thread-safe. The current Java client version is 4.0.4.","source":"@site/versioned_docs/version-4.0.x/client-libraries-java.md","sourceDirName":".","slug":"/client-libraries-java","permalink":"/docs/4.0.x/client-libraries-java","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-4.0.x/client-libraries-java.md","tags":[],"version":"4.0.x","frontMatter":{"id":"client-libraries-java","title":"Pulsar Java client","sidebar_label":"Java"},"sidebar":"docsSidebar","previous":{"title":"Overview","permalink":"/docs/4.0.x/client-libraries"},"next":{"title":"Set up","permalink":"/docs/4.0.x/client-libraries-java-setup"}}');var a=i(74848),t=i(28453);const l={id:"client-libraries-java",title:"Pulsar Java client",sidebar_label:"Java"},s=void 0,c={},d=[{value:"Get started",id:"get-started",level:2},{value:"What&#39;s next?",id:"whats-next",level:2},{value:"Reference doc",id:"reference-doc",level:2},{value:"API reference",id:"api-reference",level:4},{value:"More reference",id:"more-reference",level:4}];function o(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:["You can use a Pulsar Java client to create Pulsar ",(0,a.jsx)(r.a,{href:"/docs/4.0.x/concepts-clients#producer",children:"producers"}),", ",(0,a.jsx)(r.a,{href:"/docs/4.0.x/concepts-clients#consumer",children:"consumers"}),", and ",(0,a.jsx)(r.a,{href:"/docs/4.0.x/concepts-clients#reader",children:"readers"})," in Java and perform ",(0,a.jsx)(r.a,{href:"/docs/4.0.x/admin-api-overview",children:"administrative tasks"}),". All the methods in Java clients are thread-safe. The current Java client version is ",(0,a.jsx)(r.strong,{children:"4.0.4"}),"."]}),"\n",(0,a.jsx)(r.h2,{id:"get-started",children:"Get started"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/docs/4.0.x/client-libraries-java-setup",children:"Set up Java client library"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/docs/4.0.x/client-libraries-java-initialize",children:"Initialize a Java client"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/docs/4.0.x/client-libraries-java-use",children:"Use a Java client"})}),"\n"]}),"\n",(0,a.jsx)(r.admonition,{type:"note",children:(0,a.jsxs)(r.p,{children:["Please refer to ",(0,a.jsx)(r.a,{href:"/docs/4.0.x/client-libraries-java-setup#java-client-performance",children:"Java client Performance considerations"})," for more information on how to improve the performance of the Java client and tune the Java JVM options to avoid ",(0,a.jsx)(r.code,{children:"java.lang.OutOfMemoryError: Direct buffer memory"})," errors in high-throughput applications."]})}),"\n",(0,a.jsx)(r.h2,{id:"whats-next",children:"What's next?"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/docs/4.0.x/client-libraries-clients",children:"Work with clients"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/docs/4.0.x/client-libraries-producers",children:"Work with producers"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/docs/4.0.x/client-libraries-consumers",children:"Work with consumers"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/docs/4.0.x/client-libraries-readers",children:"Work with readers"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/docs/4.0.x/client-libraries-tableviews",children:"Work with TableView"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/docs/4.0.x/client-libraries-cluster-level-failover",children:"Configure cluster-level failover"})}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"reference-doc",children:"Reference doc"}),"\n",(0,a.jsx)(r.h4,{id:"api-reference",children:"API reference"}),"\n",(0,a.jsx)(r.p,{children:"The following table outlines the API packages and reference docs for Pulsar Java clients."}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{style:{textAlign:"left"},children:"Package"}),(0,a.jsx)(r.th,{style:{textAlign:"left"},children:"Description"}),(0,a.jsx)(r.th,{style:{textAlign:"left"},children:"Maven Artifact"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{style:{textAlign:"left"},children:(0,a.jsx)(r.a,{href:"https://pulsar.apache.org/api/client/4.0.x",children:(0,a.jsx)(r.code,{children:"org.apache.pulsar.client.api"})})}),(0,a.jsxs)(r.td,{style:{textAlign:"left"},children:["Java client API. ",(0,a.jsx)("br",{})," See ",(0,a.jsx)(r.a,{href:"/docs/4.0.x/pulsar-api-overview#pulsar-client-apis",children:"Client API overview"})," for more reference."]}),(0,a.jsx)(r.td,{style:{textAlign:"left"},children:(0,a.jsx)(r.a,{href:"http://search.maven.org/#artifactdetails%7Corg.apache.pulsar%7Cpulsar-client%7C4.0.4%7Cjar",children:"org.apache.pulsar:pulsar-client:4.0.4"})})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{style:{textAlign:"left"},children:(0,a.jsx)(r.a,{href:"https://pulsar.apache.org/api/admin/4.0.x",children:(0,a.jsx)(r.code,{children:"org.apache.pulsar.client.admin"})})}),(0,a.jsxs)(r.td,{style:{textAlign:"left"},children:["Java admin API. ",(0,a.jsx)("br",{})," See ",(0,a.jsx)(r.a,{href:"/docs/4.0.x/admin-api-overview",children:"Admin API overview"})," for more reference."]}),(0,a.jsx)(r.td,{style:{textAlign:"left"},children:(0,a.jsx)(r.a,{href:"http://search.maven.org/#artifactdetails%7Corg.apache.pulsar%7Cpulsar-client-admin%7C4.0.4%7Cjar",children:"org.apache.pulsar:pulsar-client-admin:4.0.4"})})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{style:{textAlign:"left"},children:(0,a.jsx)(r.code,{children:"org.apache.pulsar.client.all"})}),(0,a.jsxs)(r.td,{style:{textAlign:"left"},children:["Include both ",(0,a.jsx)(r.code,{children:"pulsar-client"})," and ",(0,a.jsx)(r.code,{children:"pulsar-client-admin"}),".",(0,a.jsx)("br",{})," Both ",(0,a.jsx)(r.code,{children:"pulsar-client"})," and ",(0,a.jsx)(r.code,{children:"pulsar-client-admin"})," are independently shaded packages. Consequently, the applications using both ",(0,a.jsx)(r.code,{children:"pulsar-client"})," and ",(0,a.jsx)(r.code,{children:"pulsar-client-admin"})," have redundant shaded classes. It would be troublesome if you introduce new dependencies but forget to update shading rules. ",(0,a.jsx)("br",{})," In this case, you can use ",(0,a.jsx)(r.code,{children:"pulsar-client-all"}),", which shades dependencies only one time and reduces the size of dependencies."]}),(0,a.jsx)(r.td,{style:{textAlign:"left"},children:(0,a.jsx)(r.a,{href:"http://search.maven.org/#artifactdetails%7Corg.apache.pulsar%7Cpulsar-client-all%7C4.0.4%7Cjar",children:"org.apache.pulsar:pulsar-client-all:4.0.4"})})]})]})]}),"\n",(0,a.jsx)(r.h4,{id:"more-reference",children:"More reference"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"pathname:///reference/#/4.0.x/client/",children:"Java client configurations"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/release-notes/client-java",children:"Release notes"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/client-feature-matrix/",children:"Client feature matrix"})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},28453:(e,r,i)=>{i.d(r,{R:()=>l,x:()=>s});var n=i(96540);const a={},t=n.createContext(a);function l(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);