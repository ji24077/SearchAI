(()=>{var e={};e.id=220,e.ids=[220],e.modules={1678:(e,r,t)=>{"use strict";t.d(r,{z:()=>a});let s=require("@prisma/client"),a=global.prisma||new s.PrismaClient({log:["query"]})},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},78335:()=>{},81114:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>x,routeModule:()=>d,serverHooks:()=>m,workAsyncStorage:()=>c,workUnitAsyncStorage:()=>l});var s={};t.r(s),t.d(s,{GET:()=>p});var a=t(96559),n=t(48088),o=t(37719),i=t(32190),u=t(1678);async function p(){try{let e=await u.z.document.findMany({select:{id:!0,title:!0,summary:!0,tags:!0,createdAt:!0,updatedAt:!0},orderBy:{createdAt:"desc"}});return i.NextResponse.json(e)}catch(e){return console.error("문서 목록 조회 오류:",e),i.NextResponse.json({error:"문서 목록을 불러오는데 실패했습니다."},{status:500})}}let d=new a.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/documents/route",pathname:"/api/documents",filename:"route",bundlePath:"app/api/documents/route"},resolvedPagePath:"/Users/jisunghan/searchAI1/SearchAI/src/app/api/documents/route.ts",nextConfigOutput:"",userland:s}),{workAsyncStorage:c,workUnitAsyncStorage:l,serverHooks:m}=d;function x(){return(0,o.patchFetch)({workAsyncStorage:c,workUnitAsyncStorage:l})}},96487:()=>{}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[447,580],()=>t(81114));module.exports=s})();