"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[1165],{41460:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"v1.7.0","label":"v1.7.0","banner":"unmaintained","badge":true,"noIndex":false,"className":"docs-version-v1.7.0","isLast":false,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction to EventMesh","href":"/docs/v1.7.0/introduction","docId":"introduction"},{"type":"link","label":"Development Roadmap","href":"/docs/v1.7.0/roadmap","docId":"roadmap"},{"type":"category","label":"Installation and Deployment","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Guidelines of eventmesh-store with Docker","href":"/docs/v1.7.0/instruction/store-with-docker","docId":"instruction/store-with-docker"},{"type":"link","label":"Guidelines of eventmesh-store","href":"/docs/v1.7.0/instruction/store","docId":"instruction/store"},{"type":"link","label":"EventMesh Runtime (Docker)","href":"/docs/v1.7.0/instruction/runtime-with-docker","docId":"instruction/runtime-with-docker"},{"type":"link","label":"EventMesh Runtime","href":"/docs/v1.7.0/instruction/runtime","docId":"instruction/runtime"},{"type":"link","label":"Run our demos","href":"/docs/v1.7.0/instruction/demo","docId":"instruction/demo"}]},{"type":"category","label":"Design Document","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"EventMesh Workflow","href":"/docs/v1.7.0/design-document/workflow","docId":"design-document/workflow"},{"type":"link","label":"EventMesh Runtime Protocol","href":"/docs/v1.7.0/design-document/runtime-protocol","docId":"design-document/runtime-protocol"},{"type":"link","label":"EventMesh Stream","href":"/docs/v1.7.0/design-document/stream","docId":"design-document/stream"},{"type":"link","label":"EventMesh Schema Registry (OpenSchema)","href":"/docs/v1.7.0/design-document/schema-registry","docId":"design-document/schema-registry"},{"type":"link","label":"EventMesh Metrics (OpenTelemetry and Prometheus)","href":"/docs/v1.7.0/design-document/metrics-export","docId":"design-document/metrics-export"},{"type":"link","label":"CloudEvents Integration","href":"/docs/v1.7.0/design-document/cloudevents","docId":"design-document/cloudevents"},{"type":"link","label":"Distributed Tracing","href":"/docs/v1.7.0/design-document/tracing","docId":"design-document/tracing"},{"type":"link","label":"Service Provider Interface","href":"/docs/v1.7.0/design-document/spi","docId":"design-document/spi"},{"type":"link","label":"Event Bridge","href":"/docs/v1.7.0/design-document/event-bridge","docId":"design-document/event-bridge"},{"type":"link","label":"Knative Connector","href":"/docs/v1.7.0/design-document/knative-connector","docId":"design-document/knative-connector"},{"type":"link","label":"Observe Metrics with Prometheus","href":"/docs/v1.7.0/design-document/prometheus","docId":"design-document/prometheus"},{"type":"link","label":"Collect Trace with Zipkin","href":"/docs/v1.7.0/design-document/zipkin","docId":"design-document/zipkin"},{"type":"link","label":"webhook","href":"/docs/v1.7.0/design-document/webhook","docId":"design-document/webhook"},{"type":"link","label":"HTTPS","href":"/docs/v1.7.0/design-document/https","docId":"design-document/https"}]},{"type":"category","label":"EventMesh SDK for Java","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Installation","href":"/docs/v1.7.0/sdk-java/intro","docId":"sdk-java/intro"},{"type":"link","label":"HTTP Protocol","href":"/docs/v1.7.0/sdk-java/http","docId":"sdk-java/http"},{"type":"link","label":"TCP Protocol","href":"/docs/v1.7.0/sdk-java/tcp","docId":"sdk-java/tcp"},{"type":"link","label":"gRPC Protocol","href":"/docs/v1.7.0/sdk-java/grpc","docId":"sdk-java/grpc"}]}]},"docs":{"design-document/cloudevents":{"id":"design-document/cloudevents","title":"CloudEvents Integration","description":"Introduction","sidebar":"tutorialSidebar"},"design-document/event-bridge":{"id":"design-document/event-bridge","title":"Event Bridge","description":"event-bridge","sidebar":"tutorialSidebar"},"design-document/https":{"id":"design-document/https","title":"HTTPS","description":"1.\u5728eventmesh-runtime \u4e2d\u914d\u7f6e","sidebar":"tutorialSidebar"},"design-document/knative-connector":{"id":"design-document/knative-connector","title":"Knative Connector","description":"Prerequisite","sidebar":"tutorialSidebar"},"design-document/metrics-export":{"id":"design-document/metrics-export","title":"EventMesh Metrics (OpenTelemetry and Prometheus)","description":"Introduction","sidebar":"tutorialSidebar"},"design-document/prometheus":{"id":"design-document/prometheus","title":"Observe Metrics with Prometheus","description":"Prometheus","sidebar":"tutorialSidebar"},"design-document/runtime-protocol":{"id":"design-document/runtime-protocol","title":"EventMesh Runtime Protocol","description":"TCP Protocol","sidebar":"tutorialSidebar"},"design-document/schema-registry":{"id":"design-document/schema-registry","title":"EventMesh Schema Registry (OpenSchema)","description":"Overview of Schema and Schema Registry","sidebar":"tutorialSidebar"},"design-document/spi":{"id":"design-document/spi","title":"Service Provider Interface","description":"Introduction","sidebar":"tutorialSidebar"},"design-document/stream":{"id":"design-document/stream","title":"EventMesh Stream","description":"Overview of Event Streaming","sidebar":"tutorialSidebar"},"design-document/tracing":{"id":"design-document/tracing","title":"Distributed Tracing","description":"Overview of OpenTelemetry","sidebar":"tutorialSidebar"},"design-document/webhook":{"id":"design-document/webhook","title":"webhook","description":"Webhook usage process","sidebar":"tutorialSidebar"},"design-document/workflow":{"id":"design-document/workflow","title":"EventMesh Workflow","description":"Business Problem","sidebar":"tutorialSidebar"},"design-document/zipkin":{"id":"design-document/zipkin","title":"Collect Trace with Zipkin","description":"Zipkin","sidebar":"tutorialSidebar"},"instruction/demo":{"id":"instruction/demo","title":"Run our demos","description":"Maven Central","sidebar":"tutorialSidebar"},"instruction/runtime":{"id":"instruction/runtime","title":"EventMesh Runtime","description":"EventMesh Runtime is the core component of Apache EventMesh (Incubating). It is the middleware that transmits events between producers and consumers. The documentation introduces the step to install and start the latest release of EventMesh Runtime in the local or test environment. The EventMesh Runtime requires a Linux-based system with JDK (Java Development Kit) 8+.","sidebar":"tutorialSidebar"},"instruction/runtime-with-docker":{"id":"instruction/runtime-with-docker","title":"EventMesh Runtime (Docker)","description":"The documentation introduces the steps to install the latest release of EventMesh Runtime with Docker and connect to Apache RocketMQ. It\'s recommended to use a Linux-based system with Docker Engine. Please follow the Docker tutorial to get familiar with the basic concepts (registry, volume, etc.) and commands of Docker.","sidebar":"tutorialSidebar"},"instruction/store":{"id":"instruction/store","title":"Guidelines of eventmesh-store","description":"Dependencies","sidebar":"tutorialSidebar"},"instruction/store-with-docker":{"id":"instruction/store-with-docker","title":"Guidelines of eventmesh-store with Docker","description":"Dependencies","sidebar":"tutorialSidebar"},"introduction":{"id":"introduction","title":"Introduction to EventMesh","description":"CI status","sidebar":"tutorialSidebar"},"roadmap":{"id":"roadmap","title":"Development Roadmap","description":"The development roadmap of Apache EventMesh (Incubating) is an overview of the planned features and milestones involved in the next several releases. The recent features and bug fixes are documented in the release notes. The order of the features listed below doesn\'t correspond to their priorities.","sidebar":"tutorialSidebar"},"sdk-java/grpc":{"id":"sdk-java/grpc","title":"gRPC Protocol","description":"EventMesh SDK for Java implements the gRPC producer and consumer of synchronous, asynchronous, and broadcast messages. Both the producer and consumer require an instance of EventMeshGrpcClientConfig class that specifies the configuration of EventMesh gRPC client. The liteEventMeshAddr, userName, and password fields should match the eventmesh.properties file of EventMesh runtime.","sidebar":"tutorialSidebar"},"sdk-java/http":{"id":"sdk-java/http","title":"HTTP Protocol","description":"EventMesh SDK for Java implements the HTTP producer and consumer of asynchronous messages. Both the producer and consumer require an instance of EventMeshHttpClientConfig class that specifies the configuration of EventMesh HTTP client. The liteEventMeshAddr, userName, and password fields should match the eventmesh.properties file of EventMesh runtime.","sidebar":"tutorialSidebar"},"sdk-java/intro":{"id":"sdk-java/intro","title":"Installation","description":"Maven Central","sidebar":"tutorialSidebar"},"sdk-java/tcp":{"id":"sdk-java/tcp","title":"TCP Protocol","description":"EventMesh SDK for Java implements the TCP producer and consumer of synchronous, asynchronous, and broadcast messages. Both the producer and consumer require an instance of EventMeshTCPClientConfig class that specifies the configuration of EventMesh TCP client. The host and port fields should match the eventmesh.properties file of EventMesh runtime.","sidebar":"tutorialSidebar"}}}')}}]);