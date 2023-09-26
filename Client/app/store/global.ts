import { create } from 'zustand'

// : UseBoundStore<StoreApi<{ actualLink: string; setActualLink: any }>>
export const navbarStore = create((set) => ({
  actualLink: '/',
  setActualLink: (link: string) => {
    set({ actualLink: link })
  }
}))
