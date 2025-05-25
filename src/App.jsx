import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./components/ui/card";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-start px-4 py-8">
        {/* Header Section */}
        <div className="flex justify-center items-center gap-8 mb-8">
          <a
            href="https://vite.dev"
            target="_blank"
            className="hover:opacity-75 transition-opacity"
          >
            <img src={viteLogo} className="w-16 h-16" alt="Vite logo" />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            className="hover:opacity-75 transition-opacity"
          >
            <img
              src={reactLogo}
              className="w-16 h-16 animate-spin [animation-duration:20s]"
              alt="React logo"
            />
          </a>
        </div>

        <div className="text-center mb-16 max-w-4xl">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Modern React Stack
          </h1>
          <p className="text-xl text-muted-foreground">
            A powerful combination of React, Tailwind CSS, and shadcn/ui for
            building beautiful, modern web applications
          </p>
        </div>

        {/* Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 w-full max-w-6xl">
          {/* React Card */}
          <Card className="hover:shadow-lg transition-shadow duration-300 text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <img src={reactLogo} className="w-8 h-8" alt="React" />
              </div>
              <CardTitle className="text-blue-600">React</CardTitle>
              <CardDescription>
                A JavaScript library for building user interfaces
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground text-left">
                <li>• Component-based architecture</li>
                <li>• Virtual DOM for optimal performance</li>
                <li>• Declarative programming model</li>
                <li>• Rich ecosystem and community</li>
                <li>• Hooks for state management</li>
              </ul>
            </CardContent>
          </Card>

          {/* Tailwind CSS Card */}
          <Card className="hover:shadow-lg transition-shadow duration-300 text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded"></div>
              </div>
              <CardTitle className="text-cyan-600">Tailwind CSS</CardTitle>
              <CardDescription>
                A utility-first CSS framework for rapid UI development
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground text-left">
                <li>• Utility-first methodology</li>
                <li>• Highly customizable design system</li>
                <li>• Mobile-first responsive design</li>
                <li>• Small production bundle size</li>
                <li>• Developer-friendly workflow</li>
              </ul>
            </CardContent>
          </Card>

          {/* shadcn/ui Card */}
          <Card className="hover:shadow-lg transition-shadow duration-300 text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <div className="w-8 h-8 bg-gradient-to-br from-slate-400 to-slate-600 rounded-lg"></div>
              </div>
              <CardTitle className="text-slate-600">shadcn/ui</CardTitle>
              <CardDescription>
                Beautiful, accessible components built on Radix UI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground text-left">
                <li>• Copy-paste component library</li>
                <li>• Built with Radix UI primitives</li>
                <li>• Fully accessible by default</li>
                <li>• Customizable with CSS variables</li>
                <li>• TypeScript support included</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <p className="text-center text-muted-foreground">
          Built with ❤️ using Vite + React + Tailwind + shadcn/ui
        </p>
      </div>
    </div>
  );
}

export default App;
