import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

import { QueryClientProvider } from '@tanstack/react-query'

import { RouterProvider } from '@app/common/router'
import router from '@app/router'
import { THEME } from '@app/components'
import { QUERY_CLIENT } from '@app/query-client'
import FilialProvider from '@app/common/filial'
import FilterMenuProvider from '@app/common/filter-menu'

const App = (): JSX.Element => {
  const theme = createTheme(THEME)

  return (
    <ThemeProvider theme={ theme }>
      <CssBaseline />

      <QueryClientProvider client={ QUERY_CLIENT }>
        <FilialProvider>
          <FilterMenuProvider>
            <RouterProvider routes={ router } />
          </FilterMenuProvider>
        </FilialProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
