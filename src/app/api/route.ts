import { NextResponse } from 'next/server'
import ProductDatabase from './db'

export async function GET(request: Request) {
  try {
    const db = await ProductDatabase.getInstance()
    let result
    result = db.list({ page: 1, pageSize: 30 })

    return NextResponse.json(result)
  } catch (error) {
    console.error('Error in GET request:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
