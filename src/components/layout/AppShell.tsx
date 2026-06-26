import { Sidebar } from './Sidebar';import { TopNavbar } from './TopNavbar';
export function AppShell({children}:{children:React.ReactNode}){return <div dir="rtl" className="min-h-screen bg-[#0F1117] text-[#F5F7FA]"><div className="flex"><Sidebar/><div className="min-w-0 flex-1"><TopNavbar/><main className="p-4 md:p-6 xl:p-8">{children}</main></div></div></div>}
