"use strict";(self.webpackChunkmy_portofolio_app=self.webpackChunkmy_portofolio_app||[]).push([[42],{448:(e,t,r)=>{r.d(t,{A:()=>x});var a=r(5043),s=r(8254),i=r(1605),l=r(5475),n=r(579);const o=e=>{let{id:t,title:r,category:a,image:s}=e;return(0,n.jsx)(i.P.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:(0,n.jsx)(l.N_,{to:`/projects/single-project/${t}`,"aria-label":"Single Project",children:(0,n.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[(0,n.jsx)("div",{children:(0,n.jsx)("img",{src:s,className:"rounded-t-xl border-none",alt:"Single Project"})}),(0,n.jsxs)("div",{className:"text-center px-4 py-6",children:[(0,n.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:r}),(0,n.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:a})]})]})})})};var d=r(6611);const c=["Game","Mobile Application","Web Application"],m=e=>{let{setSelectProject:t}=e;return(0,n.jsxs)("select",{onChange:e=>{t(e.target.value)},className:"font-general-medium \r px-4\r sm:px-6\r py-2\r border\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r dark:font-medium\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",children:[(0,n.jsx)("option",{value:t,className:"text-sm sm:text-md",children:"All Projects"}),c.map((e=>(0,n.jsx)("option",{className:"text-normal sm:text-md",children:e},e)))]})},x=()=>{const{projects:e,searchProject:t,setSearchProject:r,searchProjectsByTitle:i,selectProject:l,setSelectProject:c,selectProjectsByCategory:x}=(0,a.useContext)(d.Y);return(0,n.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[(0,n.jsx)("div",{className:"text-center",children:(0,n.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),(0,n.jsxs)("div",{className:"mt-10 sm:mt-16",children:[(0,n.jsx)("h3",{className:"font-general-regular \r text-center text-secondary-dark\r dark:text-ternary-light\r text-md\r sm:text-xl\r mb-3\r ",children:"Search projects by title or filter by category"}),(0,n.jsxs)("div",{className:"\r flex\r justify-between\r border-b border-primary-light\r dark:border-secondary-dark\r pb-3\r gap-3\r ",children:[(0,n.jsxs)("div",{className:"flex justify-between gap-2",children:[(0,n.jsx)("span",{className:"\r hidden\r sm:block\r bg-primary-light\r dark:bg-ternary-dark\r p-2.5\r shadow-sm\r rounded-xl\r cursor-pointer\r ",children:(0,n.jsx)(s.CKj,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),(0,n.jsx)("input",{onChange:e=>{r(e.target.value)},className:"font-general-medium \r pl-3\r pr-1\r sm:px-4\r py-2\r border \r border-gray-200\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),(0,n.jsx)(m,{setSelectProject:c})]})]}),(0,n.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:l?x.map((e=>(0,n.jsx)(o,{id:e.id,title:e.title,category:e.category,image:e.img},e.id))):t?i.map((e=>(0,n.jsx)(o,{id:e.id,title:e.title,category:e.category,image:e.img},e.id))):e.map((e=>(0,n.jsx)(o,{id:e.id,title:e.title,category:e.category,image:e.img},e.id)))})]})}},6611:(e,t,r)=>{r.d(t,{S:()=>n,Y:()=>l});var a=r(5043),s=r(6151),i=r(579);const l=(0,a.createContext)(),n=e=>{const[t,r]=(0,a.useState)(s.F),[n,o]=(0,a.useState)(""),[d,c]=(0,a.useState)(""),m=t.filter((e=>e.title.toLowerCase().includes(n.toLowerCase())||""===n?e:"")),x=t.filter((e=>(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(d)));return(0,i.jsx)(l.Provider,{value:{projects:t,setProjects:r,searchProject:n,setSearchProject:o,searchProjectsByTitle:m,selectProject:d,setSelectProject:c,selectProjectsByCategory:x},children:e.children})}},6151:(e,t,r)=>{r.d(t,{F:()=>s});var a=r(1500);const s=[{id:1,title:"Aplikasi Tabungan Sekolah Dasar",category:"Mobile Application",img:r(1313),ProjectHeader:{title:"Aplikasi Tabungan Sekolah Dasar",publishDate:"2024",tags:"Mobile Application"}},{id:2,title:"Aplikasi Pengelolaan Kredit",category:"Mobile Application",img:a,ProjectHeader:{title:"Aplikasi Pengelolaan Kredit",publishDate:"2022",tags:"Mobile Application"}}]},8042:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var a=r(5475),s=r(3364),i=r(8254);r(5043);const l=r.p+"static/media/developer.2f084608158c1db6dcc0b2c76a2806f7.svg";const n=r.p+"static/media/developer-dark.aa2700b57c0b14ead116acc39d478609.svg";var o=r(1605),d=r(579);const c=()=>{const[e]=(0,s.A)();return(0,d.jsxs)(o.P.section,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2",children:[(0,d.jsxs)("div",{className:"w-full md:w-1/3 text-left",children:[(0,d.jsx)(o.P.h1,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.1},className:"font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase",children:"Hi, I am Fauzan"}),(0,d.jsx)(o.P.p,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200",children:"Immersive Technology Specialist with a Passion for Mobile and Web Development"}),(0,d.jsx)(o.P.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.3},className:"flex justify-center sm:block",children:(0,d.jsxs)("a",{download:"Ahmad Fauzan_Resume.pdf",href:"/files/CV-Ahmad Fauzan.pdf",className:"font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500","aria-label":"Download Resume",children:[(0,d.jsx)(i.Z25,{className:"mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"}),(0,d.jsx)("span",{className:"text-sm sm:text-lg font-general-medium duration-100",children:"Download CV"})]})})]}),(0,d.jsx)(o.P.div,{initial:{opacity:0,y:-180},animate:{opacity:1,y:0},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0",children:(0,d.jsx)("img",{src:"dark"===e?l:n,alt:"Developer"})})]})};var m=r(448),x=r(6611),g=r(6089);const p=()=>(0,d.jsxs)("div",{className:"container mx-auto",children:[(0,d.jsx)(c,{}),(0,d.jsx)(x.S,{children:(0,d.jsx)(m.A,{})}),(0,d.jsx)("div",{className:"mt-8 sm:mt-10 flex justify-center",children:(0,d.jsx)(a.N_,{to:"/projects",className:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300","aria-label":"More Projects",children:(0,d.jsx)(g.A,{title:"More Projects"})})})]})},1500:(e,t,r)=>{e.exports=r.p+"static/media/kredit_1.936c4dd1d601edaa187b.png"},1313:(e,t,r)=>{e.exports=r.p+"static/media/tabungan_1.5641139f06c7bceea305.png"}}]);
//# sourceMappingURL=42.fd59f454.chunk.js.map