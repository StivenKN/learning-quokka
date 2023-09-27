'use client'

import { NextUIProvider } from '@nextui-org/react'
import { type ReactElement } from 'react'

export function Providers({ children }: { children: React.ReactNode }): ReactElement {
  return <NextUIProvider>{children}</NextUIProvider>
}
