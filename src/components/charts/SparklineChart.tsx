'use client';
import type { TrendPoint } from '@/types';
export function SparklineChart({data,color='#6EEB83',height=64}:{data:TrendPoint[];color?:string;height?:number}){const w=220;const vals=data.map(d=>d.value);const min=Math.min(...vals);const max=Math.max(...vals);const pts=vals.map((v,i)=>`${(i/(vals.length-1))*w},${height-((v-min)/(max-min||1))*height}`).join(' ');return <svg viewBox={`0 0 ${w} ${height}`} className="h-full w-full" aria-label="نمودار خطی"><polyline fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points={pts}/></svg>}
