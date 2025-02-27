"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[91536],{27052:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"helm-deploy","title":"Deploy a Pulsar cluster on Kubernetes","description":"Learn to deploy a Pulsar cluster on Kubernetes.","source":"@site/docs/helm-deploy.md","sourceDirName":".","slug":"/helm-deploy","permalink":"/docs/next/helm-deploy","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/docs/helm-deploy.md","tags":[],"version":"current","frontMatter":{"id":"helm-deploy","title":"Deploy a Pulsar cluster on Kubernetes","sidebar_label":"Deploy","description":"Learn to deploy a Pulsar cluster on Kubernetes."},"sidebar":"docsSidebar","previous":{"title":"Prepare","permalink":"/docs/next/helm-prepare"},"next":{"title":"Upgrade","permalink":"/docs/next/helm-upgrade"}}');var t=s(74848),a=s(28453);const l={id:"helm-deploy",title:"Deploy a Pulsar cluster on Kubernetes",sidebar_label:"Deploy",description:"Learn to deploy a Pulsar cluster on Kubernetes."},o=void 0,i={},c=[{value:"Step 1: Select configuration options",id:"step-1-select-configuration-options",level:2},{value:"Kubernetes namespace",id:"kubernetes-namespace",level:4},{value:"Persistence",id:"persistence",level:4},{value:"Affinity",id:"affinity",level:4},{value:"Components",id:"components",level:4},{value:"Monitoring Components",id:"monitoring-components",level:5},{value:"Docker images",id:"docker-images",level:4},{value:"TLS",id:"tls",level:4},{value:"Provision TLS certificates using cert-manager",id:"provision-tls-certificates-using-cert-manager",level:5},{value:"Enable TLS",id:"enable-tls",level:5},{value:"Authentication",id:"authentication",level:4},{value:"Authorization",id:"authorization",level:4},{value:"CPU and RAM resource requirements",id:"cpu-and-ram-resource-requirements",level:4},{value:"Step 2: Install dependent charts",id:"step-2-install-dependent-charts",level:2},{value:"Install storage provisioner",id:"install-storage-provisioner",level:3},{value:"Install cert-manager",id:"install-cert-manager",level:3},{value:"Step 3: Prepare Helm release",id:"step-3-prepare-helm-release",level:2},{value:"Step 4: Deploy Pulsar cluster using Helm",id:"step-4-deploy-pulsar-cluster-using-helm",level:2},{value:"Access Pulsar cluster",id:"access-pulsar-cluster",level:2},{value:"Troubleshoot",id:"troubleshoot",level:2},{value:"Uninstall",id:"uninstall",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Before deploying a Pulsar cluster, you need to ",(0,t.jsx)(n.a,{href:"/docs/next/helm-prepare",children:"prepare Kubernetes resources"})," and then continue with the following steps."]}),"\n",(0,t.jsx)(n.h2,{id:"step-1-select-configuration-options",children:"Step 1: Select configuration options"}),"\n",(0,t.jsxs)(n.p,{children:["Specify how to run Pulsar using Helm's ",(0,t.jsx)(n.code,{children:"--set option.name=value"})," command line option. In each section, collect the options that are combined to use with the ",(0,t.jsx)(n.code,{children:"helm install"})," command."]}),"\n",(0,t.jsx)(n.h4,{id:"kubernetes-namespace",children:"Kubernetes namespace"}),"\n",(0,t.jsxs)(n.p,{children:["By default, the Pulsar Helm Chart is installed in a namespace called ",(0,t.jsx)(n.code,{children:"pulsar"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"namespace: pulsar\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To install the Pulsar Helm Chart into a different Kubernetes namespace, you can include this option in the ",(0,t.jsx)(n.code,{children:"helm install"})," command."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"--set namespace=<different-k8s-namespace>\n"})}),"\n",(0,t.jsx)(n.p,{children:"By default, the Pulsar Helm Chart doesn't create the namespace."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"namespaceCreate: false\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To use the Pulsar Helm Chart to create the Kubernetes namespace automatically, you can include this option in the ",(0,t.jsx)(n.code,{children:"helm install"})," command."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"--set namespaceCreate=true\n"})}),"\n",(0,t.jsx)(n.h4,{id:"persistence",children:"Persistence"}),"\n",(0,t.jsx)(n.p,{children:"By default, the Pulsar Helm Chart creates Volume Claims with the expectation that a dynamic provisioner creates the underlying Persistent Volumes."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"volumes:\n  persistence: true\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Before installing the production instance of Pulsar, ensure to plan the storage settings to avoid extra storage migration work. Because after initial installation, you must edit Kubernetes objects manually if you want to change storage settings."})}),"\n",(0,t.jsxs)(n.p,{children:["The Pulsar Helm Chart is designed for production use. To use the Pulsar Helm Chart in a development environment (such as Minikube), you can disable persistence by including this option in your ",(0,t.jsx)(n.code,{children:"helm install"})," command."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"--set volumes.persistence=false\n"})}),"\n",(0,t.jsx)(n.h4,{id:"affinity",children:"Affinity"}),"\n",(0,t.jsxs)(n.p,{children:["By default, ",(0,t.jsx)(n.code,{children:"anti-affinity"})," is enabled to ensure pods of the same component can run on different nodes."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"affinity:\n  anti_affinity: true\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To use the Pulsar Helm Chart in a development environment (such as Minikube), you can disable ",(0,t.jsx)(n.code,{children:"anti-affinity"})," by including this option in your ",(0,t.jsx)(n.code,{children:"helm install"})," command."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"--set affinity.anti_affinity=false\n"})}),"\n",(0,t.jsx)(n.h4,{id:"components",children:"Components"}),"\n",(0,t.jsx)(n.p,{children:"The Pulsar Helm Chart is designed for production usage. It deploys a production-ready Pulsar cluster, including Pulsar core components and monitoring components."}),"\n",(0,t.jsx)(n.p,{children:"You can customize the components to be deployed by turning on/off individual components."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"## Components\n##\n## Control what components of Apache Pulsar to deploy for the cluster\ncomponents:\n  # zookeeper\n  zookeeper: true\n  # bookkeeper\n  bookkeeper: true\n  # bookkeeper - autorecovery\n  autorecovery: true\n  # broker\n  broker: true\n  # functions\n  functions: true\n  # proxy\n  proxy: true\n  # toolset\n  toolset: true\n  # pulsar manager\n  pulsar_manager: true\n"})}),"\n",(0,t.jsx)(n.h5,{id:"monitoring-components",children:"Monitoring Components"}),"\n",(0,t.jsxs)(n.p,{children:["The Pulsar Helm Chart installs monitoring components using a dependent Helm chart, ",(0,t.jsx)(n.a,{href:"https://github.com/prometheus-community/helm-charts",children:"kube-prometheus-stack"}),". You can customize this Helm chart to specify which monitoring components to install. These components are enabled by default."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"## Monitoring Components\n##\n## Control what components of the kube-prometheus-stack Helm chart to deploy for the cluster\nkube-prometheus-stack:\n  # Control deployment of this Helm chart entirely\n  enabled: true\n  # prometheus\n  prometheus:\n    enabled: true\n  promtheus-node-exporter:\n    enabled: true\n  # grafana\n  grafana:\n    enabled: true\n"})}),"\n",(0,t.jsx)(n.h4,{id:"docker-images",children:"Docker images"}),"\n",(0,t.jsx)(n.p,{children:"The Pulsar Helm Chart is designed to enable controlled upgrades. So it can configure independent image versions for components. You can customize the images by setting individual components."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"## Images\n##\n## Control what images to use for each component\nimages:\n  zookeeper:\n    repository: apachepulsar/pulsar-all\n    tag: 4.0.3\n    pullPolicy: IfNotPresent\n  bookie:\n    repository: apachepulsar/pulsar-all\n    tag: 4.0.3\n    pullPolicy: IfNotPresent\n  autorecovery:\n    repository: apachepulsar/pulsar-all\n    tag: 4.0.3\n    pullPolicy: IfNotPresent\n  broker:\n    repository: apachepulsar/pulsar-all\n    tag: 4.0.3\n    pullPolicy: IfNotPresent\n  proxy:\n    repository: apachepulsar/pulsar-all\n    tag: 4.0.3\n    pullPolicy: IfNotPresent\n  functions:\n    repository: apachepulsar/pulsar-all\n    tag: 4.0.3\n  pulsar_manager:\n    repository: apachepulsar/pulsar-manager\n    tag: v0.3.0\n    pullPolicy: IfNotPresent\n    hasCommand: false\n"})}),"\n",(0,t.jsx)(n.p,{children:"The Pulsar Helm Chart also lets you specify the image versions used by initialization containers used to coordinate creation and connection of dependent Pulsar resources."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"## Images\n##\n## Control what image to use for Pulsar init containers\npulsar_metadata:\n  component: pulsar-init\n  image:\n    repository: apachepulsar/pulsar-all\n    tag: 4.0.3\n    pullPolicy: IfNotPresent\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["If using a private Docker repository or pull-thru cache, the ",(0,t.jsx)(n.code,{children:"repository"})," configuration option must be changed accordingly for all component defintions including the ",(0,t.jsx)(n.code,{children:"pulsar_metadata"})," component."]})}),"\n",(0,t.jsx)(n.h4,{id:"tls",children:"TLS"}),"\n",(0,t.jsx)(n.p,{children:"The Pulsar Helm Chart can be configured to enable TLS (Transport Layer Security) to protect all the traffic between components. Before enabling TLS, you have to provision TLS certificates for the required components."}),"\n",(0,t.jsx)(n.h5,{id:"provision-tls-certificates-using-cert-manager",children:"Provision TLS certificates using cert-manager"}),"\n",(0,t.jsxs)(n.p,{children:["To use the ",(0,t.jsx)(n.code,{children:"cert-manager"})," to provision the TLS certificates, you have to install the ",(0,t.jsx)(n.a,{href:"#install-cert-manager",children:"cert-manager"})," before installing the Pulsar Helm Chart. After successfully installing the cert-manager, you can set ",(0,t.jsx)(n.code,{children:"certs.internal_issuer.enabled"})," to ",(0,t.jsx)(n.code,{children:"true"}),". Therefore, the Pulsar Helm Chart can use the ",(0,t.jsx)(n.code,{children:"cert-manager"})," to generate ",(0,t.jsx)(n.code,{children:"selfsigning"})," TLS certificates for the configured components."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"certs:\n  internal_issuer:\n    enabled: false\n    component: internal-cert-issuer\n    type: selfsigning\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can also customize the generated TLS certificates by configuring the fields as the following."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"tls:\n  # common settings for generating certs\n  common:\n    # 90d\n    duration: 2160h\n    # 15d\n    renewBefore: 360h\n    organization:\n      - pulsar\n    keySize: 4096\n    keyAlgorithm: rsa\n    keyEncoding: pkcs8\n"})}),"\n",(0,t.jsx)(n.h5,{id:"enable-tls",children:"Enable TLS"}),"\n",(0,t.jsxs)(n.p,{children:["After installing the ",(0,t.jsx)(n.code,{children:"cert-manager"}),", you can set ",(0,t.jsx)(n.code,{children:"tls.enabled"})," to ",(0,t.jsx)(n.code,{children:"true"})," to enable TLS encryption for the entire cluster."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"tls:\n  enabled: false\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can also configure whether to enable TLS encryption for individual components."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"tls:\n  # settings for generating certs for proxy\n  proxy:\n    enabled: false\n    cert_name: tls-proxy\n  # settings for generating certs for broker\n  broker:\n    enabled: false\n    cert_name: tls-broker\n  # settings for generating certs for bookies\n  bookie:\n    enabled: false\n    cert_name: tls-bookie\n  # settings for generating certs for zookeeper\n  zookeeper:\n    enabled: false\n    cert_name: tls-zookeeper\n  # settings for generating certs for recovery\n  autorecovery:\n    cert_name: tls-recovery\n  # settings for generating certs for toolset\n  toolset:\n    cert_name: tls-toolset\n"})}),"\n",(0,t.jsx)(n.h4,{id:"authentication",children:"Authentication"}),"\n",(0,t.jsxs)(n.p,{children:["By default, authentication is disabled. You can set ",(0,t.jsx)(n.code,{children:"auth.authentication.enabled"})," to ",(0,t.jsx)(n.code,{children:"true"})," to enable authentication.\nCurrently, the Pulsar Helm Chart only supports the JWT authentication provider. You can set ",(0,t.jsx)(n.code,{children:"auth.authentication.provider"})," to ",(0,t.jsx)(n.code,{children:"jwt"})," to use the JWT authentication provider."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'# Enable or disable broker authentication and authorization.\nauth:\n  authentication:\n    enabled: false\n    provider: "jwt"\n    jwt:\n      # Enable JWT authentication\n      # If the token is generated by a secret key, set the usingSecretKey as true.\n      # If the token is generated by a private key, set the usingSecretKey as false.\n      usingSecretKey: false\n  superUsers:\n    # broker to broker communication\n    broker: "broker-admin"\n    # proxy to broker communication\n    proxy: "proxy-admin"\n    # pulsar-admin client to broker/proxy communication\n    client: "admin"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["To enable authentication, you can run ",(0,t.jsx)(n.a,{href:"#prepare-helm-release",children:"prepare helm release"})," to generate token secret keys and tokens for three super users specified in the ",(0,t.jsx)(n.code,{children:"auth.superUsers"})," field. The generated token keys and super user tokens are uploaded and stored as Kubernetes secrets prefixed with ",(0,t.jsx)(n.code,{children:"<pulsar-release-name>-token-"}),". You can use the following command to find those secrets."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl get secrets -n <k8s-namespace>\n"})}),"\n",(0,t.jsx)(n.h4,{id:"authorization",children:"Authorization"}),"\n",(0,t.jsx)(n.p,{children:"By default, authorization is disabled. Authorization can be enabled only when authentication is enabled."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"auth:\n  authorization:\n    enabled: false\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To enable authorization, you can include this option in the ",(0,t.jsx)(n.code,{children:"helm install"})," command."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"--set auth.authorization.enabled=true\n"})}),"\n",(0,t.jsx)(n.h4,{id:"cpu-and-ram-resource-requirements",children:"CPU and RAM resource requirements"}),"\n",(0,t.jsx)(n.p,{children:"By default, the resource requests and the number of replicas for the Pulsar components in the Pulsar Helm Chart are adequate for small production deployment. If you deploy a non-production instance, you can reduce the defaults to fit into a smaller cluster."}),"\n",(0,t.jsx)(n.p,{children:"Once you have all of your configuration options collected, you can install dependent charts before installing the Pulsar Helm Chart."}),"\n",(0,t.jsx)(n.h2,{id:"step-2-install-dependent-charts",children:"Step 2: Install dependent charts"}),"\n",(0,t.jsx)(n.h3,{id:"install-storage-provisioner",children:"Install storage provisioner"}),"\n",(0,t.jsxs)(n.p,{children:["For more information about storage provisioner, refer to ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/storage/storage-classes/#provisioner",children:"Kubernetes documentation"}),". Note that you need to create a storage class for your Kubernetes cluster and configure the ",(0,t.jsx)(n.a,{href:"https://github.com/apache/pulsar-helm-chart/blob/master/charts/pulsar/values.yaml",children:"storage class name"})," in the Helm Chart."]}),"\n",(0,t.jsxs)(n.p,{children:["If you want to use ",(0,t.jsx)(n.strong,{children:"local"})," ",(0,t.jsx)(n.a,{href:"#persistence",children:"persistent volumes"})," as the persistent storage, you need to install a local storage provisioner. Here are two options:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/rancher/local-path-provisioner",children:"Local Path Provisioner"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/kubernetes-sigs/sig-storage-local-static-provisioner",children:"Local Persistence Volume Static Provisioner"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"install-cert-manager",children:"Install cert-manager"}),"\n",(0,t.jsxs)(n.p,{children:["The Pulsar Helm Chart uses the ",(0,t.jsx)(n.a,{href:"https://github.com/jetstack/cert-manager",children:"cert-manager"})," to provision and manage TLS certificates automatically. To enable TLS encryption for brokers or proxies, you need to install the cert-manager in advance."]}),"\n",(0,t.jsxs)(n.p,{children:["For details about how to install the cert-manager, follow the ",(0,t.jsx)(n.a,{href:"https://cert-manager.io/docs/installation/kubernetes/#installing-with-helm",children:"official instructions"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Alternatively, we provide a bash script ",(0,t.jsx)(n.a,{href:"https://github.com/apache/pulsar-helm-chart/blob/master/scripts/cert-manager/install-cert-manager.sh",children:"install-cert-manager.sh"})," to install a cert-manager release to the namespace ",(0,t.jsx)(n.code,{children:"cert-manager"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/apache/pulsar-helm-chart\ncd pulsar-helm-chart\n./scripts/cert-manager/install-cert-manager.sh\n"})}),"\n",(0,t.jsx)(n.h2,{id:"step-3-prepare-helm-release",children:"Step 3: Prepare Helm release"}),"\n",(0,t.jsxs)(n.p,{children:["Once you have installed all the dependent charts and collected all of your configuration options, you can run ",(0,t.jsx)(n.a,{href:"https://github.com/apache/pulsar-helm-chart/blob/master/scripts/pulsar/prepare_helm_release.sh",children:"prepare_helm_release.sh"})," to prepare the Helm release."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/apache/pulsar-helm-chart\ncd pulsar-helm-chart\n./scripts/pulsar/prepare_helm_release.sh -n <k8s-namespace> -k <helm-release-name>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"prepare_helm_release"})," creates the following resources:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A Kubernetes namespace for installing the Pulsar release."}),"\n",(0,t.jsxs)(n.li,{children:["JWT secret keys and tokens for three super users: ",(0,t.jsx)(n.code,{children:"broker-admin"}),", ",(0,t.jsx)(n.code,{children:"proxy-admin"}),", and ",(0,t.jsx)(n.code,{children:"admin"}),". By default, it generates an asymmetric public/private key pair. You can choose to generate a symmetric secret key by specifying ",(0,t.jsx)(n.code,{children:"--symmetric"}),".","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["the ",(0,t.jsx)(n.code,{children:"broker-admin"})," role is used for inter-broker communications."]}),"\n",(0,t.jsxs)(n.li,{children:["the ",(0,t.jsx)(n.code,{children:"proxy-admin"})," role is used for proxies to communicate with brokers."]}),"\n",(0,t.jsxs)(n.li,{children:["the ",(0,t.jsx)(n.code,{children:"admin"})," role is used by the admin tools."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"step-4-deploy-pulsar-cluster-using-helm",children:"Step 4: Deploy Pulsar cluster using Helm"}),"\n",(0,t.jsx)(n.p,{children:"Once you have finished the above steps, you can install a Helm release."}),"\n",(0,t.jsxs)(n.p,{children:["In this example, the Helm release is named ",(0,t.jsx)(n.code,{children:"pulsar"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm repo add apache https://pulsar.apache.org/charts\nhelm repo update\nhelm install pulsar apache/pulsar \\\n    --timeout 10m \\\n    --set [your configuration options]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can also use the ",(0,t.jsx)(n.code,{children:"--version <installation version>"})," option if you want to install a specific version of Pulsar Helm Chart."]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:"A list of installed resources is output once the Pulsar cluster is deployed. This may take 5-10 minutes."}),(0,t.jsxs)(n.p,{children:["To check the status of the deployment, run the ",(0,t.jsx)(n.code,{children:"helm status pulsar"})," command. It can also be done while the deployment is taking place if you run the command in another terminal."]})]}),"\n",(0,t.jsx)(n.h2,{id:"access-pulsar-cluster",children:"Access Pulsar cluster"}),"\n",(0,t.jsxs)(n.p,{children:["The default values will create a ",(0,t.jsx)(n.code,{children:"ClusterIP"})," for the following resources, which you can use to interact with the cluster."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Proxy: You can use the IP address to produce and consume messages to the installed Pulsar cluster."}),"\n",(0,t.jsxs)(n.li,{children:["Pulsar Manager: You can access the Pulsar Manager UI at ",(0,t.jsx)(n.code,{children:"http://<pulsar-manager-ip>:9527"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Grafana Dashboard: You can access the Grafana dashboard at ",(0,t.jsx)(n.code,{children:"http://<grafana-dashboard-ip>:3000"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To find the IP addresses of those components, run the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl get service -n <k8s-namespace>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can configure the Proxy and the Pulsar Manager as a ",(0,t.jsx)(n.code,{children:"NodePort"})," instead of a ",(0,t.jsx)(n.code,{children:"ClusterIP"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"proxy:\n  service:\n    type: NodePort\npulsar_manager:\n  service:\n    type: NodePort\n"})}),"\n",(0,t.jsx)(n.h2,{id:"troubleshoot",children:"Troubleshoot"}),"\n",(0,t.jsxs)(n.p,{children:["Although we have done our best to make these charts as seamless as possible, troubles do go out of our control occasionally. We have been collecting tips and tricks for troubleshooting common issues. Check it first before raising an ",(0,t.jsx)(n.a,{href:"https://github.com/apache/pulsar/issues/new/choose",children:"issue"}),", and feel free to add your solutions by creating a ",(0,t.jsx)(n.a,{href:"https://github.com/apache/pulsar/compare",children:"Pull Request"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"uninstall",children:"Uninstall"}),"\n",(0,t.jsx)(n.p,{children:"To uninstall the Pulsar Helm Chart, run the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm uninstall <pulsar-release-name>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For the purposes of continuity, some Kubernetes objects in these charts cannot be removed by using the ",(0,t.jsx)(n.code,{children:"helm uninstall"})," command. It is recommended to ",(0,t.jsx)(n.em,{children:"consciously"})," remove these items, as they affect re-deployment."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["PVCs for stateful data: remove these items.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"ZooKeeper: This is your metadata."}),"\n",(0,t.jsx)(n.li,{children:"BookKeeper: This is your data."}),"\n",(0,t.jsx)(n.li,{children:"Prometheus: This is your metrics data, which can be safely removed."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Secrets: if the secrets are generated by the ",(0,t.jsx)(n.a,{href:"https://github.com/apache/pulsar-helm-chart/blob/master/scripts/pulsar/prepare_helm_release.sh",children:"prepared release script"}),", they contain secret keys and tokens. You can use the ",(0,t.jsx)(n.a,{href:"https://github.com/apache/pulsar-helm-chart/blob/master/scripts/pulsar/cleanup_helm_release.sh",children:"cleanup release script"})," to remove these secrets and tokens as needed."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var r=s(96540);const t={},a=r.createContext(t);function l(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);