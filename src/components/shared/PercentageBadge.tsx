import { Badge } from '@/components/ui/badge';
export function PercentageBadge({value}:{value:number}){const positive=value>=0;return <Badge className={positive?'border-[#6EEB83]/30 bg-[#6EEB83]/10 text-[#6EEB83]':'border-[#FF5B5B]/30 bg-[#FF5B5B]/10 text-[#FF5B5B]'}>{positive?'+':''}{value.toLocaleString('fa-IR')}٪</Badge>}
