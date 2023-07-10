import './App.css'

import Hero from "./components/Hero.tsx";
import Demo from "./components/Demo.tsx";

function App() {
    return (
        <>
            <main className="w-full h-full">
                <div className="main">
                    <div className="gradient"/>
                </div>

                <div className="app">
                    <Hero />
                    <Demo />
                </div>
            </main>
        </>
    )
}

export default App
