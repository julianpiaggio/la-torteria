import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'
import { ChakraProvider } from "@chakra-ui/react"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDfW3Ds4GiAAVfRtWlixZq_CZBb9NsklDY",
  authDomain: "la-torteria-react.firebaseapp.com",
  projectId: "la-torteria-react",
  storageBucket: "la-torteria-react.appspot.com",
  messagingSenderId: "340468922103",
  appId: "1:340468922103:web:b796fc7facbb9795cc05f2"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
