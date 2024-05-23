"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { logout } from "@/app/redux/user/userSlice";

import Container from "./Container";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { LucideMoon, LucidePlus, LucideSun } from "lucide-react";

import { useTheme } from "next-themes";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.user);
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState<boolean>(false);
  const handleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return (
    <header className="fixed top-0 z-10 w-full py-2 dark:bg-zinc-800 bg-white shadow-sm light:shadow-zinc-100">
      <Container className="flex items-center justify-between gap-2">
        <div className="logo">
          <Link href="/">
            <Image src="./logo.svg" alt="Logo" width="120" height="50" />
          </Link>
        </div>
        <div className="flex items-center justify-end gap-2 md:gap-4">
          {hasMounted && theme === "light" ? (
            <Button
              onClick={handleTheme}
              className="px-3 text-zinc-600 hover:text-zinc-800 dark:hover:text-zinc-300 dark:text-zinc-300 hover:bg-zinc-100 rounded"
            >
              <LucideMoon size={18} />
            </Button>
          ) : (
            <Button
              onClick={handleTheme}
              className="px-3 text-zinc-600 hover:text-zinc-300 dark:hover:text-zinc-200 dark:text-zinc-300 dark:hover:bg-zinc-700 rounded"
            >
              <LucideSun size={18} />
            </Button>
          )}
          {!currentUser ? (
            <>
              <Link
                href="/login"
                className="text-sm md:text-[15px] px-2 md:px-4 py-1.5 rounded font-normal border border-zinc-200 dark:border-zinc-600 dark:text-zinc-300 dark:hover:text-zinc-100 text-zinc-600 dark:hover:bg-zinc-600 dark:bg-zinc-700 bg-white hover:text-zinc-800 hover:bg-zinc-100 transition-all whitespace-nowrap"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="flex items-center gap-2 px-2 text-sm md:text-[15px] md:px-3 py-1.5 rounded text-white bg-red-1 hover:bg-red-2 transition-all whitespace-nowrap"
              >
                Become a Member
              </Link>
            </>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger className="focus-visible:outline-none">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback className="font-medium">
                    {currentUser.name.split(" ").map((item: string) => item.charAt(0))}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-50 min-w-[10rem] shadow-xl rounded border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800">
                <DropdownMenuLabel>
                  <div>{currentUser.name}</div>
                  <div>{currentUser.email}</div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-zinc-300 dark:bg-zinc-700" />
                <DropdownMenuItem className="rounded text-zinc-600 hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 cursor-pointer">
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => dispatch(logout())}
                  className="rounded text-zinc-600 hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 cursor-pointer"
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          {currentUser && (
            <Link
              href="/article/create"
              className="flex items-center gap-2 px-2 text-sm md:text-[15px] md:px-3 py-1.5 rounded text-white bg-red-1 hover:bg-red-2 transition-all whitespace-nowrap"
            >
              <LucidePlus className="md:hidden block" size={18} />
              <span className="md:block hidden">Create Post</span>
            </Link>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
