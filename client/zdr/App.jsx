import React from "react";

import Navbar from "./components/Navbar";
import DailyPage from "./daily/components/DailyPage";

const App = () =>
{
    return (
        <div className="App">
            <Navbar />
            <DailyPage />
        </div>
    );
};

export default App;
