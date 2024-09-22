'use client'

import { Fragment, useEffect, useState } from 'react'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import type { ITaskDTO } from '@/dtos/tasks'
import { createTaskAction } from '@/app/_actions/create-task-action'
import { deleteTaskAction } from '@/app/_actions/delete-task-action'
import { editTaskStatusAction } from '@/app/_actions/edit-task-action'
import { LogoIcon } from '@/assets/icons'
import { Modal } from '@/components/modal'
import { List } from '@/components/list'
import { getTasksAction } from '../_actions/get-tasks-action'

export function HomeList() {
	const [tasks, setTasks] = useState<ITaskDTO[]>([])
	const [currentDate, setCurrentDate] = useState('')
	const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false)
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

	const schema = z.object({
		name: z.string().min(1, '* nome necessário'),
	})

	type FormDataCreateTask = z.infer<typeof schema>

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<FormDataCreateTask>({
		resolver: zodResolver(schema),
	})

	useEffect(() => {
		const date = new Date()
		const dateFormat = date.toLocaleDateString('pt-BR', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		})

		const formattedDate = dateFormat.charAt(0).toUpperCase() + dateFormat.slice(1)

		setCurrentDate(formattedDate)
	}, [])

	function openNewTaskModal() {
		setIsNewTaskModalOpen(true)
	}

	function closeNewTaskModal() {
		setIsNewTaskModalOpen(false)
	}

	function openDeleteModal() {
		setIsDeleteModalOpen(true)
	}

	function closeDeleteModal() {
		setIsDeleteModalOpen(false)
	}

	const handleDeleteTask = async (id: string) => {
		try {
			const formData = new FormData()
			formData.append('id', id)

			await deleteTaskAction(formData)
			setTasks((prev) => prev.filter((task) => task.id !== id))
			setIsDeleteModalOpen(false)
			toast.success('Tarefa removida com sucesso!')
		} catch (error) {
			toast.error('Erro ao remover tarefa!')
		}
	}

	const handleEditStatusTask = async (id: string, taskStatus: string) => {
		try {
			const formData = new FormData()
			formData.append('id', id)
			formData.append('status', taskStatus)

			const updatedTask = await editTaskStatusAction(formData)

			// setTasks((prev: ITaskDTO[]) =>
			// 	prev.map((task: ITaskDTO) => (task.id === updatedTask.id ? (updatedTask as ITaskDTO) : task)),
			// )

			handleGetAllTask()

			toast.success('Status da tarefa atualizado com sucesso!')
		} catch (error) {
			toast.error('Erro ao atualizar o status da tarefa!')
		}
	}

	const handleCreateTask = handleSubmit(async (data) => {
		try {
			const formData = new FormData()
			formData.append('name', data.name)

			const newTask = await createTaskAction(formData)

			// setTasks((prev: ITaskDTO[]) => [...prev, newTask as ITaskDTO]);

			handleGetAllTask()
			reset()
			setIsNewTaskModalOpen(false)
			toast.success('Tarefa cadastrada com sucesso!')
		} catch (error) {
			toast.error('Erro ao cadastrar tarefa!')
		}
	})

	const handleGetAllTask = async () => {
		try {
			const data = await getTasksAction()

			setTasks(data)
		} catch (error) {
			toast.error('Erro ao buscar tarefas!')
		}
	}

	useEffect(() => {
    handleGetAllTask()
  }, [])

	return (
		<Fragment>
			<header>
				<div className="flex justify-between pb-6 border-b border-[#D7DDE9] max-md:flex-col max-md:gap-5">
					<LogoIcon className='w-[150px] h-[36px]'/>
					<h1 className="font-medium text-2xl tracking-[-2%] text-black max-md:text-base">
						Bem-vindo de volta, Marcus
					</h1>
					<p className="tracking-[-2%] font-normal text-base">{currentDate}</p>
				</div>
			</header>

			<div className="flex justify-center">
				<div className="flex flex-col gap-8">
					<div className="flex flex-col gap-6 rounded-2xl border border-[#EAECF0] w-[450px] items-center p-8">
						<List
							tasks={tasks}
							handleEditStatusTask={handleEditStatusTask}
							onOpenDeleteModal={openDeleteModal}
							onCloseDeleteModal={closeDeleteModal}
							handleDeleteTask={handleDeleteTask}
							isDeleteModalOpen={isDeleteModalOpen}
						/>
					</div>

					<button
						type="button"
						className="w-full text-main font-medium bg-blue-gradient rounded-lg py-4 px-6 transition-all hover:opacity-85 focus-visible:ring-[#53C0F0] border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
						onClick={openNewTaskModal}
					>
						Adicionar nova tarefa
					</button>

					<Modal
						title="Nova tarefa"
						open={isNewTaskModalOpen}
						onClose={closeNewTaskModal}
					>
						<form
							onSubmit={handleCreateTask}
							className="flex flex-col gap-2"
							id="new-task"
						>
							<label htmlFor="title" className="font-normal tracking-[-2%]">
								Título
							</label>
							<input
								className="rounded-lg ring-offset-background transition-all focus-visible:ring-[#53C0F0] border border-[#D7DDE9] p-4 outline-none placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
								type="text"
								placeholder="Digite"
								id="title"
								{...register('name')}
							/>
							<span className="text-warn">{errors.name?.message}</span>
						</form>

						<div className="flex gap-4 justify-between max-md:flex-col-reverse">
							<button
								type="button"
								onClick={closeNewTaskModal}
								className="w-full text-black bg-[#E7EEFB] rounded-lg py-4 px-6 transition-all hover:bg-[#e0e7f3] focus-visible:ring-[gray] border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
							>
								Cancelar
							</button>

							<button
								form="new-task"
								type="submit"
								className="w-full text-main font-medium bg-blue-gradient rounded-lg py-4 px-6 transition-all hover:opacity-85 focus-visible:ring-[#53C0F0] border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
							>
								Adicionar
							</button>
						</div>
					</Modal>
				</div>
			</div>
		</Fragment>
	)
}
