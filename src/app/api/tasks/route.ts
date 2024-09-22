import { type NextRequest, NextResponse } from 'next/server'

import { db } from '@/utils/db'

export async function GET() {
	const tasks = await db.task.findMany({
		where: { deletedAt: null },
	})

	return NextResponse.json({ tasks })
}

export async function POST(request: NextRequest) {
	const { name, status } = await request.json()

	if (!name) {
		return NextResponse.json(
			{ error: 'O nome da tarefa é obrigatório!' },
			{ status: 400 },
		)
	}

	const task = await db.task.create({
		data: {
			name,
			status: status || 'UNREALIZED',
		},
	})

	return NextResponse.json({ task }, { status: 201 })
}
