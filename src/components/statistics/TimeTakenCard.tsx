import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Hourglass } from "lucide-react"
import { formatTimeDelta } from "@/lib/utils"
import { differenceInSeconds } from "date-fns"

type Props = {
	timeEnded: Date
	timeStarted: Date
}

const TimeTakenCard = ({ timeEnded, timeStarted }: Props) => {
	return (
		<Card className="md:col-span-4">
			<CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
				<CardTitle className="text-2xl font-bold">Time Taken</CardTitle>
				<Hourglass />
			</CardHeader>
			<CardContent className="flex flex-row">
				<div className="text-sm font-medium items-center">
					{formatTimeDelta(differenceInSeconds(timeEnded, timeStarted))}
				</div>
				<span className=" ml-48 text-xs text-gray-500 items-center dark:text-gray-500">
					Time accuracy may vary
				</span>
			</CardContent>
		</Card>
	)
}

export default TimeTakenCard
