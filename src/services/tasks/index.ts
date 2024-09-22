import { createTask } from '@/services/tasks/create'
import { showManyTasks } from '@/services/tasks/show-many'
import { editTask } from '@/services/tasks/edit'
import { removeTask } from '@/services/tasks/remove'

export const tasksService = {
	showManyTasks,
	createTask,
	editTask,
	removeTask,
}
