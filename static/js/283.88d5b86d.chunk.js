"use strict";(self.webpackChunkmy_portofolio_app=self.webpackChunkmy_portofolio_app||[]).push([[283],{448:(e,r,t)=>{t.d(r,{A:()=>x});var a=t(5043),s=t(8254),i=t(1605),l=t(5475),c=t(579);const d=e=>{let{id:r,title:t,category:a,image:s}=e;return(0,c.jsx)(i.P.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:(0,c.jsx)(l.N_,{to:`/projects/single-project/${r}`,"aria-label":"Single Project",children:(0,c.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[(0,c.jsx)("div",{children:(0,c.jsx)("img",{src:s,className:"rounded-t-xl border-none",alt:"Single Project"})}),(0,c.jsxs)("div",{className:"text-center px-4 py-6",children:[(0,c.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),(0,c.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:a})]})]})})})};var o=t(6611);const n=["Game","Mobile Application","Web Application"],m=e=>{let{setSelectProject:r}=e;return(0,c.jsxs)("select",{onChange:e=>{r(e.target.value)},className:"font-general-medium \r px-4\r sm:px-6\r py-2\r border\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r dark:font-medium\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",children:[(0,c.jsx)("option",{value:r,className:"text-sm sm:text-md",children:"All Projects"}),n.map((e=>(0,c.jsx)("option",{className:"text-normal sm:text-md",children:e},e)))]})},x=()=>{const{projects:e,searchProject:r,setSearchProject:t,searchProjectsByTitle:i,selectProject:l,setSelectProject:n,selectProjectsByCategory:x}=(0,a.useContext)(o.Y);return(0,c.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[(0,c.jsx)("div",{className:"text-center",children:(0,c.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),(0,c.jsxs)("div",{className:"mt-10 sm:mt-16",children:[(0,c.jsx)("h3",{className:"font-general-regular \r text-center text-secondary-dark\r dark:text-ternary-light\r text-md\r sm:text-xl\r mb-3\r ",children:"Search projects by title or filter by category"}),(0,c.jsxs)("div",{className:"\r flex\r justify-between\r border-b border-primary-light\r dark:border-secondary-dark\r pb-3\r gap-3\r ",children:[(0,c.jsxs)("div",{className:"flex justify-between gap-2",children:[(0,c.jsx)("span",{className:"\r hidden\r sm:block\r bg-primary-light\r dark:bg-ternary-dark\r p-2.5\r shadow-sm\r rounded-xl\r cursor-pointer\r ",children:(0,c.jsx)(s.CKj,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),(0,c.jsx)("input",{onChange:e=>{t(e.target.value)},className:"font-general-medium \r pl-3\r pr-1\r sm:px-4\r py-2\r border \r border-gray-200\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),(0,c.jsx)(m,{setSelectProject:n})]})]}),(0,c.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:l?x.map((e=>(0,c.jsx)(d,{id:e.id,title:e.title,category:e.category,image:e.img},e.id))):r?i.map((e=>(0,c.jsx)(d,{id:e.id,title:e.title,category:e.category,image:e.img},e.id))):e.map((e=>(0,c.jsx)(d,{id:e.id,title:e.title,category:e.category,image:e.img},e.id)))})]})}},6611:(e,r,t)=>{t.d(r,{S:()=>c,Y:()=>l});var a=t(5043),s=t(6151),i=t(579);const l=(0,a.createContext)(),c=e=>{const[r,t]=(0,a.useState)(s.F),[c,d]=(0,a.useState)(""),[o,n]=(0,a.useState)(""),m=r.filter((e=>e.title.toLowerCase().includes(c.toLowerCase())||""===c?e:"")),x=r.filter((e=>(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(o)));return(0,i.jsx)(l.Provider,{value:{projects:r,setProjects:t,searchProject:c,setSearchProject:d,searchProjectsByTitle:m,selectProject:o,setSelectProject:n,selectProjectsByCategory:x},children:e.children})}},6151:(e,r,t)=>{t.d(r,{F:()=>s});var a=t(1500);const s=[{id:1,title:"Aplikasi Tabungan Sekolah Dasar",category:"Mobile Application",img:t(1313),ProjectHeader:{title:"Aplikasi Tabungan Sekolah Dasar",publishDate:"2024",tags:"Mobile Application"}},{id:2,title:"Aplikasi Pengelolaan Kredit",category:"Mobile Application",img:a,ProjectHeader:{title:"Aplikasi Pengelolaan Kredit",publishDate:"2022",tags:"Mobile Application"}}]},4283:(e,r,t)=>{t.r(r),t.d(r,{default:()=>l});var a=t(448),s=t(6611),i=t(579);const l=()=>(0,i.jsx)(s.S,{children:(0,i.jsx)("div",{className:"container mx-auto",children:(0,i.jsx)(a.A,{})})})},1500:(e,r,t)=>{e.exports=t.p+"static/media/kredit_1.936c4dd1d601edaa187b.png"},1313:(e,r,t)=>{e.exports=t.p+"static/media/tabungan_1.5641139f06c7bceea305.png"}}]);
//# sourceMappingURL=283.88d5b86d.chunk.js.map