import logo from './logo.svg';
import './App.css';
import {NextUIProvider} from "@nextui-org/react";
import Header from './components/Header';
import CTA from './components/CTA';
import Form from './components/Form';

function App() {
  return (
    <NextUIProvider>
    <Header/>
    <CTA/>
    <Form/>
  </NextUIProvider>
  );
}

export default App;
