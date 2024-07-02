import { Building } from "lucide-react";
import { Card, CardContent, CardTitle } from "./ui/card";

export default function BranchCard({ branch }:{ branch:any }) {
    return (
        <Card className="group-hover:cursor-pointer group-hover:bg-slate-200">
            <CardTitle className="flex justify-center my-4">
                <Building className="w-12 h-12" />
            </CardTitle>
            <CardContent className="text-center">
                { branch.name }
            </CardContent>
        </Card>
    )
}