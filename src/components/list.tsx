'use client'

import type { ITaskDTO } from '@/dtos/tasks'
import { Card } from '@/components/card'

interface Props {
	tasks: ITaskDTO[]
	onOpenDeleteModal(): void
	onCloseDeleteModal(): void
	isDeleteModalOpen: boolean
	handleDeleteTask(id: string): void
	handleEditStatusTask(id: string, taskStatus: string): void
}

export function List({
	isDeleteModalOpen,
	onCloseDeleteModal,
	onOpenDeleteModal,
	tasks,
	handleEditStatusTask,
	handleDeleteTask,
}: Props) {
	const completedTasks = tasks.filter((task) => task.status === 'REALIZED')
	const pendingTasks = tasks.filter((task) => task.status === 'UNREALIZED')

	return (
		<div className="flex flex-col gap-6 w-full">
			<div className="flex flex-col gap-6">
				<h2 className="tracking-[-2%] text-black/55 text-center font">
					Suas tarefas de hoje
				</h2>

				<div className="flex flex-col gap-6">
					{pendingTasks.length === 0 ? (
						<p className="p-6 text-center">Nenhuma tarefa encontrada</p>
					) : (
						pendingTasks.map((task) => (
							<Card
								key={task.id}
								task={task}
								isDeleteModalOpen={isDeleteModalOpen}
								onCloseDeleteModal={onCloseDeleteModal}
								handleDeleteTask={handleDeleteTask}
								onOpenDeleteModal={onOpenDeleteModal}
								handleEditStatusTask={handleEditStatusTask}
							/>
						))
					)}
				</div>
			</div>

			<div className="flex flex-col gap-6">
				<h2 className="tracking-[-2%] text-black/55 text-center">
					Tarefas finalizadas
				</h2>

				<div className="flex flex-col gap-6">
					{completedTasks.length === 0 ? (
						<p className="p-6 text-center">Nenhuma tarefa realizada</p>
					) : (
						completedTasks.map((task) => (
							<Card
								key={task.id}
								task={task}
								isDeleteModalOpen={isDeleteModalOpen}
								onCloseDeleteModal={onCloseDeleteModal}
								handleDeleteTask={handleDeleteTask}
								onOpenDeleteModal={onOpenDeleteModal}
								handleEditStatusTask={handleEditStatusTask}
							/>
						))
					)}
				</div>
			</div>
		</div>
	)
}
