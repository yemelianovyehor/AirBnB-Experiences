import * as React from 'react';
import "./hero.css";

interface HeroProps {
    
}
 
interface HeroState {
    
}
 
class Hero extends React.Component<HeroProps, HeroState> {
    //state = { :  }
    render() { 
        return ( 
            <div className="hero">
                <div className="photo-grid">
                <img src="/src/assets/img/photo-grid.png" alt="Photo grid"/>
                </div>
                <div className="disc-text">
                    <h1>Online Experiences</h1>
                    <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
                </div>
            </div>
            );
    }
}
 
export default Hero;