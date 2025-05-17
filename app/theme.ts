// app/theme.ts
import { createTheme } from '@mui/material/styles';

export const expertTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#0a2342', contrastText: '#fff' },      // اللون الأساسي
    secondary: { main: '#2196F3', contrastText: '#fff' },    // لون التنبيهات والخطوط
    background: { default: '#151924', paper: '#1e2632' },    // خلفيات المنصة
    success: { main: '#4caf50' },
    error: { main: '#f44336' },
  },
  typography: {
    fontFamily: '"Cairo", sans-serif',
    button: { textTransform: 'none' }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8, padding: '8px 24px' }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: { borderRadius: 12 }
      }
    }
  }
});
