import { globalState, keySquareMapper } from "../chess.js";

class HypotheticalBoard {
    constructor(data){
        if(!data){
            throw new Error('Please Provide Some Data');
        }
        this.state = JSON.parse(JSON.stringify(data));
        console.log(this);
    }

    move(){
        
    }
}

export default HypotheticalBoard;