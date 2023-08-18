"use client"
import { useTheme } from "next-themes"
import React from "react"
import D3WordCloud from "react-d3-cloud"
import { useRouter } from "next/navigation"

type Props = {
	formattedTopics: { text: string; value: number }[]
}

const fontSizeMapper = (word: { value: number }) => {
	return Math.log2(word.value) * 5 + 16
}

const CustomWordCloud = ({ formattedTopics }: Props) => {
	const theme = useTheme()
	const router = useRouter()
	return (
		<>
			<D3WordCloud
				data={formattedTopics}
				height={550}
				font="Times"
				fontSize={fontSizeMapper}
				rotate={0}
				padding={10}
				fill={theme.theme === "dark" ? "white" : "black"}
				onWordClick={(event, word) => {
					router.push(`/quiz?topic=${word.text}`)
				}}
			/>
		</>
	)
}

export default CustomWordCloud