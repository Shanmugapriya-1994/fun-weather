import Header from "./assets/components/Header"
import Content from "./assets/components/Content"


import AppContextProvider from "./assets/components/AppContext"


function App()
{
  return(
    <AppContextProvider>
  <Header/>
  <Content/>
  </AppContextProvider> 
  )
}
export default App