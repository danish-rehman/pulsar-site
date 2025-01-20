"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[28668],{24337:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"admin-api-packages","title":"Manage packages","description":"Learn how to manage packages using Pulsar CLI and admin APIs.","source":"@site/versioned_docs/version-4.0.x/admin-api-packages.md","sourceDirName":".","slug":"/admin-api-packages","permalink":"/docs/4.0.x/admin-api-packages","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-4.0.x/admin-api-packages.md","tags":[],"version":"4.0.x","frontMatter":{"id":"admin-api-packages","title":"Manage packages","sidebar_label":"Packages","description":"Learn how to manage packages using Pulsar CLI and admin APIs."},"sidebar":"docsSidebar","previous":{"title":"Namespaces","permalink":"/docs/4.0.x/admin-api-namespaces"},"next":{"title":"Permissions","permalink":"/docs/4.0.x/admin-api-permissions"}}');var t=n(74848),l=n(28453),r=n(11470),i=n(19365);const c={id:"admin-api-packages",title:"Manage packages",sidebar_label:"Packages",description:"Learn how to manage packages using Pulsar CLI and admin APIs."},o=void 0,d={},p=[{value:"What is a package?",id:"what-is-a-package",level:2},{value:"How to use a package",id:"how-to-use-a-package",level:2},{value:"Package management in Pulsar",id:"package-management-in-pulsar",level:2},{value:"Upload a package",id:"upload-a-package",level:3},{value:"Download a package",id:"download-a-package",level:3},{value:"Delete a package",id:"delete-a-package",level:3},{value:"Get the metadata of a package",id:"get-the-metadata-of-a-package",level:3},{value:"Update the metadata of a package",id:"update-the-metadata-of-a-package",level:3},{value:"List all versions of a package",id:"list-all-versions-of-a-package",level:3},{value:"List all packages of a specific type under a namespace",id:"list-all-packages-of-a-specific-type-under-a-namespace",level:3}];function u(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.admonition,{type:"tip",children:[(0,t.jsxs)(a.p,{children:["This page only shows ",(0,t.jsx)(a.strong,{children:"some frequently used operations"}),"."]}),(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["For the latest and complete information about ",(0,t.jsx)(a.code,{children:"Pulsar admin"}),", including commands, flags, descriptions, and more, see ",(0,t.jsx)(a.a,{href:"pathname:///reference/#/4.0.x/pulsar-admin/",children:"Pulsar admin doc"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["For the latest and complete information about ",(0,t.jsx)(a.code,{children:"REST API"}),", including parameters, responses, samples, and more, see ",(0,t.jsx)(a.a,{href:"https://pulsar.apache.org/admin-rest-api#/",children:"REST"})," API doc."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["For the latest and complete information about ",(0,t.jsx)(a.code,{children:"Java admin API"}),", including classes, methods, descriptions, and more, see ",(0,t.jsx)(a.a,{href:"https://pulsar.apache.org/api/admin/4.0.x/",children:"Java admin API doc"}),"."]}),"\n"]}),"\n"]})]}),"\n",(0,t.jsx)(a.p,{children:"Package managers or package-management systems automatically manage packages in a consistent manner. These tools simplify the installation tasks, upgrade process, and deletion operations for users. A package is a minimal unit that a package manager deals with. In Pulsar, packages are organized at the tenant-level and namespace-level to manage Pulsar Functions and Pulsar IO connectors (i.e., source and sink)."}),"\n",(0,t.jsx)(a.h2,{id:"what-is-a-package",children:"What is a package?"}),"\n",(0,t.jsx)(a.p,{children:"A package is a set of elements that the user would like to reuse in later operations. In Pulsar, a package can be a group of functions, sources, and sinks. You can define a package according to your needs."}),"\n",(0,t.jsx)(a.p,{children:"The package management system in Pulsar stores the data and metadata of each package (as shown in the table below) and tracks the package versions."}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Metadata"}),(0,t.jsx)(a.th,{children:"Description"})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"description"}),(0,t.jsx)(a.td,{children:"The description of the package."})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"contact"}),(0,t.jsx)(a.td,{children:"The contact information of a package. For example, an email address of the developer team."})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"create_time"}),(0,t.jsx)(a.td,{children:"The time when the package is created."})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"modification_time"}),(0,t.jsx)(a.td,{children:"The time when the package is lastly modified."})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"properties"}),(0,t.jsx)(a.td,{children:"A user-defined key/value map to store other information."})]})]})]}),"\n",(0,t.jsx)(a.h2,{id:"how-to-use-a-package",children:"How to use a package"}),"\n",(0,t.jsx)(a.p,{children:"Packages can efficiently use the same set of functions and IO connectors. For example, you can use the same function, source, and sink in multiple namespaces. The main steps are:"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Create a package in the package manager by providing the following information: type, tenant, namespace, package name, and version."}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Component"}),(0,t.jsx)(a.th,{children:"Description"})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"type"}),(0,t.jsx)(a.td,{children:"Specify one of the supported package types: function, sink and source."})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"tenant"}),(0,t.jsx)(a.td,{children:"Specify the tenant where you want to create the package."})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"namespace"}),(0,t.jsx)(a.td,{children:"Specify the namespace where you want to create the package."})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"name"}),(0,t.jsxs)(a.td,{children:["Specify the complete name of the package, using the format ",(0,t.jsx)(a.code,{children:"<tenant>/<namespace>/<package name>"}),"."]})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"version"}),(0,t.jsxs)(a.td,{children:["Specify the version of the package using the format ",(0,t.jsx)(a.code,{children:"MajorVerion.MinorVersion"})," in numerals."]})]})]})]}),"\n",(0,t.jsxs)(a.p,{children:["The information you provide creates a URL for a package, in the format ",(0,t.jsx)(a.code,{children:"<type>://<tenant>/<namespace>/<package name>/<version>"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Upload the elements to the package, i.e., the functions, sources, and sinks that you want to use across namespaces."}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Apply permissions to this package from various namespaces."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"Now, you can use the elements you defined in the package by calling this package from within the package manager. The package manager locates it by the URL. For example,"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"sink://public/default/mysql-sink@1.0\nfunction://my-tenant/my-ns/my-function@0.1\nsource://my-tenant/my-ns/mysql-cdc-source@2.3\n"})}),"\n",(0,t.jsx)(a.h2,{id:"package-management-in-pulsar",children:"Package management in Pulsar"}),"\n",(0,t.jsxs)(a.p,{children:["You can use the command line tools, REST API, or the Java client to manage your package resources in Pulsar. More specifically, you can use these tools to ",(0,t.jsx)(a.a,{href:"#upload-a-package",children:"upload"}),", ",(0,t.jsx)(a.a,{href:"#download-a-package",children:"download"}),", and ",(0,t.jsx)(a.a,{href:"#delete-a-package",children:"delete"})," a package, ",(0,t.jsx)(a.a,{href:"#get-the-metadata-of-a-package",children:"get the metadata"})," and ",(0,t.jsx)(a.a,{href:"#update-the-metadata-of-a-package",children:"update the metadata"})," of a package, ",(0,t.jsx)(a.a,{href:"#list-all-versions-of-a-package",children:"get the versions"})," of a package, and ",(0,t.jsx)(a.a,{href:"#list-all-packages-of-a-specific-type-under-a-namespace",children:"get all packages of a specific type under a namespace"}),"."]}),"\n",(0,t.jsxs)(a.p,{children:["To use package management service, ensure that the package management service has been enabled in your cluster by setting the following properties in ",(0,t.jsx)(a.code,{children:"broker.conf"}),"."]}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsx)(a.p,{children:"Package management service is not enabled by default."})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-properties",children:"enablePackagesManagement=true\npackagesManagementStorageProvider=org.apache.pulsar.packages.management.storage.bookkeeper.BookKeeperPackagesStorageProvider\npackagesReplicas=1\npackagesManagementLedgerRootPath=/ledgers\n"})}),"\n",(0,t.jsx)(a.h3,{id:"upload-a-package",children:"Upload a package"}),"\n",(0,t.jsx)(a.p,{children:"You can use the following commands to upload a package."}),"\n",(0,t.jsxs)(r.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,t.jsx)(i.A,{value:"pulsar-admin",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"bin/pulsar-admin packages upload function://public/default/example@v0.1 --path package-file --description package-description\n"})})}),(0,t.jsx)(i.A,{value:"REST API",children:(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"https://pulsar.apache.org/packages-rest-api?version=4.0.2&apiVersion=v3#operation/Packages_upload",children:"POST /admin/v3/packages/{type}/{tenant}/{namespace}/{packageName}/{version}"})})}),(0,t.jsxs)(i.A,{value:"Java",children:[(0,t.jsx)(a.p,{children:"Upload a package to the package management service synchronously."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"void upload(PackageMetadata metadata, String packageName, String path) throws PulsarAdminException;\n"})}),(0,t.jsx)(a.p,{children:"Upload a package to the package management service asynchronously."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"CompletableFuture<Void> uploadAsync(PackageMetadata metadata, String packageName, String path);\n"})})]})]}),"\n",(0,t.jsx)(a.h3,{id:"download-a-package",children:"Download a package"}),"\n",(0,t.jsx)(a.p,{children:"You can use the following commands to download a package."}),"\n",(0,t.jsxs)(r.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,t.jsx)(i.A,{value:"pulsar-admin",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"bin/pulsar-admin packages download function://public/default/example@v0.1 --path package-file\n"})})}),(0,t.jsx)(i.A,{value:"REST API",children:(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"https://pulsar.apache.org/packages-rest-api?version=4.0.2&apiVersion=v3#operation/Packages_download",children:"GET /admin/v3/packages/{type}/{tenant}/{namespace}/{packageName}/{version}"})})}),(0,t.jsxs)(i.A,{value:"Java",children:[(0,t.jsx)(a.p,{children:"Download a package from the package management service synchronously."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"void download(String packageName, String path) throws PulsarAdminException;\n"})}),(0,t.jsx)(a.p,{children:"Download a package from the package management service asynchronously."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"CompletableFuture<Void> downloadAsync(String packageName, String path);\n"})})]})]}),"\n",(0,t.jsx)(a.h3,{id:"delete-a-package",children:"Delete a package"}),"\n",(0,t.jsx)(a.p,{children:"You can use the following commands to delete a package."}),"\n",(0,t.jsxs)(r.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,t.jsxs)(i.A,{value:"pulsar-admin",children:[(0,t.jsx)(a.p,{children:"The following command deletes a package of version 0.1."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"bin/pulsar-admin packages delete functions://public/default/example@v0.1\n"})})]}),(0,t.jsx)(i.A,{value:"REST API",children:(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"https://pulsar.apache.org/packages-rest-api?version=4.0.2&apiVersion=v3#operation/Packages_delete",children:"DELETE /admin/v3/packages/{type}/{tenant}/{namespace}/{packageName}/{version}"})})}),(0,t.jsxs)(i.A,{value:"Java",children:[(0,t.jsx)(a.p,{children:"Delete a specified package synchronously."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"void delete(String packageName) throws PulsarAdminException;\n"})}),(0,t.jsx)(a.p,{children:"Delete a specified package asynchronously."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"CompletableFuture<Void> deleteAsync(String packageName);\n"})})]})]}),"\n",(0,t.jsx)(a.h3,{id:"get-the-metadata-of-a-package",children:"Get the metadata of a package"}),"\n",(0,t.jsx)(a.p,{children:"You can use the following commands to get the metadata of a package."}),"\n",(0,t.jsxs)(r.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,t.jsx)(i.A,{value:"pulsar-admin",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"bin/pulsar-admin packages get-metadata function://public/default/test@v1\n"})})}),(0,t.jsx)(i.A,{value:"REST API",children:(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"https://pulsar.apache.org/packages-rest-api?version=4.0.2&apiVersion=v3#operation/Packages_getMeta",children:"GET /admin/v3/packages/{type}/{tenant}/{namespace}/{packageName}/{version}/metadata"})})}),(0,t.jsxs)(i.A,{value:"Java",children:[(0,t.jsx)(a.p,{children:"Get the metadata of a package synchronously."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"PackageMetadata getMetadata(String packageName) throws PulsarAdminException;\n"})}),(0,t.jsx)(a.p,{children:"Get the metadata of a package asynchronously."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"CompletableFuture<PackageMetadata> getMetadataAsync(String packageName);\n"})})]})]}),"\n",(0,t.jsx)(a.h3,{id:"update-the-metadata-of-a-package",children:"Update the metadata of a package"}),"\n",(0,t.jsx)(a.p,{children:"You can use the following commands to update the metadata of a package."}),"\n",(0,t.jsxs)(r.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,t.jsx)(i.A,{value:"pulsar-admin",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"bin/pulsar-admin packages update-metadata function://public/default/example@v0.1 --description update-description\n"})})}),(0,t.jsx)(i.A,{value:"REST API",children:(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"https://pulsar.apache.org/packages-rest-api?version=4.0.2&apiVersion=v3#operation/Packages_updateMeta",children:"PUT /admin/v3/packages/{type}/{tenant}/{namespace}/{packageName}/{version}/metadata"})})}),(0,t.jsxs)(i.A,{value:"Java",children:[(0,t.jsx)(a.p,{children:"Update the metadata of a package synchronously."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"void updateMetadata(String packageName, PackageMetadata metadata) throws PulsarAdminException;\n"})}),(0,t.jsx)(a.p,{children:"Update the metadata of a package asynchronously."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"CompletableFuture<Void> updateMetadataAsync(String packageName, PackageMetadata metadata);\n"})})]})]}),"\n",(0,t.jsx)(a.h3,{id:"list-all-versions-of-a-package",children:"List all versions of a package"}),"\n",(0,t.jsx)(a.p,{children:"You can use the following commands to list all versions of a package."}),"\n",(0,t.jsxs)(r.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,t.jsx)(i.A,{value:"pulsar-admin",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"bin/pulsar-admin packages list-versions type://tenant/namespace/packageName\n"})})}),(0,t.jsx)(i.A,{value:"REST API",children:(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"https://pulsar.apache.org/packages-rest-api?version=4.0.2&apiVersion=v3#operation/Packages_listPackageVersion",children:"GET /admin/v3/packages/{type}/{tenant}/{namespace}/{packageName}"})})}),(0,t.jsxs)(i.A,{value:"Java",children:[(0,t.jsx)(a.p,{children:"List all versions of a package synchronously."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"List<String> listPackageVersions(String packageName) throws PulsarAdminException;\n"})}),(0,t.jsx)(a.p,{children:"List all versions of a package asynchronously."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"CompletableFuture<List<String>> listPackageVersionsAsync(String packageName);\n"})})]})]}),"\n",(0,t.jsx)(a.h3,{id:"list-all-packages-of-a-specific-type-under-a-namespace",children:"List all packages of a specific type under a namespace"}),"\n",(0,t.jsx)(a.p,{children:"You can use the following commands to list all packages of a specific type under a namespace."}),"\n",(0,t.jsxs)(r.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,t.jsx)(i.A,{value:"pulsar-admin",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"bin/pulsar-admin packages list --type function public/default\n"})})}),(0,t.jsx)(i.A,{value:"REST API",children:(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"https://pulsar.apache.org/packages-rest-api?version=4.0.2&apiVersion=v3#operation/Packages_listPackages",children:"GET /admin/v3/packages/{type}/{tenant}/{namespace}"})})}),(0,t.jsxs)(i.A,{value:"Java",children:[(0,t.jsx)(a.p,{children:"List all packages of a specific type under a namespace synchronously."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"List<String> listPackages(String type, String namespace) throws PulsarAdminException;\n"})}),(0,t.jsx)(a.p,{children:"List all packages of a specific type under a namespace asynchronously."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"CompletableFuture<List<String>> listPackagesAsync(String type, String namespace);\n"})})]})]})]})}function h(e={}){const{wrapper:a}={...(0,l.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},19365:(e,a,n)=>{n.d(a,{A:()=>r});n(96540);var s=n(34164);const t={tabItem:"tabItem_Ymn6"};var l=n(74848);function r(e){let{children:a,hidden:n,className:r}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,r),hidden:n,children:a})}},11470:(e,a,n)=>{n.d(a,{A:()=>y});var s=n(96540),t=n(34164),l=n(23104),r=n(56347),i=n(205),c=n(57485),o=n(31682),d=n(70679);function p(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:a,children:n}=e;return(0,s.useMemo)((()=>{const e=a??function(e){return p(e).map((e=>{let{props:{value:a,label:n,attributes:s,default:t}}=e;return{value:a,label:n,attributes:s,default:t}}))}(n);return function(e){const a=(0,o.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function h(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function g(e){let{queryString:a=!1,groupId:n}=e;const t=(0,r.W6)(),l=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,c.aZ)(l),(0,s.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(t.location.search);a.set(l,e),t.replace({...t.location,search:a.toString()})}),[l,t])]}function m(e){const{defaultValue:a,queryString:n=!1,groupId:t}=e,l=u(e),[r,c]=(0,s.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:a,tabValues:l}))),[o,p]=g({queryString:n,groupId:t}),[m,x]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,l]=(0,d.Dv)(n);return[t,(0,s.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:t}),j=(()=>{const e=o??m;return h({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{j&&c(j)}),[j]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),p(e),x(e)}),[p,x,l]),tabValues:l}}var x=n(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=n(74848);function v(e){let{className:a,block:n,selectedValue:s,selectValue:r,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),d=e=>{const a=e.currentTarget,n=c.indexOf(a),t=i[n].value;t!==s&&(o(a),r(t))},p=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;a=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;a=c[n]??c[c.length-1];break}}a?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":n},a),children:i.map((e=>{let{value:a,label:n,attributes:l}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,ref:e=>c.push(e),onKeyDown:p,onClick:d,...l,className:(0,t.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":s===a}),children:n??a},a)}))})}function f(e){let{lazy:a,children:n,selectedValue:l}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===l));return e?(0,s.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:r.map(((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==l})))})}function b(e){const a=m(e);return(0,k.jsxs)("div",{className:(0,t.A)("tabs-container",j.tabList),children:[(0,k.jsx)(v,{...a,...e}),(0,k.jsx)(f,{...a,...e})]})}function y(e){const a=(0,x.A)();return(0,k.jsx)(b,{...e,children:p(e.children)},String(a))}},28453:(e,a,n)=>{n.d(a,{R:()=>r,x:()=>i});var s=n(96540);const t={},l=s.createContext(t);function r(e){const a=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:a},e.children)}}}]);