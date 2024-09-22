'use server'

import { tasksService } from '@/services/tasks'

export async function getTasksAction() {
	try {
		const { tasks } = await tasksService.showManyTasks()

		return tasks
	} catch (error) {
		throw new Error('Erro ao buscar tarefas!')
	}
}
