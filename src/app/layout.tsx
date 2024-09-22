import './globals.css'

import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
	title: 'TODO List',
	description: 'Um aplicativo de lista de tarefas',
}

interface Props {
	children: ReactNode
}

export default function RootLayout({ children }: Readonly<Props>) {
	return (
		<html lang="pt-BR">
			<body>
				<Toaster
					richColors
					closeButton
					expand
					duration={3000}
					position="top-center"
				/>
				{children}
			</body>
		</html>
	)
}
