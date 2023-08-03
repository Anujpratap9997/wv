import React from "react";
import ReactDOM from "react-dom/client"
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import MainRoute from "./router/MainRoute";
import './App.css'


const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(
    
    
     <Router>
        <Routes>
            <Route path="/*" element={<MainRoute/>}/>
        </Routes>
    </Router>
    
)