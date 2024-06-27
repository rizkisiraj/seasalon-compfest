import SignInForm from "@/components/form/sign-in.component";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignInPage() {
    return (
        <Card className="w-full max-w-md h-fit">
            <CardHeader>
                <CardTitle>Sign In</CardTitle>
                <CardDescription>Sign in your account for reservation</CardDescription>
            </CardHeader>
            <CardContent>
                <SignInForm />
            </CardContent>
       </Card>
    )
}