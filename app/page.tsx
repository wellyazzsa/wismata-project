"use client";

import { User } from "./user";
import  Navbar from "../components/Navbar";
import { Hero } from "../components/Hero";
import slides from '../hero.json';
import React from "react";

export default async function Home() {
  
  return (
    <main>
      <Navbar/>
      <section>
      <HeroSection/>
      </section>
      <User/>
    </main>
  )
};

function HeroSection() {
  return (
    <div>
      <Hero slides={slides}/>
    </div>
  );
}