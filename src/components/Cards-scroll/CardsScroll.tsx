import * as React from 'react';
import "./cardscroll.css";
import Card from '@components/Card/Card';
import cardsData from './cardsData';

interface CardsScrollProps {
    
}
 
interface CardsScrollState {
    
}

class CardsScroll extends React.Component<CardsScrollProps, CardsScrollState> {
    //state = { :  }
    private mappedCards = cardsData.map(
        data => (
                    <Card 
                        key={data.id}
                        img={data.coverImg}
                        rating={data.stats.rating} 
                        reviewCount={data.stats.reviewCount} 
                        country={data.location}
                        title={data.title}
                        price = {data.price}
                        openSpots={data.openSpots}
                    />
        ) 
    );
    

    render() { 
        return ( 
            <div className="flex scroll ">
                {this.mappedCards}
            </div>
         );
    }
}
 
export default CardsScroll;