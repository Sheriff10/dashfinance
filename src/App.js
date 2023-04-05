import "./App.css";
import { About } from "./components/about";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Intro } from "./components/intro";
import { Partners } from "./components/partnership";
import { Roadmap } from "./components/roadmap";
import { Tokenomincs } from "./components/tokenomics";
import "./css/global.css";
function App() {
   return (
      <div className="App">
         <div className="img-bg">
            <div className="wrapper">
               <Header />
               <Intro />
               <About />
            </div>
         </div>
         <div className="w2">
            <Tokenomincs />
            <Roadmap />
            <Partners />
         </div>
         <Footer />
      </div>
   );
}

export default App;
