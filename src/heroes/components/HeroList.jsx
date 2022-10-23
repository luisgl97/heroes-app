import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./";
import "./HeroCard.css"

export const HeroList = ({ publisher }) => {

  const heroes = useMemo(()=>getHeroesByPublisher(publisher),[publisher]);

  return (
    <div className="row g-4">
      {heroes.map((hero) => (
       <HeroCard key={hero.id} {...hero}/>
      ))}
    </div>
  );
};
