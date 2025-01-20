"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[58870],{67749:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>t});const a=JSON.parse('{"id":"concepts-broker-load-balancing-migration","title":"Migration","description":"Pulsar has 3 types of broker load balancers, that is, simple, modular, and extensible.","source":"@site/docs/concepts-broker-load-balancing-migration.md","sourceDirName":".","slug":"/concepts-broker-load-balancing-migration","permalink":"/docs/next/concepts-broker-load-balancing-migration","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/docs/concepts-broker-load-balancing-migration.md","tags":[],"version":"current","frontMatter":{"id":"concepts-broker-load-balancing-migration","title":"Migration","sidebar_label":"Migration"},"sidebar":"docsSidebar","previous":{"title":"Quick start","permalink":"/docs/next/concepts-broker-load-balancing-quick-start"},"next":{"title":"Geo Replication","permalink":"/docs/next/concepts-replication"}}');var l=r(74848),o=r(28453);const s={id:"concepts-broker-load-balancing-migration",title:"Migration",sidebar_label:"Migration"},i=void 0,d={},t=[{value:"Considerations",id:"considerations",level:2},{value:"Migrate from simple to modular broker load balancer",id:"migrate-from-simple-to-modular-broker-load-balancer",level:2},{value:"Change broker.conf file",id:"change-brokerconf-file",level:3},{value:"Use pulsar-admin tool",id:"use-pulsar-admin-tool",level:3},{value:"Migrate from modular to extensible broker load balancer",id:"migrate-from-modular-to-extensible-broker-load-balancer",level:2},{value:"Change broker.conf file",id:"change-brokerconf-file-1",level:3},{value:"Migrate from extensible to modular broker load balancer",id:"migrate-from-extensible-to-modular-broker-load-balancer",level:2},{value:"Change broker.conf file",id:"change-brokerconf-file-2",level:3},{value:"Related topics",id:"related-topics",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Pulsar has 3 types of broker load balancers, that is, simple, modular, and extensible."}),"\n",(0,l.jsx)(n.p,{children:"You can perform the following migrations."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Migration"}),(0,l.jsx)(n.th,{children:"When to use"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"#migrate-from-simple-to-modular-broker-load-balancer",children:"Migrate from simple to modular"})}),(0,l.jsxs)(n.td,{children:["If you want to use the ",(0,l.jsx)(n.a,{href:"/docs/next/concepts-broker-load-balancing-concepts#bundle-unloading-strategies",children:"bundle unloading strategy"})," of OverloadShedder, ThresholdShedder, or UniformLoadShedder."]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"#migrate-from-modular-to-extensible-broker-load-balancer",children:"Migrate from modular to extensible"})}),(0,l.jsxs)(n.td,{children:["If you want to use the ",(0,l.jsx)(n.a,{href:"/docs/next/concepts-broker-load-balancing-concepts#bundle-unloading-strategies",children:"bundle unloading strategy"})," of TransferShedder."]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.a,{href:"#migrate-from-modular-to-extensible-broker-load-balancer",children:"Migrate from extensible to modular"})}),(0,l.jsxs)(n.td,{children:["If you want to use the ",(0,l.jsx)(n.a,{href:"/docs/next/concepts-broker-load-balancing-concepts#bundle-unloading-strategies",children:"bundle unloading strategy"})," of OverloadShedder, ThresholdShedder, or UniformLoadShedder."]})]})]})]}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsx)(n.p,{children:"It is not recommended to migrate from the modular or extensible to the simple broker load balancer since the simple broker load balancer is deprecated and no longer in use."})}),"\n",(0,l.jsx)(n.h2,{id:"considerations",children:"Considerations"}),"\n",(0,l.jsxs)(n.p,{children:["Before migrating from one broker load balancer type to another, review the relationship between ",(0,l.jsx)(n.a,{href:"/docs/next/concepts-broker-load-balancing-types",children:"broker load balancer type"}),", Pulsar version, and ",(0,l.jsx)(n.a,{href:"/docs/next/concepts-broker-load-balancing-concepts#bundle-unloading-strategies",children:"bundle unloading strategy"}),". You may need to upgrade Pulsar versions or update the ",(0,l.jsx)(n.a,{href:"/docs/next/concepts-broker-load-balancing-concepts#bundle-unloading-strategies",children:"bundle unloading strategy"}),". Below are brief summaries."]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"This broker load balancer type"}),(0,l.jsx)(n.th,{children:"is available in this Pulsar version"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Simple"}),(0,l.jsx)(n.td,{children:"All versions"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Modular"}),(0,l.jsx)(n.td,{children:"1.7 and later"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Extensible"}),(0,l.jsx)(n.td,{children:"3.0 and later"})]})]})]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"This bundle unloading strategy"}),(0,l.jsx)(n.th,{children:"is available for this broker load balancer type"}),(0,l.jsx)(n.th,{children:"in available this Pulsar version"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"OverloadShedder"}),(0,l.jsx)(n.td,{children:"Modular"}),(0,l.jsx)(n.td,{children:"1.18 and later"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"ThresholdShedder"}),(0,l.jsx)(n.td,{children:"Modular"}),(0,l.jsx)(n.td,{children:"2.6 and later"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"UniformLoadShedder"}),(0,l.jsx)(n.td,{children:"Modular"}),(0,l.jsx)(n.td,{children:"2.10 and later"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"TransferShedder"}),(0,l.jsx)(n.td,{children:"Extensible"}),(0,l.jsx)(n.td,{children:"3.0 and later"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"migrate-from-simple-to-modular-broker-load-balancer",children:"Migrate from simple to modular broker load balancer"}),"\n",(0,l.jsx)(n.p,{children:"You can migrate from the simple to the modular broker load balancer, by manually changing the configuration settings in the broker.conf file or by using the pulsar-admin tool."}),"\n",(0,l.jsx)(n.h3,{id:"change-brokerconf-file",children:"Change broker.conf file"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Access to the broker.conf file."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"vim apache-pulsar-4.0.2/conf/broker.conf\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Change the broker load balancer by setting ",(0,l.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/69d7a2bf14555f11a716a9545c5cf391d8179a27/conf/broker.conf#L1309C20-L1309C20",children:"loadManagerClassName"})," to ",(0,l.jsx)(n.code,{children:"ModularLoadManagerImpl"})," in the broker.conf file."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-conf",children:"loadManagerClassName=org.apache.pulsar.broker.loadbalance.extensions.ModularLoadManagerImpl\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Restart the Pulsar cluster. The new setting will take effect after the restart."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"use-pulsar-admin-tool",children:"Use pulsar-admin tool"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Access the ",(0,l.jsx)(n.a,{href:"https://pulsar.apache.org/docs/next/reference-cli-tools/",children:"pulsar-admin tool"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"cd apache-pulsar-4.0.2/bin\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Set ",(0,l.jsx)(n.code,{children:"--config"})," to ",(0,l.jsx)(n.code,{children:"loadManagerClassName"})," and ",(0,l.jsx)(n.code,{children:"--value"})," to ",(0,l.jsx)(n.code,{children:"org.apache.pulsar.broker.loadbalance.impl.ModularLoadManagerImpl"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"pulsar-admin brokers update-dynamic-config \\\n--config loadManagerClassName \\\n--value org.apache.pulsar.broker.loadbalance.impl.ModularLoadManagerImpl\n"})}),"\n",(0,l.jsx)(n.p,{children:"You do not need to restart the Pulsar cluster. The new settings will take effect after 1 to 2 minutes."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"migrate-from-modular-to-extensible-broker-load-balancer",children:"Migrate from modular to extensible broker load balancer"}),"\n",(0,l.jsx)(n.p,{children:"You can migrate from the modular to the extensible broker load balancer, by manually changing settings in the broker.conf file. During the migration, the lookup and assignment will be redirected to the brokers with the extensible load balancer."}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsx)(n.p,{children:"The pulsar-admin tool is not supported for this migration."})}),"\n",(0,l.jsx)(n.h3,{id:"change-brokerconf-file-1",children:"Change broker.conf file"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/next/helm-upgrade",children:"Upgrade the Pulsar cluster"})," to 3.0.0 or later versions."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Access to the broker.conf file."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"vim apache-pulsar-4.0.2/conf/broker.conf\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Change the following settings in the broker.conf file:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Update ",(0,l.jsx)(n.a,{href:"/docs/next/concepts-broker-load-balancing-overview",children:"broker load balancer"})," by setting ",(0,l.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/69d7a2bf14555f11a716a9545c5cf391d8179a27/conf/broker.conf#L1309C20-L1309C20",children:"loadManagerClassName"})," to ",(0,l.jsx)(n.code,{children:"ExtensibleLoadManagerImpl"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Update ",(0,l.jsx)(n.a,{href:"/docs/next/concepts-broker-load-balancing-concepts#bundle-unloading-strategies",children:"bundle unloading strategy"})," by setting ",(0,l.jsx)(n.code,{children:"loadBalancerLoadSheddingStrategy"})," to ",(0,l.jsx)(n.code,{children:"TransferShedder"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-conf",children:"loadManagerClassName=org.apache.pulsar.broker.loadbalance.extensions.ExtensibleLoadManagerImpl \n\nloadBalancerLoadSheddingStrategy=org.apache.pulsar.broker.loadbalance.extensions.scheduler.TransferShedder\n"})}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["The ",(0,l.jsx)(n.a,{href:"/docs/next/concepts-broker-load-balancing-types",children:"extensible broker load balancer"})," is ",(0,l.jsx)(n.strong,{children:"available in Pulsar 3.0.0"})," or later."]}),"\n",(0,l.jsxs)(n.li,{children:["The ",(0,l.jsx)(n.a,{href:"/docs/next/concepts-broker-load-balancing-concepts#bundle-unloading-strategies",children:"TransferShedder unloading strategy"})," is ",(0,l.jsx)(n.strong,{children:"only available"})," in the ",(0,l.jsx)(n.a,{href:"/docs/next/concepts-broker-load-balancing-types",children:"extensible load balancer"}),"."]}),"\n"]})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Restart the Pulsar cluster. The new settings will take effect after the restart."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"migrate-from-extensible-to-modular-broker-load-balancer",children:"Migrate from extensible to modular broker load balancer"}),"\n",(0,l.jsx)(n.p,{children:"You can migrate from the extensible to the modular broker load balancer, by manually changing the setting in the broker.conf file. During the migration, the lookup and assignment will be redirected to the brokers with the modular load balancer."}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsx)(n.p,{children:"The pulsar-admin tool is not supported for this migration."})}),"\n",(0,l.jsx)(n.h3,{id:"change-brokerconf-file-2",children:"Change broker.conf file"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Access to the broker.conf file."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"vim apache-pulsar-4.0.2/conf/broker.conf\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Change the following settings in the broker.conf file:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Update broker load balancer by setting ",(0,l.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/69d7a2bf14555f11a716a9545c5cf391d8179a27/conf/broker.conf#L1309C20-L1309C20",children:"loadManagerClassName"})," to ModularLoadManagerImpl"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Update ",(0,l.jsx)(n.a,{href:"/docs/next/concepts-broker-load-balancing-concepts#bundle-unloading-strategies",children:"bundle unloading strategy"})," to OverloadShedder, ThresholdShedder, or UniformLoadShedder based on your needs."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"loadManagerClassName=org.apache.pulsar.broker.loadbalance.impl.ModularLoadManagerImpl\n\nloadBalancerLoadSheddingStrategy=org.apache.pulsar.broker.loadbalance.impl.ThresholdShedder\n"})}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/next/concepts-broker-load-balancing-concepts#bundle-unloading-strategies",children:"TransferShedder"})," is ",(0,l.jsx)(n.strong,{children:"only supported"})," in the extensible broker load balancer, so you need to change TransferShedder to other ",(0,l.jsx)(n.a,{href:"/docs/next/concepts-broker-load-balancing-concepts#bundle-unloading-strategies",children:"bundle unloading strategies"}),"."]})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Restart the Pulsar cluster. The new settings will take effect after the restart."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"related-topics",children:"Related topics"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["To get a comprehensive understanding and discover the key insights, see ",(0,l.jsx)(n.a,{href:"/docs/next/concepts-broker-load-balancing-overview",children:"Broker load balancing | Overview"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["To discover different usage scenarios, see ",(0,l.jsx)(n.a,{href:"/docs/next/concepts-broker-load-balancing-use-cases",children:"Broker load balancing | Use cases"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["To explore functionalities, see ",(0,l.jsx)(n.a,{href:"/docs/next/concepts-broker-load-balancing-features",children:"Broker load balancing | Features"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["To understand advantages, see ",(0,l.jsx)(n.a,{href:"/docs/next/concepts-broker-load-balancing-benefits",children:"Broker load balancing | Benefits"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["To learn essential fundamentals, see ",(0,l.jsx)(n.a,{href:"/docs/next/concepts-broker-load-balancing-concepts",children:"Broker load balancing | Concepts"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["To review various versions of broker load balancers, see ",(0,l.jsx)(n.a,{href:"/docs/next/concepts-broker-load-balancing-types",children:"Broker load balancing | Types"}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>i});var a=r(96540);const l={},o=a.createContext(l);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);