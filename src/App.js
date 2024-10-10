import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Index from "./Components/Index";

const Home = lazy(() => import("./Components/Pages/Home"));
const Shop = lazy(() => import("./Components/Pages/Shop"));
const Checkout = lazy(() => import("./Components/Pages/Checkout"));

// A fallback component while loading
const Loading = () => <div>Loading...</div>;

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Index><Loading /></Index>}>
          <Routes>
            <Route
              path="/"
              index
              element={
                <Index>
                  <Home />
                </Index>
              }
            />

            <Route
              path="/shop"
              index
              element={
                <Index>
                  <Shop />
                </Index>
              }
            />

            <Route
              path="/checkout"
              index
              element={
                <Index>
                  <Checkout />
                </Index>
              }
            />

            <Route path="*" element={<>No Page Found.</>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}
