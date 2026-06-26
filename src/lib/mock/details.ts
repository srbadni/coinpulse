import { tokens } from './tokens';import type { Order, Trade } from '@/types';
export const getTokenDetails=(symbol:string)=>tokens.find(t=>t.symbol.toLowerCase()===symbol.toLowerCase())??tokens[0];
export const detailCandles=Array.from({length:48},(_,i)=>{const open=102000+Math.sin(i/3)*4200+i*90; const close=open+(i%3-1)*1300+Math.cos(i/2)*900; return {label:`${i}`,open,close,high:Math.max(open,close)+1800,low:Math.min(open,close)-1600,value:close}});
export const trades:Trade[]=Array.from({length:10},(_,i)=>({price:104200+i*37,amount:+(0.02+i*.011).toFixed(3),time:`۱۲:${(30+i).toString().padStart(2,'0')}`,type:i%2?'sell':'buy'}));
export const bids:Order[]=Array.from({length:8},(_,i)=>({price:104120-i*45,amount:+(0.4+i*.13).toFixed(2),total:70-i*6}));
export const asks:Order[]=Array.from({length:8},(_,i)=>({price:104260+i*55,amount:+(0.3+i*.17).toFixed(2),total:55+i*5}));
