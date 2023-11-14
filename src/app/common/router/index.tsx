import { memo, Suspense } from 'react'

import { BrowserRouter, useRoutes } from 'react-router-dom'

import type { RouteObject } from 'react-router-dom'

import type { FC, NamedExoticComponent } from 'react'

interface IRouterProps {
  routes: RouteObject[]
}

const MakeRoutes: FC<Pick<IRouterProps, 'routes'>> = ({ routes }) => <>{ useRoutes(routes) }</>

// eslint-disable-next-line react/no-multi-comp
const RouterProvider: FC<IRouterProps> = ({ routes }) => {
  return (
    <BrowserRouter>
      <MakeRoutes routes={ routes } />
    </BrowserRouter>
  )
}

// eslint-disable-next-line react/display-name,react/no-multi-comp
const LoadComponent = (Component: FC): NamedExoticComponent<any> => memo((props: object) => (
  <Suspense fallback={ <div /> }>
    <Component { ...props } />
  </Suspense>
))

export {
  RouterProvider,
  LoadComponent
}
