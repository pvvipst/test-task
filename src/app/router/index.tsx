import { lazy } from 'react'

import { LoadComponent } from '@app/common/router'

import { RouterPath } from '@app/router/router-path'

import type { RouteObject } from 'react-router-dom'

const Layout = LoadComponent(lazy(async () => import('@app/pages/layout')))

const MenuPage = LoadComponent(lazy(async () => import('@/app/pages/menu')))

const Router: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: RouterPath.Page.MENU, element: <MenuPage /> },
    ]
  },
]

export default Router
