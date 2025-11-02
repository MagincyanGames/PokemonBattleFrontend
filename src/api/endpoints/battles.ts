import type { Battle } from '../../entities/Battle'
import { API_URL } from '../api'

const URL = `${API_URL}/battles`
export async function findAll(): Promise<Battle[]> {
  const res = await fetch(`${URL}`)
  const json = await res.json()
  return json.obj as Battle[]
}
