"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[47284],{44125:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"io-debug","title":"How to debug Pulsar connectors","description":"Learn how to debug Pulsar connectors.","source":"@site/docs/io-debug.md","sourceDirName":".","slug":"/io-debug","permalink":"/docs/next/io-debug","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/docs/io-debug.md","tags":[],"version":"current","frontMatter":{"id":"io-debug","title":"How to debug Pulsar connectors","sidebar_label":"Debug","description":"Learn how to debug Pulsar connectors."},"sidebar":"docsSidebar","previous":{"title":"Use","permalink":"/docs/next/io-use"},"next":{"title":"Built-in connector","permalink":"/docs/next/io-connectors"}}');var i=s(74848),a=s(28453);const t={id:"io-debug",title:"How to debug Pulsar connectors",sidebar_label:"Debug",description:"Learn how to debug Pulsar connectors."},c=void 0,r={},l=[{value:"Debug in localrun mode",id:"debug-in-localrun-mode",level:2},{value:"Use connector log",id:"use-connector-log",level:3},{value:"Debug in cluster mode",id:"debug-in-cluster-mode",level:2},{value:"Use connector log",id:"use-connector-log-1",level:3},{value:"Use admin CLI",id:"use-admin-cli",level:3},{value:"<code>get</code>",id:"get",level:3},{value:"<code>status</code>",id:"status",level:3},{value:"<code>topics stats</code>",id:"topics-stats",level:3},{value:"Checklist",id:"checklist",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"This guide explains how to debug connectors in localrun or cluster mode and gives a debugging checklist.\nTo better demonstrate how to debug Pulsar connectors, take the Mongo sink connector as an example."}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Deploy a Mongo sink environment"})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Start a Mongo service."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"docker pull mongo:4\ndocker run -d -p 27017:27017 --name pulsar-mongo -v $PWD/data:/data/db mongo:4\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Create a DB and a collection."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"docker exec -it pulsar-mongo /bin/bash\nmongo\n> use pulsar\n> db.createCollection('messages')\n> exit\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Start Pulsar standalone."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"docker pull apachepulsar/pulsar:2.4.0\ndocker run -d -it -p 6650:6650 -p 8080:8080 -v $PWD/data:/pulsar/data --link pulsar-mongo --name pulsar-mongo-standalone apachepulsar/pulsar:2.4.0 bin/pulsar standalone\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Configure the Mongo sink with the ",(0,i.jsx)(e.code,{children:"mongo-sink-config.yaml"})," file."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:'configs:\n  mongoUri: "mongodb://pulsar-mongo:27017"\n  database: "pulsar"\n  collection: "messages"\n  batchSize: 2\n  batchTimeMs: 500\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"docker cp mongo-sink-config.yaml pulsar-mongo-standalone:/pulsar/\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Download the Mongo sink nar package."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"docker exec -it pulsar-mongo-standalone /bin/bash\ncurl -O http://apache.01link.hk/pulsar/pulsar-2.4.0/connectors/pulsar-io-mongo-2.4.0.nar\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"debug-in-localrun-mode",children:"Debug in localrun mode"}),"\n",(0,i.jsxs)(e.p,{children:["Start the Mongo sink in localrun mode using the ",(0,i.jsx)(e.code,{children:"localrun"})," command."]}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsxs)(e.p,{children:["For more information about the ",(0,i.jsx)(e.code,{children:"localrun"})," command, see ",(0,i.jsx)(e.a,{href:"/docs/next/reference-connector-admin",children:(0,i.jsx)(e.code,{children:"localrun"})}),"."]})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"./bin/pulsar-admin sinks localrun \\\n    --archive $PWD/connectors/pulsar-io-mongo-4.0.3.nar \\\n    --tenant public --namespace default \\\n    --inputs test-mongo \\\n    --name pulsar-mongo-sink \\\n    --sink-config-file $PWD/mongo-sink-config.yaml \\\n    --parallelism 1\n"})}),"\n",(0,i.jsx)(e.h3,{id:"use-connector-log",children:"Use connector log"}),"\n",(0,i.jsx)(e.p,{children:"To debug a connector in localrun mode, you can use one of the following methods to get a connector log:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["After executing the ",(0,i.jsx)(e.code,{children:"localrun"})," command, the ",(0,i.jsx)(e.strong,{children:"log is automatically printed on the console"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"The log is located at:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"logs/functions/tenant/namespace/function-name/function-name-instance-id.log\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example"})}),"\n",(0,i.jsx)(e.p,{children:"The path of the Mongo sink connector is:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"logs/functions/public/default/pulsar-mongo-sink/pulsar-mongo-sink-0.log\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"To clearly explain the log information, the following is a breakdown into smaller blocks with added descriptions."}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"This piece of log information shows the storage path of the nar package after decompression."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"08:21:54.132 [main] INFO  org.apache.pulsar.common.nar.NarClassLoader - Created class loader with paths: [file:/tmp/pulsar-nar/pulsar-io-mongo-2.4.0.nar-unpacked/, file:/tmp/pulsar-nar/pulsar-io-mongo-2.4.0.nar-unpacked/META-INF/bundled-dependencies/,\n"})}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsxs)(e.p,{children:["If ",(0,i.jsx)(e.code,{children:"class cannot be found"})," exception is thrown, check whether the nar file is decompressed in the folder ",(0,i.jsx)(e.code,{children:"file:/tmp/pulsar-nar/pulsar-io-mongo-2.4.0.nar-unpacked/META-INF/bundled-dependencies/"})," or not."]})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["This piece of log information illustrates the basic information about the Mongo sink connector, such as tenant, namespace, name, parallelism, resources, and so on, which can be used to ",(0,i.jsx)(e.strong,{children:"check whether the Mongo sink connector is configured correctly or not"}),"."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:'08:21:55.390 [main] INFO  org.apache.pulsar.functions.runtime.ThreadRuntime - ThreadContainer starting function with instance config InstanceConfig(instanceId=0, functionId=853d60a1-0c48-44d5-9a5c-6917386476b2, functionVersion=c2ce1458-b69e-4175-88c0-a0a856a2be8c, functionDetails=tenant: "public"\nnamespace: "default"\nname: "pulsar-mongo-sink"\nclassName: "org.apache.pulsar.functions.api.utils.IdentityFunction"\nautoAck: true\nparallelism: 1\nsource {\ntypeClassName: "[B"\ninputSpecs {\n    key: "test-mongo"\n    value {\n    }\n}\ncleanupSubscription: true\n}\nsink {\nclassName: "org.apache.pulsar.io.mongodb.MongoSink"\nconfigs: "{\\"mongoUri\\":\\"mongodb://pulsar-mongo:27017\\",\\"database\\":\\"pulsar\\",\\"collection\\":\\"messages\\",\\"batchSize\\":2,\\"batchTimeMs\\":500}"\ntypeClassName: "[B"\n}\nresources {\ncpu: 1.0\nram: 1073741824\ndisk: 10737418240\n}\ncomponentType: SINK\n, maxBufferedTuples=1024, functionAuthenticationSpec=null, port=38459, clusterName=local)\n'})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"This piece of log information demonstrates the status of the connections to Mongo and configuration information."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"08:21:56.231 [cluster-ClusterId{value='5d6396a3c9e77c0569ff00eb', description='null'}-pulsar-mongo:27017] INFO  org.mongodb.driver.connection - Opened connection [connectionId{localValue:1, serverValue:8}] to pulsar-mongo:27017\n08:21:56.326 [cluster-ClusterId{value='5d6396a3c9e77c0569ff00eb', description='null'}-pulsar-mongo:27017] INFO  org.mongodb.driver.cluster - Monitor thread successfully connected to server with description ServerDescription{address=pulsar-mongo:27017, type=STANDALONE, state=CONNECTED, ok=true, version=ServerVersion{versionList=[4, 2, 0]}, minWireVersion=0, maxWireVersion=8, maxDocumentSize=16777216, logicalSessionTimeoutMinutes=30, roundTripTimeNanos=89058800}\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"This piece of log information explains the configuration of consumers and clients, including the topic name, subscription name, subscription type, and so on."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:'08:21:56.719 [pulsar-client-io-1-1] INFO  org.apache.pulsar.client.impl.ConsumerStatsRecorderImpl - Starting Pulsar consumer status recorder with config: {\n"topicNames" : [ "test-mongo" ],\n"topicsPattern" : null,\n"subscriptionName" : "public/default/pulsar-mongo-sink",\n"subscriptionType" : "Shared",\n"receiverQueueSize" : 1000,\n"acknowledgementsGroupTimeMicros" : 100000,\n"negativeAckRedeliveryDelayMicros" : 60000000,\n"maxTotalReceiverQueueSizeAcrossPartitions" : 50000,\n"consumerName" : null,\n"ackTimeoutMillis" : 0,\n"tickDurationMillis" : 1000,\n"priorityLevel" : 0,\n"cryptoFailureAction" : "CONSUME",\n"properties" : {\n    "application" : "pulsar-sink",\n    "id" : "public/default/pulsar-mongo-sink",\n    "instance_id" : "0"\n},\n"readCompacted" : false,\n"subscriptionInitialPosition" : "Latest",\n"patternAutoDiscoveryPeriod" : 1,\n"regexSubscriptionMode" : "PersistentOnly",\n"deadLetterPolicy" : null,\n"autoUpdatePartitions" : true,\n"replicateSubscriptionState" : false,\n"resetIncludeHead" : false\n}\n08:21:56.726 [pulsar-client-io-1-1] INFO  org.apache.pulsar.client.impl.ConsumerStatsRecorderImpl - Pulsar client config: {\n"serviceUrl" : "pulsar://localhost:6650",\n"authPluginClassName" : null,\n"authParams" : null,\n"operationTimeoutMs" : 30000,\n"statsIntervalSeconds" : 60,\n"numIoThreads" : 1,\n"numListenerThreads" : 1,\n"connectionsPerBroker" : 1,\n"useTcpNoDelay" : true,\n"useTls" : false,\n"tlsTrustCertsFilePath" : null,\n"tlsAllowInsecureConnection" : false,\n"tlsHostnameVerificationEnable" : false,\n"concurrentLookupRequest" : 5000,\n"maxLookupRequest" : 50000,\n"maxNumberOfRejectedRequestPerConnection" : 50,\n"keepAliveIntervalSeconds" : 30,\n"connectionTimeoutMs" : 10000,\n"requestTimeoutMs" : 60000,\n"defaultBackoffIntervalNanos" : 100000000,\n"maxBackoffIntervalNanos" : 30000000000\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"debug-in-cluster-mode",children:"Debug in cluster mode"}),"\n",(0,i.jsx)(e.p,{children:"To debug a connector in cluster mode, you can use the following methods:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#use-connector-log",children:"Use connector log"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#use-admin-cli",children:"Use admin CLI"})}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"use-connector-log-1",children:"Use connector log"}),"\n",(0,i.jsxs)(e.p,{children:["In cluster mode, multiple connectors can run on a worker. To find the log path of a specified connector, use the ",(0,i.jsx)(e.code,{children:"workerId"})," to locate the connector log."]}),"\n",(0,i.jsx)(e.h3,{id:"use-admin-cli",children:"Use admin CLI"}),"\n",(0,i.jsx)(e.p,{children:"Pulsar admin CLI helps you debug Pulsar connectors with the following subcommands:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#get",children:(0,i.jsx)(e.code,{children:"get"})})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#status",children:(0,i.jsx)(e.code,{children:"status"})})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#topics-stats",children:(0,i.jsx)(e.code,{children:"topics stats"})})}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Create a Mongo sink"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"./bin/pulsar-admin sinks create \\\n    --archive $PWD/pulsar-io-mongo-2.4.0.nar \\\n    --tenant public \\\n    --namespace default \\\n    --inputs test-mongo \\\n    --name pulsar-mongo-sink \\\n    --sink-config-file $PWD/mongo-sink-config.yaml \\\n    --parallelism 1\n"})}),"\n",(0,i.jsx)(e.h3,{id:"get",children:(0,i.jsx)(e.code,{children:"get"})}),"\n",(0,i.jsxs)(e.p,{children:["Use the ",(0,i.jsx)(e.code,{children:"get"})," command to get the basic information about the Mongo sink connector, such as tenant, namespace, name, parallelism, and so on."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"./bin/pulsar-admin sinks get --tenant public --namespace default  --name pulsar-mongo-sink\n"})}),"\n",(0,i.jsx)(e.p,{children:"Output:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'{\n  "tenant": "public",\n  "namespace": "default",\n  "name": "pulsar-mongo-sink",\n  "className": "org.apache.pulsar.io.mongodb.MongoSink",\n  "inputSpecs": {\n    "test-mongo": {\n      "isRegexPattern": false\n    }\n  },\n  "configs": {\n    "mongoUri": "mongodb://pulsar-mongo:27017",\n    "database": "pulsar",\n    "collection": "messages",\n    "batchSize": 2.0,\n    "batchTimeMs": 500.0\n  },\n  "parallelism": 1,\n  "processingGuarantees": "ATLEAST_ONCE",\n  "retainOrdering": false,\n  "autoAck": true\n}\n'})}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsxs)(e.p,{children:["For more information about the ",(0,i.jsx)(e.code,{children:"get"})," command, see ",(0,i.jsx)(e.a,{href:"/docs/next/reference-connector-admin",children:(0,i.jsx)(e.code,{children:"get"})}),"."]})}),"\n",(0,i.jsx)(e.h3,{id:"status",children:(0,i.jsx)(e.code,{children:"status"})}),"\n",(0,i.jsxs)(e.p,{children:["Use the ",(0,i.jsx)(e.code,{children:"status"})," command to get the current status about the Mongo sink connector, such as the number of instance, the number of running instance, instanceId, workerId and so on."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"./bin/pulsar-admin sinks status\n--tenant public \\\n--namespace default  \\\n--name pulsar-mongo-sink\n"})}),"\n",(0,i.jsx)(e.p,{children:"Output:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'{\n"numInstances" : 1,\n"numRunning" : 1,\n"instances" : [ {\n    "instanceId" : 0,\n    "status" : {\n    "running" : true,\n    "error" : "",\n    "numRestarts" : 0,\n    "numReadFromPulsar" : 0,\n    "numSystemExceptions" : 0,\n    "latestSystemExceptions" : [ ],\n    "numSinkExceptions" : 0,\n    "latestSinkExceptions" : [ ],\n    "numWrittenToSink" : 0,\n    "lastReceivedTime" : 0,\n    "workerId" : "c-standalone-fw-5d202832fd18-8080"\n    }\n} ]\n}\n'})}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsxs)(e.p,{children:["For more information about the ",(0,i.jsx)(e.code,{children:"status"})," command, see ",(0,i.jsx)(e.a,{href:"/docs/next/reference-connector-admin",children:(0,i.jsx)(e.code,{children:"status"})}),".\nIf there are multiple connectors running on a worker, ",(0,i.jsx)(e.code,{children:"workerId"})," can locate the worker on which the specified connector is running."]})}),"\n",(0,i.jsx)(e.h3,{id:"topics-stats",children:(0,i.jsx)(e.code,{children:"topics stats"})}),"\n",(0,i.jsxs)(e.p,{children:["Use the ",(0,i.jsx)(e.code,{children:"topics stats"})," command to get the stats for a topic and its connected producer and consumer, such as whether the topic has received messages or not, whether there is a backlog of messages or not, the available permits and other key information. All rates are computed over a 1-minute window and are relative to the last completed 1-minute period."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"./bin/pulsar-admin topics stats test-mongo\n"})}),"\n",(0,i.jsx)(e.p,{children:"Output:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'{\n  "msgRateIn" : 0.0,\n  "msgThroughputIn" : 0.0,\n  "msgRateOut" : 0.0,\n  "msgThroughputOut" : 0.0,\n  "averageMsgSize" : 0.0,\n  "storageSize" : 1,\n  "publishers" : [ ],\n  "subscriptions" : {\n    "public/default/pulsar-mongo-sink" : {\n      "msgRateOut" : 0.0,\n      "msgThroughputOut" : 0.0,\n      "msgRateRedeliver" : 0.0,\n      "msgBacklog" : 0,\n      "blockedSubscriptionOnUnackedMsgs" : false,\n      "msgDelayed" : 0,\n      "unackedMessages" : 0,\n      "type" : "Shared",\n      "msgRateExpired" : 0.0,\n      "consumers" : [ {\n        "msgRateOut" : 0.0,\n        "msgThroughputOut" : 0.0,\n        "msgRateRedeliver" : 0.0,\n        "consumerName" : "dffdd",\n        "availablePermits" : 999,\n        "unackedMessages" : 0,\n        "blockedConsumerOnUnackedMsgs" : false,\n        "metadata" : {\n          "instance_id" : "0",\n          "application" : "pulsar-sink",\n          "id" : "public/default/pulsar-mongo-sink"\n        },\n        "connectedSince" : "2019-08-26T08:48:07.582Z",\n        "clientVersion" : "2.4.0",\n        "address" : "/172.17.0.3:57790"\n      } ],\n      "isReplicated" : false\n    }\n  },\n  "replication" : { },\n  "deduplicationStatus" : "Disabled"\n}\n'})}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsxs)(e.p,{children:["For more information about the ",(0,i.jsx)(e.code,{children:"topic stats"})," command, see ",(0,i.jsx)(e.a,{href:"pathname:///reference/#/next/pulsar-admin/topics?id=stats",children:(0,i.jsx)(e.code,{children:"topic stats"})}),"."]})}),"\n",(0,i.jsx)(e.h2,{id:"checklist",children:"Checklist"}),"\n",(0,i.jsx)(e.p,{children:"This checklist indicates the major areas to check when you debug connectors. It is a reminder of what to look for to ensure a thorough review and an evaluation tool to get the status of connectors."}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Does Pulsar start successfully?"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Does the external service run normally?"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Is the nar package complete?"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Is the connector configuration file correct?"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"In localrun mode, run a connector and check the printed information (connector log) on the console."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"In cluster mode\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Use the ",(0,i.jsx)(e.code,{children:"get"})," command to get the basic information."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Use the ",(0,i.jsx)(e.code,{children:"status"})," command to get the current status."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Use the ",(0,i.jsx)(e.code,{children:"topics stats"})," command to get the stats for a specified topic and its connected producers and consumers."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Check the connector log."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Enter into the external system and verify the result."}),"\n"]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>c});var o=s(96540);const i={},a=o.createContext(i);function t(n){const e=o.useContext(a);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),o.createElement(a.Provider,{value:e},n.children)}}}]);