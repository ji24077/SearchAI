(()=>{var e={};e.id=202,e.ids=[202],e.modules={1678:(e,t,r)=>{"use strict";r.d(t,{z:()=>a});let s=require("@prisma/client"),a=global.prisma||new s.PrismaClient({log:["query"]})},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},11997:e=>{"use strict";e.exports=require("punycode")},27910:e=>{"use strict";e.exports=require("stream")},28086:(e,t,r)=>{"use strict";r.d(t,{D:()=>n});var s=r(12240);let a=null,i=async()=>(a||(a=new s.Pinecone({apiKey:process.env.PINECONE_API_KEY,environment:process.env.PINECONE_ENVIRONMENT})),a),n=async(e="searchai")=>(await i()).index(e)},28354:e=>{"use strict";e.exports=require("util")},29021:e=>{"use strict";e.exports=require("fs")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33509:(e,t,r)=>{"use strict";r.d(t,{Lu:()=>n,bB:()=>o});var s=r(17673);let a=null,i=()=>(a||(a=new s.Ay({apiKey:process.env.OPENAI_API_KEY})),a),n=async e=>{let t=i();return(await t.embeddings.create({model:"text-embedding-3-small",input:e})).data[0].embedding},o=async e=>{let t=i();return(await t.chat.completions.create({model:"gpt-4",messages:[{role:"system",content:"다음 텍스트를 간결하게 요약해주세요."},{role:"user",content:e}],max_tokens:200})).choices[0].message.content}},33873:e=>{"use strict";e.exports=require("path")},37830:e=>{"use strict";e.exports=require("node:stream/web")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},49738:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>g,routeModule:()=>l,serverHooks:()=>h,workAsyncStorage:()=>m,workUnitAsyncStorage:()=>x});var s={};r.r(s),r.d(s,{GET:()=>d});var a=r(96559),i=r(48088),n=r(37719),o=r(32190),u=r(1678),c=r(28086),p=r(33509);async function d(e){try{let t=e.nextUrl.searchParams.get("q");if(!t)return o.NextResponse.json({error:"검색어가 제공되지 않았습니다."},{status:400});let r=await (0,p.Lu)(t),s=await (0,c.D)(),a=await s.query({vector:r,topK:5,includeMetadata:!0}),i=a.matches.map(e=>e.id),n=await u.z.document.findMany({where:{vectorId:{in:i}},select:{id:!0,title:!0,summary:!0,tags:!0}}),d=a.matches.map(e=>{let t=n.find(t=>t.vectorId===e.id);return{id:t?.id,title:t?.title||e.metadata?.title,summary:t?.summary||e.metadata?.summary,relevance:e.score,tags:t?.tags||e.metadata?.tags}});return o.NextResponse.json(d)}catch(e){return console.error("검색 오류:",e),o.NextResponse.json({error:"검색에 실패했습니다."},{status:500})}}let l=new a.AppRouteRouteModule({definition:{kind:i.RouteKind.APP_ROUTE,page:"/api/search/route",pathname:"/api/search",filename:"route",bundlePath:"app/api/search/route"},resolvedPagePath:"/Users/jisunghan/searchAI1/SearchAI/src/app/api/search/route.ts",nextConfigOutput:"",userland:s}),{workAsyncStorage:m,workUnitAsyncStorage:x,serverHooks:h}=l;function g(){return(0,n.patchFetch)({workAsyncStorage:m,workUnitAsyncStorage:x})}},55591:e=>{"use strict";e.exports=require("https")},57075:e=>{"use strict";e.exports=require("node:stream")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},73024:e=>{"use strict";e.exports=require("node:fs")},73566:e=>{"use strict";e.exports=require("worker_threads")},74075:e=>{"use strict";e.exports=require("zlib")},78335:()=>{},79551:e=>{"use strict";e.exports=require("url")},81630:e=>{"use strict";e.exports=require("http")},96487:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[447,580,490],()=>r(49738));module.exports=s})();