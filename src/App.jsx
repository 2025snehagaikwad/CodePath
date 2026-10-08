import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import StackVisualizer from "./pages/StackVisualizer";
import QueueVisualizer from "./pages/QueueVisualizer";
import LinkedListVisualizer from "./pages/LinkedListVisualizer";
import ArraysVisualizer from "./pages/ArraysVisualizer";
import LinearSearch from "./pages/LinearSearch";
import BinarySearch from "./pages/BinarySearch";


function App() {

  const [page, setPage] = useState("home");


  return (
    <>

      <Navbar setPage={setPage} />


      {page === "home" && (
        <Home setPage={setPage} />
      )}


      {page === "dashboard" && (
        <Dashboard setPage={setPage} />
      )}


      {page === "stack" && (
        <StackVisualizer setPage={setPage} />
      )}


      {page === "queue" && (
        <QueueVisualizer setPage={setPage} />
      )}


      {page === "linkedlist" && (
        <LinkedListVisualizer setPage={setPage} />
      )}


      {page === "arrays" && (
        <ArraysVisualizer setPage={setPage} />
      )}


      {page === "linear-search" && (
        <LinearSearch setPage={setPage} />
      )}


      {page === "binary-search" && (
        <BinarySearch setPage={setPage} />
      )}

    </>
  );
}


export default App;