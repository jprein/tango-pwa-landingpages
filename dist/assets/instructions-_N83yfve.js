import"./style-HX_bqIYk.js";const s=document.getElementById("continue-button"),c=document.getElementById("confirm-checkbox"),u=JSON.parse(localStorage.getItem("subjID"))||"test";function l(t){const n="subjID,consent,timestamp",a=t.subjID+","+t.consent+","+t.timestamp,d=n+`
`+a+`
`,r=new Date().toISOString().substring(0,10),i=new Date().toISOString().substring(11,19),o=new FormData;o.append("csvFile",new Blob([d],{type:"text/csv"}),`tangoCC-consent-${t.subjID}-${r}-${i}.csv`),fetch("./data/data.php",{method:"POST",body:o}).then(e=>e.text()).then(e=>{console.log("Success:",e)}).catch(e=>{console.error("Error:",e)})}const m=()=>{if(s.disabled=!c.checked,c.checked){const n={subjID:u,consent:!0,timestamp:new Date().toISOString()};l(n)}};c.addEventListener("change",m,{capture:!1});const h=t=>{t.preventDefault(),window.location.href="./webcam.html"};s.addEventListener("click",h,{capture:!1});
