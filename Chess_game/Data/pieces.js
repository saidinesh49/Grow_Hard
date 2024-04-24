//Black Pieces arrangment
function blackPawn(current_position){
    return {
        current_position,
        img:"Collections/Images/Pieces/Black/Pawn.png",  
        piece_name: "BLACK_PAWN",
    };
}


function blackRook(current_position){
    return {
        move: false,
        current_position,
        img: "Collections/Images/Pieces/Black/Rook.png",
        piece_name: "BLACK_ROOK",
    };
}


function blackKnight(current_position){
    return {
        current_position,
        img: "Collections/Images/Pieces/Black/Knight.png",
        piece_name: "BLACK_KNIGHT",
    };
}

function blackBishop(current_position){
    return {
        current_position,
        img: "Collections/Images/Pieces/Black/Bishop.png",
        piece_name: "BLACK_BISHOP",

    };
}

function blackQueen(current_position){
    return {
        current_position,
        img: "Collections/Images/Pieces/Black/Queen.png",
        piece_name: "BLACK_QUEEN",
    };
}

function blackKing(current_position){
    return {
        move: false,
        current_position,
        img: "Collections/Images/Pieces/Black/King.png",
        piece_name: "BLACK_KING",
    };
}




//white pieces arrangement
function whitePawn(current_position){
    return {
        current_position,
        img:"Collections/Images/Pieces/White/Pawn.png",  
        piece_name: "WHITE_PAWN",
    };
}

function whiteRook(current_position){
    return {
      move: false,
      current_position,
      img:"Collections/Images/Pieces/White/Rook.png",
      piece_name: "WHITE_ROOK",
    };
}

function whiteKnight(current_position){
    return {
      current_position,
      img:"Collections/Images/Pieces/White/Knight.png",
      piece_name: "WHITE_KNIGHT",
    };
}

function whiteBishop(current_position){
    return {
      current_position,
      img:"Collections/Images/Pieces/White/Bishop.png",
      piece_name: "WHITE_BISHOP",
    };
}


function whiteQueen(current_position){
    return {
      current_position,
      img:"Collections/Images/Pieces/White/Queen.png",
      piece_name: "WHITE_QUEEN",
    };
}


function whiteKing(current_position){
    return {
      move: false,
      current_position,
      img:"Collections/Images/Pieces/White/King.png",
      piece_name: "WHITE_KING",
    };
}




export { 
    blackPawn,
    blackRook,
    blackBishop,
    blackKnight,
    blackQueen,
    blackKing,
    whitePawn,
    whiteRook,
    whiteKnight,
    whiteBishop,
    whiteQueen,
    whiteKing
    };