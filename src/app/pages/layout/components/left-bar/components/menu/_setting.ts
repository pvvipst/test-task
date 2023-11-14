import { RouterPath } from '@app/router/router-path'

interface ITypeMenu {
  label: string
  to: string
}

const TYPE_MENU: ITypeMenu[] = [
  { label: 'Компоненты', to: '/' },
  { label: 'Товары', to: '/' },
  { label: 'Меню', to: RouterPath.Page.MENU },
  { label: 'Перемещения', to: '/' },
  { label: 'Инвентаризация', to: '/' },
  { label: 'Выпуск товара', to: '/' },
  { label: 'Списание', to: '/' },
  { label: 'Накладные', to: '/' },
]

export { TYPE_MENU }
