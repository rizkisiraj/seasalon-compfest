import DashboardCard from "@/components/dashboard-card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { BarChart, Home } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {

    return (
        <>
            <h1 className="font-bold text-4xl mb-8">Dashboard</h1>
            <section className="grid md:grid-cols-4 grid-cols-2 gap-4">
                <DashboardCard />
                <DashboardCard />
                <DashboardCard />
                <DashboardCard />       
            </section>
        </>
    )
}