import { NextResponse } from 'next/server'
import ProductDatabase from '../../../api/db'

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  try {
    const db = await ProductDatabase.getInstance()
    const productId = params.id
    if (!productId) {
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 })
    }
    let result = db.get(parseInt(productId, 10))
    return NextResponse.json(result)
  } catch (error) {
    console.error('Error in POST request:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
