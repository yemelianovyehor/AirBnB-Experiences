import * as React from 'react';
import "./card.css";

interface CardProps {
    img: string;
    rating: number;
    reviewCount: number;
    country: string;
    title: string;
    price: number;
    openSpots: number;
}

interface CardState {

}

class Card extends React.Component<CardProps, CardState> {
    ////state = { :  }

    private getBadgeText = (props = this.props) => {
        if (props.openSpots === 0) {
            return "Sold Out"
        } else if (props.country === "Online") {
            return "ONLINE"
        }else{
            return false
        }
    };

    render() {
        return (
            <div className="card">
                {this.getBadgeText && <div className="badge">{this.getBadgeText()}</div>}
                <img src={`/src/assets/img/${this.props.img}`} alt="Card Photo" className='card-photo'>
                    {/* <div className="status"> sold out</div> */}
                </img>
                <div className="rating-container flex">
                    <img src="/src/assets/img/star.png" alt="Stars: " className='star' />
                    <div className='rating'>{this.props.rating}</div>
                    <div className="review-counter grey">{this.props.reviewCount}</div>
                    <div className="region grey">{this.props.country}</div>
                </div>
                <div className="card-description">{this.props.title}</div>
                <div className="price"><span className='bold'> From ${this.props.price}</span> / person</div>
            </div>
        );
    }
}

export default Card;