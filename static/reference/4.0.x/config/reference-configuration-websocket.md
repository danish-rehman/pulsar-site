# WebSocket

## Required
### clusterName
Name of the cluster to which this broker belongs to

**Type**: `java.lang.String`

**Default**: `null`

**Dynamic**: `false`

**Category**: 

## Optional
### anonymousUserRole
When this parameter is not empty, unauthenticated users perform as anonymousUserRole

**Type**: `java.lang.String`

**Default**: `null`

**Dynamic**: `false`

**Category**: 

### authenticationEnabled
Enable authentication

**Type**: `boolean`

**Default**: `false`

**Dynamic**: `false`

**Category**: 

### authenticationProviders
Authentication provider name list, which is a list of class names

**Type**: `java.util.Set`

**Default**: `[]`

**Dynamic**: `false`

**Category**: 

### authorizationAllowWildcardsMatching
Allow wildcard matching in authorization (wildcard matching only applicable if wildcard-char: presents at first or last position. For example: *.pulsar.service,pulsar.service.*)

**Type**: `boolean`

**Default**: `false`

**Dynamic**: `false`

**Category**: 

### authorizationEnabled
Enforce authorization

**Type**: `boolean`

**Default**: `false`

**Dynamic**: `false`

**Category**: 

### authorizationProvider
Authorization provider fully qualified class name

**Type**: `java.lang.String`

**Default**: `org.apache.pulsar.broker.authorization.PulsarAuthorizationProvider`

**Dynamic**: `false`

**Category**: 

### bindAddress
Hostname or IP address the service binds on, default is 0.0.0.0.

**Type**: `java.lang.String`

**Default**: `0.0.0.0`

**Dynamic**: `false`

**Category**: 

### brokerClientAuthenticationParameters
Proxy authentication parameters used to connect to brokers

**Type**: `java.lang.String`

**Default**: `null`

**Dynamic**: `false`

**Category**: 

### brokerClientAuthenticationPlugin
Proxy authentication settings used to connect to brokers

**Type**: `java.lang.String`

**Default**: `null`

**Dynamic**: `false`

**Category**: 

### brokerClientTlsEnabled
Enable TLS of broker client

**Type**: `boolean`

**Default**: `false`

**Dynamic**: `false`

**Category**: 

### brokerClientTrustCertsFilePath
Path for the trusted TLS certificate file for outgoing connection to a server (broker)

**Type**: `java.lang.String`

**Default**: ``

**Dynamic**: `false`

**Category**: 

### brokerServiceUrl
The broker binary service URL (for produce and consume operations)

**Type**: `java.lang.String`

**Default**: `null`

**Dynamic**: `false`

**Category**: 

### brokerServiceUrlTls
The secured broker binary service URL (for produce and consume operations)

**Type**: `java.lang.String`

**Default**: `null`

**Dynamic**: `false`

**Category**: 

### configurationMetadataStoreUrl
Connection string of configuration metadata store servers

**Type**: `java.lang.String`

**Default**: `null`

**Dynamic**: `false`

**Category**: 

### cryptoKeyReaderFactoryClassName
CryptoKeyReader factory classname to support encryption at websocket.

**Type**: `java.lang.String`

**Default**: `null`

**Dynamic**: `false`

**Category**: 

### httpServerAcceptQueueSize
Capacity for accept queue in the HTTP server Default is set to 8192.

**Type**: `int`

**Default**: `8192`

**Dynamic**: `false`

**Category**: 

### httpServerThreadPoolQueueSize
Capacity for thread pool queue in the HTTP server Default is set to 8192.

**Type**: `int`

**Default**: `8192`

**Dynamic**: `false`

**Category**: 

### maxConcurrentHttpRequests
Max concurrent web requests

**Type**: `int`

**Default**: `1024`

**Dynamic**: `false`

**Category**: 

### maxHttpServerConnections
Maximum number of inbound http connections. (0 to disable limiting)

**Type**: `int`

**Default**: `2048`

**Dynamic**: `false`

**Category**: 

### metadataStoreCacheExpirySeconds
Metadata store cache expiry time in seconds.

**Type**: `int`

**Default**: `300`

**Dynamic**: `false`

**Category**: 

### metadataStoreSessionTimeoutMillis
Metadata store session timeout in milliseconds.

**Type**: `long`

**Default**: `30000`

**Dynamic**: `false`

**Category**: 

### numHttpServerThreads
Number of threads to used in HTTP server

**Type**: `int`

**Default**: `6`

**Dynamic**: `false`

**Category**: 

### properties
Key-value properties. Types are all String

**Type**: `java.util.Properties`

**Default**: `{}`

**Dynamic**: `false`

**Category**: 

### serviceUrl
The HTTPS REST service URL to connect to broker

**Type**: `java.lang.String`

**Default**: `null`

**Dynamic**: `false`

**Category**: 

### serviceUrlTls
The HTTPS REST service TLS URL

**Type**: `java.lang.String`

**Default**: `null`

**Dynamic**: `false`

**Category**: 

### statusFilePath
Path for the file used to determine the rotation status for the broker when responding to service discovery health checks

**Type**: `java.lang.String`

**Default**: `null`

**Dynamic**: `false`

**Category**: 

### superUserRoles
Role names that are treated as "super-user", which means they can do all admin operations and publish to or consume from all topics

**Type**: `java.util.Set`

**Default**: `[]`

**Dynamic**: `false`

**Category**: 

### tlsAllowInsecureConnection
Accept untrusted TLS certificate from client and broker

**Type**: `boolean`

**Default**: `false`

**Dynamic**: `false`

**Category**: 

### tlsCertRefreshCheckDurationSec
TLS cert refresh duration (in seconds). 0 means checking every new connection.

**Type**: `long`

**Default**: `300`

**Dynamic**: `false`

**Category**: 

### tlsCertificateFilePath
Path for the TLS certificate file

**Type**: `java.lang.String`

**Default**: `null`

**Dynamic**: `false`

**Category**: 

### tlsEnabledWithKeyStore
Enable TLS with KeyStore type configuration for WebSocket

**Type**: `boolean`

**Default**: `false`

**Dynamic**: `false`

**Category**: 

### tlsHostnameVerificationEnabled
Enable TLS hostname verification when connecting to broker

**Type**: `boolean`

**Default**: `false`

**Dynamic**: `false`

**Category**: 

### tlsKeyFilePath
Path for the TLS private key file

**Type**: `java.lang.String`

**Default**: `null`

**Dynamic**: `false`

**Category**: 

### tlsKeyStore
TLS KeyStore path in WebSocket

**Type**: `java.lang.String`

**Default**: `null`

**Dynamic**: `false`

**Category**: 

### tlsKeyStorePassword
TLS KeyStore password for WebSocket

**Type**: `java.lang.String`

**Default**: `null`

**Dynamic**: `false`

**Category**: 

### tlsKeyStoreType
TLS KeyStore type configuration in WebSocket: JKS, PKCS12

**Type**: `java.lang.String`

**Default**: `JKS`

**Dynamic**: `false`

**Category**: 

### tlsProvider
Specify the TLS provider for the WebSocket service: SunJSSE, Conscrypt and etc.

**Type**: `java.lang.String`

**Default**: `Conscrypt`

**Dynamic**: `false`

**Category**: 

### tlsRequireTrustedClientCertOnConnect
Specify whether client certificates are required for TLS rejecting the connection if the client certificate is not trusted

**Type**: `boolean`

**Default**: `false`

**Dynamic**: `false`

**Category**: 

### tlsTrustCertsFilePath
Path for the trusted TLS certificate file

**Type**: `java.lang.String`

**Default**: ``

**Dynamic**: `false`

**Category**: 

### tlsTrustStore
TLS TrustStore path in WebSocket

**Type**: `java.lang.String`

**Default**: `null`

**Dynamic**: `false`

**Category**: 

### tlsTrustStorePassword
TLS TrustStore password for WebSocket, null means empty password.

**Type**: `java.lang.String`

**Default**: `null`

**Dynamic**: `false`

**Category**: 

### tlsTrustStoreType
TLS TrustStore type configuration in WebSocket: JKS, PKCS12

**Type**: `java.lang.String`

**Default**: `JKS`

**Dynamic**: `false`

**Category**: 

### webServiceHaProxyProtocolEnabled
Enable or disable the use of HA proxy protocol for resolving the client IP for http/https requests. Default is false.

**Type**: `boolean`

**Default**: `false`

**Dynamic**: `false`

**Category**: 

### webServiceLogDetailedAddresses
Add detailed client/remote and server/local addresses and ports to http/https request logging.
Defaults to true when either webServiceHaProxyProtocolEnabled or webServiceTrustXForwardedFor is enabled.

**Type**: `java.lang.Boolean`

**Default**: `null`

**Dynamic**: `false`

**Category**: 

### webServicePort
Port to use to server HTTP request

**Type**: `java.util.Optional`

**Default**: `Optional[8080]`

**Dynamic**: `false`

**Category**: 

### webServicePortTls
Port to use to server HTTPS request

**Type**: `java.util.Optional`

**Default**: `Optional.empty`

**Dynamic**: `false`

**Category**: 

### webServiceTlsCiphers
Specify the tls cipher the proxy's web service will use to negotiate during TLS Handshake.

Example:- [TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256]

**Type**: `java.util.Set`

**Default**: `[]`

**Dynamic**: `false`

**Category**: 

### webServiceTlsProtocols
Specify the tls protocols the proxy's web service will use to negotiate during TLS Handshake.

Example:- [TLSv1.3, TLSv1.2]

**Type**: `java.util.Set`

**Default**: `[]`

**Dynamic**: `false`

**Category**: 

### webServiceTrustXForwardedFor
Trust X-Forwarded-For header for resolving the client IP for http/https requests.
Default is false.

**Type**: `boolean`

**Default**: `false`

**Dynamic**: `false`

**Category**: 

### webSocketConnectionsPerBroker
Number of connections per broker in Pulsar client used in WebSocket proxy

**Type**: `int`

**Default**: `1`

**Dynamic**: `false`

**Category**: 

### webSocketMaxTextFrameSize
Maximum size of a text message during parsing in WebSocket proxy

**Type**: `int`

**Default**: `1048576`

**Dynamic**: `false`

**Category**: 

### webSocketNumIoThreads
Number of IO threads in Pulsar client used in WebSocket proxy

**Type**: `int`

**Default**: `1`

**Dynamic**: `false`

**Category**: 

### webSocketNumServiceThreads
Number of threads used by Websocket service

**Type**: `int`

**Default**: `20`

**Dynamic**: `false`

**Category**: 

### webSocketPingDurationSeconds
Interval of time to sending the ping to keep alive. This value greater than 0 means enabled

**Type**: `int`

**Default**: `-1`

**Dynamic**: `false`

**Category**: 

### webSocketPulsarClientMemoryLimitInMB
Memory limit in MBs for direct memory in Pulsar Client used in WebSocket proxy

**Type**: `int`

**Default**: `0`

**Dynamic**: `false`

**Category**: 

### webSocketSessionIdleTimeoutMillis
Timeout of idling WebSocket session (in milliseconds)

**Type**: `int`

**Default**: `300000`

**Dynamic**: `false`

**Category**: 

## Deprecated
### configurationStoreServers
Configuration store connection string (as a comma-separated list). Deprecated in favor of `configurationMetadataStoreUrl`

**Type**: `java.lang.String`

**Default**: `null`

**Dynamic**: `false`

**Category**: 

### globalZookeeperServers
Configuration Store connection string

**Type**: `java.lang.String`

**Default**: `null`

**Dynamic**: `false`

**Category**: 

### zooKeeperCacheExpirySeconds
ZooKeeper cache expiry time in seconds. @deprecated - Use metadataStoreCacheExpirySeconds instead.

**Type**: `int`

**Default**: `-1`

**Dynamic**: `false`

**Category**: 

### zooKeeperSessionTimeoutMillis
ZooKeeper session timeout in milliseconds. @deprecated - Use metadataStoreSessionTimeoutMillis instead.

**Type**: `long`

**Default**: `-1`

**Dynamic**: `false`

**Category**: 


