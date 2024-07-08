import { FC, ReactNode } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { BarChart, Building, Building2, Home, Scissors } from "lucide-react";
import Link from "next/link";

interface AdminLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AdminLayoutProps> = ({ children }) => {
  return (
    <main className="w-full flex max-w-5xl mx-auto my-4 border border-gray-300 rounded-lg min-h-[90vh]">
            <aside className="w-[50px] bg-white border-r border-gray-300 rounded-l-lg">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-8">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="/admin/dashboard"
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <BarChart className="h-5 w-5" />
                            <span className="sr-only">Dashboard</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Dashboard</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="/admin/branch"
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <Building2 className="h-5 w-5" />
                            <span className="sr-only">Branches</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Branches</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="#"
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <Scissors className="h-5 w-5" />
                            <span className="sr-only">Services</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Services</TooltipContent>
                </Tooltip>
          </TooltipProvider>
            </nav>
            </aside>
            <div className="flex-1 py-8 px-4">
                {children}
            </div>
        </main>
  )
};

export default AuthLayout;