import { Requests } from '@/services/httpRequest'
import { List } from './tecnologiesList'
import { type ReactElement } from 'react'

export async function getData(): Promise<string[]> {
  try {
    const getDataAPI = new Requests()
    const response = await getDataAPI.getCoursesData()
    return response
  } catch (error) {
    return [{ nombre: 'null', desc: 'null' }] as any[]
  }
}

export default async function Page(): Promise<ReactElement> {
  const data = await getData()

  return (
    <section className='flex flex-col gap-5 pt-5'>
      <h2 className='text-center text-3xl'>Listado de cursos</h2>
      <List tecnologies={data} />
    </section>
  )
}
