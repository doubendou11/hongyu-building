import{d as s,k as L,l as i,q as l,u as r,o as u,s as n,a as t,i as h,b as y,A as S,c as C,r as T,F as U,L as W,t as _}from"./index-CGjQSwQ5.js";const $=t("h3",null,"能耗环比分析",-1),j={class:"DateBtn"},M=t("p",{class:"font-weight-regular"}," 日期： ",-1),P=t("thead",null,[t("tr",null,[t("th",null," 区域 "),t("th",null," 设备 "),t("th",null," 本月用电 "),t("th",null," 上月用电 "),t("th",null," 增加值 "),t("th",null," 环比(%) ")])],-1),z={__name:"energycomparsion",setup(q){const d=s("year"),v=s(null),b=s(null),k=s(null),c=s({labels:[],datasets:[{label:"Average Voltage (Volts)",borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.5)",data:[],fill:!0},{label:"Average Power (Watts)",borderColor:"rgb(54, 162, 235)",backgroundColor:"rgba(54, 162, 235, 0.5)",data:[],fill:!0},{label:"Sum Energy (kWh)",borderColor:"rgb(75, 192, 192)",backgroundColor:"rgba(75, 192, 192, 0.5)",data:[],fill:!0}]}),V=s([{building_area:"1802",device:"电表1",energy_thismonth:"12111kwh",energy_lastmonth:"12000kwh",energy_up:"111kwh",energy_percentage:"5%"},{building_area:"1802",device:"电表1",energy_thismonth:"12111kwh",energy_lastmonth:"12000kwh",energy_up:"111kwh",energy_percentage:"5%"},{building_area:"1802",device:"电表1",energy_thismonth:"12111kwh",energy_lastmonth:"12000kwh",energy_up:"111kwh",energy_percentage:"5%"},{building_area:"1802",device:"电表1",energy_thismonth:"12111kwh",energy_lastmonth:"12000kwh",energy_up:"111kwh",energy_percentage:"5%"},{building_area:"1802",device:"电表1",energy_thismonth:"12111kwh",energy_lastmonth:"12000kwh",energy_up:"111kwh",energy_percentage:"5%"},{building_area:"1802",device:"电表1",energy_thismonth:"12111kwh",energy_lastmonth:"12000kwh",energy_up:"111kwh",energy_percentage:"5%"},{building_area:"1802",device:"电表1",energy_thismonth:"12111kwh",energy_lastmonth:"12000kwh",energy_up:"111kwh",energy_percentage:"5%"},{building_area:"1802",device:"电表1",energy_thismonth:"12111kwh",energy_lastmonth:"12000kwh",energy_up:"111kwh",energy_percentage:"5%"}]);s({labels:["空调","照明","其他"],datasets:[{data:[7e3,4e3,3e3],backgroundColor:["#77CEFF","#0079AF","rgba(75, 192, 192, 0.5)"],borderColor:["#fff"],borderWidth:2}]});const x=async()=>{try{const e=await(await fetch("https://www.njbinhui.cn/api/metrics/aggregate?startDate=2024-04-23%2000:00:00&endDate=2024-04-25%2000:00:00&interval=hour")).json();D(e)}catch(o){console.error("Failed to fetch data:",o)}},D=o=>{c.value.labels=o.map(e=>e.interval_start),c.value.datasets[0].data=o.map(e=>e.avg_vol_a),c.value.datasets[1].data=o.map(e=>e.avg_power_total),c.value.datasets[2].data=o.map(e=>e.sum_energy)};return L(()=>{x()}),(o,e)=>{const g=r("v-col"),p=r("el-button"),F=r("el-button-group"),m=r("el-date-picker"),w=r("v-card"),B=r("v-card-title"),E=r("v-table"),A=r("v-card-text"),f=r("v-row"),N=r("v-container");return u(),i(N,{fluid:""},{default:l(()=>[n(f,{class:"layout-border row-border"},{default:l(()=>[n(g,{cols:"12"},{default:l(()=>[n(w,{class:"d-flex"},{default:l(()=>[n(g,{cols:"4"},{default:l(()=>[$]),_:1}),n(g,{cols:"8",class:"d-flex"},{default:l(()=>[t("div",j,[M,n(F,{type:"primary"},{default:l(()=>[n(p,{onClick:e[0]||(e[0]=a=>d.value="year")},{default:l(()=>[h("年")]),_:1}),n(p,{onClick:e[1]||(e[1]=a=>d.value="month")},{default:l(()=>[h("月")]),_:1}),n(p,{onClick:e[2]||(e[2]=a=>d.value="day")},{default:l(()=>[h("日")]),_:1})]),_:1})]),d.value==="year"?(u(),i(m,{key:0,modelValue:v.value,"onUpdate:modelValue":e[3]||(e[3]=a=>v.value=a),type:"year",placeholder:"选择年份"},null,8,["modelValue"])):y("",!0),d.value==="month"?(u(),i(m,{key:1,modelValue:b.value,"onUpdate:modelValue":e[4]||(e[4]=a=>b.value=a),type:"month",placeholder:"选择月份"},null,8,["modelValue"])):y("",!0),d.value==="day"?(u(),i(m,{key:2,modelValue:k.value,"onUpdate:modelValue":e[5]||(e[5]=a=>k.value=a),type:"daterange","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date",placeholder:"选择日期"},null,8,["modelValue"])):y("",!0)]),_:1})]),_:1}),n(f,{"no-gutters":""},{default:l(()=>[n(g,{cols:"12"},{default:l(()=>[n(w,{class:"mt-2"},{default:l(()=>[n(B,null,{default:l(()=>[h("Energy Data Trends")]),_:1}),n(A,null,{default:l(()=>[n(S(W),{"chart-data":c.value},null,8,["chart-data"]),n(E,{"fixed-header":"",density:"compact",class:"custom-table-padding"},{default:l(()=>[P,t("tbody",null,[(u(!0),C(U,null,T(V.value,a=>(u(),C("tr",{key:a.device},[t("td",null,_(a.building_area),1),t("td",null,_(a.device),1),t("td",null,_(a.energy_thismonth),1),t("td",null,_(a.energy_lastmonth),1),t("td",null,_(a.energy_up),1),t("td",null,_(a.energy_percentage),1)]))),128))])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{z as default};