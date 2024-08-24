import { NextResponse } from 'next/server'
import ProductDatabase from './db'

export async function GET(request: Request) {
  try {
    const db = await ProductDatabase.getInstance()
    let result
    const url = new URL(request.url)
    const page = url.searchParams.get('page')
    const size = url.searchParams.get('size')
    result = db.list({ page: page ? parseInt(page) : 1, size: size ? parseInt(size) : 30 })

    return NextResponse.json(result)
  } catch (error) {
    console.error('Error in GET request:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
