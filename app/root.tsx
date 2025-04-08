import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useEffect, useState } from "react";
import "./tailwind.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ClientOnly } from "./utils/client-only";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github.min.css" },
];

export const meta: MetaFunction = () => {
  return [
    { title: "DevFreelance | Développeur Web & Mobile Freelance" },
    { name: "description", content: "Développeur freelance spécialisé dans la création d'applications web et mobiles performantes, modernes et sécurisées." },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
    { name: "charset", content: "utf-8" },
    { property: "og:type", content: "website" },
    { property: "og:title", content: "DevFreelance | Développeur Web & Mobile Freelance" },
    { property: "og:description", content: "Développeur freelance spécialisé dans la création d'applications web et mobiles performantes, modernes et sécurisées." },
    { property: "og:image", content: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" },
    { property: "og:url", content: "https://www.devfreelance.fr" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
};

export default function App() {
  return (
    <html lang="fr" className="h-full scroll-smooth">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="flex min-h-full flex-col bg-gray-50">
        <ClientOnly fallback={
          <div id="hydration-placeholder">
            <Header />
            <main className="flex-1">
              <Outlet />
            </main>
            <Footer />
          </div>
        }>
          {() => (
            <>
              <Header />
              <main className="flex-1">
                <Outlet />
              </main>
              <Footer />
            </>
          )}
        </ClientOnly>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
