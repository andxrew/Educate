import { getAuthSession } from "@/lib/nextauth"
import React from "react"
import Link from "next/link"
import SignInButton from "./SignInButton"
import UserAccountNav from "./UserAccountNav"
import { ThemeToggle } from "./ThemeToggle"

type Props = {}

const Navbar = async (props: Props) => {
	const session = await getAuthSession()
	// console.log(session?.user);
	return (
		<div
			className="fixed w-full top-0 bg-white dark:bg-gray-950
        z-[10] h-[8%] shadow border-zinc-300 py-2"
		>
			<div
				className="flex items items-center justify-between h-full
            gap-2 px-8 mx-auto max-w-7xl"
			>
				{/* Logo */}
				<Link
					href={"/"}
					className="flex items-center gap-2"
				>
					<p className="rounded-lg border-2  border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
						Educate
					</p>
				</Link>
				<div className="flex items-center">
					<ThemeToggle className="mr-4" />

					<div className="flex items-center">
						{session?.user ? (
							<UserAccountNav user={session.user} />
						) : (
							<SignInButton text="Sign In" />
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
