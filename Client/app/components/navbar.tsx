'use client'

import Image from 'next/image'
import { Navbar as NextNavbar, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from '@nextui-org/react'
import { type ReactElement, useState } from 'react'
import Link from 'next/link'

export default function Navbar(): ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const responsiveItems = ['Inicio', 'Cursos', 'Registro', 'Iniciar sesión']

  return (
    <NextNavbar className='bg-[#121212]' isMenuOpen={isMenuOpen} isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify={'start'} className='flex gap-8'>
        <NavbarMenuToggle className='text-white sm:hidden' aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
        <section className='flex items-center gap-2'>
          <Image src={'/quokka.png'} width={50} height={50} alt={'logo'} />
          <p className='capitalize text-white'>Quokkas Learning</p>
        </section>
      </NavbarContent>
      <NavbarContent justify='center' className='hidden sm:flex'>
        <Link href={'/'} aria-current='page'>
          Inicio
        </Link>
        <Link href={'/cursos'} aria-current='page'>
          Cursos
        </Link>
      </NavbarContent>
      <NavbarContent justify='end' className='hidden sm:flex'>
        <Link href={'/registro'} aria-current='page'>
          Registrarse
        </Link>
        <Link href={'/iniciar-sesion'} aria-current='page'>
          Iniciar sesión
        </Link>
      </NavbarContent>
      <NavbarMenu className='dark'>
        {responsiveItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className='w-full text-white' href='#'>
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextNavbar>
  )
}
