import Aos from "aos";
import "aos/dist/aos.css";

import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Index from "./Components/Index";
import CompanyOverview from "./Components/Pages/CompanyOverview";
import Services from "./Components/Pages/Services";
import ContactUs from "./Components/Pages/ContactUs";

const Home = lazy(() => import("./Components/Pages/Home"));
const Shop = lazy(() => import("./Components/Pages/Shop"));
const Checkout = lazy(() => import("./Components/Pages/Checkout"));

// A fallback component while loading
const Loading = () => <div>Loading...</div>;

export default function App() {
  Aos.init();

  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <Index>
              <Loading />
            </Index>
          }
        >
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
              element={
                <Index>
                  <Shop />
                </Index>
              }
            />

            <Route
              path="/checkout"
              element={
                <Index>
                  <Checkout />
                </Index>
              }
            />

            <Route
              path="/company-overview"
              element={
                <Index>
                  <CompanyOverview />
                </Index>
              }
            />

            <Route
              path="/services"
              element={
                <Index>
                  <Services />
                </Index>
              }
            />

            <Route
              path="/contact-us"
              element={
                <Index>
                  <ContactUs />
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
