import { Plus } from "lucide-react";
import { Card, CardContent, CardTitle } from "./ui/card";

export default function BranchAddButton() {
    return (
        <Card className="bg-muted hover:bg-slate-200 hover:cursor-pointer">
            <CardTitle className="flex justify-center my-4">
                <Plus className="w-12 h-12" />
            </CardTitle>
            <CardContent className="text-center">
                Add Branch
            </CardContent>
        </Card>
    )
}