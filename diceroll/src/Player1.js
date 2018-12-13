import React from 'react';
import Button from './Button';
import DCP1 from './DCP1';



const Player1 = (props) => {
    return (
        <div>
            <h3>Player1</h3>
            <Button 
                handleClick = {props.p1Dice}
            />
            <DCP1 
                P1Roll = {props.p1DiceRoll}
            />
        </div>
    )
}



export default Player1;








// class Players extends Component {

//     render() {
//         return (
//             <div className = 'players-container'>
//                 <div className = 'player'>
//                     <h3>Player 1</h3>
//                     <DCP1 
//                         // P1Roll = {this.state.p1DiceCount}
//                     />
//                     <Button
//                         handleClick = {this._P1Rolled}
//                     />
//                 </div>
//                 <div className = 'player'>
//                     <h3>Player 2</h3>
//                     <DCP2
//                         P2Roll = {this.state.p2DiceCount}
//                     />
//                     <Button 
//                         handleClick = {this._P2Rolled}
//                     />
//                 </div>
//             </div>
//         );
//     }

    
    
    // _p1IncrementScore = (count) => {
    //     console.log('count')
    //     const newScore = this.state.P1score + 1
    //     this.setState({
    //         P1score: newScore
    //     });
    // }
    // _p2IncrementScore = (count) => {
    //     console.log('count')
    //     const newScore = this.state.P2score + 1
    //     this.setState({
    //         P2score: newScore
    //     });
    // }
    


// export default Players;