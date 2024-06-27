import SignUpForm from "@/components/form/sign-up.component";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignUpPage() {
    return (
       <Card className="w-full max-w-md h-fit">
            <CardHeader>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>Register your account for reservation</CardDescription>
            </CardHeader>
            <CardContent>
                <SignUpForm />
            </CardContent>
       </Card>
    )
}