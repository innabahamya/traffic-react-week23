import "./card.css";

function Card(props) {
    const { item, isSelected, onSelect } = props;

    const handleCardClick = () => {
        onSelect(item);
    };

    return (
        <div
            className={`card ${isSelected ? "card_selected" : ""}`}
            theme={item.theme}
            onClick={() => handleCardClick(item.id)}
        >
  
            <div className="card__title">{item.name}</div>
            <div className="card__price">
                <span className="price-span">{item.price}</span> руб. /мес
            </div>
            <div className="card__speed">{item.speed}</div>
            <div className="card__desc">{item.desc}</div>
        </div>
    );
}

export { Card };