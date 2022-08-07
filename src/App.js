import { Route, Switch, useLocation } from "react-router"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"


//Components
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import WorkPage from './components/WorkPage';
import WorkPage2 from './components/WorkPage2';
import MySkillsPage from './components/MySkillsPage';
import { AnimatePresence } from "framer-motion";
import WorkPage3 from "./components/WorkPage3";


function App() {

  const location = useLocation();
  return <>


  <GlobalStyle />

    <ThemeProvider theme={lightTheme}>

{/* For framer-motion animation on page change! */}
<AnimatePresence exitBeforeEnter>
<Switch  location={location} key={location.pathname}>
      <Route exact path="/" component={Main}/>
      <Route exact path="/about" component={AboutPage}/>
      <Route exact path="/blog" component={BlogPage}/>
      <Route exact path="/work" component={WorkPage}/>
      <Route exact path="/work2" component={WorkPage2}/>
      <Route exact path="/work3" component={WorkPage3}/>
      <Route exact path="/skills" component={MySkillsPage}/>

    </Switch>
</AnimatePresence>
    
    
    </ThemeProvider>


    
    </>
    
}

export default App

