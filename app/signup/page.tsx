"use client";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
// UI Components
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import Container from "@/components/Container";

const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({});
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value.trim(),
    });
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("/api/signup", formData);
      setError(response.data.message);
      setLoading(false);
      if (response.data.status === 201) {
        setError(null);
        toast.success(response.data.message);
        router.push("/login");
      }
    } catch (error) {
      setError(null);
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <Container className="max-w-2xl custom-min-h-screen flex items-center w-full">
      <div className="w-full bg-white dark:bg-zinc-800 rounded p-6 lg:p-10 shadow-xl">
        <h1 className="font-bold text-3xl text-zinc-800 dark:text-zinc-200 mb-8">Sign Up</h1>
        {error && <div className="border border-red-1 text-red-1 bg-red-1/5 rounded px-4 py-2 mb-8">{error}</div>}
        <form className="mb-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5">
            <div className="mb-8">
              <Label htmlFor="firstName" className="mb-4 block font-medium">
                First name
              </Label>
              <Input
                type="text"
                id="firstName"
                onChange={handleChange}
                className="rounded dark:bg-zinc-900/50 border-zinc-400 dark:border-zinc-500 focus:border-zinc-500 dark:focus:border-zinc-400 focus:!ring-offset-0 focus:shadow-none focus:ring-transparent"
              />
            </div>
            <div className="mb-8">
              <Label htmlFor="lastName" className="mb-4 block font-medium">
                Last name
              </Label>
              <Input
                type="text"
                id="lastName"
                onChange={handleChange}
                className="rounded dark:bg-zinc-900/50 border-zinc-400 dark:border-zinc-500 focus:border-zinc-500 dark:focus:border-zinc-400 focus:!ring-offset-0 focus:shadow-none focus:ring-transparent"
              />
            </div>
          </div>
          <div className="mb-8">
            <Label htmlFor="email" className="mb-4 block font-medium">
              Email address
            </Label>
            <Input
              type="text"
              id="email"
              onChange={handleChange}
              className="rounded dark:bg-zinc-900/50 border-zinc-400 dark:border-zinc-500 focus:border-zinc-500 dark:focus:border-zinc-400 focus:!ring-offset-0 focus:shadow-none focus:ring-transparent"
            />
          </div>
          <div className="mb-8">
            <Label htmlFor="password" className="mb-4 block font-medium">
              Password
            </Label>
            <Input
              type="password"
              id="password"
              onChange={handleChange}
              className="rounded dark:bg-zinc-900/50 border-zinc-400 dark:border-zinc-500 focus:border-zinc-500 dark:focus:border-zinc-400 focus:!ring-offset-0 focus:shadow-none focus:ring-transparent"
            />
          </div>
          <Button type="submit" size="lg" className="w-full text-white bg-red-1 hover:bg-red-2 rounded">
            {loading ? <Spinner className="spin-animate" /> : "SUBMIT"}
          </Button>
        </form>
        <p className="text-center">
          Already have an account?
          <Link href="/login" className="text-red-1 pl-1 hover:text-red-2 dark:text-pink-600 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default SignUp;
