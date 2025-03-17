"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[62414],{59723:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"setup-ide","title":"Setting up an IDE","description":"Apache Pulsar is using lombok, so you have to ensure your IDE setup with required plugins.","source":"@site/contribute/setup-ide.md","sourceDirName":".","slug":"/setup-ide","permalink":"/contribute/setup-ide","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/contribute/setup-ide.md","tags":[],"version":"current","lastUpdatedBy":"Lari Hotari","lastUpdatedAt":1741938320000,"frontMatter":{"id":"setup-ide","title":"Setting up an IDE"},"sidebar":"sidebarDevelopment","previous":{"title":"Setting up JDKs and Maven using SDKMAN","permalink":"/contribute/setup-buildtools"},"next":{"title":"Setting up Git for maintenance of Pulsar","permalink":"/contribute/setup-git"}}');var t=s(74848),o=s(28453);const r={id:"setup-ide",title:"Setting up an IDE"},l=void 0,c={},a=[{value:"IntelliJ IDEA",id:"intellij-idea",level:2},{value:"Configure Project JDK to JDK 21",id:"configure-project-jdk-to-jdk-21",level:3},{value:"Configure Java version for Maven",id:"configure-java-version-for-maven",level:3},{value:"Configure annotation processing",id:"configure-annotation-processing",level:3},{value:"Configure code style",id:"configure-code-style",level:3},{value:"Configure Checkstyle",id:"configure-checkstyle",level:3},{value:"Further configuration",id:"further-configuration",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Visual Studio Code (VS Code)",id:"visual-studio-code-vs-code",level:2},{value:"Eclipse",id:"eclipse",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Apache Pulsar is using ",(0,t.jsx)(n.a,{href:"https://projectlombok.org/",children:"lombok"}),", so you have to ensure your IDE setup with required plugins."]}),"\n",(0,t.jsx)(n.h2,{id:"intellij-idea",children:"IntelliJ IDEA"}),"\n",(0,t.jsx)(n.h3,{id:"configure-project-jdk-to-jdk-21",children:"Configure Project JDK to JDK 21"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Open ",(0,t.jsx)(n.strong,{children:"Project Settings"}),". Click ",(0,t.jsx)(n.strong,{children:"File"})," \u2192 ",(0,t.jsx)(n.strong,{children:"Project Structure"})," \u2192 ",(0,t.jsx)(n.strong,{children:"Project Settings"})," \u2192 ",(0,t.jsx)(n.strong,{children:"Project"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Select the JDK version. From the JDK version drop-down list, select ",(0,t.jsx)(n.strong,{children:"Download JDK..."})," or choose an existing recent Java 21 JDK version ",(0,t.jsx)(n.a,{href:"/contribute/setup-buildtools",children:"installed by SDKMAN"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["In the download dialog, select version ",(0,t.jsx)(n.strong,{children:"17"})," and vendor ",(0,t.jsx)(n.strong,{children:"Amazon Corretto"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"configure-java-version-for-maven",children:"Configure Java version for Maven"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Open Maven Importing Settings. Click ",(0,t.jsx)(n.strong,{children:"Settings"})," \u2192 ",(0,t.jsx)(n.strong,{children:"Build, Execution, Deployment"})," \u2192 ",(0,t.jsx)(n.strong,{children:"Build Tools"})," \u2192 ",(0,t.jsx)(n.strong,{children:"Maven"})," \u2192 ",(0,t.jsx)(n.strong,{children:"Importing"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["For ",(0,t.jsx)(n.strong,{children:"JDK for Importer"})," setting, select ",(0,t.jsx)(n.strong,{children:"Use Project JDK"}),". This uses the Java 21 JDK for running Maven when importing the project."]}),"\n",(0,t.jsxs)(n.li,{children:["Ensure that the JRE setting in ",(0,t.jsx)(n.strong,{children:"Maven"})," \u2192 ",(0,t.jsx)(n.strong,{children:"Runner"})," dialog is set to ",(0,t.jsx)(n.strong,{children:"Use Project JDK"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:'Some configuration in the Maven build is conditional based on the JDK version. Incorrect configuration gets chosen when the "JDK for Importer" isn\'t the same as the "Project JDK".'})}),"\n",(0,t.jsx)(n.h3,{id:"configure-annotation-processing",children:"Configure annotation processing"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Open Annotation Processors Settings. Click ",(0,t.jsx)(n.strong,{children:"Settings"})," \u2192 ",(0,t.jsx)(n.strong,{children:"Build, Execution, Deployment"})," \u2192 ",(0,t.jsx)(n.strong,{children:"Compiler"})," \u2192 ",(0,t.jsx)(n.strong,{children:"Annotation Processors"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Select the following buttons:","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Enable annotation processing"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Obtain processors from project classpath"})}),"\n",(0,t.jsxs)(n.li,{children:["Store generated sources relative to: ",(0,t.jsx)(n.strong,{children:"Module output directory"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Set the generated source directories to be equal to the Maven directories:","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:'Set "Production sources directory:" to "generated-sources".'}),"\n",(0,t.jsx)(n.li,{children:'Set "Test sources directory:" to "generated-test-sources".'}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"OK"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Install the lombok plugin in intelliJ."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"configure-code-style",children:"Configure code style"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Open Code Style Settings dialog box by going to ",(0,t.jsx)(n.strong,{children:"Settings"})," \u2192 ",(0,t.jsx)(n.strong,{children:"Editor"})," \u2192 ",(0,t.jsx)(n.strong,{children:"Code Style"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click on the ","\u2699"," symbol \u2192 ",(0,t.jsx)(n.strong,{children:"Import scheme"})," \u2192 ",(0,t.jsx)(n.strong,{children:"IntelliJ IDEA code style XML"})]}),"\n",(0,t.jsxs)(n.li,{children:["Pick the file ",(0,t.jsx)(n.code,{children:"${pulsar_dir}/src/idea-code-style.xml"})]}),"\n",(0,t.jsxs)(n.li,{children:["On the dialog box that opens, click ",(0,t.jsx)(n.strong,{children:"OK"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Ensure the scheme you just created is selected in ",(0,t.jsx)(n.strong,{children:"Scheme"})," dropdown then click ",(0,t.jsx)(n.strong,{children:"OK"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"configure-checkstyle",children:"Configure Checkstyle"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Install the Checkstyle-IDEA plugin."}),"\n",(0,t.jsxs)(n.li,{children:["Open Checkstyle Settings. Click ",(0,t.jsx)(n.strong,{children:"Settings"})," \u2192 ",(0,t.jsx)(n.strong,{children:"Tools"})," \u2192 ",(0,t.jsx)(n.strong,{children:"Checkstyle"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Set ",(0,t.jsx)(n.strong,{children:"Checkstyle version"})," to ",(0,t.jsx)(n.strong,{children:"10.14.2"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Set ",(0,t.jsx)(n.strong,{children:"Scan scope"})," to ",(0,t.jsx)(n.strong,{children:"Only Java sources (including tests)"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"+"})," button in the ",(0,t.jsx)(n.strong,{children:"Configuration"})," section to open a dialog to choose the checkstyle config file.","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Enter a ",(0,t.jsx)(n.strong,{children:"Description"}),". For example, Pulsar."]}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.strong,{children:"Use a local checkstyle file"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Set ",(0,t.jsx)(n.strong,{children:"File"})," to ",(0,t.jsx)(n.strong,{children:"buildtools/src/main/resources/pulsar/checkstyle.xml"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.strong,{children:"Store relative to project location"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Next"})," \u2192 ",(0,t.jsx)(n.strong,{children:"Next"})," \u2192 ",(0,t.jsx)(n.strong,{children:"Finish"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Activate the configuration you just added by toggling the corresponding box."}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"OK"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"further-configuration",children:"Further configuration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["When working on the Pulsar core modules in IntelliJ, reduce the number of active projects in IntelliJ to speed up IDE actions and reduce unrelated IDE warnings.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["In IntelliJ's Maven UI's tree view under \"Profiles\"","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Activate "core-modules" Maven profile'}),"\n",(0,t.jsx)(n.li,{children:'De-activate "main" Maven profile'}),"\n",(0,t.jsxs)(n.li,{children:['Run the "Reload All Maven Projects" action from the Maven UI toolbar. You can also find the action by the name in the IntelliJ "Search Everywhere" window that gets activated by pressing the ',(0,t.jsx)(n.strong,{children:"Shift"})," key twice."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:['Run the "Generate Sources and Update Folders For All Projects" action from the Maven UI toolbar. You can also find the action by the name in the IntelliJ "Search Everywhere" window that gets activated by pressing the ',(0,t.jsx)(n.strong,{children:"Shift"}),' key twice. Running the action takes about 10 minutes for all projects. This is faster when the "core-modules" profile is the only active profile.']}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'In the case of compilation errors with missing Protobuf classes, ensure to run the "Generate Sources and Update Folders For All Projects" action.'}),"\n",(0,t.jsxs)(n.li,{children:["When all the Pulsar source code doesn't compile properly in IntelliJ and there are compilation errors:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Use the "core-modules" profile if working on the Pulsar core modules since the source code for those modules can be compiled in IntelliJ.'}),"\n",(0,t.jsxs)(n.li,{children:["Sometimes it might help to mark a specific project ignored in IntelliJ Maven UI by right-clicking the project name and select ",(0,t.jsx)(n.strong,{children:"Ignore Projects"})," from the menu."]}),"\n",(0,t.jsxs)(n.li,{children:["Currently, it is not always possible to run unit tests directly from the IDE because of the compilation issues. As a workaround, individual test classes can be run by using the ",(0,t.jsx)(n.code,{children:"mvn test -Dtest=TestClassName"})," command."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["The above steps have all been performed, but a test still won't run.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["In this case, try the following steps:","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Close IntelliJ."}),"\n",(0,t.jsxs)(n.li,{children:["Run ",(0,t.jsx)(n.code,{children:"mvn clean install -DskipTests"})," on the command line."]}),"\n",(0,t.jsx)(n.li,{children:"Reopen IntelliJ."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["If that still doesn't work:","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Verify Maven is using a supported version. Currently, the supported version of Maven is specified in the ",(0,t.jsx)(n.code,{children:"<requireMavenVersion>"})," section of the root ",(0,t.jsx)(n.code,{children:"pom.xml"})," file."]}),"\n",(0,t.jsx)(n.li,{children:'Try "restart and clear caches" in IntelliJ and repeat the above steps to reload projects and generate sources.'}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"visual-studio-code-vs-code",children:"Visual Studio Code (VS Code)"}),"\n",(0,t.jsxs)(n.p,{children:["Before starting, make sure you have installed the ",(0,t.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack",children:"Java Extension Pack"})," in VS Code."]}),"\n",(0,t.jsxs)(n.p,{children:["Since multiple versions of Java are used for Pulsar development, it is recommended to use ",(0,t.jsx)(n.a,{href:"https://sdkman.io/installation",children:"SDKMAN"})," to manage different versions of Java. The separate guide ",(0,t.jsx)(n.a,{href:"/contribute/setup-buildtools",children:"how to setup build tools"})," explains how to install Java 17 and 21 using SDKMAN."]}),"\n",(0,t.jsxs)(n.p,{children:["Once you have installed the Java versions using SDKMAN, you can add (or modify) the following settings to your VS Code User level ",(0,t.jsx)(n.code,{children:"settings.json"})," file. Please check ",(0,t.jsx)(n.a,{href:"https://code.visualstudio.com/docs/getstarted/settings",children:"VS Code documentation"})," for more details. The simplest way to open the settings file is to run the ",(0,t.jsx)(n.code,{children:"Preferences: Open Settings (JSON)"})," command from the Command Palette (",(0,t.jsx)(n.code,{children:"Ctrl+Shift+P"})," or ",(0,t.jsx)(n.code,{children:"Cmd+Shift+P"})," on Mac)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "java.jdt.ls.vmargs": "-Xmx6g -XX:+UseZGC -XX:+ZGenerational -Dsun.zip.disableMemoryMapping=true",\n    "java.jdt.ls.java.home": "~/.sdkman/candidates/java/21",\n    "java.configuration.runtimes": [\n        {\n            "name": "JavaSE-21",\n            "path": "~/.sdkman/candidates/java/21",\n            "default": true\n        },\n        {\n            "name": "JavaSE-17",\n            "path": "~/.sdkman/candidates/java/17"\n        }\n    ],\n    "java.autobuild.enabled": false,\n    "java.debug.settings.onBuildFailureProceed": true,\n    "java.compile.nullAnalysis.mode": "disabled",\n    "java.configuration.updateBuildConfiguration": "interactive"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If the ",(0,t.jsx)(n.code,{children:"java.jdt.ls.java.home"})," setting doesn't point to a Java 21 JDK, you must remove ",(0,t.jsx)(n.code,{children:"-XX:+ZGenerational"})," from ",(0,t.jsx)(n.code,{children:"java.jdt.ls.vmargs"})," setting since Java 21 is the first version that supports generational ZGC."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"java.autobuild.enabled"})," setting is set to ",(0,t.jsx)(n.code,{children:"false"})," since building the Pulsar project in VS Code takes very long time."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"java.debug.settings.onBuildFailureProceed"})," is set to ",(0,t.jsx)(n.code,{children:"true"})," so that tests can be run even when there are individual build failures."]}),"\n",(0,t.jsx)(n.p,{children:"Before running tests, you need to build the project manually at least once using the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"mvn -Pcore-modules,-main -T 1C clean install -DskipTests -Dspotbugs.skip=true -Dcheckstyle.skip=true -Dlicense.skip=true -DnarPluginPhase=none\n"})}),"\n",(0,t.jsx)(n.p,{children:"This will make the protobuf / lightproto generated classes available to the tests run in the IDE. Without this there will be errors at runtime about missing classes or Mockito related errors."}),"\n",(0,t.jsxs)(n.p,{children:["For troubleshooting, please check ",(0,t.jsx)(n.a,{href:"https://github.com/redhat-developer/vscode-java/wiki/Troubleshooting",children:"Language support for Java extension documentation"}),". Adding ",(0,t.jsx)(n.code,{children:'"java.transport": "stdio"'})," to the settings can help display errors in the error log if the problem is related to the language server."]}),"\n",(0,t.jsx)(n.h2,{id:"eclipse",children:"Eclipse"}),"\n",(0,t.jsxs)(n.p,{children:["Follow ",(0,t.jsx)(n.a,{href:"https://howtodoinjava.com/automation/lombok-eclipse-installation-examples/",children:"these instructions"})," to configure your Eclipse setup."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var i=s(96540);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);