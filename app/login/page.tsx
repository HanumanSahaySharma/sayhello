import { Input } from "@/components/ui/input";
import Container from "@/components/Container";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Login = () => {
  return (
    <Container className="max-w-2xl custom-min-h-screen flex items-center w-full">
      <div className="w-full bg-white dark:bg-zinc-800 rounded p-6 lg:p-10 shadow-xl">
        <h1 className="font-bold text-3xl text-zinc-800 dark:text-zinc-200 mb-8">Login</h1>
        <form className="mb-8">
          <div className="mb-8">
            <Label htmlFor="email" className="mb-4 block font-medium">
              Email address
            </Label>
            <Input
              type="text"
              className="rounded dark:bg-zinc-900/50 border-zinc-400 dark:border-zinc-500 focus:border-zinc-500 dark:focus:border-zinc-400 focus:!ring-offset-0 focus:shadow-none focus:ring-transparent"
            />
          </div>
          <div className="mb-8">
            <Label htmlFor="password" className="mb-4 block font-medium">
              Password
            </Label>
            <Input
              type="password"
              className="rounded dark:bg-zinc-900/50 border-zinc-400 dark:border-zinc-500 focus:border-zinc-500 dark:focus:border-zinc-400 focus:!ring-offset-0 focus:shadow-none focus:ring-transparent"
            />
          </div>
          <Button type="submit" size="lg" className="w-full text-white bg-red-1 hover:bg-red-2 rounded">
            SUBMIT
          </Button>
        </form>
        <p className="text-center">
          Would you like to Become a Member?
          <Link href="/signup" className="text-red-1 pl-1 hover:text-red-2 dark:text-pink-600 hover:underline">
            Join Us
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default Login;
