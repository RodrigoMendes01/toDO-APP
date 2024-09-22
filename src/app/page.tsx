import type { Metadata } from 'next'

import { HomeList } from '@/app/_components/home-list'

export const metadata: Metadata = {
	title: 'TODO List',
	description: 'Um aplicativo de lista de tarefas',
}

export default async function Home() {
	return (
		<main className="min-h-screen min-w-screen bg-main flex flex-col gap-8 pt-6 px-14 max-md:px-6">
			<HomeList />
		</main>
	)
}
