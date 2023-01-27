import React from "react";
import "./styles.css";
import Entry from "./Entries/index";
import emojipedia from "./emojipedia";

function createEntries(entry) {
  return (
    <Entry
      key={entry.id}
      emoji={entry.emoji}
      name={entry.name}
      description={entry.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntries)}</dl>
    </div>
  );
}

export default App;
