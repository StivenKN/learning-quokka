'use client'

import { type ReactElement } from 'react'

import { BarChart, Bar, XAxis, CartesianGrid, ResponsiveContainer, YAxis } from 'recharts'

export const Chart = (): ReactElement => {
  const data = [
    {
      name: '1 y 2',
      number: 70,
      total: 100
    },
    {
      name: '3, 4, 5 y 6',
      number: 10,
      total: 100
    }
  ]
  return (
    <main>
      <ResponsiveContainer width='100%' height={250}>
        <BarChart width={300} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey={'name'} />
          <YAxis dataKey={'total'} />
          <Bar dataKey='number' fill='#fb5607' />
        </BarChart>
      </ResponsiveContainer>
    </main>
  )
}
