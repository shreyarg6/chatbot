import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ChatBot from './components/ChatBot.jsx';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(137, 107, 174)',
      main2: 'rgb(84, 15, 62)',
      main3: 'rgb(170, 151, 194)'
    },
    secondary: {
      main: 'rgb(197, 120, 157)',
      main3: 'rgb(193, 140, 165)',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ChatBot />
    </ThemeProvider>
  );
}

export default App;