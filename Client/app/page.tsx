import { type ReactElement } from 'react'
import { Chart } from '@/home/chart'
import { InfoCardImage, InfoCardsNoImage } from '@/home/infoCards'
import { SalariesCards } from '@/home/salaries'

export default function Home(): ReactElement {
  return (
    <>
      <section className='mx-auto flex w-4/5 flex-col gap-10'>
        <section>
          <header className='flex flex-col gap-4 px-10 py-9 text-center'>
            <h1 className='text-5xl font-bold'>¿Estudiar carreras STEM?</h1>
            <h3>STEM representa un enfoque integral para abordar los desafíos y oportunidades en el mundo contemporáneo. </h3>
          </header>
          <section className='flex flex-col gap-3'>
            <h2 className='text-center font-bold'>Tasa de deserción por estratos</h2>
            <section className='flex flex-col gap-8'>
              <section className='sm:mx-auto sm:w-3/5'>
                <Chart />
              </section>
            </section>
          </section>
        </section>
        <section className='grid grid-rows-2 gap-4 sm:grid sm:grid-cols-2 sm:grid-rows-none'>
          <InfoCardsNoImage />
          <InfoCardImage />
        </section>
        <section>
          <SalariesCards />
        </section>
      </section>
    </>
  )
}
