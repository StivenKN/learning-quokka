'use client'

import Image from 'next/image'
import { Navbar as NextNavbar, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarItem } from '@nextui-org/react'
import { type ReactElement, useState } from 'react'
import Link from 'next/link'

export default function Navbar(): ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
        <Link href={'/register'}>Registrarse</Link>
        <Link href={'/login'}>Iniciar sesión</Link>
      </NavbarContent>
      <NavbarMenu className='dark'>
        {responsiveItems.map(({ text, link }, index) => (
          <NavbarMenuItem key={`${text}-${index}`}>
            <Link className='w-full text-white' href={link}>
              {text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextNavbar>
  )
}
