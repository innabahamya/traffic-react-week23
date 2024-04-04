// import './card.css';

// const Card = ({ name, currency, price, interval, traffic, content }) => (
//     <div className="card">
//       <h3 className='darkTurquoise darkGreen darkRed darkBlue'>{name}</h3>
//       <div className="card-price darkTurquoise darkGreen darkRed darkBlue">
//       <p className='currency'>{currency}</p>
//       <p className='price'>{price}</p>
//       <p className='interval'>{interval}</p>
//       </div>
//       <p>{traffic}</p>
//       <p>{content}</p>
//     </div>
//   );

//   export default Card


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
            onClick={handleCardClick}
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