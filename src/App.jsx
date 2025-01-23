import Header from "./components/Header";
import Footer from "./components/Footer";
import AllRoutes from "./routes/AllRoutes";
function App() {
  return <>
  <div className="max-w-[1080px] m-auto bg-gray-800 text-white">
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  </>;
}

export default App;
