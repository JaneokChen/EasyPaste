import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./home";
import RootLayout from "./ui/root-layout";

const root = createRoot(document.body);
root.render(
  <RootLayout>
    <h2>demo</h2>
  </RootLayout>,
);
