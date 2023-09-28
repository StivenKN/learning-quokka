import { create } from 'zustand'

export const navbarStore = create((set) => ({
  actualLink: '',
  setActualLink: (link: string) => {
    set(() => ({ actualLink: link }))
  }
}))

export const userCookie = create((set) => ({
  userData: null,
  setUserData: () => {
    set((data: string) => ({ userData: data }))
  }
}))
