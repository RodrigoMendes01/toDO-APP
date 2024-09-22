import { type NextRequest, NextResponse } from 'next/server'

import { db } from '@/utils/db'

interface IParams {
	params: {
		taskId: string
	}
}

export async function PUT(request: NextRequest, { params }: IParams) {
	const { status } = await request.json()
	const { taskId } = params

	if (!status) {
		return NextResponse.json(
			{ error: 'O status da tarefa é obrigatório!' },
			{ status: 400 },
		)
	}

	const task = await db.task.update({
		where: { id: taskId },
		data: {
			status: status || 'UNREALIZED',
		},
	})

	return NextResponse.json({ task })
}

export async function DELETE(_request: NextRequest, { params }: IParams) {
	const { taskId } = params

	const task = await db.task.findUnique({
		where: { id: taskId, deletedAt: null },
	})

	if (!task) {
		return NextResponse.json({ error: 'Tarefa não encontrada!' }, { status: 404 })
	}

	await db.task.update({
		where: { id: taskId },
		data: { deletedAt: new Date() },
	})

	return NextResponse.json(
		{ message: 'Tarefa deletada com sucesso!' },
		{ status: 200 },
	)
}
