"use client";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import Container from "@/components/Container";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/user/userSlice";
import { count } from "console";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);
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
      const response = await axios.post("/api/login", formData);
      setError(response.data.message);
      console.log(response);
      setLoading(false);
      if (response.data.status === 200) {
        setError(null);
        router.push("/");
        dispatch(setUser(response.data.user));
      }
    } catch (error) {
      setError(null);
      console.log(error);
      setLoading(false);
    }
  };

  // TODO CODE
  // END OF TODO CODE

  return (
    <Container className="max-w-2xl custom-min-h-screen flex items-center w-full">
      <div className="w-full bg-white dark:bg-zinc-800 rounded p-6 lg:p-10 shadow-xl">
        <h1 className="font-bold text-3xl text-zinc-800 dark:text-zinc-200 mb-8">Login</h1>
        {error && <div className="border border-red-1 text-red-1 bg-red-1/5 rounded px-4 py-2 mb-8">{error}</div>}
        <form className="mb-8" onSubmit={handleSubmit}>
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
