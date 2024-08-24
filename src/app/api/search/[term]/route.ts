import { NextResponse } from 'next/server'
import ProductDatabase from '../../../api/db'

export async function GET(request: Request, { params }: { params: { term: string } }) {
  const url = new URL(request.url)
  const page = url.searchParams.get('page')
  const size = url.searchParams.get('size')
  try {
    const db = await ProductDatabase.getInstance()
    let result = db.search(params.term, { page: page ? parseInt(page) : 1, size: size ? parseInt(size) : 30 })
    return NextResponse.json(result)
  } catch (error) {
    console.error('Error in POST request:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
