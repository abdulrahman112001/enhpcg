// ** Type Import
import { hexToRGBA } from '../../utils/hex-to-rgba'
import { OwnerStateThemeType } from './'

// ** Util Import

const Backdrop = () => {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          backgroundColor:
            theme.palette.mode === 'light'
              ? `rgba(${theme.palette.customColors.main}, 0.5)`
              : hexToRGBA('#101121', 0.87)
        }),
        invisible: {
          backgroundColor: 'transparent'
        }
      }
    }
  }
}

export default Backdrop
