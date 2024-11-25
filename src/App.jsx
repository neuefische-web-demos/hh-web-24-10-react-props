import React from "react";
import "./styles.css";

// Props

export default function App() {
  function handlePet() {
    console.log("Thanks for petting me");
  }

  return (
    <div>
      <Pet
        emoji="🐓"
        sound="doodle doo"
        name="chicken"
        onPet={handlePet}
        isHungry={true}
      />
      <Pet emoji="🐶" sound="woof" name="dog" onPet={handlePet} />
      <Pet
        emoji="🐢"
        sound="cowabunga"
        name="turtle"
        onPet={handlePet}
        isHungry={true}
      />
      <Pet emoji="🦉" sound="toowit toowoo" name="owl" onPet={handlePet} />
      <Pet emoji="🐱" sound="miaow" name="cat" onPet={handlePet} />
    </div>
  );
}

// Component

function Pet({ sound, name, emoji, onPet, isHungry }) {
  // console.log("props: ", props);
  console.log("isHungry: ", isHungry);
  return (
    <div onClick={onPet}>
      {isHungry ? "I'm hungry!" : sound}
      <span role="img" aria-label={`A ${name}`}>
        {emoji}
      </span>
    </div>
  );
}
