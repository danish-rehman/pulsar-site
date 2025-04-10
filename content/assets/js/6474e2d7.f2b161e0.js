"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[14842],{24193:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"validate-release-candidate","title":"Validating release candidates","description":"This page contains manual instructions for reviewing and verifying a release candidate.","source":"@site/contribute/validate-release-candidate.md","sourceDirName":".","slug":"/validate-release-candidate","permalink":"/contribute/validate-release-candidate","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/contribute/validate-release-candidate.md","tags":[],"version":"current","lastUpdatedBy":"Lari Hotari","lastUpdatedAt":1744197606000,"frontMatter":{"id":"validate-release-candidate","title":"Validating release candidates"},"sidebar":"sidebarDevelopment","previous":{"title":"Cherry-picking","permalink":"/contribute/maintenance-process"},"next":{"title":"How to become a core developer","permalink":"/contribute/become-core-developer"}}');var t=s(74848),l=s(28453);const i={id:"validate-release-candidate",title:"Validating release candidates"},r=void 0,c={},o=[{value:"Validate the binary distribution",id:"validate-the-binary-distribution",level:2},{value:"Download And Verify the binary distributions",id:"download-and-verify-the-binary-distributions",level:3},{value:"Download And Verify the source tarball",id:"download-and-verify-the-source-tarball",level:3},{value:"Validate Pub/Sub and Java Functions",id:"validate-pubsub-and-java-functions",level:3},{value:"Standalone service",id:"standalone-service",level:4},{value:"Functions",id:"functions",level:4},{value:"Validate Connectors",id:"validate-connectors",level:3},{value:"Validate Stateful Functions",id:"validate-stateful-functions",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This page contains manual instructions for reviewing and verifying a release candidate."}),"\n",(0,t.jsx)(n.h2,{id:"validate-the-binary-distribution",children:"Validate the binary distribution"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Automated scripts are available in ",(0,t.jsx)(n.a,{href:"https://github.com/lhotari/pulsar-release-validation",children:"lhotari/pulsar-release-validation"})," to assist with semi-automated validation for the following steps. The validation script runs in a containerized environment and requires only Docker and Bash on Linux & macOS, or PowerShell 7.x on Windows."]})}),"\n",(0,t.jsx)(n.h3,{id:"download-and-verify-the-binary-distributions",children:"Download And Verify the binary distributions"}),"\n",(0,t.jsxs)(n.p,{children:["Download the server distribution ",(0,t.jsx)(n.code,{children:"apache-pulsar-<release>-bin.tar.gz"})," and extract it. The extracted files are in a directory called ",(0,t.jsx)(n.code,{children:"apache-pulsar-<release>"}),". All the operations below happen within that directory:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"cd apache-pulsar-<release>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Check the bookkeeper libs are complied on Linux:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"unzip -t ./lib/org.apache.bookkeeper-circe-checksum-*.jar | grep lib\nunzip -t ./lib/org.apache.bookkeeper-cpu-affinity-*.jar | grep lib\n"})}),"\n",(0,t.jsx)(n.p,{children:"The output should look like:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"testing: lib/                     OK\ntesting: lib/libcirce-checksum.so   OK\ntesting: lib/                     OK\ntesting: lib/libcpu-affinity.so   OK\n"})}),"\n",(0,t.jsx)(n.p,{children:"Download the Cassandra connector:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"mkdir connectors\nmv pulsar-io-cassandra-<release>.nar connectors\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Download the ",(0,t.jsx)(n.code,{children:"*.asc"})," file and verify the GPG signature:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gpg --verify apache-pulsar-<release>-bin.tar.gz.asc\n"})}),"\n",(0,t.jsx)(n.h3,{id:"download-and-verify-the-source-tarball",children:"Download And Verify the source tarball"}),"\n",(0,t.jsx)(n.p,{children:"Before you start to validate the source tarball, make sure you have installed these software:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Amazon Corretto OpenJDK","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["JDK 21 for Pulsar version >= 3.3","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"code will be compiled for Java 17 with Java 21"}),"\n",(0,t.jsx)(n.li,{children:"Pulsar docker images are running Java 21 since 3.3.0"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"JDK 17 for Pulsar version >= 2.11"}),"\n",(0,t.jsx)(n.li,{children:"JDK 11 for earlier versions"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Maven 3.9.9 (most recent stable Maven 3.9.x version)","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Install using ",(0,t.jsx)(n.code,{children:"sdkman i maven 3.9.9"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Zip"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Please refer to ",(0,t.jsx)(n.a,{href:"/contribute/setup-buildtools",children:'"Setting up JDKs and Maven using SDKMAN"'})," for details on how to install JDKs and Maven using SDKMAN."]}),"\n",(0,t.jsxs)(n.p,{children:["Download the source tarball and extract it. The extracted files are in a directory called ",(0,t.jsx)(n.code,{children:"apache-pulsar-<release>-src"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"cd apache-pulsar-<release>-src\nmvn clean install -DskipTests\n"})}),"\n",(0,t.jsx)(n.h3,{id:"validate-pubsub-and-java-functions",children:"Validate Pub/Sub and Java Functions"}),"\n",(0,t.jsx)(n.h4,{id:"standalone-service",children:"Standalone service"}),"\n",(0,t.jsx)(n.p,{children:"Open a terminal to start a standalone service:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"PULSAR_STANDALONE_USE_ZOOKEEPER=1 bin/pulsar standalone\n"})}),"\n",(0,t.jsx)(n.p,{children:"When you start a standalone cluster, there are a few things to check."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"The standalone cluster is able to locate all the connectors. The following logging information should be displayed."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"Found connector ConnectorDefinition(name=kinesis, description=Kinesis sink connector, sourceClass=null, sinkClass=org.apache.pulsar.io.kinesis.KinesisSink) from /Users/sijie/tmp/apache-pulsar-2.1.0-incubating/./connectors/pulsar-io-kinesis-2.1.0-incubating.nar\n...\nFound connector ConnectorDefinition(name=cassandra, description=Writes data into Cassandra, sourceClass=null, sinkClass=org.apache.pulsar.io.cassandra.CassandraStringSink) from /Users/sijie/tmp/apache-pulsar-2.1.0-incubating/./connectors/pulsar-io-cassandra-2.1.0-incubating.nar\n...\nFound connector ConnectorDefinition(name=aerospike, description=Aerospike database sink, sourceClass=null, sinkClass=org.apache.pulsar.io.aerospike.AerospikeStringSink) from /Users/sijie/tmp/apache-pulsar-2.1.0-incubating/./connectors/pulsar-io-aerospike-2.1.0-incubating.nar\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"(since Pulsar 2.1 release) The standalone starts bookkeeper table service. The output is similar as follows:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"12:12:26.099 [main] INFO  org.apache.pulsar.zookeeper.LocalBookkeeperEnsemble - 'default' namespace for table service : namespace_name: \"default\"\ndefault_stream_conf {\n  key_type: HASH\n  min_num_ranges: 24\n  initial_num_ranges: 24\n  split_policy {\n    fixed_range_policy {\n      num_ranges: 2\n    }\n  }\n  rolling_policy {\n    size_policy {\n      max_segment_size: 134217728\n    }\n  }\n  retention_policy {\n    time_policy {\n      retention_minutes: -1\n    }\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Functions worker is started correctly. The output is similar as follows:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'14:28:24.101 [main] INFO  org.apache.pulsar.functions.worker.WorkerService - Starting worker c-standalone-fw-localhost-8080...\n14:28:24.907 [main] INFO  org.apache.pulsar.functions.worker.WorkerService - Worker Configs: {\n  "workerId" : "c-standalone-fw-localhost-8080",\n  "workerHostname" : "localhost",\n  "workerPort" : 8080,\n  "workerPortTls" : 6751,\n  "jvmGCMetricsLoggerClassName" : null,\n  "numHttpServerThreads" : 8,\n  "connectorsDirectory" : "./connectors",\n  "functionMetadataTopicName" : "metadata",\n  "functionWebServiceUrl" : null,\n  "pulsarServiceUrl" : "pulsar://127.0.0.1:6650",\n  "pulsarWebServiceUrl" : "http://127.0.0.1:8080",\n  "clusterCoordinationTopicName" : "coordinate",\n  "pulsarFunctionsNamespace" : "public/functions",\n  "pulsarFunctionsCluster" : "standalone",\n  "numFunctionPackageReplicas" : 1,\n  "downloadDirectory" : "/tmp/pulsar_functions",\n  "stateStorageServiceUrl" : "bk://127.0.0.1:4181",\n  "functionAssignmentTopicName" : "assignments",\n  "schedulerClassName" : "org.apache.pulsar.functions.worker.scheduler.RoundRobinScheduler",\n  "failureCheckFreqMs" : 30000,\n  "rescheduleTimeoutMs" : 60000,\n  "initialBrokerReconnectMaxRetries" : 60,\n  "assignmentWriteMaxRetries" : 60,\n  "instanceLivenessCheckFreqMs" : 30000,\n  "clientAuthenticationPlugin" : null,\n  "clientAuthenticationParameters" : null,\n  "topicCompactionFrequencySec" : 1800,\n  "tlsEnabled" : true,\n  "tlsCertificateFilePath" : null,\n  "tlsKeyFilePath" : null,\n  "tlsTrustCertsFilePath" : null,\n  "tlsAllowInsecureConnection" : false,\n  "tlsRequireTrustedClientCertOnConnect" : false,\n  "useTls" : false,\n  "tlsHostnameVerificationEnable" : false,\n  "authenticationEnabled" : false,\n  "authenticationProviders" : null,\n  "authorizationEnabled" : false,\n  "superUserRoles" : null,\n  "properties" : { },\n  "threadContainerFactory" : null,\n  "processContainerFactory" : {\n    "javaInstanceJarLocation" : null,\n    "pythonInstanceLocation" : null,\n    "logDirectory" : null,\n    "extraFunctionDependenciesDir" : null\n  },\n  "kubernetesContainerFactory" : null,\n  "secretsProviderConfiguratorClassName" : null,\n  "secretsProviderConfiguratorConfig" : null,\n  "functionInstanceMinResources" : null,\n  "workerWebAddress" : "http://localhost:8080",\n  "functionMetadataTopic" : "persistent://public/functions/metadata",\n  "clusterCoordinationTopic" : "persistent://public/functions/coordinate",\n  "functionAssignmentTopic" : "persistent://public/functions/assignments"\n}\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Do sanity check before moving to the next step."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'# check pulsar binary port is listened correctly\nnetstat -an | grep 6650 | grep LISTEN\n\n# check function cluster\ncurl -s http://localhost:8080/admin/v2/worker/cluster\n# example output:\n# [{"workerId":"c-standalone-fw-localhost-6750","workerHostname":"localhost","port":6750}]\n\n# check brokers\ncurl -s http://localhost:8080/admin/v2/namespaces/public\n# example outoupt:\n# ["public/default","public/functions"]\n\n# check connectors\ncurl -s http://localhost:8080/admin/v2/functions/connectors\n# example output:\n# [{"name":"aerospike","description":"Aerospike database sink","sinkClass":"org.apache.pulsar.io.aerospike.AerospikeStringSink"},{"name":"cassandra","description":"Writes data into Cassandra","sinkClass":"org.apache.pulsar.io.cassandra.CassandraStringSink"},{"name":"kafka","description":"Kafka source and sink connector","sourceClass":"org.apache.pulsar.io.kafka.KafkaStringSource","sinkClass":"org.apache.pulsar.io.kafka.KafkaStringSink"},{"name":"kinesis","description":"Kinesis sink connector","sinkClass":"org.apache.pulsar.io.kinesis.KinesisSink"},{"name":"rabbitmq","description":"RabbitMQ source connector","sourceClass":"org.apache.pulsar.io.rabbitmq.RabbitMQSource"},{"name":"twitter","description":"Ingest data from Twitter firehose","sourceClass":"org.apache.pulsar.io.twitter.TwitterFireHose"}]\n\n# check table services (Skip this step on 2.11.x or later)\nnc -vz4 localhost 4181\n'})}),"\n",(0,t.jsx)(n.h4,{id:"functions",children:"Functions"}),"\n",(0,t.jsx)(n.p,{children:"Open another terminal to submit a Java Exclamation function."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Create tenant and namespace:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"bin/pulsar-admin tenants create test\nbin/pulsar-admin namespaces create test/test-namespace\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Create function."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"bin/pulsar-admin functions create --function-config-file examples/example-function-config.yaml --jar examples/api-examples.jar\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The following information is returned: ",(0,t.jsx)(n.code,{children:"Created Successfully"}),"."]}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"At the same terminal as step 2, retrieve the function configuration."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"bin/pulsar-admin functions get --tenant test --namespace test-namespace --name example\n"})}),"\n",(0,t.jsx)(n.p,{children:"The output is similar as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "tenant": "test",\n  "namespace": "test-namespace",\n  "name": "example",\n  "className": "org.apache.pulsar.functions.api.examples.ExclamationFunction",\n  "userConfig": "{\\"PublishTopic\\":\\"test_result\\"}",\n  "autoAck": true,\n  "parallelism": 1,\n  "source": {\n    "topicsToSerDeClassName": {\n      "test_src": ""\n    },\n    "typeClassName": "java.lang.String"\n  },\n  "sink": {\n    "topic": "test_result",\n    "typeClassName": "java.lang.String"\n  },\n  "resources": {}\n}\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"At the same terminal as step 3, retrieve the function status."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"bin/pulsar-admin functions status --tenant test --namespace test-namespace --name example\n"})}),"\n",(0,t.jsx)(n.p,{children:"The output is similar as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "numInstances" : 1,\n  "numRunning" : 1,\n  "instances" : [ {\n    "instanceId" : 0,\n    "status" : {\n      "running" : true,\n      "error" : "",\n      "numRestarts" : 0,\n      "numReceived" : 0,\n      "numSuccessfullyProcessed" : 0,\n      "numUserExceptions" : 0,\n      "latestUserExceptions" : [ ],\n      "numSystemExceptions" : 0,\n      "latestSystemExceptions" : [ ],\n      "averageLatency" : 0.0,\n      "lastInvocationTime" : 0,\n      "workerId" : "c-standalone-fw-localhost-8080"\n    }\n  } ]\n}\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:["At the same terminal as step 4, subscribe the output topic ",(0,t.jsx)(n.code,{children:"test_result"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"bin/pulsar-client consume -s test-sub -n 0 test_result\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsxs)(n.li,{children:["Open a new terminal to produce messages into the input topic ",(0,t.jsx)(n.code,{children:"test_src"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'bin/pulsar-client produce -m "test-messages-`date`" -n 10 test_src\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"7",children:["\n",(0,t.jsx)(n.li,{children:"At the terminal of step 5, the messages produced by the Exclamation function is returned. The output is similar as follows:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2018!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2018!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2018!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2018!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2018!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2018!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2018!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2018!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2018!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2018!\n"})}),"\n",(0,t.jsx)(n.h3,{id:"validate-connectors",children:"Validate Connectors"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Make sure you have docker available at your laptop. If you haven't installed docker, you can skip this section."})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Set up a cassandra cluster."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"docker run -d --rm  --name=cassandra -p 9042:9042 cassandra:3.11\n"})}),"\n",(0,t.jsx)(n.p,{children:"Make sure that the cassandra cluster is running."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# run docker ps to find the docker process for cassandra\ndocker ps\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# check if the cassandra is running as expected\ndocker logs cassandra\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# check the cluster status\ndocker exec cassandra nodetool status\n\n# Datacenter: datacenter1\n# =======================\n# Status=Up/Down\n# |/ State=Normal/Leaving/Joining/Moving\n# --  Address     Load       Tokens       Owns (effective)  Host ID                               Rack\n# UN  172.17.0.2  103.67 KiB  256          100.0%            af0e4b2f-84e0-4f0b-bb14-bd5f9070ff26  rack1\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Create keyspace and table."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Run ",(0,t.jsx)(n.code,{children:"cqlsh"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"docker exec -ti cassandra cqlsh localhost\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In the cqlsh, create the ",(0,t.jsx)(n.code,{children:"pulsar_test_keyspace"})," keyspace and the ",(0,t.jsx)(n.code,{children:"pulsar_test_table"})," table."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"cqlsh> CREATE KEYSPACE pulsar_test_keyspace WITH replication = {'class':'SimpleStrategy', 'replication_factor':1};\ncqlsh> USE pulsar_test_keyspace;\ncqlsh:pulsar_test_keyspace> CREATE TABLE pulsar_test_table (key text PRIMARY KEY, col text);\ncqlsh:pulsar_test_keyspace> exit\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Prepare a cassandra sink yaml file and put it under examples directory as ",(0,t.jsx)(n.code,{children:"cassandra-sink.yml"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"vim examples/cassandra-sink.yml\n"})}),"\n",(0,t.jsx)(n.p,{children:"The content should be:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'configs:\n    roots: "localhost:9042"\n    keyspace: "pulsar_test_keyspace"\n    columnFamily: "pulsar_test_table"\n    keyname: "key"\n    columnName: "col"\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Submit a cassandra sink."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'bin/pulsar-admin sink create --tenant public --namespace default --name cassandra-test-sink --sink-type cassandra --sink-config-file examples/cassandra-sink.yml --inputs test_cassandra\n# "Created successfully"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Get the sink info:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"bin/pulsar-admin sink get --tenant public --namespace default --name cassandra-test-sink\n"})}),"\n",(0,t.jsx)(n.p,{children:"The output is similar as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "tenant": "public",\n  "namespace": "default",\n  "name": "cassandra-test-sink",\n  "className": "org.apache.pulsar.io.cassandra.CassandraStringSink",\n  "inputSpecs": {\n    "test_cassandra": {\n      "isRegexPattern": false\n    }\n  },\n  "configs": {\n    "roots": "localhost:9042",\n    "keyspace": "pulsar_test_keyspace",\n    "columnFamily": "pulsar_test_table",\n    "keyname": "key",\n    "columnName": "col"\n  },\n  "parallelism": 1,\n  "processingGuarantees": "ATLEAST_ONCE",\n  "retainOrdering": false,\n  "autoAck": true,\n  "archive": "builtin://cassandra"\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Get the running status:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"bin/pulsar-admin sink status --tenant public --namespace default --name cassandra-test-sink\n"})}),"\n",(0,t.jsx)(n.p,{children:"The output is similar as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "numInstances" : 1,\n  "numRunning" : 1,\n  "instances" : [ {\n    "instanceId" : 0,\n    "status" : {\n      "running" : true,\n      "error" : "",\n      "numRestarts" : 0,\n      "numReadFromPulsar" : 0,\n      "numSystemExceptions" : 0,\n      "latestSystemExceptions" : [ ],\n      "numSinkExceptions" : 0,\n      "latestSinkExceptions" : [ ],\n      "numWrittenToSink" : 0,\n      "lastReceivedTime" : 0,\n      "workerId" : "c-standalone-fw-localhost-8080"\n    }\n  } ]\n}\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"Produce messages to the source topic."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'for i in {0..10}; do bin/pulsar-client produce -m "key-$i" -n 1 test_cassandra; done\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsx)(n.li,{children:"Check the sink status, and 11 messages are processed."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"bin/pulsar-admin sink status --tenant public --namespace default --name cassandra-test-sink\n"})}),"\n",(0,t.jsx)(n.p,{children:"The output is similar as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "numInstances" : 1,\n  "numRunning" : 1,\n  "instances" : [ {\n    "instanceId" : 0,\n    "status" : {\n      "running" : true,\n      "error" : "",\n      "numRestarts" : 0,\n      "numReadFromPulsar" : 11,\n      "numSystemExceptions" : 0,\n      "latestSystemExceptions" : [ ],\n      "numSinkExceptions" : 0,\n      "latestSinkExceptions" : [ ],\n      "numWrittenToSink" : 11,\n      "lastReceivedTime" : 1554833501277,\n      "workerId" : "c-standalone-fw-localhost-8080"\n    }\n  } ]\n}\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"7",children:["\n",(0,t.jsx)(n.li,{children:"Check results in cassandra."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"docker exec -ti cassandra cqlsh localhost\n"})}),"\n",(0,t.jsx)(n.p,{children:"In the cqlsh session:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"cqlsh> use pulsar_test_keyspace;\ncqlsh:pulsar_test_keyspace> select * from pulsar_test_table;\n\n key    | col\n--------+--------\n  key-5 |  key-5\n  key-0 |  key-0\n  key-9 |  key-9\n  key-2 |  key-2\n  key-1 |  key-1\n  key-3 |  key-3\n  key-6 |  key-6\n  key-7 |  key-7\n  key-4 |  key-4\n  key-8 |  key-8\n key-10 | key-10\n\n(11 rows)\ncqlsh:pulsar_test_keyspace> exit\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"8",children:["\n",(0,t.jsx)(n.li,{children:"Delete the sink."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'bin/pulsar-admin sink delete --tenant public --namespace default --name cassandra-test-sink\n# "Deleted successfully"\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"9",children:["\n",(0,t.jsx)(n.li,{children:"Stop the Cassandra container"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"docker stop cassandra\n"})}),"\n",(0,t.jsx)(n.h3,{id:"validate-stateful-functions",children:"Validate Stateful Functions"}),"\n",(0,t.jsx)(n.p,{children:"Since Pulsar 2.1 release, Pulsar enables bookkeeper table service for stateful Pulsar functions (as a developer preview)."}),"\n",(0,t.jsx)(n.p,{children:"The following are instructions to validate counter functions."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Create a wordcount function."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'bin/pulsar-admin functions create --function-config-file examples/example-function-config.yaml --jar examples/api-examples.jar --name word_count --className org.apache.pulsar.functions.api.examples.WordCountFunction --inputs test_wordcount_src --output test_wordcount_dest\n# "Created successfully"\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Get function information and status."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"bin/pulsar-admin functions get --tenant test --namespace test-namespace --name word_count\n"})}),"\n",(0,t.jsx)(n.p,{children:"The output is similar as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "tenant": "test",\n  "namespace": "test-namespace",\n  "name": "word_count",\n  "className": "org.apache.pulsar.functions.api.examples.WordCountFunction",\n  "inputSpecs": {\n    "test_wordcount_src": {\n      "isRegexPattern": false\n    }\n  },\n  "output": "test_wordcount_dest",\n  "processingGuarantees": "ATLEAST_ONCE",\n  "retainOrdering": false,\n  "userConfig": {\n    "PublishTopic": "test_result"\n  },\n  "runtime": "JAVA",\n  "autoAck": true,\n  "parallelism": 1,\n  "resources": {\n    "cpu": 1.0,\n    "ram": 1073741824,\n    "disk": 10737418240\n  },\n  "cleanupSubscription": true\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"bin/pulsar-admin functions status --tenant test --namespace test-namespace --name word_count\n"})}),"\n",(0,t.jsx)(n.p,{children:"The output is similar as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "numInstances" : 1,\n  "numRunning" : 1,\n  "instances" : [ {\n    "instanceId" : 0,\n    "status" : {\n      "running" : true,\n      "error" : "",\n      "numRestarts" : 0,\n      "numReceived" : 0,\n      "numSuccessfullyProcessed" : 0,\n      "numUserExceptions" : 0,\n      "latestUserExceptions" : [ ],\n      "numSystemExceptions" : 0,\n      "latestSystemExceptions" : [ ],\n      "averageLatency" : 0.0,\n      "lastInvocationTime" : 0,\n      "workerId" : "c-standalone-fw-localhost-8080"\n    }\n  } ]\n}\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:'Query the state table for the function: watching on a key called "hello"'}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"bin/pulsar-admin functions querystate --tenant test --namespace test-namespace --name word_count -k hello -w\n# key 'hello' doesn't exist.\n# key 'hello' doesn't exist.\n# key 'hello' doesn't exist\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["Produce the messages to source topic ",(0,t.jsx)(n.code,{children:"test_wordcount_src"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:['Produce 10 messages "hello" to the ',(0,t.jsx)(n.code,{children:"test_wordcount_src"}),' topic. The value of "hello" is updated to 10.']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'bin/pulsar-client produce -m "hello" -n 10 test_wordcount_src\n'})}),"\n",(0,t.jsx)(n.p,{children:"Checkout the result in the terminal of step 3."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "key": "hello",\n  "numberValue": 10,\n  "version": 9\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:'Produce another 10 messages "hello". The result is updated to 20.'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'bin/pulsar-client produce -m "hello" -n 10 test_wordcount_src\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The result in the terminal of step 3 is updated to ",(0,t.jsx)(n.code,{children:"20"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'  "key": "hello",\n  "numberValue": 20,\n  "version": 19\n'})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>r});var a=s(96540);const t={},l=a.createContext(t);function i(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);