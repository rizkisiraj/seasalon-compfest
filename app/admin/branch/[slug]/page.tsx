'use client'

import DashboardCard from "@/components/dashboard-card"
import TableCard from "@/components/table-card"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { countMoney } from "@/lib/helper";
// import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

export default function BranchPage({params: {slug}}: {params: {slug: String}}) {

    const { data: branchData } = useSWR<any>('/api/branch/' + slug, fetcher)
    const { data: reservationsData } = useSWR<any>(`/api/branch/${slug}/reservation`, fetcher)
    // const { reservations } = reservationsData

    // const res = await fetch(`http://localhost:3000/api/branch/1`);
    // const { data: branch } = await res.json();

    return (
        <>
            <div className="w-full flex items-center justify-between">
                <Breadcrumb className="pt-1">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/admin/branch">Branch</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                            <BreadcrumbPage>
                                <BreadcrumbLink href='#'>{branchData?.data.name}</BreadcrumbLink>
                            </BreadcrumbPage>
                    </BreadcrumbList>
                </Breadcrumb>
                <p>Opening Time : {`${branchData?.data.openingHour} - ${branchData?.data.closingHour}`}</p>
            </div>
            <section className="my-8 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                <DashboardCard type="revenue" data={countMoney(reservationsData ? (reservationsData.data ? reservationsData.data.length : 0) : 0)} />
                <DashboardCard type="count" data={reservationsData ? (reservationsData.data ? reservationsData.data.length.toString() : 0) : 0} />
                <TableCard data={branchData?.data.services ? branchData?.data.services : []} type="service" />
                <TableCard data={reservationsData?.data ? reservationsData?.data.reservations : []} type="reservation" />
            </section>
        </>
    )
}