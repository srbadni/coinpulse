import { tokens } from './tokens';
export const marketCandles = Array.from({length:34},(_,i)=>{const open=100000+Math.sin(i/2)*2300+i*120; const close=open+(i%2?1400:-900)+Math.cos(i)*700; return {label:`${i}`,open,close,high:Math.max(open,close)+1200,low:Math.min(open,close)-1000,value:close}});
export const topMovers = tokens.slice(0,6).sort((a,b)=>Math.abs(b.change24h)-Math.abs(a.change24h));
export const miniStats = tokens.slice(0,3);
export const overview = [{title:'ارزش کل بازار',value:'۲.۸۱ تریلیون دلار',change:'+۲.۴٪'},{title:'حجم معاملات',value:'۱۰۴ میلیارد دلار',change:'+۸.۱٪'},{title:'دامیننس BTC',value:'۵۳.۲٪',change:'-۰.۳٪'},{title:'ترس و طمع',value:'۷۴ / طمع',change:'صعودی'}];
