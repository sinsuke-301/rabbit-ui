// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';

export async function getRoutes() {
  const routes = {"404":{"id":"404","path":"*","parentId":"DocLayout"},"dumi-context-layout":{"id":"dumi-context-layout","path":"/","isLayout":true},"DocLayout":{"id":"DocLayout","path":"/","parentId":"dumi-context-layout","isLayout":true},"docs/index":{"path":"","id":"docs/index","parentId":"DocLayout"},"components/alert/index":{"id":"components/alert/index","path":"components/alert","parentId":"DocLayout"},"components/button/index":{"id":"components/button/index","path":"components/button","parentId":"DocLayout"},"components/dropDown/index":{"id":"components/dropDown/index","path":"components/drop-down","parentId":"DocLayout"},"components/modal/index":{"id":"components/modal/index","path":"components/modal","parentId":"DocLayout"},"components/space/index":{"id":"components/space/index","path":"components/space","parentId":"DocLayout"},"components/switch/index":{"id":"components/switch/index","path":"components/switch","parentId":"DocLayout"},"components/tag/index":{"id":"components/tag/index","path":"components/tag","parentId":"DocLayout"},"demo-render":{"id":"demo-render","path":"~demos/:id","parentId":"dumi-context-layout","prerender":false}} as const;
  return {
    routes,
    routeComponents: {
'404': React.lazy(() => import(/* webpackChunkName: "nm__dumi__dist__client__pages__404" */'D:/rabbit UI/node_modules/dumi/dist/client/pages/404.js')),
'dumi-context-layout': React.lazy(() => import(/* webpackChunkName: "dumi__tmp__dumi__theme__ContextWrapper" */'D:/rabbit UI/.dumi/tmp/dumi/theme/ContextWrapper.tsx')),
'DocLayout': React.lazy(() => import(/* webpackChunkName: "nm__dumi__theme-default__layouts__DocLayout__index" */'D:/rabbit UI/node_modules/dumi/theme-default/layouts/DocLayout/index.js')),
'docs/index': React.lazy(() => import(/* webpackChunkName: "docs__index.md" */'D:/rabbit UI/docs/index.md')),
'components/alert/index': React.lazy(() => import(/* webpackChunkName: "alert__index.md" */'D:/rabbit UI/src/alert/index.md')),
'components/button/index': React.lazy(() => import(/* webpackChunkName: "button__index.md" */'D:/rabbit UI/src/button/index.md')),
'components/dropDown/index': React.lazy(() => import(/* webpackChunkName: "dropDown__index.md" */'D:/rabbit UI/src/dropDown/index.md')),
'components/modal/index': React.lazy(() => import(/* webpackChunkName: "modal__index.md" */'D:/rabbit UI/src/modal/index.md')),
'components/space/index': React.lazy(() => import(/* webpackChunkName: "space__index.md" */'D:/rabbit UI/src/space/index.md')),
'components/switch/index': React.lazy(() => import(/* webpackChunkName: "switch__index.md" */'D:/rabbit UI/src/switch/index.md')),
'components/tag/index': React.lazy(() => import(/* webpackChunkName: "tag__index.md" */'D:/rabbit UI/src/tag/index.md')),
'demo-render': React.lazy(() => import(/* webpackChunkName: "nm__dumi__dist__client__pages__Demo__index" */'D:/rabbit UI/node_modules/dumi/dist/client/pages/Demo/index.js')),
},
  };
}
