import axios, { type AxiosResponse } from 'axios'
import { type ReactElement } from 'react'

async function getData(id: string): Promise<AxiosResponse | { data: string }> {
  try {
    const response = await axios.get(`https://l95c1m74-3002.use2.devtunnels.ms/section/${id}`)
    return response
  } catch (error: any) {
    return { data: 'null' }
  }
}

export default async function Page({ params }: { params: { id: string } }): Promise<ReactElement> {
  const res = await getData(params.id)
  const { Informacion, Titulo } = res.data[0]
  return (
    <section className='mx-auto flex w-4/5 flex-col gap-3 pt-3'>
      <h2 className='text-center text-3xl'>{Titulo}</h2>
      <p>{Informacion}</p>
    </section>
  )
}
