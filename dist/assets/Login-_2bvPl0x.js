import{j as e}from"./ui-DHvs7Rtw.js";import{r as t}from"./vendor-BqKlwGYI.js";import{u as x,o as h,I as o,B as f,L as j}from"./index-BZikNEYv.js";import{L as n}from"./label-CGDRo2T5.js";import{M as b}from"./mail-BM3gX1Aa.js";import{L as g}from"./lock-B_brf4yP.js";import"./utils-DdJn5tvr.js";function C(){const[r,m]=t.useState(""),[l,c]=t.useState(""),[a,i]=t.useState(!1),{loginAdmin:d}=x(),u=async s=>{s.preventDefault(),i(!0);try{await d(r,l)}catch(p){console.error("Login error:",p)}finally{i(!1)}};return e.jsx("div",{className:"min-h-screen bg-gradient-to-b from-purple-50 to-white flex items-center justify-center p-4",children:e.jsxs(h,{className:"w-full max-w-md p-8",children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx("h1",{className:"text-2xl font-bold",children:"Administration BABISMELL"}),e.jsx("p",{className:"text-sm text-muted-foreground mt-2",children:"Connectez-vous pour gérer votre boutique"})]}),e.jsxs("form",{onSubmit:u,className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{htmlFor:"email",children:"Email"}),e.jsxs("div",{className:"relative",children:[e.jsx(b,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"}),e.jsx(o,{id:"email",type:"email",value:r,onChange:s=>m(s.target.value),className:"pl-10",placeholder:"admin@babismell.com",required:!0,disabled:a})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{htmlFor:"password",children:"Mot de passe"}),e.jsxs("div",{className:"relative",children:[e.jsx(g,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"}),e.jsx(o,{id:"password",type:"password",value:l,onChange:s=>c(s.target.value),className:"pl-10",required:!0,disabled:a})]})]}),e.jsx(f,{type:"submit",className:"w-full",disabled:a,children:a?e.jsxs(e.Fragment,{children:[e.jsx(j,{className:"mr-2 h-4 w-4 animate-spin"}),"Connexion en cours..."]}):"Se connecter"})]})]})})}export{C as default};
//# sourceMappingURL=Login-_2bvPl0x.js.map