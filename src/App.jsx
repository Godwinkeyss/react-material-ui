import React from 'react'
import Feeds from './components/Feeds'
import Leftbar from './components/Leftbar'
import Rightbar from './components/Rightbar'
import { Box, createTheme, Stack, ThemeProvider} from "@mui/material"
import Navbar from './components/Navbar'
import Add from './components/Add'
import { useState } from 'react'



const App = () => {
   const [mode, setMode] = useState("light")
  const darkTheme = createTheme  ({
    palette:{
      mode:mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar setMode={setMode} mode={mode}/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
     <Leftbar setMode={setMode} mode={mode}/>
     <Feeds />
     <Rightbar />
     </Stack>
     <Add />
    </Box>
    </ThemeProvider>
  )
}

export default App