import { Card } from "./components/Card.jsx";
import { useState } from "react";
import data from "./tariffs.json";

function App() {
  const [selectedCard, setSelectedCard] = useState(3);

  const handleSelectCard = (selectedItem) => {
    if (selectedCard === selectedItem) {
      setSelectedCard(null);
    } else {
      setSelectedCard(selectedItem.id);
    }
  };

  return (
    <div className="card-container">
      {data.map((item) => (
        <Card
          key={item.id}
          item={item}
          isSelected={selectedCard === item.id}
          onSelect={handleSelectCard}
        />
      ))}
    </div>
  );
}
export default App;
