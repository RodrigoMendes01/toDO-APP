'use server'

import { tasksService } from '@/services/tasks'

export async function createTaskAction(formData: FormData) {
	const name = formData.get('name') as string

	try {
		return await tasksService.createTask({
			name,
			status: 'UNREALIZED',
		})
	} catch (error) {
		throw new Error('Erro ao cadastrar tarefa!')
	}
}
