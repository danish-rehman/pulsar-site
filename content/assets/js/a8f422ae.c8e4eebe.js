"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[69788],{20228:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"setup-building","title":"Setup and building","description":"Prerequisites","source":"@site/contribute/setup-building.md","sourceDirName":".","slug":"/setup-building","permalink":"/contribute/setup-building","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/contribute/setup-building.md","tags":[],"version":"current","lastUpdatedBy":"Alice-sky","lastUpdatedAt":1736235446000,"frontMatter":{"id":"setup-building","title":"Setup and building"},"sidebar":"sidebarDevelopment","previous":{"title":"About","permalink":"/contribute/"},"next":{"title":"Setting up JDKs and Maven using SDKMAN","permalink":"/contribute/setup-buildtools"}}');var i=t(74848),r=t(28453);const l={id:"setup-building",title:"Setup and building"},o=void 0,d={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Clone",id:"clone",level:2},{value:"Build",id:"build",level:2},{value:"Run",id:"run",level:2},{value:"Connect",id:"connect",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Dependency"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Git"}),(0,i.jsxs)(n.td,{children:["The source code of Pulsar is hosted on GitHub as a git repository. To work with the git repository, please ",(0,i.jsx)(n.a,{href:"https://git-scm.com/downloads",children:"install git"}),". We highly recommend that you also ",(0,i.jsx)(n.a,{href:"/contribute/setup-git#mergetool",children:"set up a Git mergetool"})," for resolving merge conflicts."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"JDK"}),(0,i.jsxs)(n.td,{children:["The source code of Pulsar is primarily written in Java. Therefore, you need a working Java Development Kit (JDK) to build it. It recommended to use SDKMAN to install Corretto OpenJDK 21 and 17, see ",(0,i.jsx)(n.a,{href:"/contribute/setup-buildtools",children:'"Setting up JDKs and Maven using SDKMAN"'})," for details."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Maven"}),(0,i.jsxs)(n.td,{children:["The source code of Pulsar is managed by ",(0,i.jsx)(n.a,{href:"https://maven.apache.org/",children:"Apache Maven"})," The recommended Maven version is 3.9.9. It is recommended to use SDKMAN to install Maven, see ",(0,i.jsx)(n.a,{href:"/contribute/setup-buildtools",children:'"Setting up JDKs and Maven using SDKMAN"'})," for details."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Zip"}),(0,i.jsx)(n.td,{children:"The build process requires Zip as a utility tool."})]})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["On Windows, replace ",(0,i.jsx)(n.code,{children:"./mvnw"})," with ",(0,i.jsx)(n.code,{children:"mvnw.cmd"})," in the commands below."]})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Pulsar does not support running server on Windows yet, you have to use Docker to run Pulsar.\nPlease consider checking ",(0,i.jsx)(n.a,{href:"https://pulsar.apache.org/docs/3.1.x/getting-started-docker/",children:"Run Pulsar In Docker"})]})}),"\n",(0,i.jsx)(n.h2,{id:"clone",children:"Clone"}),"\n",(0,i.jsx)(n.p,{children:"Clone the source code to your development machine:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/apache/pulsar\n"})}),"\n",(0,i.jsx)(n.p,{children:"The following commands are assumed to be executed from the project root directory:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd pulsar\n"})}),"\n",(0,i.jsx)(n.h2,{id:"build",children:"Build"}),"\n",(0,i.jsx)(n.p,{children:"Compile and install to local Maven repository:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./mvnw clean install -DskipTests\n"})}),"\n",(0,i.jsx)(n.h2,{id:"run",children:"Run"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bin/pulsar standalone\n"})}),"\n",(0,i.jsx)(n.h2,{id:"connect",children:"Connect"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bin/pulsar-shell\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var s=t(96540);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);