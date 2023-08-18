import SignInButton from "@/components/SignInButton"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { getAuthSession } from "@/lib/nextauth"
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons"
import { redirect } from "next/navigation"

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Link from "next/link"
import { Copyright, GithubIcon } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export default async function Home() {
	const session = await getAuthSession()
	if (session?.user) {
		//that means the user is logged in
		return redirect("/dashboard")
	}
	return (
		<div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
			<AlertDialog>
				<AlertDialogTrigger className="w-full">
					<Button className="w-full mb-2">
						{" "}
						Whats This?
						<QuestionMarkCircledIcon className="w-6 h-6 ml-4" />{" "}
					</Button>
				</AlertDialogTrigger>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>
							This is Educate!
							<span className="text-gray-400 flex flex-row text-sm items-center justify-center sm:justify-start ">
								Developed by Drew 2023{" "}
								<Copyright className=" ml-1 w-2 h-2 flex items-center" />
							</span>
						</AlertDialogTitle>
						<AlertDialogDescription>
							<Link
								href={"https://github.com/andxrew/Educate"}
								target="_blank"
								className="flex flex-row items-center gap-2 justify-center sm:justify-start"
							>
								<span className="text-black flex flex-row items-center gap-2 font-semibold dark:text-white">
									Github
									<GithubIcon className="w-6 h-6 my-2" />
								</span>
							</Link>
							Educate is an app built to help you learn - new topics, new ideas,
							new concepts. Instead of reading straight from a textbook, you can
							learn through quizzes, which are more engaging and fun.
							<br />
							<Separator className="my-3" />
							<h1 className="text-lg font-semibold mb-2">Built Using</h1>
							<div className="flex flex-col">
								<div className="flex flex-col items-center space-x-4 p-3">
									<div className="flex flex-row space-x-5 p-4">
										<div className="flex flex-row items-center font-semibold  ">
											<Image
												src={"/next-js.svg"}
												alt="NextJs"
												width={40}
												height={40}
												className="mr-1 dark:filter dark:invert"
											/>
											NextJS 13
										</div>
										<div className="flex flex-row items-center font-semibold">
											<Image
												src={"/tailwind-css-icon.svg"}
												alt="NextJs"
												width={40}
												height={40}
												className="mr-1"
											/>
											Tailwind CSS
										</div>
										<div className="flex flex-row items-center font-semibold">
											<Image
												src={"/nextauth.png"}
												alt="NextJs"
												width={40}
												height={40}
												className="mr-1"
											/>
											NextAuth
										</div>
									</div>
									<div className="flex flex-row space-x-5 p-4">
										<div className="flex flex-row items-center font-semibold">
											<Image
												src={"/openai.svg"}
												alt="NextJs"
												width={40}
												height={40}
												className="mr-1 dark:filter dark:invert"
											/>
											OpenAI
										</div>
										<div className="flex flex-row items-center font-semibold">
											<Image
												src={"/reactquery.png"}
												alt="NextJs"
												width={40}
												height={40}
												className="mr-1 "
											/>
											React Query
										</div>
										<div className="flex flex-row items-center font-semibold">
											<Image
												src={"/prisma.svg"}
												alt="NextJs"
												width={40}
												height={40}
												className="mr-1 dark:filter dark:invert"
											/>
											Prisma
										</div>
									</div>
									<div className="flex flex-row space-x-5 p-4">
										<div className="flex flex-row items-center font-semibold">
											<Image
												src={"/typescript-icon.svg"}
												alt="NextJs"
												width={40}
												height={40}
												className="mr-1"
											/>
											Typescript
										</div>
									</div>
								</div>
							</div>
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogAction>Close</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>

			<Card className="w-[300px]">
				<CardHeader>
					<CardTitle>Welcome to Educate!</CardTitle>
					<CardDescription>
						Educate is a quiz app that allows you to create and take quizzes,
						enhancing your knowledge on a variety of topics.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<SignInButton text="Sign in with Google" />
				</CardContent>
			</Card>
		</div>
	)
}
