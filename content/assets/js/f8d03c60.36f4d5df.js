"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[24561],{65340:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>t,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"client-libraries-java-setup","title":"Set up Java client","description":"Learn how to set up Java client library in Pulsar.","source":"@site/versioned_docs/version-3.3.x/client-libraries-java-setup.md","sourceDirName":".","slug":"/client-libraries-java-setup","permalink":"/docs/3.3.x/client-libraries-java-setup","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.3.x/client-libraries-java-setup.md","tags":[],"version":"3.3.x","frontMatter":{"id":"client-libraries-java-setup","title":"Set up Java client","sidebar_label":"Set up","description":"Learn how to set up Java client library in Pulsar."},"sidebar":"docsSidebar","previous":{"title":"Java","permalink":"/docs/3.3.x/client-libraries-java"},"next":{"title":"Initialize","permalink":"/docs/3.3.x/client-libraries-java-initialize"}}');var r=i(74848),s=i(28453);const t={id:"client-libraries-java-setup",title:"Set up Java client",sidebar_label:"Set up",description:"Learn how to set up Java client library in Pulsar."},l=void 0,o={},c=[{value:"Step 1: Install Java client library",id:"step-1-install-java-client-library",level:2},{value:"Maven",id:"maven",level:3},{value:"Gradle",id:"gradle",level:3},{value:"Pulsar BOM",id:"pulsar-bom",level:3},{value:"Maven",id:"pulsar-bom-maven",level:4},{value:"Gradle",id:"pulsar-bom-gradle",level:4},{value:"Spring Boot",id:"spring-boot",level:3},{value:"Spring Boot using Maven",id:"spring-boot-maven",level:4},{value:"Spring Boot using Gradle",id:"spring-boot-gradle",level:4},{value:"Step 2: Connect to Pulsar cluster",id:"step-2-connect-to-pulsar-cluster",level:2},{value:"Java client Performance considerations",id:"java-client-performance",level:2},{value:"Increasing the memory limit",id:"increasing-the-memory-limit",level:3},{value:"Enabling optimized Netty direct memory buffer access",id:"enabling-optimized-netty-direct-memory-buffer-access",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"To set up Java client in Pulsar, complete the following steps."}),"\n",(0,r.jsx)(n.h2,{id:"step-1-install-java-client-library",children:"Step 1: Install Java client library"}),"\n",(0,r.jsxs)(n.p,{children:["The latest version of the Pulsar Java client library is available via ",(0,r.jsx)(n.a,{href:"http://search.maven.org/#artifactdetails%7Corg.apache.pulsar%7Cpulsar-client%7C3.3.4%7Cjar",children:"Maven Central"}),". To use the latest version, add the ",(0,r.jsx)(n.code,{children:"pulsar-client"})," library to your build configuration."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://search.maven.org/artifact/org.apache.pulsar/pulsar-client",children:(0,r.jsx)(n.code,{children:"pulsar-client"})})," and ",(0,r.jsx)(n.a,{href:"https://search.maven.org/artifact/org.apache.pulsar/pulsar-client-admin",children:(0,r.jsx)(n.code,{children:"pulsar-client-admin"})})," shade dependencies via ",(0,r.jsx)(n.a,{href:"https://maven.apache.org/plugins/maven-shade-plugin/",children:"maven-shade-plugin"})," to avoid conflicts of the underlying dependency packages (such as Netty). If you do not want to manage dependency conflicts manually, you can use them."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://search.maven.org/artifact/org.apache.pulsar/pulsar-client-original",children:(0,r.jsx)(n.code,{children:"pulsar-client-original"})})," and ",(0,r.jsx)(n.a,{href:"https://search.maven.org/artifact/org.apache.pulsar/pulsar-client-admin-original",children:(0,r.jsx)(n.code,{children:"pulsar-client-admin-original"})})," ",(0,r.jsx)(n.strong,{children:"does not"})," shade dependencies. If you want to manage dependencies manually, you can use them."]}),"\n"]})}),"\n",(0,r.jsx)(n.h3,{id:"maven",children:"Maven"}),"\n",(0,r.jsxs)(n.p,{children:["If you use Maven, add the following information to the ",(0,r.jsx)(n.code,{children:"pom.xml"})," file."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"\x3c!-- in your <properties> block --\x3e\n<pulsar.version>3.3.4</pulsar.version>\n\n\x3c!-- in your <dependencies> block --\x3e\n<dependency>\n  <groupId>org.apache.pulsar</groupId>\n  <artifactId>pulsar-client</artifactId>\n  <version>${pulsar.version}</version>\n</dependency>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"gradle",children:"Gradle"}),"\n",(0,r.jsxs)(n.p,{children:["If you use Gradle, add the following information to the ",(0,r.jsx)(n.code,{children:"build.gradle"})," file."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-groovy",children:"def pulsarVersion = '3.3.4'\n\ndependencies {\n\timplementation \"org.apache.pulsar:pulsar-client:${pulsarVersion}\"\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"pulsar-bom",children:"Pulsar BOM"}),"\n",(0,r.jsxs)(n.p,{children:["While the above dependencies are sufficient to obtain the Pulsar Java client, it is recommended to also use the ",(0,r.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/master/pip/pip-326.md",children:"Pulsar BOM"})," to ensure that all Pulsar dependencies (both direct and transitive) are at the same expected version.\nIn order to use the BOM, the previous directions are modified slightly as follows:"]}),"\n",(0,r.jsx)(n.h4,{id:"pulsar-bom-maven",children:"Maven"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Please notice that when using Spring Boot and the default Maven build, it is necessary to use Spring Boot Maven plugin features to configure the Pulsar version. Please refer to the ",(0,r.jsx)(n.a,{href:"#spring-boot-maven",children:"Spring Boot using Maven"})," section for more details."]})}),"\n",(0,r.jsxs)(n.p,{children:["If you use Maven, add the following information to the ",(0,r.jsx)(n.code,{children:"pom.xml"})," file."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"\x3c!-- in your <properties> block --\x3e\n<pulsar.version>3.3.4</pulsar.version>\n\n\x3c!-- in your <dependencyManagement>/<dependencies> block --\x3e\n<dependency>\n  <groupId>org.apache.pulsar</groupId>\n  <artifactId>pulsar-bom</artifactId>\n  <version>${pulsar.version}</version>\n  <type>pom</type>\n  <scope>import</scope>\n</dependency>\n\n\x3c!-- in your <dependencies> block --\x3e\n<dependency>\n  <groupId>org.apache.pulsar</groupId>\n  <artifactId>pulsar-client</artifactId>\n</dependency>\n"})}),"\n",(0,r.jsx)(n.h4,{id:"pulsar-bom-gradle",children:"Gradle"}),"\n",(0,r.jsxs)(n.p,{children:["If you use Gradle, add the following information to the ",(0,r.jsx)(n.code,{children:"build.gradle"})," file."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Please notice that when using Spring Boot and the default Gradle  build with the Spring Dependency Management plugin (",(0,r.jsx)(n.code,{children:"io.spring.dependency-management"}),"), it is necessary to use Spring Dependency Management plugin features to configure the Pulsar version. Please refer to the ",(0,r.jsx)(n.a,{href:"#spring-boot-gradle",children:"Spring Boot using Gradle"})," section for more details."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-groovy",children:"def pulsarVersion = '3.3.4'\n\ndependencies {\n  implementation enforcedPlatform(\"org.apache.pulsar:pulsar-bom:${pulsarVersion}\")\n  implementation 'org.apache.pulsar:pulsar-client'\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Note that the version is number for the ",(0,r.jsx)(n.code,{children:"pulsar-client"})," dependency is now omitted as the Pulsar BOM dictates which version is used."]}),"\n",(0,r.jsx)(n.h3,{id:"spring-boot",children:"Spring Boot"}),"\n",(0,r.jsxs)(n.p,{children:["You can find more information about using Pulsar with Spring Boot in the ",(0,r.jsx)(n.a,{href:"https://docs.spring.io/spring-boot/reference/messaging/pulsar.html",children:"Spring Boot documentation"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"spring-boot-maven",children:"Spring Boot using Maven"}),"\n",(0,r.jsxs)(n.p,{children:["The Spring Boot ",(0,r.jsx)(n.a,{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/appendix-dependency-versions.html",children:"Dependency Version properties"})," define ",(0,r.jsx)(n.code,{children:"pulsar.version"})," and ",(0,r.jsx)(n.code,{children:"pulsar-reactive.version"})," for controlling the Pulsar Java client version and Pulsar Reactive client version."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"\x3c!-- in your <properties> block --\x3e\n<pulsar.version>3.3.4</pulsar.version>\n\n\x3c!-- in your <dependencies> block --\x3e\n\x3c!-- The Pulsar Java client will be automatically added to dependencies as a transitive dependency of the spring-boot-starter-pulsar dependency --\x3e\n<dependency>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter-pulsar</artifactId>\n</dependency>\n"})}),"\n",(0,r.jsx)(n.h4,{id:"spring-boot-gradle",children:"Spring Boot using Gradle"}),"\n",(0,r.jsxs)(n.p,{children:["Please notice that when using the Spring Dependency Management plugin (",(0,r.jsx)(n.code,{children:"io.spring.dependency-management"}),") in Gradle, it is necessary to use Spring Dependency Management plugin features to configure the Pulsar version.\nThe Spring Boot ",(0,r.jsx)(n.a,{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/appendix-dependency-versions.html",children:"Dependency Version properties"})," define ",(0,r.jsx)(n.code,{children:"pulsar.version"})," and ",(0,r.jsx)(n.code,{children:"pulsar-reactive.version"})," for controlling the Pulsar Java client version and Pulsar Reactive client version."]}),"\n",(0,r.jsxs)(n.p,{children:["To use a specific Pulsar version for the Pulsar Java client in a Spring Boot application using Gradle, add the following to your ",(0,r.jsx)(n.code,{children:"build.gradle"})," file in a Spring Boot project:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-groovy",children:"// Alternatively, you can set the `pulsar.version` property in the `gradle.properties` file.\next['pulsar.version'] = '3.3.4'\n\n// The Pulsar Java client will be automatically added to dependencies as a transitive dependency of the spring-boot-starter-pulsar dependency\ndependencies {\n  implementation 'org.springframework.boot:spring-boot-starter-pulsar'\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"step-2-connect-to-pulsar-cluster",children:"Step 2: Connect to Pulsar cluster"}),"\n",(0,r.jsxs)(n.p,{children:["To connect to Pulsar using client libraries, you need to specify a ",(0,r.jsx)(n.a,{href:"/docs/3.3.x/developing-binary-protocol",children:"Pulsar protocol"})," URL."]}),"\n",(0,r.jsxs)(n.p,{children:["You can assign Pulsar protocol URLs to specific clusters and use the ",(0,r.jsx)(n.code,{children:"pulsar"})," scheme. The following is an example of ",(0,r.jsx)(n.code,{children:"localhost"})," with the default port ",(0,r.jsx)(n.code,{children:"6650"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-http",children:"pulsar://localhost:6650\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If you have multiple brokers, separate ",(0,r.jsx)(n.code,{children:"IP:port"})," by commas:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-http",children:"pulsar://localhost:6550,localhost:6651,localhost:6652\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If you use ",(0,r.jsx)(n.a,{href:"/docs/3.3.x/security-tls-authentication",children:"mTLS"})," authentication, add ",(0,r.jsx)(n.code,{children:"+ssl"})," in the scheme:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-http",children:"pulsar+ssl://pulsar.us-west.example.com:6651\n"})}),"\n",(0,r.jsx)(n.h2,{id:"java-client-performance",children:"Java client Performance considerations"}),"\n",(0,r.jsx)(n.h3,{id:"increasing-the-memory-limit",children:"Increasing the memory limit"}),"\n",(0,r.jsxs)(n.p,{children:["For high-throughput applications, you can increase the amount of memory with the Java client builder's ",(0,r.jsxs)(n.a,{href:"https://pulsar.apache.org/api/client/4.0.x/org/apache/pulsar/client/api/ClientBuilder.html#memoryLimit(long,org.apache.pulsar.client.api.SizeUnit)",children:[(0,r.jsx)(n.code,{children:"memoryLimit"})," configuration option"]}),". The default limit is 64MB which is usually too low for high-throughput applications."]}),"\n",(0,r.jsxs)(n.p,{children:["By default Java applications have a limit for direct memory allocations. The allocations are limited by the ",(0,r.jsx)(n.code,{children:"-XX:MaxDirectMemorySize"})," JVM option. In many JVM implementations, this defaults to the maximum heap size unless explicitly set. Allocations happen outside of the Java heap."]}),"\n",(0,r.jsx)(n.h3,{id:"enabling-optimized-netty-direct-memory-buffer-access",children:"Enabling optimized Netty direct memory buffer access"}),"\n",(0,r.jsxs)(n.p,{children:["The Pulsar Java client uses ",(0,r.jsx)(n.a,{href:"https://netty.io/",children:"Netty"})," under the hood and uses Netty direct buffers for data transport."]}),"\n",(0,r.jsxs)(n.p,{children:["Netty has a feature that allows optimized direct memory buffer access. This feature enables Netty to use low level APIs such as ",(0,r.jsx)(n.code,{children:"sun.misc.Unsafe"})," for direct memory operations, which provides faster allocation and deallocation of direct buffers.\nThe faster deallocation can help avoid direct memory exhaustion and ",(0,r.jsx)(n.code,{children:"java.lang.OutOfMemoryError: Direct buffer memory"})," errors. These errors can occur when the Netty memory pool and memory allocator cannot release memory back to the operating system quickly enough."]}),"\n",(0,r.jsx)(n.p,{children:"To enable this feature in Java clients since Java 11, you need to add the following JVM options to the application that uses the Java client:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"--add-opens java.base/java.nio=ALL-UNNAMED"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"--add-opens java.base/jdk.internal.misc=ALL-UNNAMED"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"In addition, you need to add one of the following JVM options:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-Dorg.apache.pulsar.shade.io.netty.tryReflectionSetAccessible=true"})," for the default shaded Pulsar client"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-Dio.netty.tryReflectionSetAccessible=true"}),' for the unshaded "original" Pulsar client']}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>l});var a=i(96540);const r={},s=a.createContext(r);function t(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);