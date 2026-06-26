import type { Token } from '@/types';
const spark=(base:number)=>Array.from({length:18},(_,i)=>({label:`${i}`,value:base+(Math.sin(i/2)*base*.025)+(i%5)*base*.006}));
export const tokens: Token[] = [
{name:'Bitcoin',persianName:'بیت‌کوین',symbol:'BTC',price:104250,change24h:2.8,marketCap:'۲.۰۶T$',volume:'۵۴.۲B$',supply:'۱۹.۷M BTC',color:'#F5C451',sparkline:spark(104000)},
{name:'Ethereum',persianName:'اتریوم',symbol:'ETH',price:3860,change24h:-1.2,marketCap:'۴۶۳B$',volume:'۲۲.۹B$',supply:'۱۲۰M ETH',color:'#6EEB83',sparkline:spark(3800)},
{name:'BNB',persianName:'بی‌ان‌بی',symbol:'BNB',price:712,change24h:4.1,marketCap:'۱۰۴B$',volume:'۳.۱B$',supply:'۱۴۵M BNB',color:'#F5C451',sparkline:spark(700)},
{name:'Solana',persianName:'سولانا',symbol:'SOL',price:184,change24h:6.7,marketCap:'۸۶B$',volume:'۵.۸B$',supply:'۴۶۷M SOL',color:'#9B7CFF',sparkline:spark(176)},
{name:'Ripple',persianName:'ریپل',symbol:'XRP',price:0.62,change24h:-2.4,marketCap:'۳۴B$',volume:'۱.۶B$',supply:'۵۵B XRP',color:'#60A5FA',sparkline:spark(.62)},
{name:'Cardano',persianName:'کاردانو',symbol:'ADA',price:0.48,change24h:1.9,marketCap:'۱۷B$',volume:'۶۲۰M$',supply:'۳۵B ADA',color:'#38BDF8',sparkline:spark(.48)},
{name:'Dogecoin',persianName:'دوج‌کوین',symbol:'DOGE',price:0.16,change24h:-0.8,marketCap:'۲۳B$',volume:'۹۸۰M$',supply:'۱۴۴B DOGE',color:'#DDBA5F',sparkline:spark(.16)},
{name:'Toncoin',persianName:'تون‌کوین',symbol:'TON',price:7.24,change24h:3.4,marketCap:'۱۸B$',volume:'۴۴۰M$',supply:'۲.۵B TON',color:'#32A7E2',sparkline:spark(7.1)},
];
