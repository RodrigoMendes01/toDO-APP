interface Props {
	className?: string
}

export function CheckedIcon({ className }: Props) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" className={className}>
			<title>Checked Icon</title>
			<rect width={23} height={23} x={0.5} y={0.5} fill="#A0DCF6" rx={3.5} />
			<rect width={23} height={23} x={0.5} y={0.5} stroke="#0796D3" rx={3.5} />
			<path
				stroke="#0796D3"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.5}
				d="m18 7.5-8.25 8.25L6 12"
			/>
		</svg>
	)
}
