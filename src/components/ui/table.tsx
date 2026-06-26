import * as React from 'react';import { cn } from '@/lib/utils';
export const Table=({className,...p}:React.ComponentProps<'table'>)=><table className={cn('w-full caption-bottom text-sm',className)} {...p}/>;
export const TableHeader=({className,...p}:React.ComponentProps<'thead'>)=><thead className={cn('[&_tr]:border-b [&_tr]:border-[#262B36]',className)} {...p}/>;
export const TableBody=({className,...p}:React.ComponentProps<'tbody'>)=><tbody className={cn('[&_tr:last-child]:border-0',className)} {...p}/>;
export const TableRow=({className,...p}:React.ComponentProps<'tr'>)=><tr className={cn('border-b border-[#262B36] transition-colors hover:bg-white/[0.03]',className)} {...p}/>;
export const TableHead=({className,...p}:React.ComponentProps<'th'>)=><th className={cn('sticky top-0 z-10 bg-[#171B24] px-4 py-3 text-right font-medium text-[#9CA3AF]',className)} {...p}/>;
export const TableCell=({className,...p}:React.ComponentProps<'td'>)=><td className={cn('px-4 py-4 align-middle',className)} {...p}/>;
