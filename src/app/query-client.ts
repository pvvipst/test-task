import { QueryClient } from '@tanstack/react-query'

const QUERY_CLIENT = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
    }
  }
})

export { QUERY_CLIENT }
