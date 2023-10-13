import React from "react";
import {createRoot} from "react-dom/client";
import './assets/styles/index.scss';
import App from "./components/App";

const app = document.querySelector('#app');
const root = createRoot(app)

root.render(<App />)