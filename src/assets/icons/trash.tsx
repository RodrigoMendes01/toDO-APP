interface Props {
	className?: string
}

export function TrashIcon({ className }: Props) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" className={className}>
			<title>Trash Icon</title>
			<path
				stroke="#B0BBD1"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.333}
				d="M3 6h2m0 0h16M5 6v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6H5Zm3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
			/>
		</svg>
	)
}
