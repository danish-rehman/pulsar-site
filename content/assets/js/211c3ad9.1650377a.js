"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[9521],{44564:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"personal-ci","title":"Personal CI","description":"Apache Pulsar\'s CI infrastructure runs on limited Apache Infrastructure resources. To optimize these resources and reduce CI queue times, contributors are strongly encouraged to use \\"Personal CI\\" by testing pull requests in their own forks first.","source":"@site/contribute/personal-ci.md","sourceDirName":".","slug":"/personal-ci","permalink":"/contribute/personal-ci","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/contribute/personal-ci.md","tags":[],"version":"current","lastUpdatedBy":"Lari Hotari","lastUpdatedAt":1740660390000,"frontMatter":{"id":"personal-ci","title":"Personal CI"},"sidebar":"sidebarDevelopment","previous":{"title":"License header","permalink":"/contribute/testing-licenses"},"next":{"title":"Introduction","permalink":"/contribute/site-intro"}}');var t=n(74848),i=n(28453);const o={id:"personal-ci",title:"Personal CI"},a=void 0,l={},c=[{value:"CI workflows in a fork",id:"ci-workflows-in-a-fork",level:2},{value:"Using GitHub CLI",id:"using-github-cli",level:3},{value:"Using GitHub Web Interface",id:"using-github-web-interface",level:3},{value:"Stay in-sync with upstream",id:"stay-in-sync-with-upstream",level:2},{value:"SSH to CI jobs",id:"ssh-to-ci-jobs",level:2}];function u(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:'Apache Pulsar\'s CI infrastructure runs on limited Apache Infrastructure resources. To optimize these resources and reduce CI queue times, contributors are strongly encouraged to use "Personal CI" by testing pull requests in their own forks first.'}),"\n",(0,t.jsx)(s.p,{children:"When you create a pull request from your fork, GitHub Actions provides a separate quota specifically for forked repository builds. This means:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"You get immediate CI feedback without waiting for maintainer approval"}),"\n",(0,t.jsx)(s.li,{children:"Your CI runs don't consume the main Pulsar repository's CI resources"}),"\n",(0,t.jsx)(s.li,{children:"You can iterate and fix issues faster in your own environment"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The workflow is simple:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Test your changes thoroughly in your fork using Personal CI"}),"\n",(0,t.jsx)(s.li,{children:"Once tests pass consistently, notify maintainers for final PR review"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Some important notes about testing:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Pulsar has known ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/issues?q=is%3Aissue%20state%3Aopen%20flaky-test",children:"flaky tests"})," that may require multiple CI runs"]}),"\n",(0,t.jsx)(s.li,{children:'Use the "Rerun failed jobs" button in GitHub Actions to retry failed workflows'}),"\n",(0,t.jsx)(s.li,{children:"For test failures related to your changes, debug locally by running specific tests in your IDE"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Critical requirement: Always create pull requests from a unique feature branch, not from your fork's ",(0,t.jsx)(s.code,{children:"master"})," branch. The Personal CI process only works with feature branches.\nFor example:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\u2705 Create branch ",(0,t.jsx)(s.code,{children:"feature-xyz"})," and open PR from it"]}),"\n",(0,t.jsxs)(s.li,{children:["\u274c Opening a PR directly from your fork's ",(0,t.jsx)(s.code,{children:"master"})," branch will not work"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"ci-workflows-in-a-fork",children:"CI workflows in a fork"}),"\n",(0,t.jsx)(s.p,{children:'Before using personal CI workflows, ensure GitHub Actions is enabled for your fork in the GitHub UI. You can check this under your fork\'s "Settings" > "Actions" > "General" tab.\nChoose the "Allow all actions and reusable workflows" option.'}),"\n",(0,t.jsx)(s.p,{children:"Here are the steps to use your personal CI on GitHub:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Push your intended pull request changes to a new branch in your fork (following the standard process)."}),"\n",(0,t.jsx)(s.li,{children:"Create a pull request targeting your own fork instead of the main repository."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"You can create the pull request in two ways:"}),"\n",(0,t.jsx)(s.h3,{id:"using-github-cli",children:"Using GitHub CLI"}),"\n",(0,t.jsxs)(s.p,{children:["First, install and configure the ",(0,t.jsx)(s.a,{href:"https://cli.github.com/",children:"GitHub CLI"}),". Then use this single command to create a PR to your fork:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"gh pr create --repo=<your-github-id>/pulsar --base master --head <your-pr-branch> -f\n"})}),"\n",(0,t.jsx)(s.h3,{id:"using-github-web-interface",children:"Using GitHub Web Interface"}),"\n",(0,t.jsx)(s.p,{children:"Alternatively, you can create a PR to your own fork through the GitHub web interface:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:'When creating a new PR, select your fork as both the "base repository" and "head repository" in the dropdown menus.'}),"\n",(0,t.jsx)(s.li,{children:'Choose "master" as the "base" branch and your PR branch as the "compare" branch (should be the default)'}),"\n",(0,t.jsx)(s.li,{children:"Complete the PR creation process as normal"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"stay-in-sync-with-upstream",children:"Stay in-sync with upstream"}),"\n",(0,t.jsx)(s.p,{children:"It's worth keeping your master branch in sync with apache/pulsar's master (the upstream) so that the diff of PR will be reasonable in your own fork."}),"\n",(0,t.jsxs)(s.p,{children:["Read more about the instructions to sync a fork from the WebUI, from the GitHub CI, or from the command line at ",(0,t.jsx)(s.a,{href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork",children:"Syncing a fork"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"ssh-to-ci-jobs",children:"SSH to CI jobs"}),"\n",(0,t.jsxs)(s.p,{children:['The additional benefit of the "Personal CI" is that you get SSH access to the build VMs when the build is running. That is handled by this logic in the ',(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/blob/master/.github/workflows/pulsar-ci.yaml",children:"pulsar-ci.yaml"})," GitHub Actions workflow file:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"- name: Setup ssh access to build runner VM\n  # ssh access is enabled for builds in own forks\n  if: ${{ github.repository != 'apache/pulsar' && github.event_name == 'pull_request' }}\n  uses: ./.github/actions/ssh-access\n  with:\n    limit-access-to-actor: true\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Here is ",(0,t.jsxs)(s.a,{href:"https://github.com/apache/pulsar/blob/master/.github/actions/ssh-access/action.yml",children:["the inline ",(0,t.jsx)(s.code,{children:"ssh-access"})," composite action implementation"]}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["The SSH access is secured with the SSH key registered in GitHub. For example, your public keys are ",(0,t.jsx)(s.a,{href:"https://github.com/YOUR_GITHUB_ID.keys",children:"https://github.com/YOUR_GITHUB_ID.keys"}),". You will first have to register an SSH public key in GitHub for that to work."]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>a});var r=n(96540);const t={},i=r.createContext(t);function o(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);