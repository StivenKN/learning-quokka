'use client'

import { Card, CardBody, CardHeader } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export const List = ({ tecnologies }: { tecnologies: any[] }): JSX.Element => {
  const router = useRouter()
  const infoToShow = tecnologies.flat(Infinity)
  const toSlice = infoToShow.length / 2
  const arr = infoToShow.map((_, index, obj) => {
    return { nombre: obj[index], desc: obj[index + 2] }
  })

  const handleLink = (id: number): void => {
    router.push(`/courses/${id}`)
  }

  return (
    <section className='mx-auto flex w-4/5 flex-col gap-3'>
      {arr[0].nombre.nombre === 'null' ? (
        <p className='text-red-500'>Sin datos</p>
      ) : (
        arr.slice(0, toSlice).map((data: any, key: number) => {
          return (
            <Card
              isPressable
              key={key}
              className='py-3'
              onPress={() => {
                handleLink(key + 1)
              }}
            >
              <CardHeader className='flex justify-center'>
                <h2>{data.nombre.NombreTecnologia}</h2>
              </CardHeader>
              <CardBody>
                <p>{data.desc.Descripcion}</p>
              </CardBody>
            </Card>
          )
        })
      )}
    </section>
  )
}
