import { createTheme, outlinedInputClasses } from '@mui/material'

const rootElement = document.getElementById('root')

export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Public Sans'
    }
  },
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&.MuiButton-containedSizeMedium': {
            background: 'var(--black-second)',
            color: 'var(--white)',
            border: 'none'
          },
          '&.MuiButton-containedSizeSmall': {
            background: 'var(--black-second)',
            color: 'var(--white)',
            border: 'none'
          },
          '&.MuiButton-outlinedSizeSmall': {
            color: 'var(--text-primary)',
            borderColor: 'var(--text-secondary)'
          },
          '&:hover.MuiButton-outlinedSizeSmall': {
            borderColor: 'var(--text-primary)',
            boxShadow: 'var(--text-primary) 0px 0px 0px 0.5px'
          },

          '&:hover.MuiButton-containedSizeMedium': {
            background: 'var(--black-second)'
          },
          '.MuiLoadingButton-loadingIndicator': {
            color: 'var(--white)'
          },

          '&.MuiButton-textSizeLarge': {
            color: 'var(--text-primary)'
          },

          '&:hover.MuiButton-textSizeLarge': {
            backgroundColor: 'var(--extra-gray)'
          }
        }
      }
    },

    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: 'var(--gray-100)'
        },
        root: {
          borderRadius: '7px',
          height: '54px',
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: 'var(--black-second)'
          }
        }
      }
    },

    MuiFormControl: {
      styleOverrides: {
        root: {
          '& label': {
            color: 'var(--gray-100)',
            fontSize: '14px'
          },
          '& label.Mui-focused': {
            color: 'var(--black-second)'
          }
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          '.MuiMenu-paper': {
            borderRadius: '10px',
            padding: '4px',
            boxShadow: 'var(--box-shadow)'
          },
          '.Mui-selected': {
            borderRadius: '10px',
            marginBottom: '2px',
            background: 'red'
          },
          '.MuiMenu-list': {
            padding: 0
          }
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          '.MuiDrawer-paper': {
            boxShadow: 'rgba(145, 158, 171, 0.24) -40px 40px 80px -8px'
          },
          '.MuiModal-backdrop': {
            background: 'transparent'
          }
        }
      }
    },

    
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&.MuiIconButton-sizeLarge': {
            background: 'red'
     
          }
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: 'transparent'
          }
        }
      }
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          '.MuiTabs-indicator': {
            backgroundColor: 'var(--black-second)'
          }
        }
      }
    },

    MuiPopper: {
      defaultProps: {
        container: rootElement
      }
    },
    MuiDialog: {
      defaultProps: {
        container: rootElement
      },
      styleOverrides: {
        root: {
          '.MuiDialog-paper': {
            borderRadius: '16px',
            height: '484px',
            width: '600px',
            marginBottom: '224px'
          },
          '.MuiDialogTitle-root': {
            padding: '26px',
            borderBottom: '1px solid rgba(145, 158, 171, 0.2)'
          },
          '.MuiDialogContent-root': {
            padding: '16px 24px 24px'
          }
        }
      }
    },

    MuiModal: {
      defaultProps: {
        container: rootElement
      }
    }
  }
})

export const themeColor = {
  '--white': 'var(--white)',
  '--black': 'var(--black)',
  '--black-second': ' var(--black-second)',

  '--primary-100': ' var(--primary-100)',
  '--primary-200': ' var(--primary-200)',
  '--primary-300': ' var(--primary-300)',
  '--primary-400': ' var(--primary-400)',
  '--primary-500': ' var(--primary-500)',
  '--primary-600': ' var(--primary-600)',
  '--primary-700': ' var(--primary-700)',

  '--yellow-100': ' var(--yellow-100)',
  '--yellow-200': ' var(--yellow-200)',
  '--yellow-300': ' var(--yellow-300)',
  '--yellow-400': ' var(--yellow-400)',

  '--blue-100': ' var(--blue-100)',
  '--blue-200': ' var(--blue-200)',
  '--blue-300': ' var(--blue-300)',
  '--blue-400': ' var(--blue-400)',

  '--text-primary': ' var(--text-primary)',
  '--text-secondary': ' var(--text-secondary)',

  '--gray-50': ' var(--gray-50)',
  '--gray-100': ' var(--gray-100)',
  '--gray-200': ' var(--gray-200)',
  '--gray-300': ' var(--gray-300)',
  '--gray-400': ' var(--gray-400)',
  '--gray-500': ' var(--gray-500)',
  '--gray-600': ' var(--gray-600)',
  '--gray-700': ' var(--gray-700)'
}

export const screenSize = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
}
