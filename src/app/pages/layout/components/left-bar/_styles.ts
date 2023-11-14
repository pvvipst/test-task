import { Box, Divider, styled, Typography } from '@mui/material'

const LEFT_BAR_STYLES = {
  Wrapper: styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  SiteName: {
    Wrapper: styled(Box)`
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 10px;
      box-shadow: 0 4px 4px 0 #00000040;
    `,
    BoxTitle: {
      Wrapper: styled(Box)`
        display: flex;
        align-items: center;
        gap: 15px;
      `,
      BoxWrapper: styled(Box)`
        display: flex;
        flex-direction: column;
        
        gap: 5px;
      `,
      Title: styled(Typography)`
        font-size: 18px;
      `,
    }
  },
  Divider: styled(Divider)`
    background-color: #072659;
  `
}

export { LEFT_BAR_STYLES }
