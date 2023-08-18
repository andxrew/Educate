import Image from "next/image"
import React from "react"
import { Progress } from "./ui/progress"

type Props = {
	finished: boolean
}

const loadingTexts = [
	"Generating Questions... Please wait.",
	"Loading... Grab some popcorn, this isn't a cutscene, but it's still epic!",
	"Calculating the meaning of life, the universe, and the next level... Please wait.",
	"Loading... Did you know jumping 100 times increases loading speed by 0%? Try it while you wait!",
	"Unfolding origami maps for your virtual adventure... One crease at a time.",
	"Reticulating splines... , We have no idea what that means either.",
	"Summoning dragons to breathe fire into your gaming experience. ETA: Soon™.",
	"Convincing NPCs to stay in line... It's like herding cats, but with code.",
	"Collecting enough mana to power up our loading screen spells... Almost there!",
	"Loading... Our hamsters are on overtime, running in their tiny wheels to power this up.",
	"Brace yourselves, the loading screen quotes are coming!",
	"Loading... Because cutting-edge graphics need a few seconds to sharpen.",
	"Channeling the spirit of a thousand students to speed up this loading process.",
	"Hold on tight! Our loading screen is faster than a speeding bullet... well, almost.",
	"Reorganizing inventory... Our developers found too many memes and had to tidy up.",
	"Loading... Time flies when you're having fun. Or when you're waiting for loading.",
	"Warping through the loading tunnel. Mind the gap between dimensions.",
	"Have you tried turning it off and on again? Just kidding, it's actually loading.",
	"Waiting for the last pixel to be hand-painted by our digital artists. Perfection takes time.",
	"Loading... Because good things come to those who wait.",
	"This loading screen is brought to you by the letter L.",
	"This took longer to load than the actual game. We're kidding, it's still loading.",
	"This took way too long to code. Next time we'll let the monkeys do it.",
	"Locked and loaded... Torbjörn's turret is helping optimize loading speed.",
	"Crafting the perfect loading experience, block by block. Watch out for creepers!",
	"Loading... The Guide is double-checking the crafting recipe for this loading screen.",
	"Hold on, our servers are tapping into radiant energy to speed things up.",
]

const LoadingQuestions = ({ finished }: Props) => {
	const [progress, setProgress] = React.useState(0)
	const [loadingText, setLoadingText] = React.useState(loadingTexts[0])

	React.useEffect(() => {
		const interval = setInterval(() => {
			let randomIndex = Math.floor(Math.random() * loadingTexts.length)
			setLoadingText(loadingTexts[randomIndex])
		}, 2000)
		return () => clearInterval(interval)
	}, [])

	React.useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prev) => {
				if (finished) {
					return 100
				}
				if (prev === 100) {
					return 0
				}
				if (Math.random() < 0.1) {
					return prev + 10
				}
				return prev + 0.5
			})
		}, 1000)
		return () => clearInterval(interval)
	}, [finished])

	return (
		<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] md:w-[60vw] flex flex-col items-center">
			<Image
				src={"/loadingblack.gif"}
				alt="Loading..."
				width={400}
				height={400}
			/>
			<Progress
				value={progress}
				className="w-full mt-4"
			/>
			<h1 className="mt-2 text-md">{loadingText}</h1>
		</div>
	)
}

export default LoadingQuestions
