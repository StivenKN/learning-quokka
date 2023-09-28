'use client'

import { Button, Card, CardBody, CardHeader } from '@nextui-org/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { type ReactElement } from 'react'

export const InfoCardsNoImage = (): ReactElement => {
  const router = useRouter()

  const linkClickRoute = (): void => {
    router.push('/courses')
  }
  return (
    <Card isPressable onPress={linkClickRoute} className='p-2 '>
      <CardHeader className='grid justify-center'>
        <h3 className='text-center text-lg font-bold capitalize'>Cursos disponibles</h3>
      </CardHeader>
      <CardBody className='flex flex-col items-center gap-3 pt-0'>
        <p className='text-lg'>¿Necesitas aprender algo nuevo?</p>
        <Button href='/courses' as={Link} color='warning'>
          Mirar cursos
        </Button>
      </CardBody>
    </Card>
  )
}

export const InfoCardImage = (): ReactElement => {
  const router = useRouter()

  const linkClickRoute = (): void => {
    router.push('/courses')
  }
  return (
    <Card isPressable onPress={linkClickRoute} className='p-2 '>
      <CardHeader className='grid justify-center'>
        <h3 className='text-center text-lg font-bold capitalize'>Vacantes y salarios</h3>
      </CardHeader>
      <CardBody className='flex flex-col items-center gap-3 pt-0'>
        <p className='text-center text-lg'>¿Necesitas aprender algo nuevo?</p>
        <Button href='/courses' as={Link} color='warning'>
          Mirar cursos
        </Button>
      </CardBody>
    </Card>
  )
}
