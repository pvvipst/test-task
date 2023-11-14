import { Box, styled } from '@mui/material'
import { Link } from 'react-router-dom'

const MENU_STYLED = {
  Wrapper: styled(Box)`
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
  Element: styled(Box)`
    display: flex;
    align-items: center;
    gap: 5px;
  `,
  Link: styled(Link)<{ selected: boolean }>`
    color: #072659;
  `
}

export { MENU_STYLED }
