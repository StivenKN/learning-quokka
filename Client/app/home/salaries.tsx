'use client'
import { Card, CardBody } from '@nextui-org/react'
import Image from 'next/image'
import { type ReactElement } from 'react'

interface propsCard {
  imgSrc: string
  text: string
}

export const SalariesCards = (): ReactElement => {
  const imageSize = 300

  const cardsData: propsCard[] = [
    { imgSrc: '/salaries.jpg', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis dolorem minima voluptatibus laborum deleniti est labore molestiae quo debitis similique repellendus maiores unde pariatur voluptates delectus, possimus fugit aliquam maxime?' },
    { imgSrc: '/salaries.jpg', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis dolorem minima voluptatibus laborum deleniti est labore molestiae quo debitis similique repellendus maiores unde pariatur voluptates delectus, possimus fugit aliquam maxime?' },
    { imgSrc: '/salaries.jpg', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis dolorem minima voluptatibus laborum deleniti est labore molestiae quo debitis similique repellendus maiores unde pariatur voluptates delectus, possimus fugit aliquam maxime?' }
  ]

  return (
    <section className='flex flex-col gap-8'>
      <header>
        <h2 className='text-center text-3xl font-bold'>Vacantes y salarios</h2>
      </header>
      <section>
        <ul className='flex flex-col gap-4'>
          {cardsData.map(({ imgSrc, text }, index) => (
            <Card key={index}>
              <CardBody className='grid grid-rows-2 items-center gap-8 sm:grid-cols-[auto_1fr] sm:grid-rows-none'>
                <section className='flex justify-center'>
                  <Image src={imgSrc} alt='Salaries' width={imageSize} height={imageSize} className='rounded' />
                </section>
                <section>
                  <p>{text}</p>
                </section>
              </CardBody>
            </Card>
          ))}
        </ul>
      </section>
    </section>
  )
}
