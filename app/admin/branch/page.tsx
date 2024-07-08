

import BranchAddButton from "@/components/branch-add-button";
import BranchCard from "@/components/branch-card";
import { DialogCloseButton } from "@/components/dialog-close-button";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import Link from "next/link";


export default async function BranchHomepage() {
    const res = await fetch("http://localhost:3000/api/branch",{ cache: "no-store" });
    const { branches } = await res.json();
        
    return (
        <>
        <h1 className="font-bold text-4xl mb-8">Branch</h1>
            <section className="grid grid-cols-4 gap-4">
                {
                    branches.length && branches.map((branch:any) => {
                        return (
                            <Link key={branch.id} className="group" href={`/admin/branch/${branch.id}`}>
                                <BranchCard branch={branch} />
                            </Link>
                        )
                    })
                }
                <DialogCloseButton />
            </section>
        </>
    )
}