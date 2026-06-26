import * as React from 'react';import { cn } from '@/lib/utils';
export function Card({className,...props}:React.ComponentProps<'div'>){return <div className={cn('rounded-2xl border border-[#262B36] bg-[#171B24] text-[#F5F7FA] shadow-sm transition-all duration-300 hover:border-[#6EEB83]/30',className)} {...props}/>}
export function CardHeader({className,...props}:React.ComponentProps<'div'>){return <div className={cn('flex flex-col gap-1.5 p-5',className)} {...props}/>}
export function CardTitle({className,...props}:React.ComponentProps<'h3'>){return <h3 className={cn('text-lg font-bold',className)} {...props}/>}
export function CardDescription({className,...props}:React.ComponentProps<'p'>){return <p className={cn('text-sm text-[#9CA3AF]',className)} {...props}/>}
export function CardContent({className,...props}:React.ComponentProps<'div'>){return <div className={cn('p-5 pt-0',className)} {...props}/>}
