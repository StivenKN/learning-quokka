'use client'

import Image from 'next/image'
import { Navbar as NextNavbar, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarItem, Button } from '@nextui-org/react'
import { type ReactElement, useState, useEffect } from 'react'
import Link from 'next/link'
import { userCookie } from '@/store/global'
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'

export default function Navbar(): ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [infoUser, setInfoUser]: any = useState(null)
  const cookie = Cookies.get('userData')
  const { setUserData }: any = userCookie()

  useEffect(() => {
    if (cookie !== undefined || String(cookie).length > 0) {
      const decoded: any = jwt.decode(cookie as string)
      if (decoded === null) return
      const payload = decoded.payload
      setUserData(payload)
      setInfoUser(payload)
    }
  }, [cookie, setUserData])

  const logout = (): void => {
    Cookies.remove('userData')
    window.location.reload()
  }

  const responsiveItems = [
    { text: 'Inicio', link: '/' },
    { text: 'Cursos', link: '/courses' },
    { text: 'Registro', link: '/register' },
    { text: 'Iniciar sesión', link: '/login' }
  ]

  return (
    <NextNavbar className='bg-[#121212]' isMenuOpen={isMenuOpen} isBordered shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify={'start'} className='flex gap-8'>
        <NavbarMenuToggle className='text-white sm:hidden' aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
        <section className='flex items-center gap-2'>
          <Image src={'/quokka.png'} width={50} height={50} alt={'logo'} />
          <p className='capitalize text-white'>Quokkas Learning</p>
        </section>
      </NavbarContent>
      <NavbarContent justify='center' className='hidden sm:flex'>
        <NavbarItem>
          <Link href={'/'}>Inicio</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={'/courses'}>Cursos</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end' className='hidden sm:flex sm:gap-8'>
        {infoUser !== null ? (
          <>
            <p>{infoUser.userName ?? infoUser.userEmail ?? undefined}</p>
            <Button onClick={logout}>Cerrar sesión</Button>
          </>
        ) : (
          <>
            <Link href={'/register'}>Registrarse</Link>
            <Link href={'/login'}>Iniciar sesión</Link>
          </>
        )}
      </NavbarContent>
      <NavbarMenu className='dark'>
        {infoUser !== null ? (
          <>
            {responsiveItems.slice(0, 2).map(({ text, link }, index) => (
              <NavbarMenuItem key={`${text}-${index}`}>
                <Link className='w-full text-white' href={link}>
                  {text}
                </Link>
              </NavbarMenuItem>
            ))}
            <p>{infoUser.userName ?? infoUser.userEmail ?? undefined}</p>
            <Button onClick={logout}>Cerrar sesión</Button>
          </>
        ) : (
          responsiveItems.map(({ text, link }, index) => (
            <NavbarMenuItem key={`${text}-${index}`}>
              <Link className='w-full text-white' href={link}>
                {text}
              </Link>
            </NavbarMenuItem>
          ))
        )}
      </NavbarMenu>
    </NextNavbar>
  )
}
