"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[14056],{47970:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"admin-api-transactions","title":"Manage transactions","description":"Learn how to manage transactions using Pulsar CLI and admin APIs.","source":"@site/versioned_docs/version-4.0.x/admin-api-transactions.md","sourceDirName":".","slug":"/admin-api-transactions","permalink":"/docs/4.0.x/admin-api-transactions","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-4.0.x/admin-api-transactions.md","tags":[],"version":"4.0.x","frontMatter":{"id":"admin-api-transactions","title":"Manage transactions","sidebar_label":"Transactions","description":"Learn how to manage transactions using Pulsar CLI and admin APIs."},"sidebar":"docsSidebar","previous":{"title":"Topics","permalink":"/docs/4.0.x/admin-api-topics"},"next":{"title":"Tools","permalink":"/docs/4.0.x/admin-api-tools"}}');var s=a(74848),i=a(28453),r=a(11470),o=a(19365);const l={id:"admin-api-transactions",title:"Manage transactions",sidebar_label:"Transactions",description:"Learn how to manage transactions using Pulsar CLI and admin APIs."},c=void 0,d={},u=[{value:"Transaction resources",id:"transaction-resources",level:2},{value:"GetSlowTransactions",id:"getslowtransactions",level:3},{value:"ScaleTransactionCoordinators",id:"scaletransactioncoordinators",level:3},{value:"Transaction stats",id:"transaction-stats",level:2},{value:"Get transaction metadata",id:"get-transaction-metadata",level:3},{value:"Get transaction stats in transaction pending ack",id:"get-transaction-stats-in-transaction-pending-ack",level:3},{value:"Get transaction stats in transaction buffer",id:"get-transaction-stats-in-transaction-buffer",level:3},{value:"Transaction coordinator stats",id:"transaction-coordinator-stats",level:2},{value:"Get coordinator stats",id:"get-coordinator-stats",level:3},{value:"Get coordinator internal stats",id:"get-coordinator-internal-stats",level:3},{value:"Transaction pending ack stats",id:"transaction-pending-ack-stats",level:2},{value:"Get transaction pending ack stats",id:"get-transaction-pending-ack-stats",level:3},{value:"Get transaction pending ack internal stats",id:"get-transaction-pending-ack-internal-stats",level:3},{value:"Get position stats in pending ack",id:"get-position-stats-in-pending-ack",level:3},{value:"Transaction buffer stats",id:"transaction-buffer-stats",level:2},{value:"Get transaction buffer stats",id:"get-transaction-buffer-stats",level:3}];function h(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.admonition,{type:"tip",children:[(0,s.jsxs)(e.p,{children:["This page only shows ",(0,s.jsx)(e.strong,{children:"some frequently used operations"}),"."]}),(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["For the latest and complete information about ",(0,s.jsx)(e.code,{children:"Pulsar admin"}),", including commands, flags, descriptions, and more, see ",(0,s.jsx)(e.a,{href:"pathname:///reference/#/4.0.x/pulsar-admin/",children:"Pulsar admin docs"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["For the latest and complete information about ",(0,s.jsx)(e.code,{children:"REST API"}),", including parameters, responses, samples, and more, see ",(0,s.jsx)(e.a,{href:"https://pulsar.apache.org/admin-rest-api#/",children:"REST"})," API doc."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["For the latest and complete information about ",(0,s.jsx)(e.code,{children:"Java admin API"}),", including classes, methods, descriptions, and more, see ",(0,s.jsx)(e.a,{href:"https://pulsar.apache.org/api/admin/4.0.x/",children:"Java admin API doc"}),"."]}),"\n"]}),"\n"]})]}),"\n",(0,s.jsx)(e.h2,{id:"transaction-resources",children:"Transaction resources"}),"\n",(0,s.jsx)(e.h3,{id:"getslowtransactions",children:"GetSlowTransactions"}),"\n",(0,s.jsx)(e.p,{children:"In the production environment, there may be some long-lasting transactions that have never been completed. You can get these slow transactions that have survived over a certain time under a coordinator or all coordinators in the following ways."}),"\n",(0,s.jsxs)(r.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,s.jsx)(o.A,{value:"pulsar-admin",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"pulsar-admin transactions slow-transactions -c 1 -t 1s\n"})})}),(0,s.jsx)(o.A,{value:"REST API",children:(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://pulsar.apache.org/transactions-rest-api?version=4.0.2&apiVersion=v3#operation/Transactions_getSlowTransactions",children:"GET /admin/v3/transactions/slowTransactions/{timeout}"})})}),(0,s.jsx)(o.A,{value:"Java",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"admin.transactions().getSlowTransactionsByCoordinatorId(coordinatorId, timeout, timeUnit)\n//Or get slow transactions from all coordinators\nadmin.transactions().getSlowTransactions(timeout, timeUnit)\n"})})})]}),"\n",(0,s.jsx)(e.p,{children:"The following is an example of the returned values."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "(0,3)": {\n    "txnId": "(0,3)",\n    "status": "OPEN",\n    "openTimestamp": 1658120122474,\n    "timeoutAt": 300000,\n    "producedPartitions": {},\n    "ackedPartitions": {}\n  },\n  "(0,2)": {\n    "txnId": "(0,2)",\n    "status": "OPEN",\n    "openTimestamp": 1658120122471,\n    "timeoutAt": 300000,\n    "producedPartitions": {},\n    "ackedPartitions": {}\n  },\n  "(0,5)": {\n    "txnId": "(0,5)",\n    "status": "OPEN",\n    "openTimestamp": 1658120122478,\n    "timeoutAt": 300000,\n    "producedPartitions": {},\n    "ackedPartitions": {}\n  },\n  "(0,4)": {\n    "txnId": "(0,4)",\n    "status": "OPEN",\n    "openTimestamp": 1658120122476,\n    "timeoutAt": 300000,\n    "producedPartitions": {},\n    "ackedPartitions": {}\n  },\n  "(0,7)": {\n    "txnId": "(0,7)",\n    "status": "OPEN",\n    "openTimestamp": 1658120122482,\n    "timeoutAt": 300000,\n    "producedPartitions": {},\n    "ackedPartitions": {}\n  },\n  "(0,10)": {\n    "txnId": "(0,10)",\n    "status": "OPEN",\n    "openTimestamp": 1658120122488,\n    "timeoutAt": 300000,\n    "producedPartitions": {},\n    "ackedPartitions": {}\n  },\n  "(0,6)": {\n    "txnId": "(0,6)",\n    "status": "OPEN",\n    "openTimestamp": 1658120122480,\n    "timeoutAt": 300000,\n    "producedPartitions": {},\n    "ackedPartitions": {}\n  },\n  "(0,9)": {\n    "txnId": "(0,9)",\n    "status": "OPEN",\n    "openTimestamp": 1658120122486,\n    "timeoutAt": 300000,\n    "producedPartitions": {},\n    "ackedPartitions": {}\n  },\n  "(0,8)": {\n    "txnId": "(0,8)",\n    "status": "OPEN",\n    "openTimestamp": 1658120122484,\n    "timeoutAt": 300000,\n    "producedPartitions": {},\n    "ackedPartitions": {}\n  },\n  "(0,11)": {\n    "txnId": "(0,11)",\n    "status": "OPEN",\n    "openTimestamp": 1658120122490,\n    "timeoutAt": 300000,\n    "producedPartitions": {},\n    "ackedPartitions": {}\n  }\n}\n'})}),"\n",(0,s.jsx)(e.h3,{id:"scaletransactioncoordinators",children:"ScaleTransactionCoordinators"}),"\n",(0,s.jsx)(e.p,{children:"When the performance of transactions reaches a bottleneck due to the insufficient number of transaction coordinators, you can scale the number of the transaction coordinators in the following ways."}),"\n",(0,s.jsxs)(r.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,s.jsx)(o.A,{value:"pulsar-admin",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"pulsar-admin transactions scale-transactionCoordinators -r 17\n"})})}),(0,s.jsx)(o.A,{value:"REST API",children:(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://pulsar.apache.org/transactions-rest-api?version=4.0.2&apiVersion=v3#operation/Transactions_scaleTransactionCoordinators",children:"POST /admin/v3/transactions/transactionCoordinator/replicas"})})}),(0,s.jsx)(o.A,{value:"Java",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"admin.transactions().scaleTransactionCoordinators(replicas);\n"})})})]}),"\n",(0,s.jsx)(e.h2,{id:"transaction-stats",children:"Transaction stats"}),"\n",(0,s.jsx)(e.h3,{id:"get-transaction-metadata",children:"Get transaction metadata"}),"\n",(0,s.jsx)(e.p,{children:"The transaction metadata that can be retrieved include:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"txnId:"})," The ID of this transaction."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"status:"})," The status of this transaction."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"openTimestamp:"})," The open time of this transaction."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"timeoutAt:"})," The timeout of this transaction."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"producedPartitions:"})," The partitions or topics that messages have been sent to with this transaction."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"ackedPartitions:"})," The partitions or topics where messages have been acknowledged with this transaction."]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Use one of the following ways to get your transaction metadata."}),"\n",(0,s.jsxs)(r.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,s.jsx)(o.A,{value:"pulsar-admin",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"pulsar-admin transactions transaction-metadata -m 1 -l 1\n"})})}),(0,s.jsx)(o.A,{value:"REST API",children:(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://pulsar.apache.org/transactions-rest-api?version=4.0.2&apiVersion=v3#operation/Transactions_getTransactionMetadata",children:"GET /admin/v3/transactions/transactionMetadata/{mostSigBits}/{leastSigBits}"})})}),(0,s.jsx)(o.A,{value:"Java",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"admin.transactions().getTransactionMetadata(txnID);\n"})})})]}),"\n",(0,s.jsx)(e.p,{children:"The following is an example of the returned values."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n "txnId" : "(1,18)",\n "status" : "ABORTING",\n "openTimestamp" : 1656592983374,\n "timeoutAt" : 5000,\n "producedPartitions" : {\n   "my-topic" : {\n     "startPosition" : "127:4959",\n     "aborted" : true\n   }\n },\n "ackedPartitions" : {\n   "my-topic" : {\n     "mysubName" : {\n       "cumulativeAckPosition" : null\n     }\n   }\n }\n}\n'})}),"\n",(0,s.jsx)(e.h3,{id:"get-transaction-stats-in-transaction-pending-ack",children:"Get transaction stats in transaction pending ack"}),"\n",(0,s.jsx)(e.p,{children:"The transaction stats in transaction pending ack that can be retrieved include:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"cumulativeAckPosition:"})," The position that this transaction cumulatively acknowledges in this subscription."]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Use one of the following ways to get transaction stats in pending ack:"}),"\n",(0,s.jsxs)(r.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,s.jsx)(o.A,{value:"pulsar-admin",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"pulsar-admin transactions transaction-in-pending-ack-stats -m 1 -l 1 -t my-topic -s mysubname\n"})})}),(0,s.jsx)(o.A,{value:"REST API",children:(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://pulsar.apache.org/transactions-rest-api?version=4.0.2&apiVersion=v3#operation/Transactions_getTransactionInPendingAckStats",children:"GET /admin/v3/transactions/transactionInPendingAckStats/{tenant}/{namespace}/{topic}/{subName}/{mostSigBits}/{leastSigBits}"})})}),(0,s.jsx)(o.A,{value:"Java",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"admin.transactions().getTransactionInPendingAckStats(txnID, topic, subname);\n"})})})]}),"\n",(0,s.jsx)(e.p,{children:"The following is an example of the returned value."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n "cumulativeAckPosition" : "137:49959"\n }\n'})}),"\n",(0,s.jsx)(e.h3,{id:"get-transaction-stats-in-transaction-buffer",children:"Get transaction stats in transaction buffer"}),"\n",(0,s.jsx)(e.p,{children:"The transaction stats in the transaction buffer that can be retrieved include:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"startPosition:"})," The start position of this transaction in the transaction buffer."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"aborted:"})," The flag of whether this transaction has been aborted."]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Use one of the following ways to get transaction stats in transaction buffer:"}),"\n",(0,s.jsxs)(r.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,s.jsx)(o.A,{value:"pulsar-admin",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"pulsar-admin transactions transaction-in-buffer-stats -m 1 -l 1 -t my-topic\n"})})}),(0,s.jsx)(o.A,{value:"REST API",children:(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://pulsar.apache.org/transactions-rest-api?version=4.0.2&apiVersion=v3#operation/Transactions_getTransactionInBufferStats",children:"GET /admin/v3/transactions/transactionInBufferStats/{tenant}/{namespace}/{topic}/{mostSigBits}/{leastSigBits}"})})}),(0,s.jsx)(o.A,{value:"Java",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"admin.transactions().getTransactionInBufferStatsAsync(txnID, topic);\n"})})})]}),"\n",(0,s.jsx)(e.p,{children:"The following is an example of the returned values."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n "startPosition" : "137:49759",\n "aborted" : false\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"transaction-coordinator-stats",children:"Transaction coordinator stats"}),"\n",(0,s.jsx)(e.p,{children:"The transaction coordinator (TC) is a module inside a Pulsar broker. It maintains the entire life cycle of transactions and handles transaction timeout."}),"\n",(0,s.jsx)(e.h3,{id:"get-coordinator-stats",children:"Get coordinator stats"}),"\n",(0,s.jsx)(e.p,{children:"The transaction coordinator stats that can be retrieved include:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"state:"}),"  The state of this transaction coordinator."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsxs)(e.strong,{children:["leastSigBit",":s"]})," The sequence ID of this transaction coordinator."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"lowWaterMark:"})," The low watermark of this transaction coordinator."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"ongoingTxnSize:"})," The total number of ongoing transactions in this transaction coordinator."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"recoverStartTime:"})," The start timestamp of transaction coordinator recovery. ",(0,s.jsx)(e.code,{children:"0L"})," means no startup."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"recoverEndTime:"})," The end timestamp of transaction coordinator recovery. ",(0,s.jsx)(e.code,{children:"0L"})," means no startup."]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Use one of the following ways to get transaction coordinator stats:"}),"\n",(0,s.jsxs)(r.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,s.jsx)(o.A,{value:"pulsar-admin",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"pulsar-admin transactions coordinator-stats -c 1\n"})})}),(0,s.jsx)(o.A,{value:"REST API",children:(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://pulsar.apache.org/transactions-rest-api?version=4.0.2&apiVersion=v3#operation/Transactions_getCoordinatorStats",children:"GET /admin/v3/transactions/coordinatorStats"})})}),(0,s.jsx)(o.A,{value:"Java",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"admin.transactions().getCoordinatorStatsById(coordinatorId);\n//Or get all coordinator stats.\nadmin.transactions().getCoordinatorStats();\n"})})})]}),"\n",(0,s.jsx)(e.p,{children:"The following is an example of the returned values."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "state" : "Ready",\n  "leastSigBits" : 1,\n  "lowWaterMark" : 0,\n  "ongoingTxnSize" : 0,\n  "recoverStartTime" : 1657021892377,\n  "recoverEndTime" : 1657021892378\n}\n'})}),"\n",(0,s.jsx)(e.h3,{id:"get-coordinator-internal-stats",children:"Get coordinator internal stats"}),"\n",(0,s.jsx)(e.p,{children:"The coordinator's internal stats that can be retrieved include:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"transactionLogStats:"})," The stats of the transaction coordinator log."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"managedLedgerName:"})," The name of the managed ledger where the transaction coordinator log is stored."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"managedLedgerInternalStats:"})," The internal stats of the managed ledger where the transaction coordinator log is stored. See ",(0,s.jsx)(e.code,{children:"[managedLedgerInternalStats](admin-api-topics.md#get-internal-stats)"})," for more details."]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Use one of the following ways to get coordinator's internal stats:"}),"\n",(0,s.jsxs)(r.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,s.jsx)(o.A,{value:"pulsar-admin",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"pulsar-admin transactions coordinator-internal-stats -c 1 -m\n"})})}),(0,s.jsx)(o.A,{value:"REST API",children:(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://pulsar.apache.org/transactions-rest-api?version=4.0.2&apiVersion=v3#operation/Transactions_getCoordinatorInternalStats",children:"GET /admin/v3/transactions/coordinatorInternalStats/{coordinatorId}"})})}),(0,s.jsx)(o.A,{value:"Java",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"admin.transactions().getCoordinatorInternalStats(coordinatorId, metadata);\n"})})})]}),"\n",(0,s.jsx)(e.p,{children:"The following is an example of the returned values."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n "transactionLogStats" : {\n   "managedLedgerName" : "pulsar/system/persistent/__transaction_log_1",\n   "managedLedgerInternalStats" : {\n     "entriesAddedCounter" : 3,\n     "numberOfEntries" : 3,\n     "totalSize" : 63,\n     "currentLedgerEntries" : 3,\n     "currentLedgerSize" : 63,\n     "lastLedgerCreatedTimestamp" : "2022-06-30T18:18:05.88+08:00",\n     "waitingCursorsCount" : 0,\n     "pendingAddEntriesCount" : 0,\n     "lastConfirmedEntry" : "13:2",\n     "state" : "LedgerOpened",\n     "ledgers" : [ {\n       "ledgerId" : 13,\n       "entries" : 0,\n       "size" : 0,\n       "offloaded" : false,\n       "metadata" : "LedgerMetadata{formatVersion=3, ensembleSize=1, writeQuorumSize=1, ackQuorumSize=1, state=CLOSED, length=63, lastEntryId=2, digestType=CRC32C, password=OMITTED, ensembles={0=[10.20.240.119:3181]}, customMetadata={component=base64:bWFuYWdlZC1sZWRnZXI=, pulsar/managed-ledger=base64:cHVsc2FyL3N5c3RlbS9wZXJzaXN0ZW50L19fdHJhbnNhY3Rpb25fbG9nXzE=, application=base64:cHVsc2Fy}}",\n       "underReplicated" : false\n     } ],\n     "cursors" : {\n       "transaction.subscription" : {\n         "markDeletePosition" : "13:2",\n         "readPosition" : "13:3",\n         "waitingReadOp" : false,\n         "pendingReadOps" : 0,\n         "messagesConsumedCounter" : 3,\n         "cursorLedger" : 22,\n         "cursorLedgerLastEntry" : 1,\n         "individuallyDeletedMessages" : "[]",\n         "lastLedgerSwitchTimestamp" : "2022-06-30T18:18:05.932+08:00",\n         "state" : "Open",\n         "numberOfEntriesSinceFirstNotAckedMessage" : 1,\n         "totalNonContiguousDeletedMessagesRange" : 0,\n         "subscriptionHavePendingRead" : false,\n         "subscriptionHavePendingReplayRead" : false,\n         "properties" : { }\n       }\n     }\n   }\n }\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"transaction-pending-ack-stats",children:"Transaction pending ack stats"}),"\n",(0,s.jsx)(e.p,{children:"Pending ack maintains message acknowledgments within a transaction before a transaction completes. If a message is in the pending acknowledge state, the message cannot be acknowledged by other transactions until the message is removed from the pending acknowledge state."}),"\n",(0,s.jsx)(e.h3,{id:"get-transaction-pending-ack-stats",children:"Get transaction pending ack stats"}),"\n",(0,s.jsx)(e.p,{children:"The transaction pending ack state stats that can be retrieved include:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"state:"})," The state of this transaction coordinator."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"lowWaterMark:"})," The low watermark of this transaction coordinator."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"ongoingTxnSize:"})," The total number of ongoing transactions in this transaction coordinator."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"recoverStartTime:"})," The start timestamp of transaction pendingAck recovery. ",(0,s.jsx)(e.code,{children:"0L"})," means no startup."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"recoverEndTime:"})," The end timestamp of transaction pendingAck recovery. ",(0,s.jsx)(e.code,{children:"0L"})," means no startup."]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Use one of the following ways to get transaction pending ack stats:"}),"\n",(0,s.jsxs)(r.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,s.jsx)(o.A,{value:"pulsar-admin",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"pulsar-admin.transactions()s pending-ack-stats -t my-topic -s mysubName -l\n"})})}),(0,s.jsx)(o.A,{value:"REST API",children:(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://pulsar.apache.org/transactions-rest-api?version=4.0.2&apiVersion=v3#operation/Transactions_getPendingAckStats",children:"GET /admin/v3/transactions/pendingAckStats/{tenant}/{namespace}/{topic}/{subName}"})})}),(0,s.jsx)(o.A,{value:"Java",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"admin.transactions().getPendingAckStats(topic, subName, lowWaterMarks)\n"})})})]}),"\n",(0,s.jsx)(e.p,{children:"The following is an example of the returned values."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "state" : "Ready",\n  "lowWaterMarks" : {\n    "1" : 0\n  },\n  "ongoingTxnSize" : 1,\n  "recoverStartTime" : 1657021899202,\n  "recoverEndTime" : 1657021899203\n}\n'})}),"\n",(0,s.jsx)(e.h3,{id:"get-transaction-pending-ack-internal-stats",children:"Get transaction pending ack internal stats"}),"\n",(0,s.jsx)(e.p,{children:"The transaction pending ack internal stats that can be retrieved include:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"transactionLogStats:"})," The stats of the transaction pending ack log."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"managedLedgerName:"})," The name of the managed ledger where the transaction pending ack log is stored."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"managedLedgerInternalStats:"})," The internal stats of the managed ledger where the transaction coordinator log is stored. See ",(0,s.jsx)(e.code,{children:"[managedLedgerInternalStats](admin-api-topics.md#get-internal-stats)"})," for more details."]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Use one of the following ways to get transaction pending ack internal stats:"}),"\n",(0,s.jsxs)(r.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,s.jsx)(o.A,{value:"pulsar-admin",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"pulsar-admin transactions pending-ack-internal-stats -t my-topic -s mysubName -m\n"})})}),(0,s.jsx)(o.A,{value:"REST API",children:(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://pulsar.apache.org/transactions-rest-api?version=4.0.2&apiVersion=v3#operation/Transactions_getPendingAckInternalStats",children:"GET /admin/v3/transactions/pendingAckInternalStats/{tenant}/{namespace}/{topic}/{subName}"})})}),(0,s.jsx)(o.A,{value:"Java",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"admin.transactions().getPendingAckInternalStats(topic, subName, boolean metadata);\n"})})})]}),"\n",(0,s.jsx)(e.p,{children:"The following is an example of the returned values."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n "pendingAckLogStats" : {\n   "managedLedgerName" : "public/default/persistent/my-topic-mysubName__transaction_pending_ack",\n   "managedLedgerInternalStats" : {\n     "entriesAddedCounter" : 2247,\n     "numberOfEntries" : 2247,\n     "totalSize" : 37212,\n     "currentLedgerEntries" : 104,\n     "currentLedgerSize" : 1732,\n     "lastLedgerCreatedTimestamp" : "2022-06-30T19:02:09.746+08:00",\n     "waitingCursorsCount" : 0,\n     "pendingAddEntriesCount" : 52,\n     "lastConfirmedEntry" : "64:51",\n     "state" : "LedgerOpened",\n     "ledgers" : [ {\n       "ledgerId" : 56,\n       "entries" : 2195,\n       "size" : 36346,\n       "offloaded" : false,\n       "metadata" : "LedgerMetadata{formatVersion=3, ensembleSize=1, writeQuorumSize=1, ackQuorumSize=1, state=CLOSED, length=36346, lastEntryId=2194, digestType=CRC32C, password=OMITTED, ensembles={0=[10.20.240.119:3181]}, customMetadata={component=base64:bWFuYWdlZC1sZWRnZXI=, pulsar/managed-ledger=base64:cHVibGljL2RlZmF1bHQvcGVyc2lzdGVudC9teS10b3BpYy1teXN1Yk5hbWVfX3RyYW5zYWN0aW9uX3BlbmRpbmdfYWNr, application=base64:cHVsc2Fy}}",\n       "underReplicated" : false\n     }, {\n       "ledgerId" : 64,\n       "entries" : 0,\n       "size" : 0,\n       "offloaded" : false,\n       "metadata" : "LedgerMetadata{formatVersion=3, ensembleSize=1, writeQuorumSize=1, ackQuorumSize=1, state=CLOSED, length=866, lastEntryId=51, digestType=CRC32C, password=OMITTED, ensembles={0=[10.20.240.119:3181]}, customMetadata={component=base64:bWFuYWdlZC1sZWRnZXI=, pulsar/managed-ledger=base64:cHVibGljL2RlZmF1bHQvcGVyc2lzdGVudC9teS10b3BpYy1teXN1Yk5hbWVfX3RyYW5zYWN0aW9uX3BlbmRpbmdfYWNr, application=base64:cHVsc2Fy}}",\n       "underReplicated" : false\n     } ],\n     "cursors" : {\n       "__pending_ack_state" : {\n         "markDeletePosition" : "56:-1",\n         "readPosition" : "56:0",\n         "waitingReadOp" : false,\n         "pendingReadOps" : 0,\n         "messagesConsumedCounter" : 0,\n         "cursorLedger" : 57,\n         "cursorLedgerLastEntry" : 0,\n         "individuallyDeletedMessages" : "[]",\n         "lastLedgerSwitchTimestamp" : "2022-06-30T18:55:26.842+08:00",\n         "state" : "Open",\n         "numberOfEntriesSinceFirstNotAckedMessage" : 1,\n         "totalNonContiguousDeletedMessagesRange" : 0,\n         "subscriptionHavePendingRead" : false,\n         "subscriptionHavePendingReplayRead" : false,\n         "properties" : { }\n       }\n     }\n   }\n }\n}\n'})}),"\n",(0,s.jsx)(e.h3,{id:"get-position-stats-in-pending-ack",children:"Get position stats in pending ack"}),"\n",(0,s.jsx)(e.p,{children:"The position stats in pending ack include:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"PendingAck"})," The position is in pending ack stats."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"MarkDelete"})," The position is already acknowledged."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"NotInPendingAck"})," The position is not acknowledged within a transaction."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"PendingAckNotReady"})," The pending ack has not been initialized."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"InvalidPosition"})," The position is invalid, for example, batch index > batch size."]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"If you want to know whether the position has been acknowledged, you can use one of the following ways to get position stats pending ack:"}),"\n",(0,s.jsxs)(r.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,s.jsx)(o.A,{value:"pulsar-admin",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"pulsar-admin transactions position-stats-in-pending-ack -t my-topic -s mysubName -l 15 -e 6\n"})})}),(0,s.jsx)(o.A,{value:"REST API",children:(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://pulsar.apache.org/transactions-rest-api?version=4.0.2&apiVersion=v3#operation/Transactions_getPositionStatsInPendingAck",children:"GET /admin/v3/transactions/positionStatsInPendingAck/{tenant}/{namespace}/{topic}/{subName}/{ledgerId}/{entryId}"})})}),(0,s.jsx)(o.A,{value:"Java",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"admin.transactions().getPositionStatsInPendingAckAsync(topic, subName, ledgerId, entryId, lowWaterMarks);\n"})})})]}),"\n",(0,s.jsx)(e.p,{children:"The following is an example of the returned values."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "State" : "MarkDelete"\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"transaction-buffer-stats",children:"Transaction buffer stats"}),"\n",(0,s.jsx)(e.p,{children:"Transaction buffer handles messages produced to a topic partition within a transaction.\nThe messages in the transaction buffer are not visible to consumers until the transactions are committed. The messages in the transaction buffer are discarded when the transactions are aborted."}),"\n",(0,s.jsx)(e.h3,{id:"get-transaction-buffer-stats",children:"Get transaction buffer stats"}),"\n",(0,s.jsx)(e.p,{children:"The transaction buffer stats that can be retrieved include:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"state:"})," The state of this transaction buffer."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"maxReadPosition:"})," The maximum read position of this transaction buffer."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"lastSnapshotTimestamps:"})," The last snapshot timestamp of this transaction buffer."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"lowWaterMarks (Optional):"})," The low watermark details of the transaction buffer."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"ongoingTxnSize:"})," The total number of ongoing transactions in this transaction buffer."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"recoverStartTime:"})," The start timestamp of transaction buffer recovery. ",(0,s.jsx)(e.code,{children:"0L"})," means no startup."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"recoverEndTime:"})," The end timestamp of transaction buffer recovery. ",(0,s.jsx)(e.code,{children:"0L"})," means no startup."]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Use one of the following ways to get transaction buffer stats:"}),"\n",(0,s.jsxs)(r.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,s.jsx)(o.A,{value:"pulsar-admin",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"pulsar-admin transactions transaction-buffer-stats -t my-topic -l\n"})})}),(0,s.jsx)(o.A,{value:"REST API",children:(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://pulsar.apache.org/transactions-rest-api?version=4.0.2&apiVersion=v3#operation/Transactions_getTransactionBufferStats",children:"GET /admin/v3/transactions/transactionBufferStats/{tenant}/{namespace}/{topic}"})})}),(0,s.jsx)(o.A,{value:"Java",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"admin.transactions().getTransactionBufferStats(topic, lowWaterMarks);\n"})})})]}),"\n",(0,s.jsx)(e.p,{children:"The following is an example of the returned values."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "state" : "Ready",\n  "maxReadPosition" : "38:101",\n  "lastSnapshotTimestamps" : 1657021903534,\n  "lowWaterMarks" : {\n    "1" : -1,\n    "2" : -1\n  },\n  "ongoingTxnSize" : 0,\n  "recoverStartTime" : 1657021892850,\n  "recoverEndTime" : 1657021893372\n}\n'})})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},19365:(n,e,a)=>{a.d(e,{A:()=>r});a(96540);var t=a(34164);const s={tabItem:"tabItem_Ymn6"};var i=a(74848);function r(n){let{children:e,hidden:a,className:r}=n;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,r),hidden:a,children:e})}},11470:(n,e,a)=>{a.d(e,{A:()=>A});var t=a(96540),s=a(34164),i=a(23104),r=a(56347),o=a(205),l=a(57485),c=a(31682),d=a(70679);function u(n){return t.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,t.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(n){const{values:e,children:a}=n;return(0,t.useMemo)((()=>{const n=e??function(n){return u(n).map((n=>{let{props:{value:e,label:a,attributes:t,default:s}}=n;return{value:e,label:a,attributes:t,default:s}}))}(a);return function(n){const e=(0,c.XI)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,a])}function p(n){let{value:e,tabValues:a}=n;return a.some((n=>n.value===e))}function m(n){let{queryString:e=!1,groupId:a}=n;const s=(0,r.W6)(),i=function(n){let{queryString:e=!1,groupId:a}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,l.aZ)(i),(0,t.useCallback)((n=>{if(!i)return;const e=new URLSearchParams(s.location.search);e.set(i,n),s.replace({...s.location,search:e.toString()})}),[i,s])]}function g(n){const{defaultValue:e,queryString:a=!1,groupId:s}=n,i=h(n),[r,l]=(0,t.useState)((()=>function(n){let{defaultValue:e,tabValues:a}=n;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const t=a.find((n=>n.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:e,tabValues:i}))),[c,u]=m({queryString:a,groupId:s}),[g,x]=function(n){let{groupId:e}=n;const a=function(n){return n?`docusaurus.tab.${n}`:null}(e),[s,i]=(0,d.Dv)(a);return[s,(0,t.useCallback)((n=>{a&&i.set(n)}),[a,i])]}({groupId:s}),j=(()=>{const n=c??g;return p({value:n,tabValues:i})?n:null})();(0,o.A)((()=>{j&&l(j)}),[j]);return{selectedValue:r,selectValue:(0,t.useCallback)((n=>{if(!p({value:n,tabValues:i}))throw new Error(`Can't select invalid tab value=${n}`);l(n),u(n),x(n)}),[u,x,i]),tabValues:i}}var x=a(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(74848);function f(n){let{className:e,block:a,selectedValue:t,selectValue:r,tabValues:o}=n;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=n=>{const e=n.currentTarget,a=l.indexOf(e),s=o[a].value;s!==t&&(c(e),r(s))},u=n=>{let e=null;switch(n.key){case"Enter":d(n);break;case"ArrowRight":{const a=l.indexOf(n.currentTarget)+1;e=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(n.currentTarget)-1;e=l[a]??l[l.length-1];break}}e?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":a},e),children:o.map((n=>{let{value:e,label:a,attributes:i}=n;return(0,v.jsx)("li",{role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:n=>l.push(n),onKeyDown:u,onClick:d,...i,className:(0,s.A)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":t===e}),children:a??e},e)}))})}function b(n){let{lazy:e,children:a,selectedValue:i}=n;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(e){const n=r.find((n=>n.props.value===i));return n?(0,t.cloneElement)(n,{className:(0,s.A)("margin-top--md",n.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((n,e)=>(0,t.cloneElement)(n,{key:e,hidden:n.props.value!==i})))})}function T(n){const e=g(n);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,v.jsx)(f,{...e,...n}),(0,v.jsx)(b,{...e,...n})]})}function A(n){const e=(0,x.A)();return(0,v.jsx)(T,{...n,children:u(n.children)},String(e))}},28453:(n,e,a)=>{a.d(e,{R:()=>r,x:()=>o});var t=a(96540);const s={},i=t.createContext(s);function r(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);