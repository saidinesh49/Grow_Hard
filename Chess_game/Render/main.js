import * as piece from "../Data/pieces.js";
import { ROOT_DIV } from "../Helper/constants.js";
import { globalState } from "../index.js";

const globalPiece = new Object();

// function globalStateRender (this function is usefull to render pieces from globalStateData) => use when updating globalState
function globalStateRender() {
  globalState.forEach((row) => {
    row.forEach((element) => {
      if (element.highlight) {
        const hightlightSpan = document.createElement("span");
        hightlightSpan.classList.add("highlight");
        document.getElementById(element.id).appendChild(hightlightSpan);
        // } else if (element.highlight === null) {
      } else {
        const el = document.getElementById(element.id);
        const highlights = Array.from(el.getElementsByTagName("span"));
        highlights.forEach((element) => {
          el.removeChild(element);
        });
        // document.getElementById(element.id).innerHTML = "";
      }
    });
  });
}


function selfHighlight(piece) {
  document
    .getElementById(piece.current_position)
    .classList.add("highlightYellow");
}

// use when you want to render pieces on board
function pieceRender(data) {
  data.forEach((row) => {
    row.forEach((square) => {
      // if square has piece
      if (square.piece) {
        const squareEl = document.getElementById(square.id);

        // create piece
        const piece = document.createElement("img");
        piece.src = square.piece.img;
        piece.classList.add("piece");

        // insert piece into square element
        squareEl.appendChild(piece);
      }
    });
  });
}

// use when you want to render board for first time when game start
function initGameRender(data) {
  data.forEach((element) => {
    const rowEl = document.createElement("div");
    element.forEach((square) => {
      const squareDiv = document.createElement("div");
      squareDiv.id = square.id;
      squareDiv.classList.add(square.color, "square");
      
      // render blackpawn
      if (square.id[1] == 7) {
        square.piece = piece.blackPawn(square.id);
        globalPiece.black_pawn = square.piece
      }

      // render black rook
      if (square.id == "h8" || square.id == "a8") {
        square.piece = piece.blackRook(square.id);
        if(globalPiece.black_rook_1) {
          globalPiece.black_rook_2 = square.piece
        } else {
          globalPiece.black_rook_1 = square.piece
        }
      }

      // render black knight
      if (square.id == "b8" || square.id == "g8") {
        square.piece = piece.blackKnight(square.id);
        if(globalPiece.black_knight_1) {
          globalPiece.black_knight_2 = square.piece
        } else {
          globalPiece.black_knight_1 = square.piece
        }
      }
      // render black knight
      if (square.id == "c8" || square.id == "f8") {
        square.piece = piece.blackBishop(square.id);
        if(globalPiece.black_bishop_1) {
          globalPiece.black_bishop_2 = square.piece
        } else {
          globalPiece.black_bishop_1 = square.piece
        }
      }
      // render black knight
      if (square.id == "d8") {
        square.piece = piece.blackQueen(square.id);
        globalPiece.black_queen = square.piece
      }
      // render black knight
      if (square.id == "e8") {
        square.piece = piece.blackKing(square.id);
        globalPiece.black_king = square.piece;
      }

      // render white pawn
      if (square.id[1] == 2) {
        square.piece = piece.whitePawn(square.id);
        globalPiece.white_pawn = square.piece
      }
      // render white queen
      if (square.id == "d1") {
        square.piece = piece.whiteQueen(square.id);
        globalPiece.white_queen = square.piece
      }

      // render white king
      if (square.id == "e1") {
        square.piece = piece.whiteKing(square.id);
        globalPiece.white_king = square.piece;
      }

      // render white rook
      if (square.id == "h1" || square.id == "a1") {
        square.piece = piece.whiteRook(square.id);
        if(globalPiece.white_rook_1) {
          globalPiece.white_rook_2 = square.piece
        } else {
          globalPiece.white_rook_1 = square.piece
        }
      }

      // render black knight
      if (square.id == "b1" || square.id == "g1") {
        square.piece = piece.whiteKnight(square.id);
        if(globalPiece.white_knight_1) {
          globalPiece.white_knight_2 = square.piece
        } else {
          globalPiece.white_knight_1 = square.piece
        }
      }

      // render black bishop
      if (square.id == "c1" || square.id == "f1") {
        square.piece = piece.whiteBishop(square.id);
        if(globalPiece.white_bishop_1) {
          globalPiece.white_bishop_2 = square.piece
        } else {
          globalPiece.white_bishop_1 = square.piece
        }
      }

      rowEl.appendChild(squareDiv);
    });
    rowEl.classList.add("squareRow");
    ROOT_DIV.appendChild(rowEl);
  });

  pieceRender(data);
}

// render hightlight circle
function renderHighlight(squareId) {
  const hightlightSpan = document.createElement("span");
  hightlightSpan.classList.add("highlight");
  document.getElementById(squareId).appendChild(hightlightSpan);
}

// clear all highlights from the board
function clearHightlight() {
  const flatData = globalState.flat();

  flatData.forEach((el) => {
    if (el.captureHighlight) {
      document.getElementById(el.id).classList.remove("captureColor");
      el.captureHighlight = false;
    }

    if (el.highlight) {
      el.highlight = null;
    }

    globalStateRender();
  });
}

export {
  initGameRender,
  renderHighlight,
  clearHightlight,
  selfHighlight,
  globalStateRender,
  globalPiece
};


































// import * as piece from "../Data/pieces.js";
// import { ROOT_DIV } from "../Helper/constants.js";
// import { globalState } from "../index.js";


// //move element to square with id
// function moveElement(piece, id){

//     const flatData=globalState.flat();

//     flatData.forEach((el) => {
//       if(el.id==piece.current_position){
//         delete el.piece;
//       }

//       if(el.id==id){
//          el.piece=piece;
//       }
//     });
    
//     clearHighlight();
//     const previousPiece=document.getElementById(piece.current_position);
//     previousPiece.classList.remove("highlightYellow");
//     const currentPiece=document.getElementById(id);
    
//     currentPiece.innerHTML=previousPiece.innerHTML;
//     previousPiece.innerHTML="";

//     piece.current_position=id;
// }


// function clearPreviousSelfHighlight(piece) {

//    if(piece) {
//       document.getElementById(piece.current_position).classList.remove("highlightYellow");
//    }

// }

// function selfHighlight(piece) {

//    document.getElementById(piece.current_position).classList.add("highlightYellow");

  
// }


// //use when you want to change / render (moving pieces)
// function peiceRender(data){
//     data.forEach((row) =>{
//         row.forEach((square) => {
//             //if that square has piece
//             if(square.piece){
//             const squareEl=document.getElementById(square.id);
               
//              //create piece
//              const piece=document.createElement("img");
//              piece.src=square.piece.img;
//              piece.classList.add("piece");

//              //insert piece i adding to 
//              squareEl.appendChild(piece);
//           }
//         });
//     });
// }

// //for starting game Use when we want to start
// function initGameRender(data){
//     data.forEach((element)=>{
//       const rowEl=document.createElement("div");
//       element.forEach((square)=> {
//          const squareDiv=document.createElement("div");
//          squareDiv.id=square.id;
//          squareDiv.classList.add(square.color, "square");
//          //this initializes BLACK pawns
//          if(square.id[1]==7){
//            square.piece=piece.blackPawn(square.id);
//             }
//          //this is for rendering ROOK
//          if(square.id=="h8" || square.id=="a8"){
//             square.piece=piece.blackRook(square.id);
//             }
//          //this is for rendering Knight
//          if(square.id=="b8" || square.id=="g8"){
//            square.piece=piece.blackKnight(square.id);
//            }
//          //this is for rendering Bishop
//          if(square.id=="c8" || square.id=="f8"){
//             square.piece=piece.blackBishop(square.id);
//          }
//          //this is for rendering Queen
//          if(square.id=="d8"){
//             square.piece=piece.blackQueen(square.id);
//          }
//          //this is for rendering King
//          if(square.id=="e8"){
//             square.piece=piece.blackKing(square.id);
//          }



//          //this initializes WHITE pawns
//          if(square.id[1]==2){
//            square.piece=piece.whitePawn(square.id);
//            }
//          if(square.id=="h1" || square.id=="a1"){
//             square.piece=piece.whiteRook(square.id);
//             }
//          //this is for rendering Knight
//          if(square.id=="b1" || square.id=="g1"){
//            square.piece=piece.whiteKnight(square.id);
//            }
//          //this is for rendering Bishop
//          if(square.id=="c1" || square.id=="f1"){
//             square.piece=piece.whiteBishop(square.id);
//          }
//          //this is for rendering Queen
//          if(square.id=="d1"){
//             square.piece=piece.whiteQueen(square.id);
//          }
//          //this is for rendering King
//          if(square.id=="e1"){
//             square.piece=piece.whiteKing(square.id);
//          }

//          rowEl.appendChild(squareDiv);

//       });
//         rowEl.classList.add("squareRow");
//         ROOT_DIV.appendChild(rowEl);
//     });

//     peiceRender(data);
// }


// //render highlight circle
// function renderHighlight(squareId){
//   const highlightSpan=document.createElement("span");
//   highlightSpan.classList.add("highlight");
//   document.getElementById(squareId).appendChild(highlightSpan);
// }


// //clear all highlights from the board
// function clearHighlight(){

//    const flatData=globalState.flat();

//    flatData.forEach((el) => {

//       if(el.captureHighlight){
//          console.log(el);
//       }

//       if(el.highlighted){

//         document.getElementById(el.id).innerHTML="";
//         el.highlighted=false;
//       }
//    });
   
// }

// export { initGameRender,
//          renderHighlight,
//          clearHighlight, 
//          selfHighlight, 
//          clearPreviousSelfHighlight, 
//          moveElement, 
//       };