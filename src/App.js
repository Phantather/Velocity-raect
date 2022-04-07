import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Inside from "./components/Inside/Inside";
import Service from "./components/Service/Service";
import Some from "./components/Some/Some";
import Footer from "./components/Footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <Home/>
                <Inside/>
                <Service/>
                <Some/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
