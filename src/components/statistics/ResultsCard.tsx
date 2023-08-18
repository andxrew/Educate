import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Award, Trophy } from "lucide-react"

type Props = {
	accuracy: number
}

const ResultsCard = ({ accuracy }: Props) => {
	return (
		<Card className="md:col-span-7">
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
				<CardTitle className="text-2xl font-bold"> Results </CardTitle>
				<Award />
			</CardHeader>
			<CardContent className="flex flex-col items-center justify-center h-3/5">
				<>
					{accuracy >= 75 ? (
						<>
							<Trophy
								className="mr-4 text-center"
								stroke="gold"
								size={50}
							/>
							<div className="flex flex-col text-2xl font-semibold text-yellow-400">
								<span className=" text-center">Amazing!</span>
								<span className="text-sm text-center  opacity-50">
									You got {accuracy}% correct!
								</span>
							</div>
						</>
					) : accuracy >= 60 ? (
						<>
							<Trophy
								className="mr-4"
								stroke="silver"
								size={50}
							/>
							<div className="flex flex-col text-2xl font-semibold text-gray-400">
								<span className=" text-center">Good Job!</span>
								<span className="text-sm text-center opacity-50 ">
									You got {accuracy}% correct!
								</span>
							</div>
						</>
					) : accuracy >= 40 ? (
						<>
							<Trophy
								className="mr-4"
								stroke="#78350f"
								size={50}
							/>
							<div className="flex flex-col text-2xl font-semibold text-amber-800">
								<span className=" text-center">Nice Try!</span>
								<span className="text-sm text-center text-muted-foreground ">
									You got {accuracy}% correct!
								</span>
							</div>
						</>
					) : (
						<>
							<Trophy
								className="mr-4"
								size={50}
							/>
							<div className="flex flex-col text-2xl font-semibold text-black dark:text-white">
								<span className="text-center">Try Again!</span>
								<span className="text-sm text-center  opacity-50">
									You got {accuracy}% correct!
								</span>
							</div>
						</>
					)}
				</>
			</CardContent>
		</Card>
	)
}

export default ResultsCard
