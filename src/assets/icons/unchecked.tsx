interface Props {
	className?: string
}

export function UncheckedIcon({ className }: Props) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" className={className}>
			<title>Unchecked Icon</title>
			<rect width={23} height={23} x={0.5} y={0.5} fill="#fff" rx={3.5} />
			<rect width={23} height={23} x={0.5} y={0.5} stroke="#B0BBD1" rx={3.5} />
		</svg>
	)
}
