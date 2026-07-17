import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white items-center justify-center p-12">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold mb-6">
            HackMate
          </h1>

          <p className="text-xl text-blue-100 mb-8">
            Find teammates, join hackathons,
            and build amazing projects together.
          </p>

          <div className="space-y-4 text-lg">
            <p>👥 Find skilled teammates</p>
            <p>🏆 Discover hackathons</p>
            <p>🚀 Build winning projects</p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-slate-50 px-6">
        <Card className="w-full max-w-md shadow-lg">
          <CardContent className="pt-6">
            <h2 className="text-3xl font-bold mb-2">
              Welcome Back
            </h2>

            <p className="text-muted-foreground mb-6">
              Login to continue
            </p>

            <div className="space-y-4">
              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <Label>Password</Label>
                <Input
                  type="password"
                  placeholder="••••••••"
                />
              </div>

              <Button className="w-full">
                Login
              </Button>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <a href="/signup" className="font-medium text-blue-600">
                  Sign Up
                </a>
              </p>              
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}