import React, { lazy } from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Loader } from "components/Loader";
import { NotFound } from "pages/errors";

const About = lazy(() => import("pages/about"));
const Projects = lazy(() => import("pages/projects"));
const Contact = lazy(() => import("pages/contact"));

export function PageRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
