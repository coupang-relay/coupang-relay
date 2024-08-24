import { NextResponse } from 'next/server'
import ProductDatabase from '../../api/db'

export async function GET(request: Request, { params }: { params: { term: string } }) {
  try {
    const db = await ProductDatabase.getInstance()
    let result = db.search(params.term, { page: 1, pageSize: 30 })
    return NextResponse.json(result)
  } catch (error) {
    console.error('Error in POST request:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
