import { useEffect } from "react";
import AOS from "aos";

import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Investment from "./components/Investment";
import Quote from "./components/Quote";
import Portifolio from "./components/Portifolio";
import { Team, Board } from "./lib/data";
import Title from "./components/Title";
import TeamMember from "./components/TeamMember";
import Contact from "./components/Contact";

import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 300,
      duration: 400
    });
  }, []);
  useEffect(() => {
    AOS.refresh();
  }, []);
  return (
    <>
      {/* header start */}
      <Header />
      {/* header end */}
      {/* main start */}
      <main>
        <Hero />
        <About />
        <Investment />
        <Portifolio />
        {/* our team section start */}
        <section id="team" className="max-w-6xl mx-auto px-4 md:px-5 py-16">
          <Title title="Our Team" />
          {Team.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </section>
        {/* our team section end */}
        {/* quote section start */}
        <Quote />
        {/* quote section end */}
        {/* Advisory Board section start */}
        <section id="board" className="max-w-6xl mx-auto px-4 md:px-5 py-16">
          <Title title="Advisory Board" />
          {Board.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </section>
        {/* Advisory Board section end */}
        <Contact />
      </main>
      {/* main end */}
      {/* footer start */}
      <footer className="bg-brand-black-medium py-10">
        <p className="text-center text-white/50">
        © Copyright Chart National L.P. 2020
        </p>
      </footer>
      {/* footer end */}
    </>
  );
}

export default App;
