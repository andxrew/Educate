"use client"
import { User } from "next-auth"
import React from "react"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import Link from "next/link"
import { signOut } from "next-auth/react"
import { Button } from "./ui/button"
import { LogOut } from "lucide-react"
import UserAvatar from "./UserAvatar"

type Props = {
	user: Pick<User, "name" | "image" | "email">
}

const UserAccountNav = ({ user }: Props) => {
	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger>
					{/* User avatar*/}
					<UserAvatar user={user} />
				</DropdownMenuTrigger>
				<DropdownMenuContent
					className="bg-white dark:bg-slate-800"
					align="end"
				>
					<div className="flex items-center justify-start gap-2 p-2">
						<div className="flex flex-col space-y-1 leading-none">
							{user.name && <p className="font-medium"> {user.name}</p>}
							{user.email && (
								<p className="w-[200px] truncate text-sm text-zinc-700 dark:text-zinc-300">
									{user.email}
								</p>
							)}
						</div>
					</div>

					<DropdownMenuSeparator className="" />
					<DropdownMenuItem asChild>
						<Link href={"/"}>Dashboard</Link>
					</DropdownMenuItem>

					<DropdownMenuSeparator />
					<DropdownMenuItem
						onClick={(e) => {
							e.preventDefault()
							signOut().catch(console.error)
						}}
						className="text-red-600 cursor-pointer"
					>
						Sign Out
						<LogOut className="w-4 h-4 ml-2" />
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}

export default UserAccountNav
