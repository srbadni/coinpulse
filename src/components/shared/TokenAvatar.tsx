import { cn } from '@/lib/utils';
export function TokenAvatar({symbol,color,className}:{symbol:string;color:string;className?:string}){return <div className={cn('grid size-10 place-items-center rounded-full font-black text-[#0F1117] ring-2 ring-white/10',className)} style={{backgroundColor:color}}>{symbol.slice(0,1)}</div>}
