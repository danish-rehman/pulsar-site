"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[26354],{31696:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"develop-coding-conventions","title":"Coding conventions","description":"The guidelines help to encourage consistency and best practices among people working on Apache Pulsar code base. You should observe the guidelines unless there is compelling reason to ignore them. Pulsar uses checkstyle to enforce coding style, refer to our checkstyle rules for all enforced checkstyle rules.","source":"@site/contribute/develop-coding-conventions.md","sourceDirName":".","slug":"/develop-coding-conventions","permalink":"/contribute/develop-coding-conventions","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/contribute/develop-coding-conventions.md","tags":[],"version":"current","lastUpdatedBy":"Lari Hotari","lastUpdatedAt":1736243298000,"frontMatter":{"id":"develop-coding-conventions","title":"Coding conventions"},"sidebar":"sidebarDevelopment","previous":{"title":"Debugging","permalink":"/contribute/setup-debugging"},"next":{"title":"Triaging an Issue","permalink":"/contribute/develop-triage"}}');var i=s(74848),o=s(28453);const r={id:"develop-coding-conventions",title:"Coding conventions"},l=void 0,a={},c=[{value:"Java code style",id:"java-code-style",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Future",id:"future",level:2},{value:"Memory",id:"memory",level:2},{value:"Logging",id:"logging",level:2},{value:"Logging levels",id:"logging-levels",level:3},{value:"Monitoring",id:"monitoring",level:2},{value:"Unit tests",id:"unit-tests",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Concurrency",id:"concurrency",level:2},{value:"Backwards compatibility",id:"backwards-compatibility",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The guidelines help to encourage consistency and best practices among people working on Apache Pulsar code base. You should observe the guidelines unless there is compelling reason to ignore them. Pulsar uses checkstyle to enforce coding style, refer to our ",(0,i.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/master/buildtools/src/main/resources/pulsar/checkstyle.xml",children:"checkstyle rules"})," for all enforced checkstyle rules."]}),"\n",(0,i.jsx)(n.h2,{id:"java-code-style",children:"Java code style"}),"\n",(0,i.jsxs)(n.p,{children:["Apache Pulsar code follows the ",(0,i.jsx)(n.a,{href:"http://www.oracle.com/technetwork/java/javase/documentation/codeconvtoc-136057.html",children:"Sun Java Coding Convention"}),", with the following additions."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Indentation should be ",(0,i.jsx)(n.strong,{children:"4 spaces"}),". Tabs should never be used."]}),"\n",(0,i.jsx)(n.li,{children:"Use curly braces even for single-line ifs and elses."}),"\n",(0,i.jsx)(n.li,{children:"No @author tags in any javadoc."}),"\n",(0,i.jsx)(n.li,{children:"Use try-with-resources blocks whenever is possible."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"TODO"}),"s should be associated to at least one issue."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,i.jsx)(n.p,{children:"Apache Pulsar uses the following libraries a lot:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/google/guava",children:"Guava"})," as a fundamental core library"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"http://netty.io/",children:"Netty"})," for network communications and memory buffer management."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Use these libraries whenever possible rather than introducing more dependencies."}),"\n",(0,i.jsx)(n.p,{children:"Dependencies are bundled with our binary distributions, so you need to attach the relevant licenses when adding new dependencies."}),"\n",(0,i.jsx)(n.h2,{id:"future",children:"Future"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"CompletableFuture"})," introduce in Java 8 is preferred over Guava's ",(0,i.jsx)(n.code,{children:"ListenableFuture"}),". Use ",(0,i.jsx)(n.code,{children:"CompletableFuture"})," whenever possible."]}),"\n",(0,i.jsx)(n.h2,{id:"memory",children:"Memory"}),"\n",(0,i.jsxs)(n.p,{children:["Use netty ",(0,i.jsx)(n.code,{children:"ByteBuf"})," over ",(0,i.jsx)(n.code,{children:"java.nio.ByteBuffer"})," for internal usage. As Pulsar uses Netty Buffer for memory management."]}),"\n",(0,i.jsx)(n.h2,{id:"logging",children:"Logging"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Logging should be taken seriously. Please take the time to access the logs when making a change to ensure that the important things are getting logged and there is no junk there."}),"\n",(0,i.jsx)(n.li,{children:"Logging statements should be complete sentences with proper capitalization that are written to be read by a person not necessarily familiar with the source code."}),"\n",(0,i.jsxs)(n.li,{children:["All logs should be done with ",(0,i.jsx)(n.strong,{children:"SLF4j"}),", never ",(0,i.jsx)(n.code,{children:"System.out"})," or ",(0,i.jsx)(n.code,{children:"System.err"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"logging-levels",children:"Logging levels"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"INFO"})," is the level you should assume the software will be run in. INFO messages are things which are not bad but which the user will definitely want to know about every time they occur."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"TRACE"})," and ",(0,i.jsx)(n.strong,{children:"DEBUG"})," are both things you turn on when something is wrong, and you want to figure out what is going on. ",(0,i.jsx)(n.strong,{children:"DEBUG"})," should not be so fine-grained that it will seriously affect performance of the program. ",(0,i.jsx)(n.strong,{children:"TRACE"})," can be anything. You should wrap DEBUG and TRACE statements in the ",(0,i.jsx)(n.code,{children:"if (logger.isDebugEnabled())"})," or ",(0,i.jsx)(n.code,{children:"if (logger.isTraceEnabled())"})," check to avoid performance degradation."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"WARN"})," and ",(0,i.jsx)(n.strong,{children:"ERROR"})," indicate something that is ",(0,i.jsx)(n.em,{children:"BAD"}),". Use WARN if you aren't totally sure it is bad, and ERROR if you are."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Log the stack traces at ",(0,i.jsx)(n.strong,{children:"ERROR"})," level, but never at ",(0,i.jsx)(n.strong,{children:"INFO"})," level or below. You can log at ",(0,i.jsx)(n.strong,{children:"WARN"})," level if you are interested in debugging."]}),"\n",(0,i.jsx)(n.h2,{id:"monitoring",children:"Monitoring"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Any new features should come with appropriate metrics, so monitoring the feature is working correctly."}),"\n",(0,i.jsx)(n.li,{children:"Those metrics should be taken seriously and only export useful metrics that would be used on production on monitoring/alerting healthy of the system, or troubleshooting problems."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"unit-tests",children:"Unit tests"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"New changes should come with unit tests that verify the functionality being added."}),"\n",(0,i.jsx)(n.li,{children:"Unit tests should test the least amount of code possible. Don't start the whole server unless there is no other way to test a single class or small group of classes in isolation."}),"\n",(0,i.jsx)(n.li,{children:"Tests should not depend on any external resources. They need to set up and teardown their own stuff."}),"\n",(0,i.jsx)(n.li,{children:"It is okay to use the filesystem and network in tests since that's our business, but you need to clean up them after test."}),"\n",(0,i.jsx)(n.li,{children:"DO NOT use sleep or other timing assumptions in tests. It is wrong and will fail intermittently on any test server with other things going on that causes delays."}),"\n",(0,i.jsxs)(n.li,{children:["You'd better add a timeout value to all test cases, to prevent a build from completing indefinitely. For example, ",(0,i.jsx)(n.code,{children:"@Test(timeout=60000)"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"When you use the config files, think of the names from the very beginning."}),"\n",(0,i.jsx)(n.li,{children:"If you run the program without tuning parameters, use the default values."}),"\n",(0,i.jsxs)(n.li,{children:["All configuration settings should be added accordingly in the ",(0,i.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master/conf",children:"default configuration file"})," directory and documented accordingly."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"concurrency",children:"Concurrency"}),"\n",(0,i.jsx)(n.p,{children:"Apache Pulsar is a low latency system, it is implemented as a purely asynchronous service, which is accomplished as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["All public classes should be ",(0,i.jsx)(n.strong,{children:"thread-safe"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Prefer using ",(0,i.jsx)(n.a,{href:"https://github.com/apache/bookkeeper/blob/master/bookkeeper-common/src/main/java/org/apache/bookkeeper/common/util/OrderedExecutor.java",children:"OrderedExecutor"})," for executing any asynchronous actions. The mutations to the same instance should be submitted to the same thread to execute."]}),"\n",(0,i.jsx)(n.li,{children:"If synchronization and locking are required, they should be in a fine granularity way."}),"\n",(0,i.jsx)(n.li,{children:"All threads should have proper meaningful name."}),"\n",(0,i.jsxs)(n.li,{children:["If a class is not thread-safe, it should be annotated ",(0,i.jsx)(n.a,{href:"https://github.com/misberner/jsr-305/blob/master/ri/src/main/java/javax/annotation/concurrent/NotThreadSafe.java",children:"@NotThreadSafe"}),". The instances that use this class is responsible for its synchronization."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"backwards-compatibility",children:"Backwards compatibility"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Wire protocol should support backwards compatibility to enable no-downtime upgrades. This means the servers ",(0,i.jsx)(n.strong,{children:"MUST"})," be able to support requests from both old and new clients simultaneously."]}),"\n",(0,i.jsx)(n.li,{children:"Metadata formats and data formats should support backwards compatibility."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var t=s(96540);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);