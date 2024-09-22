'use server'

import { tasksService } from '@/services/tasks'

export async function editTaskStatusAction(formData: FormData) {
	const id = formData.get('id') as string
	const taskStatus = formData.get('status') as string
	const newStatus = taskStatus === 'UNREALIZED' ? 'REALIZED' : 'UNREALIZED'

	try {
		return await tasksService.editTask(id, {
			status: newStatus,
		})

	} catch (error) {
		throw new Error('Erro ao atualizar o status da tarefa!')
	}
}
