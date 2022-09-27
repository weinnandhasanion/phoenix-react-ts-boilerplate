// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

//To do centralize themes - separate file - to be imported here
// declare module '@mui/material/styles' {
//   interface Palette {
//     inactive: Palette['primary'];
//   }

//   interface PaletteOptions {
//     inactive?: PaletteOptions['primary'];
//   }
// }

// declare module '@mui/material/Button' {
//   interface ButtonPropsColorOverrides {
//     inactive: true;
//   }
// }

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#1e50ff',
//     },
//     secondary: {
//       main: '#ff4f00',
//     },
//     info: {
//       main: '#78bbf1',
//     },
//     inactive: {
//       main: '#0000001f',
//       contrastText: '#00000042',
//     }
//   },
//   typography: {
//     htmlFontSize: 10,
//     fontFamily: [
//       'Avenir',
//       '"Helvetica Neue"',
//       '"Helvetica Neue"',
//       'YuGothic',
//       '"Yu Gothic"',
//       '"Hiragino Sans"',
//       '"ヒラギノ角ゴ Pro W3"',
//       '"Hiragino Kaku Gothic Pro"',
//       '"メイリオ"',
//       'Meiryo',
//       'Osaka',
//       '"ＭＳ Ｐゴシック"',
//       '"MS PGothic"',
//       'sans-serif',
//     ].join(','),
//   },
// });

// ReactDOM.render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <SnackbarProvider
//         dense
//         maxSnack={3}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'right',
//         }}
//       >
//         <App />
//       </SnackbarProvider>
//     </ThemeProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// React 18 implementation
const container = document.querySelector('#root');
const root = createRoot(container!);
root.render(
  // Commenting this out as React 18's new StrictMode causes double renders.
  // See https://stackoverflow.com/questions/72489140/react-18-strict-mode-causing-component-to-render-twice
  // <StrictMode>
  <App />
  // </StrictMode>
);
