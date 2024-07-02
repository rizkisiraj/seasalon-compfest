'use client'

import ChartCard from "@/components/chart-card";
import DashboardCard from "@/components/dashboard-card";

export default function DashboardPage() {
    
    return (
        <>
            <h1 className="font-bold text-4xl mb-8">Dashboard</h1>
            <section className="grid md:grid-cols-4 grid-cols-2 gap-4 mb-8">
                <DashboardCard />
                <DashboardCard />
                <DashboardCard />
                <DashboardCard />       
            </section>
            <ChartCard />
        </>
    )
}