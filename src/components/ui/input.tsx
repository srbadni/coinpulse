import * as React from 'react';import { cn } from '@/lib/utils';
export function Input({className,...props}:React.ComponentProps<'input'>){return <input className={cn('h-11 w-full rounded-xl border border-[#262B36] bg-[#171B24] px-4 text-sm text-[#F5F7FA] placeholder:text-[#9CA3AF] outline-none transition focus:border-[#6EEB83]/60',className)} {...props}/>}
