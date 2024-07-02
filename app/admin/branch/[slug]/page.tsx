import DashboardCard from "@/components/dashboard-card"
import TableCard from "@/components/table-card"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"

export default function BranchPage({params: {slug}}: {params: {slug: String}}) {
    return (
        <>
            <Breadcrumb className="pt-1">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/admin/branch">Branch</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                        <BreadcrumbPage>
                            <BreadcrumbLink href="admin/branch/">{slug}</BreadcrumbLink>
                        </BreadcrumbPage>
                </BreadcrumbList>
            </Breadcrumb>
            <section className="my-8 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                <DashboardCard />
                <DashboardCard />
                <TableCard type="service" />
                <TableCard type="reservation" />
            </section>
        </>
    )
}