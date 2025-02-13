(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[859],{62716:(e,s,r)=>{"use strict";r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"release-policy","title":"Release policy","description":"Supported Versions","source":"@site/contribute/release-policy.md","sourceDirName":".","slug":"/release-policy","permalink":"/contribute/release-policy","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/contribute/release-policy.md","tags":[],"version":"current","lastUpdatedBy":"Lari Hotari","lastUpdatedAt":1738334502000,"frontMatter":{"id":"release-policy","title":"Release policy"},"sidebar":"sidebarDevelopment","previous":{"title":"Updating document","permalink":"/contribute/document-contribution"},"next":{"title":"Release process","permalink":"/contribute/release-process"}}');var t=r(74848),o=r(28453),l=r(72351);const n={id:"release-policy",title:"Release policy"},i=void 0,d={},c=[{value:"Supported Versions",id:"supported-versions",level:2},{value:"Release semantics",id:"release-semantics",level:2},{value:"Compatibility between releases",id:"compatibility-between-releases",level:2},{value:"Release frequency and support expectation",id:"release-frequency-and-support-expectation",level:2},{value:"Release cycles",id:"release-cycles",level:2},{value:"Related PIPs",id:"related-pips",level:2}];function h(e){const s={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"supported-versions",children:"Supported Versions"}),"\n",(0,t.jsxs)(s.p,{children:["Please plan your Pulsar deployment updates according to the dates provided below. The Apache Pulsar project doesn't make separate announcements for end-of-support or end-of-life. However, note that the Apache Pulsar project may provide ad hoc releases for some older patch versions, depending on resource availability, time constraints, or the severity of an issue, such as a significant CVE. These releases would be provided on a 'best-effort' basis. For supported versions, the Apache Pulsar project follows the ",(0,t.jsx)(s.a,{href:"/security",children:"Security policy"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["The Apache Pulsar project accepts ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/issues",children:"issue reports"})," for supported versions. Issue reporters are requested to upgrade to a supported version for both Pulsar clients and Pulsar clusters before filing issue reports. Commercial vendors around Apache Pulsar may offer paid options for users requiring security and bug fix support for previous release versions."]}),"\n","\n",(0,t.jsx)(l.A,{}),"\n",(0,t.jsx)(s.h2,{id:"release-semantics",children:"Release semantics"}),"\n",(0,t.jsxs)(s.p,{children:["The Pulsar project follows a variant of Semantic Versioning (semver), replacing ",(0,t.jsx)(s.code,{children:"major.minor.patch"})," with ",(0,t.jsx)(s.code,{children:"LTS.feature.patch"}),"."]}),"\n",(0,t.jsx)(s.p,{children:'Concretely, existing releases can expect patches for bugs and security vulnerabilities. New features will target feature releases. A "major" version bump will not carry any special meaning in terms of "big features" included in the release or breaking API changes. Instead, it will simply signal a new long-term support (LTS) release.'}),"\n",(0,t.jsx)(s.p,{children:"For example,"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"2.10.0 is a feature release;"}),"\n",(0,t.jsx)(s.li,{children:"2.10.1 is a patch release;"}),"\n",(0,t.jsx)(s.li,{children:"2.11.0 is a feature release;"}),"\n",(0,t.jsx)(s.li,{children:"3.0.0 is the first LTS release;"}),"\n",(0,t.jsx)(s.li,{children:"3.0.1 is a patch release of the LTS release;"}),"\n",(0,t.jsx)(s.li,{children:"3.1.0 is a feature release;"}),"\n",(0,t.jsx)(s.li,{children:"3.2.0 is a feature release;"}),"\n",(0,t.jsx)(s.li,{children:"3.2.1 is a patch release;"}),"\n",(0,t.jsx)(s.li,{children:"4.0.0 is an LTS release."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"compatibility-between-releases",children:"Compatibility between releases"}),"\n",(0,t.jsx)(s.p,{children:"When upgrading an existing cluster, it is important to upgrade components linearly. The reason for this is that changes in releases are designed in a way that allows upgrading an existing Pulsar cluster to a newer release and then rolling back to the original release version. This is considered when changes are made in Pulsar and the default BookKeeper configuration for Pulsar. Since Apache Pulsar is an open-source project, there is no guarantee. Each Pulsar user is responsible for operating their cluster, and Pulsar cluster upgrades should be tested in testing and staging environments to ensure that a specific configuration can be upgraded and downgraded. When something is supported in the Apache Project, it means that the project is committed to addressing reported issues. This also applies to release upgrade compatibility."}),"\n",(0,t.jsx)(s.p,{children:"Before version 3.0, the upgrade should be done linearly through each feature version. For example, when upgrading from 2.8 to 2.10, it is important to upgrade to 2.9 before going to 2.10."}),"\n",(0,t.jsx)(s.p,{children:"Starting from version 3.0, live upgrade/downgrade between one LTS and the next one is supported. For example,"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"3.0 -> 4.0 -> 3.0 is OK;"}),"\n",(0,t.jsx)(s.li,{children:"3.2 -> 4.0 -> 3.2 is OK;"}),"\n",(0,t.jsx)(s.li,{children:"3.2 -> 4.4 -> 3.2 is OK;"}),"\n",(0,t.jsx)(s.li,{children:"3.0 -> 3.1 -> 3.0 is OK;"}),"\n",(0,t.jsx)(s.li,{children:"3.0 -> 3.2 -> 3.0 is OK;"}),"\n",(0,t.jsxs)(s.li,{children:["3.2 -> 5.0 is ",(0,t.jsx)(s.em,{children:"not"})," OK."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"release-frequency-and-support-expectation",children:"Release frequency and support expectation"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Release frequency"}),(0,t.jsx)(s.th,{children:"Active Support"}),(0,t.jsx)(s.th,{children:"Security Support"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"LTS release"}),(0,t.jsx)(s.td,{children:"Every 18 months"}),(0,t.jsx)(s.td,{children:"24 months"}),(0,t.jsx)(s.td,{children:"36 months"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Feature release"}),(0,t.jsx)(s.td,{children:"Every 3 months"}),(0,t.jsx)(s.td,{children:"6 months"}),(0,t.jsx)(s.td,{children:"6 months"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Patch release"}),(0,t.jsx)(s.td,{children:"When it is ready"}),(0,t.jsx)(s.td,{children:"N/A"}),(0,t.jsx)(s.td,{children:"N/A"})]})]})]}),"\n",(0,t.jsx)(s.p,{children:"This can be translated into:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"The last 2 LTS releases and the last 2 feature releases are supported."}),"\n",(0,t.jsx)(s.li,{children:"Security patches are provided for the past 3 LTS releases and 2 feature releases"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Therefore, users can choose between stay in an LTS release until they are ready to jump into the next LTS, or try the latest releases which contains required features."}),"\n",(0,t.jsx)(s.h2,{id:"release-cycles",children:"Release cycles"}),"\n",(0,t.jsx)(s.p,{children:"Generally, one committer shall volunteer as the release manager for a specific release. A release is initiated with a discussion thread on the Pulsar mailing list."}),"\n",(0,t.jsx)(s.p,{children:"As part of the release discussion thread, a timeline is decided upon for the release. The release manager will drive this discussion, and decisions will be made in the Apache way."}),"\n",(0,t.jsx)(s.p,{children:"For feature releases and LTS releases, the last three weeks of the release cycle will be marked as a releasing period to finish the pending changes and decide on what features (PIP implementations) go into the release version."}),"\n",(0,t.jsxs)(s.p,{children:["As part of this period for an LTS or feature release, there could be multiple preview releases and multiple release candidates. A preview release is one that is not intended to be released. The purpose of the preview release is to allow users to start testing the new release functionality by making the release binaries available. The preview release will contain a suffix ",(0,t.jsx)(s.code,{children:"-pre.1"}),", ",(0,t.jsx)(s.code,{children:"-pre.2"}),". Preview releases don't apply to patch releases."]}),"\n",(0,t.jsx)(s.p,{children:"Here's an example of the 4.0.0 LTS release timeline:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"2024-09-26 - Target publishing date for 4.0 preview 1 (4.0.0-pre.1)"}),"\n",(0,t.jsx)(s.li,{children:"2024-10-03 - Target publishing date for 4.0 preview 2 (4.0.0-pre.2)"}),"\n",(0,t.jsx)(s.li,{children:"2024-10-07 - Code freeze for 4.0 by branching branch-4.0 from the master branch"}),"\n",(0,t.jsx)(s.li,{children:"2024-10-10 - Target publishing date for 4.0 release candidate 1"}),"\n",(0,t.jsx)(s.li,{children:"2024-10-15 - Reserved for 4.0 release candidate 2 if needed"}),"\n",(0,t.jsx)(s.li,{children:"2024-10-17 - Announcement date for 4.0.0"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The LTS or feature release timeline will also note the target date for branching the release branch off the master branch. After that point in time, the release manager will coordinate the changes that will be included in the release branch. The intention is to minimize the risk of delaying the release and only include bug fixes involving a regression of behavior compared to a previous release or critical improvements to the new features (PIP implementations) that are part of the release."}),"\n",(0,t.jsx)(s.p,{children:"For patch releases, the process is similar, but there is no branching off the master branch since the release branch already exists. The patch release doesn't contain preview releases."}),"\n",(0,t.jsxs)(s.p,{children:["The preparation of releases is handled according to the ",(0,t.jsx)(s.a,{href:"/contribute/release-process",children:"release process"}),". The release manager is responsible for updating the process documentation when there's a need to adapt the process. There's also a guide for ",(0,t.jsx)(s.a,{href:"/contribute/validate-release-candidate",children:"release validation"})," which is used by Pulsar contributors before voting on releases. Before releases are announced, the release will be voted upon on the ",(0,t.jsx)(s.a,{href:"https://lists.apache.org/list.html?dev@pulsar.apache.org",children:"Pulsar dev mailing list"}),". The ",(0,t.jsx)(s.a,{href:"https://www.apache.org/foundation/voting.html",children:"ASF voting process"})," applies. A release candidate will become an official release after it passes the release vote and has been announced. This is why the release version in the binaries of a release candidate doesn't include a ",(0,t.jsx)(s.code,{children:"-rc"})," suffix."]}),"\n",(0,t.jsx)(s.h2,{id:"related-pips",children:"Related PIPs"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/wiki/PIP-47%3A-Time-Based-Release-Plan",children:"PIP-47: A Time-Based Release Plan"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/issues/15966",children:"PIP-175: Extend time based release process"})}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},55282:e=>{e.exports=[{author:"lhotari",tagName:"v4.0.2",publishedAt:"2025-01-20T14:54:39Z",vtag:"4.0.x",releaseNotes:"/release-notes/versioned/pulsar-4.0.2/",doc:"/docs/4.0.x",version:"v4.0.x"},{author:"lhotari",tagName:"v4.0.1",publishedAt:"2024-12-02T18:53:51Z",vtag:"4.0.x",releaseNotes:"/release-notes/versioned/pulsar-4.0.1/",doc:"/docs/4.0.x",version:""},{author:"lhotari",tagName:"v4.0.0",publishedAt:"2024-10-21T18:07:26Z",vtag:"4.0.x",releaseNotes:"/release-notes/versioned/pulsar-4.0.0/",doc:"/docs/4.0.x",version:""},{author:"lhotari",tagName:"v3.3.4",publishedAt:"2025-01-20T10:04:11Z",vtag:"3.3.x",releaseNotes:"/release-notes/versioned/pulsar-3.3.4/",doc:"/docs/3.3.x",version:"v3.3.x"},{author:"lhotari",tagName:"v3.3.3",publishedAt:"2024-12-03T14:43:20Z",vtag:"3.3.x",releaseNotes:"/release-notes/versioned/pulsar-3.3.3/",doc:"/docs/3.3.x",version:""},{author:"lhotari",tagName:"v3.3.2",publishedAt:"2024-10-04T18:51:25Z",vtag:"3.3.x",releaseNotes:"/release-notes/versioned/pulsar-3.3.2/",doc:"/docs/3.3.x",version:""},{author:"lhotari",tagName:"v3.3.1",publishedAt:"2024-08-01T17:40:57Z",vtag:"3.3.x",releaseNotes:"/release-notes/versioned/pulsar-3.3.1/",doc:"/docs/3.3.x",version:""},{author:"coderzc",tagName:"v3.3.0",publishedAt:"2024-06-05T16:26:09Z",vtag:"3.3.x",releaseNotes:"/release-notes/versioned/pulsar-3.3.0/",doc:"/docs/3.3.x",version:""},{author:"lhotari",tagName:"v3.2.4",publishedAt:"2024-08-01T17:33:01Z",vtag:"3.2.x",releaseNotes:"/release-notes/versioned/pulsar-3.2.4/",doc:"/docs/3.2.x",version:"v3.2.x"},{author:"lhotari",tagName:"v3.2.3",publishedAt:"2024-05-17T13:12:43Z",vtag:"3.2.x",releaseNotes:"/release-notes/versioned/pulsar-3.2.3/",doc:"/docs/3.2.x",version:""},{author:"lhotari",tagName:"v3.2.2",publishedAt:"2024-04-02T06:08:51Z",vtag:"3.2.x",releaseNotes:"/release-notes/versioned/pulsar-3.2.2/",doc:"/docs/3.2.x",version:""},{author:"Technoboy-",tagName:"v3.2.1",publishedAt:"2024-03-08T21:11:40Z",vtag:"3.2.x",releaseNotes:"/release-notes/versioned/pulsar-3.2.1/",doc:"/docs/3.2.x",version:""},{author:"Technoboy-",tagName:"v3.2.0",publishedAt:"2024-02-05T18:34:40Z",vtag:"3.2.x",releaseNotes:"/release-notes/versioned/pulsar-3.2.0/",doc:"/docs/3.2.x",version:""},{author:"gaoran10",tagName:"v3.1.3",publishedAt:"2024-03-08T19:50:40Z",vtag:"3.1.x",releaseNotes:"/release-notes/versioned/pulsar-3.1.3/",doc:"/docs/3.1.x",version:"v3.1.x"},{author:"AnonHxy",tagName:"v3.1.2",publishedAt:"2024-01-02T18:37:40Z",vtag:"3.1.x",releaseNotes:"/release-notes/versioned/pulsar-3.1.2/",doc:"/docs/3.1.x",version:""},{author:"Technoboy-",tagName:"v3.1.1",publishedAt:"2023-10-24T16:37:40Z",vtag:"3.1.x",releaseNotes:"/release-notes/versioned/pulsar-3.1.1/",doc:"/docs/3.1.x",version:""},{author:"Technoboy-",tagName:"v3.1.0",publishedAt:"2023-08-10T16:37:40Z",vtag:"3.1.x",releaseNotes:"/release-notes/versioned/pulsar-3.1.0/",doc:"/docs/3.1.x",version:""},{author:"lhotari",tagName:"v3.0.9",publishedAt:"2025-01-20T14:28:50Z",vtag:"3.0.x",releaseNotes:"/release-notes/versioned/pulsar-3.0.9/",doc:"/docs/3.0.x",version:"v3.0.x"},{author:"lhotari",tagName:"v3.0.8",publishedAt:"2024-12-02T18:17:25Z",vtag:"3.0.x",releaseNotes:"/release-notes/versioned/pulsar-3.0.8/",doc:"/docs/3.0.x",version:""},{author:"lhotari",tagName:"v3.0.7",publishedAt:"2024-10-04T18:13:40Z",vtag:"3.0.x",releaseNotes:"/release-notes/versioned/pulsar-3.0.7/",doc:"/docs/3.0.x",version:""},{author:"lhotari",tagName:"v3.0.6",publishedAt:"2024-08-01T16:22:51Z",vtag:"3.0.x",releaseNotes:"/release-notes/versioned/pulsar-3.0.6/",doc:"/docs/3.0.x",version:""},{author:"lhotari",tagName:"v3.0.5",publishedAt:"2024-05-17T13:08:06Z",vtag:"3.0.x",releaseNotes:"/release-notes/versioned/pulsar-3.0.5/",doc:"/docs/3.0.x",version:""},{author:"lhotari",tagName:"v3.0.4",publishedAt:"2024-04-02T04:56:15Z",vtag:"3.0.x",releaseNotes:"/release-notes/versioned/pulsar-3.0.4/",doc:"/docs/3.0.x",version:""},{author:"heesung-sn",tagName:"v3.0.3",publishedAt:"2024-03-09T16:53:02Z",vtag:"3.0.x",releaseNotes:"/release-notes/versioned/pulsar-3.0.3/",doc:"/docs/3.0.x",version:""},{author:"poorbarcode",tagName:"v3.0.2",publishedAt:"2023-12-03T11:17:00Z",vtag:"3.0.x",releaseNotes:"/release-notes/versioned/pulsar-3.0.2/",doc:"/docs/3.0.x",version:""},{author:"RobertIndie",tagName:"v3.0.1",publishedAt:"2023-08-07T15:00:00Z",vtag:"3.0.x",releaseNotes:"/release-notes/versioned/pulsar-3.0.1/",doc:"/docs/3.0.x",version:""},{author:"RobertIndie",tagName:"v3.0.0",publishedAt:"2023-05-02T16:37:40Z",vtag:"3.0.x",releaseNotes:"/release-notes/versioned/pulsar-3.0.0/",releaseBlog:"/blog/2023/05/02/announcing-apache-pulsar-3-0",doc:"/docs/3.0.x",version:""},{author:"lhotari",tagName:"v2.11.4",publishedAt:"2024-03-08T11:47:28Z",vtag:"2.11.x",releaseNotes:"/release-notes/versioned/pulsar-2.11.4/",doc:"/docs/2.11.x",version:"v2.11.x"},{author:"shibd",tagName:"v2.11.3",publishedAt:"2024-01-03T11:20:34Z",vtag:"2.11.x",releaseNotes:"/release-notes/versioned/pulsar-2.11.3/",doc:"/docs/2.11.x",version:""},{author:"Technoboy-",tagName:"v2.11.2",publishedAt:"2023-07-18T16:53:34Z",vtag:"2.11.x",releaseNotes:"/release-notes/versioned/pulsar-2.11.2/",doc:"/docs/2.11.x",version:""},{author:"Technoboy-",tagName:"v2.11.1",publishedAt:"2023-04-19T16:53:34Z",vtag:"2.11.x",releaseNotes:"/release-notes/versioned/pulsar-2.11.1/",doc:"/docs/2.11.x",version:""},{author:"Technoboy-",tagName:"v2.11.0",publishedAt:"2023-01-11T01:53:34Z",vtag:"2.11.x",releaseNotes:"/release-notes/versioned/pulsar-2.11.0/",releaseBlog:"/blog/2023/01/20/Apache-Pulsar-2-11-0",doc:"/docs/2.11.x",version:""},{author:"liangyepianzhou",tagName:"v2.10.6",publishedAt:"2024-03-08T01:53:34Z",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/pulsar-2.10.6/",doc:"/docs/2.10.x",version:"v2.10.x"},{author:"liangyepianzhou",tagName:"v2.10.5",publishedAt:"2023-07-30T01:53:34Z",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/pulsar-2.10.5/",doc:"/docs/2.10.x",version:""},{author:"liangyepianzhou",tagName:"v2.10.4",publishedAt:"2023-04-18T01:53:34Z",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/pulsar-2.10.4/",releaseBlog:"/blog/2023-04-19-Apache-Pulsar-2-10-4.md",doc:"/docs/2.10.x",version:""},{author:"liangyepianzhou",tagName:"v2.10.3",publishedAt:"2023-01-04T01:53:34Z",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/pulsar-2.10.3/",releaseBlog:"/blog/2023/01/09/Apache-Pulsar-2-10-3",doc:"/docs/2.10.x",version:""},{author:"Jason918",tagName:"v2.10.2",publishedAt:"2022-10-28T01:53:34Z",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/pulsar-2.10.2/",releaseBlog:"",doc:"/docs/2.10.x",version:""},{author:"codelipenghui",tagName:"v2.10.1",publishedAt:"2022-07-04T14:45:46Z",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/pulsar-2.10.1/",releaseBlog:"/blog/2022/07/12/Apache-Pulsar-2-10-1",doc:"/docs/2.10.x",version:""},{author:"codelipenghui",tagName:"v2.10.0",publishedAt:"2022-04-18T02:08:43Z",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/pulsar-2.10.0/",releaseBlog:"",doc:"/docs/2.10.x",version:""},{author:"coderzc",tagName:"v2.9.5",publishedAt:"2023-04-20T02:38:21Z",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/pulsar-2.9.5/",doc:"/docs/2.9.x",version:"v2.9.x"},{author:"congbobo184",tagName:"v2.9.4",publishedAt:"2022-12-28T01:12:20Z",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/pulsar-2.9.4/",releaseBlog:"",doc:"/docs/2.9.x",version:""},{author:"mattisonchao",tagName:"v2.9.3",publishedAt:"2022-07-20T02:04:10Z",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/pulsar-2.9.3/",releaseBlog:"/blog/2022/07/27/Apache-Pulsar-2-9-3",doc:"/docs/2.9.x",version:""},{author:"gaoran10",tagName:"v2.9.2",publishedAt:"2022-04-08T03:22:33Z",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/pulsar-2.9.2/",releaseBlog:"/blog/2022/04/08/Apache-Pulsar-2-9-2",doc:"/docs/2.9.x",version:""},{author:"eolivelli",tagName:"v2.9.1",publishedAt:"2021-12-20T12:34:56Z",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/pulsar-2.9.1/",releaseBlog:"",doc:"/docs/2.9.x",version:""},{author:"BewareMyPower",tagName:"v2.8.4",publishedAt:"2022-10-04T13:38:54Z",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/pulsar-2.8.4/",releaseBlog:"",doc:"/docs/2.8.x",version:"v2.8.x"},{author:"michaeljmarshall",tagName:"v2.8.3",publishedAt:"2022-04-08T03:27:18Z",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/pulsar-2.8.3/",releaseBlog:"",doc:"/docs/2.8.x",version:""},{author:"315157973",tagName:"v2.8.2",publishedAt:"2022-01-12T09:39:25Z",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/pulsar-2.8.2/",releaseBlog:"",doc:"/docs/2.8.x",version:""},{author:"hangc0276",tagName:"v2.8.1",publishedAt:"2021-09-18T01:39:29Z",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/pulsar-2.8.1/",releaseBlog:"/blog/2021/09/23/Apache-Pulsar-2-8-1",doc:"/docs/2.8.x",version:""},{author:"codelipenghui",tagName:"v2.8.0",publishedAt:"2021-06-15T10:39:18Z",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/pulsar-2.8.0/",releaseBlog:"/blog/2021/06/12/Apache-Pulsar-2-8-0",doc:"/docs/2.8.x",version:""},{author:"Jason918",tagName:"v2.7.5",publishedAt:"2022-09-06T10:53:32Z",vtag:"2.7.5",releaseNotes:"/release-notes/versioned/pulsar-2.7.5/",releaseBlog:"/blog/2022/09/09/Apache-Pulsar-2-7-5",doc:"/docs/2.7.5",version:"v2.7.x"},{author:"Technoboy-",tagName:"v2.7.4",publishedAt:"2021-12-27T08:24:54Z",vtag:"2.7.4",releaseNotes:"/release-notes/versioned/pulsar-2.7.4/",releaseBlog:"/blog/2021/12/14/Apache-Pulsar-2-7-4",doc:"/docs/2.7.4",version:""},{author:"congbobo184",tagName:"v2.7.3",publishedAt:"2021-08-11T01:45:27Z",vtag:"2.7.3",releaseNotes:"/release-notes/versioned/pulsar-2.7.3/",releaseBlog:"/blog/2021/08/11/Apache-Pulsar-2-7-3",doc:"/docs/2.7.3",version:""},{author:"eolivelli",tagName:"v2.7.2",publishedAt:"2021-05-25T06:30:19Z",vtag:"2.7.2",releaseNotes:"/release-notes/versioned/pulsar-2.7.2/",releaseBlog:"/blog/2021/05/13/Apache-Pulsar-2-7-2",doc:"/docs/2.7.2",version:""},{author:"zymap",tagName:"v2.7.1",publishedAt:"2021-03-22T00:35:17Z",vtag:"2.7.1",releaseNotes:"/release-notes/versioned/pulsar-2.7.1/",releaseBlog:"",doc:"/docs/2.7.1",version:""},{author:"codelipenghui",tagName:"v2.7.0",publishedAt:"2020-12-03T08:29:15Z",vtag:"2.7.0",releaseNotes:"/release-notes/versioned/pulsar-2.7.0/",releaseBlog:"/blog/2020/12/24/Apache-Pulsar-2-7-0",doc:"/docs/2.7.0",version:""},{author:"lhotari",tagName:"v2.6.4",publishedAt:"2021-06-02T18:10:21Z",vtag:"2.6.4",releaseNotes:"/release-notes/versioned/pulsar-2.6.4/",releaseBlog:"",doc:"/docs/2.6.4",version:"v2.6.x"},{author:"codelipenghui",tagName:"v2.6.3",publishedAt:"2021-01-21T12:34:56Z",vtag:"2.6.3",releaseNotes:"/release-notes/versioned/pulsar-2.6.3/",releaseBlog:"",doc:"/docs/2.6.3",version:""},{author:"wolfstudy",tagName:"v2.6.2",publishedAt:"2020-11-09T05:08:25Z",vtag:"2.6.2",releaseNotes:"/release-notes/versioned/pulsar-2.6.2/",releaseBlog:"/blog/2020/11/09/Apache-Pulsar-2-6-2",doc:"/docs/2.6.2",version:""},{author:"wolfstudy",tagName:"v2.6.1",publishedAt:"2020-08-21T01:35:54Z",vtag:"2.6.1",releaseNotes:"/release-notes/versioned/pulsar-2.6.1/",releaseBlog:"/blog/2020/08/21/Apache-Pulsar-2-6-1",doc:"/docs/2.6.1",version:""},{author:"codelipenghui",tagName:"v2.6.0",publishedAt:"2020-06-17T12:57:15Z",vtag:"2.6.0",releaseNotes:"/release-notes/versioned/pulsar-2.6.0/",releaseBlog:"/blog/2020/06/18/Apache-Pulsar-2-6-0",doc:"/docs/2.6.0",version:""},{author:"jiazhai",tagName:"v2.5.2",publishedAt:"2020-05-19T12:25:05Z",vtag:"2.5.2",releaseNotes:"/release-notes/versioned/pulsar-2.5.2/",releaseBlog:"/blog/2020/05/19/Apache-Pulsar-2-5-2",doc:"/docs/2.5.2",version:"v2.5.x"},{author:"tuteng",tagName:"v2.5.1",publishedAt:"2020-05-11T04:22:55Z",vtag:"2.5.1",releaseNotes:"/release-notes/versioned/pulsar-2.5.1/",releaseBlog:"/blog/2020/04/23/Apache-Pulsar-2-5-1",doc:"/docs/2.5.1",version:""},{author:"sijie",tagName:"v2.5.0",publishedAt:"2020-01-15T12:34:56Z",vtag:"2.5.0",releaseNotes:"/release-notes/versioned/pulsar-2.5.0/",releaseBlog:"",doc:"/docs/2.5.0",version:""}]},72351:(e,s,r)=>{"use strict";r.d(s,{A:()=>Z});var a=r(2543),t=r.n(a),o=(r(96540),r(97716)),l=r.n(o),n=r(46780),i=r(65464),d=r(53881),c=r(618),h=r(73231),u=r(88933),p=r(55282),v=r.n(p),g=r(28774),j=r(86025),x=r(95093),m=r.n(x),b=r(94247),f=r(74848);function N(e,s){const r=m()(s);return e.compareMain("3.0.0")<0?r.add(12,"months"):e.minor>0?r.add(6,"months"):r.add(24,"months")}function A(e,s){const r=m()(s);return e.compareMain("3.0.0")<0?r.add(12,"months"):e.minor>0?r.add(6,"months"):r.add(36,"months")}const T=(0,b.A)("div")({width:15,height:15,borderRadius:"50%"});function y(e){const s=m()();return(0,f.jsx)(n.A,{children:(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(i.A,{direction:"row",spacing:2,children:[(0,f.jsx)("div",{style:{marginTop:10},children:(0,f.jsx)(T,{style:{background:e.isBefore(s)?"crimson":"mediumaquamarine"}})}),(0,f.jsxs)("div",{style:{color:e.isBefore(s)?"crimson":"inherit"},children:[e.isBefore(s)?"Ended":"End"," ",e.fromNow(),(0,f.jsx)("br",{}),"(",e.format("DD MMM YYYY"),")"]})]})})})}function w(e){const s=m()();return e.activeSupport.isBefore(s)&&e.securitySupport.isBefore(s)?(0,f.jsx)(n.A,{children:(0,f.jsx)("del",{children:e.latest.version})}):(0,f.jsx)(n.A,{children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(g.A,{href:(0,j.Ay)(e.latestReleaseNoteLink),children:e.latest.version}),(0,f.jsx)("br",{}),"(",e.latestReleased.format("DD MMM YYYY"),")"]})})}const Z=e=>{let s=v().map((e=>({version:l().coerce(e.tagName),released:m()(e.publishedAt),releaseNoteLink:e.releaseNotes})));s.sort(((e,s)=>l().rcompare(e.version,s.version)));let r=[];for(const l of s){const e=l.version,s=l.released,n=t().last(r);n&&(a=n.version,o=l.version,a.major==o.major&&a.minor==o.minor)?(n.released=l.released,n.activeSupport=N(n.version,n.released),n.securitySupport=A(n.version,n.released)):r.push({version:e,released:s,activeSupport:N(e,s),securitySupport:A(e,s),latest:e,latestReleased:s,latestReleaseNoteLink:l.releaseNoteLink})}var a,o;e.isHideUnmaintained&&(r=r.filter((e=>e.activeSupport.isAfter(new Date)||e.securitySupport.isAfter(new Date))));const i=(0,b.A)(n.A)({fontWeight:"bold"});return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(d.A,{children:[(0,f.jsx)(c.A,{children:(0,f.jsxs)(h.A,{children:[(0,f.jsx)(i,{children:"Version"}),(0,f.jsx)(i,{children:"Released"}),(0,f.jsx)(i,{children:"Active Support"}),(0,f.jsx)(i,{children:"Security Support"}),(0,f.jsx)(i,{children:"Latest"})]})}),(0,f.jsx)(u.A,{children:r.map(((e,s)=>{return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(h.A,{children:[(a=e.version,a.compareMain("3.0.0")<0||0!=a.minor?(0,f.jsxs)(n.A,{children:[a.major,".",a.minor]}):(0,f.jsxs)(n.A,{children:[a.major,".",a.minor," (LTS)"]})),(r=e.released,(0,f.jsx)(n.A,{children:(0,f.jsxs)(f.Fragment,{children:[r.fromNow(),(0,f.jsx)("br",{}),"(",r.format("DD MMM YYYY"),")"]})})),y(e.activeSupport),y(e.securitySupport),w(e)]},s)});var r,a}))})]})})}},35358:(e,s,r)=>{var a={"./af":25177,"./af.js":25177,"./ar":61509,"./ar-dz":41488,"./ar-dz.js":41488,"./ar-kw":58676,"./ar-kw.js":58676,"./ar-ly":42353,"./ar-ly.js":42353,"./ar-ma":24496,"./ar-ma.js":24496,"./ar-ps":6947,"./ar-ps.js":6947,"./ar-sa":82682,"./ar-sa.js":82682,"./ar-tn":89756,"./ar-tn.js":89756,"./ar.js":61509,"./az":95533,"./az.js":95533,"./be":28959,"./be.js":28959,"./bg":47777,"./bg.js":47777,"./bm":54903,"./bm.js":54903,"./bn":61290,"./bn-bd":17357,"./bn-bd.js":17357,"./bn.js":61290,"./bo":31545,"./bo.js":31545,"./br":89089,"./br.js":89089,"./bs":44429,"./bs.js":44429,"./ca":7306,"./ca.js":7306,"./cs":56464,"./cs.js":56464,"./cv":73635,"./cv.js":73635,"./cy":64226,"./cy.js":64226,"./da":93601,"./da.js":93601,"./de":77853,"./de-at":26111,"./de-at.js":26111,"./de-ch":54697,"./de-ch.js":54697,"./de.js":77853,"./dv":60708,"./dv.js":60708,"./el":54691,"./el.js":54691,"./en-au":53872,"./en-au.js":53872,"./en-ca":28298,"./en-ca.js":28298,"./en-gb":56195,"./en-gb.js":56195,"./en-ie":66584,"./en-ie.js":66584,"./en-il":65543,"./en-il.js":65543,"./en-in":9033,"./en-in.js":9033,"./en-nz":79402,"./en-nz.js":79402,"./en-sg":43004,"./en-sg.js":43004,"./eo":32934,"./eo.js":32934,"./es":97650,"./es-do":20838,"./es-do.js":20838,"./es-mx":17730,"./es-mx.js":17730,"./es-us":56575,"./es-us.js":56575,"./es.js":97650,"./et":3035,"./et.js":3035,"./eu":3508,"./eu.js":3508,"./fa":119,"./fa.js":119,"./fi":90527,"./fi.js":90527,"./fil":95995,"./fil.js":95995,"./fo":52477,"./fo.js":52477,"./fr":85498,"./fr-ca":26435,"./fr-ca.js":26435,"./fr-ch":37892,"./fr-ch.js":37892,"./fr.js":85498,"./fy":37071,"./fy.js":37071,"./ga":41734,"./ga.js":41734,"./gd":70217,"./gd.js":70217,"./gl":77329,"./gl.js":77329,"./gom-deva":32124,"./gom-deva.js":32124,"./gom-latn":93383,"./gom-latn.js":93383,"./gu":95050,"./gu.js":95050,"./he":11713,"./he.js":11713,"./hi":43861,"./hi.js":43861,"./hr":26308,"./hr.js":26308,"./hu":90609,"./hu.js":90609,"./hy-am":17160,"./hy-am.js":17160,"./id":74063,"./id.js":74063,"./is":89374,"./is.js":89374,"./it":88383,"./it-ch":21827,"./it-ch.js":21827,"./it.js":88383,"./ja":23827,"./ja.js":23827,"./jv":89722,"./jv.js":89722,"./ka":41794,"./ka.js":41794,"./kk":27088,"./kk.js":27088,"./km":96870,"./km.js":96870,"./kn":84451,"./kn.js":84451,"./ko":63164,"./ko.js":63164,"./ku":98174,"./ku-kmr":6181,"./ku-kmr.js":6181,"./ku.js":98174,"./ky":78474,"./ky.js":78474,"./lb":79680,"./lb.js":79680,"./lo":15867,"./lo.js":15867,"./lt":45766,"./lt.js":45766,"./lv":69532,"./lv.js":69532,"./me":58076,"./me.js":58076,"./mi":41848,"./mi.js":41848,"./mk":30306,"./mk.js":30306,"./ml":73739,"./ml.js":73739,"./mn":99053,"./mn.js":99053,"./mr":86169,"./mr.js":86169,"./ms":73386,"./ms-my":92297,"./ms-my.js":92297,"./ms.js":73386,"./mt":77075,"./mt.js":77075,"./my":72264,"./my.js":72264,"./nb":22274,"./nb.js":22274,"./ne":8235,"./ne.js":8235,"./nl":92572,"./nl-be":43784,"./nl-be.js":43784,"./nl.js":92572,"./nn":54566,"./nn.js":54566,"./oc-lnc":69330,"./oc-lnc.js":69330,"./pa-in":29849,"./pa-in.js":29849,"./pl":94418,"./pl.js":94418,"./pt":79834,"./pt-br":48303,"./pt-br.js":48303,"./pt.js":79834,"./ro":24457,"./ro.js":24457,"./ru":82271,"./ru.js":82271,"./sd":1221,"./sd.js":1221,"./se":33478,"./se.js":33478,"./si":17538,"./si.js":17538,"./sk":5784,"./sk.js":5784,"./sl":46637,"./sl.js":46637,"./sq":86794,"./sq.js":86794,"./sr":45719,"./sr-cyrl":3322,"./sr-cyrl.js":3322,"./sr.js":45719,"./ss":56e3,"./ss.js":56e3,"./sv":41011,"./sv.js":41011,"./sw":40748,"./sw.js":40748,"./ta":11025,"./ta.js":11025,"./te":11885,"./te.js":11885,"./tet":28861,"./tet.js":28861,"./tg":86571,"./tg.js":86571,"./th":55802,"./th.js":55802,"./tk":59527,"./tk.js":59527,"./tl-ph":29231,"./tl-ph.js":29231,"./tlh":31052,"./tlh.js":31052,"./tr":85096,"./tr.js":85096,"./tzl":79846,"./tzl.js":79846,"./tzm":81765,"./tzm-latn":97711,"./tzm-latn.js":97711,"./tzm.js":81765,"./ug-cn":48414,"./ug-cn.js":48414,"./uk":16618,"./uk.js":16618,"./ur":57777,"./ur.js":57777,"./uz":57609,"./uz-latn":72475,"./uz-latn.js":72475,"./uz.js":57609,"./vi":21135,"./vi.js":21135,"./x-pseudo":64051,"./x-pseudo.js":64051,"./yo":82218,"./yo.js":82218,"./zh-cn":52648,"./zh-cn.js":52648,"./zh-hk":1632,"./zh-hk.js":1632,"./zh-mo":31541,"./zh-mo.js":31541,"./zh-tw":50304,"./zh-tw.js":50304};function t(e){var s=o(e);return r(s)}function o(e){if(!r.o(a,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return a[e]}t.keys=function(){return Object.keys(a)},t.resolve=o,e.exports=t,t.id=35358}}]);