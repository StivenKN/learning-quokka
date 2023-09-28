'use client'

import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react'
import { useRef, type ReactElement, type RefObject, useState } from 'react'
import { registerSchema } from './validateData'
import { toast } from 'sonner'
import { Requests } from '@/services/httpRequest'
import { useRouter } from 'next/navigation'

export default function Register(): ReactElement {
  const formRef: RefObject<HTMLFormElement> = useRef(null)
  const [loading, setLoading] = useState(false)
  const [buttonValue, setButtonValue] = useState('Registrarse')
  const router = useRouter()

  const handleForm = (e: any): void => {
    e.preventDefault()
    setLoading(true)
    setButtonValue('Enviando datos')
    const formdata = new FormData(formRef.current as HTMLFormElement)
    const data = Object.fromEntries(formdata)
    registerSchema
      .validateAsync(data)
      .then(async ({ name, email, password }) => {
        const payload = { userName: name, userEmail: email, userPassword: password, userRole: 3, dbNameSpace: 'senasoft' }
        const sendData = new Requests()
        try {
          const response = await sendData.register(payload)
          if (response !== 200) throw new Error()
          toast.success('El usuario ha sido creado correctamente', {
            description: 'Se le redireccionará a la página de inicio en 2 segundos'
          })
          setTimeout(() => {
            router.push('/login')
          }, 2000)
        } catch (error) {
          console.error(error)
        }
      })
      .catch((err) => {
        toast.error('Los datos ingresados no son correctos', {
          description: err.message,
          duration: 3000
        })
      })
      .finally(() => {
        setLoading(false)
        setButtonValue('Registrarse')
      })
  }

  return (
    <section className='grid h-full place-content-center'>
      <section>
        <Card className='p-3'>
          <CardHeader className='grid items-center justify-center pb-1'>
            <h2 className='text-lg'>Regístrate aquí</h2>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleForm} ref={formRef} className='grid grid-rows-[1fr_auto] gap-5 pt-0'>
              <section className='flex flex-col gap-3'>
                <Input variant='bordered' name='name' label='Nombres completos' type='text' isRequired isClearable />
                <Input variant='bordered' name='email' label='Correo electrónico' type='email' isRequired isClearable />
                <Input variant='bordered' name='password' label='Contraseña' type='password' isRequired isClearable />
                <Input variant='bordered' name='confirm-password' label='Confirmar contraseña' type='password' isRequired isClearable />
              </section>
              <Button type='submit' isLoading={loading}>
                {buttonValue}
              </Button>
            </form>
          </CardBody>
        </Card>
      </section>
    </section>
  )
}
