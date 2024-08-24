import { createTRPCClient, httpBatchLink } from '@trpc/client'
import type { AppRouter } from '../server'

export const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
    }),
  ],
})
