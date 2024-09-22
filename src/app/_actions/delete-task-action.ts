'use server'

import { tasksService } from '@/services/tasks'

export async function deleteTaskAction(formData: FormData) {
	const id = formData.get('id') as string

	try {
		await tasksService.removeTask(id)
	
		return true
	} catch (error) {
		throw new Error('Erro ao remover task!')
	}
}
