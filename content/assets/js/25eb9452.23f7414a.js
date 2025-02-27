"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[18023],{37782:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"functions-package-java","title":"Package Java Functions","description":"Learn to package Java functions in Pulsar.","source":"@site/docs/functions-package-java.md","sourceDirName":".","slug":"/functions-package-java","permalink":"/docs/next/functions-package-java","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/docs/functions-package-java.md","tags":[],"version":"current","frontMatter":{"id":"functions-package-java","title":"Package Java Functions","sidebar_label":"Package Java Functions","description":"Learn to package Java functions in Pulsar."},"sidebar":"docsSidebar","previous":{"title":"How to package","permalink":"/docs/next/functions-package"},"next":{"title":"Package Python Functions","permalink":"/docs/next/functions-package-python"}}');var t=a(74848),s=a(28453);const c={id:"functions-package-java",title:"Package Java Functions",sidebar_label:"Package Java Functions",description:"Learn to package Java functions in Pulsar."},o=void 0,r={},l=[{value:"Package as JAR",id:"package-as-jar",level:2},{value:"Package as NAR",id:"package-as-nar",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.admonition,{type:"note",children:[(0,t.jsx)(e.p,{children:"If you plan to package and distribute your function for others to use, you are obligated to\nlicense and copyright your own code properly. Remember to add the license and copyright to\nall libraries your code uses and to your distribution."}),(0,t.jsxs)(e.p,{children:["If you use the ",(0,t.jsx)(e.a,{href:"#package-as-nar",children:"NAR"})," method, the NAR plugin\nautomatically creates a ",(0,t.jsx)(e.code,{children:"DEPENDENCIES"})," file in the generated NAR package, including the proper\nlicensing and copyrights of all libraries of your function."]}),(0,t.jsxs)(e.p,{children:["For the runtime Java version, refer to ",(0,t.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/README.md#pulsar-runtime-java-version-recommendation",children:"Pulsar Runtime Java Version Recommendation"})," according to your target Pulsar version."]})]}),"\n",(0,t.jsx)(e.p,{children:"There are two methods to package Java Functions:"}),"\n",(0,t.jsx)(e.h2,{id:"package-as-jar",children:"Package as JAR"}),"\n",(0,t.jsx)(e.p,{children:"To package a Java function as JAR, complete the following steps."}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Create a new maven project with a pom file. In the following code sample, the value of ",(0,t.jsx)(e.code,{children:"mainClass"})," is your package name."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-xml",children:' <?xml version="1.0" encoding="UTF-8"?>\n <project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n     <modelVersion>4.0.0</modelVersion>\n\n     <groupId>java-function</groupId>\n     <artifactId>java-function</artifactId>\n     <version>1.0-SNAPSHOT</version>\n\n     <dependencies>\n         <dependency>\n             <groupId>org.apache.pulsar</groupId>\n             <artifactId>pulsar-functions-api</artifactId>\n             <version>4.0.3</version>\n         </dependency>\n     </dependencies>\n\n     <build>\n         <plugins>\n             <plugin>\n                 <artifactId>maven-assembly-plugin</artifactId>\n                 <configuration>\n                     <appendAssemblyId>false</appendAssemblyId>\n                     <descriptorRefs>\n                         <descriptorRef>jar-with-dependencies</descriptorRef>\n                     </descriptorRefs>\n                     <archive>\n                     <manifest>\n                         <mainClass>org.example.test.ExclamationFunction</mainClass>\n                     </manifest>\n                 </archive>\n                 </configuration>\n                 <executions>\n                     <execution>\n                         <id>make-assembly</id>\n                         <phase>package</phase>\n                         <goals>\n                             <goal>assembly</goal>\n                         </goals>\n                     </execution>\n                 </executions>\n             </plugin>\n             <plugin>\n                 <groupId>org.apache.maven.plugins</groupId>\n                 <artifactId>maven-compiler-plugin</artifactId>\n                 <version>3.11.0</version>\n                 <configuration>\n                     <release>17</release>\n                 </configuration>\n             </plugin>\n         </plugins>\n     </build>\n\n </project>\n'})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Package your Java function."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:" mvn package\n"})}),"\n",(0,t.jsxs)(e.p,{children:["After the Java function is packaged, a ",(0,t.jsx)(e.code,{children:"target"})," directory is created automatically. Open the ",(0,t.jsx)(e.code,{children:"target"})," directory to check if there is a JAR package similar to ",(0,t.jsx)(e.code,{children:"java-function-1.0-SNAPSHOT.jar"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Run the Java function using the following command."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:" ./bin/pulsar-admin functions localrun \\\n    --classname org.example.test.ExclamationFunction \\\n    --jar $PWD/target/java-function-1.0-SNAPSHOT.jar \\\n    --inputs persistent://public/default/my-topic-1 \\\n    --output persistent://public/default/test-1 \\\n    --tenant public \\\n    --namespace default \\\n    --name JavaFunction\n"})}),"\n",(0,t.jsx)(e.p,{children:"The following log indicates that the Java function starts successfully."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:" ...\n 07:55:03.724 [main] INFO  org.apache.pulsar.functions.runtime.ProcessRuntime - Started process successfully\n ...\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"package-as-nar",children:"Package as NAR"}),"\n",(0,t.jsx)(e.p,{children:"To package a Java function as NAR, complete the following steps."}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Create a new maven project with a pom file."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-xml",children:' <?xml version="1.0" encoding="UTF-8"?>\n <project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n     <modelVersion>4.0.0</modelVersion>\n\n     <groupId>java-function</groupId>\n     <artifactId>java-function</artifactId>\n     <version>1.0-SNAPSHOT</version>\n\n     <dependencies>\n         <dependency>\n             <groupId>org.apache.pulsar</groupId>\n             <artifactId>pulsar-functions-api</artifactId>\n             <version>4.0.3</version>\n         </dependency>\n     </dependencies>\n\n     <build>\n         <plugins>\n             <plugin>\n                 <groupId>org.apache.nifi</groupId>\n                 <artifactId>nifi-nar-maven-plugin</artifactId>\n                 <version>1.5.0</version>\n                 </plugin>\n             <plugin>\n                 <groupId>org.apache.maven.plugins</groupId>\n                 <artifactId>maven-compiler-plugin</artifactId>\n                 <version>3.11.0</version>\n                 <configuration>\n                     <release>17</release>\n                 </configuration>\n             </plugin>\n         </plugins>\n     </build>\n\n </project>\n'})}),"\n",(0,t.jsxs)(e.p,{children:["You must also create a ",(0,t.jsx)(e.code,{children:"resources/META-INF/services/pulsar-io.yaml"})," file. In the following code sample, the value of ",(0,t.jsx)(e.code,{children:"functionClass"})," is your function class name. The ",(0,t.jsx)(e.code,{children:"name"})," is the one used when the Function is deployed as a ",(0,t.jsx)(e.a,{href:"/docs/next/functions-deploy-cluster-builtin",children:"built-in"})," one."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-yaml",children:"name: java-function\ndescription: my java function\nfunctionClass: org.example.test.ExclamationFunction\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Package your Java function."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"mvn package\n"})}),"\n",(0,t.jsxs)(e.p,{children:["After the Java function is packaged, a ",(0,t.jsx)(e.code,{children:"target"})," directory is created automatically. Open the ",(0,t.jsx)(e.code,{children:"target"})," directory to check if there is a NAR package similar to ",(0,t.jsx)(e.code,{children:"java-function-1.0-SNAPSHOT.nar"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Run the Java function using the following command."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:" ./bin/pulsar-admin functions localrun \\\n    --jar $PWD/target/java-function-1.0-SNAPSHOT.nar \\\n    --inputs persistent://public/default/my-topic-1 \\\n    --output persistent://public/default/test-1 \\\n    --tenant public \\\n    --namespace default \\\n    --name JavaFunction\n"})}),"\n",(0,t.jsx)(e.p,{children:"The following log indicates that the Java function starts successfully."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:" ...\n 07:55:03.724 [main] INFO  org.apache.pulsar.functions.runtime.ProcessRuntime - Started process successfully\n ...\n"})}),"\n"]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},28453:(n,e,a)=>{a.d(e,{R:()=>c,x:()=>o});var i=a(96540);const t={},s=i.createContext(t);function c(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);