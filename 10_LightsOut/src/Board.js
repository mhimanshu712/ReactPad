import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {

  static defaultProps = {
    nrows:5,
    ncols:5,
    chanceLightStartsOn: 0.20
  }

  constructor(props) {
    super(props);
 
    this.state = {hasWon:false,board:this.createBoard()}
  }

  createBoard() {
    let board = [];
    for(let i=0;i<this.props.nrows;i++){
      let t = []
      for(let j=0;j<this.props.ncols;j++){
        t.push((Math.random() < this.props.chanceLightStartsOn))
      }
      board.push(t)
    }
    return board
  }

  flipCellsAround(coord) {
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    flipCell(y,x)
    flipCell(y-1,x)
    flipCell(y+1,x)
    flipCell(y,x-1)
    flipCell(y,x+1)


    let hasWon = board.every(row => row.every(cell => !cell))

    this.setState({board:board, hasWon:hasWon});
  }


  render() {
    if(this.state.hasWon){
      return(
        <div className='boards-title winner'>
          <div className='neon-orange'>You</div>
          <div className='neon-blue'> Won!</div>
        </div>
      )
    }


    return(
      <div>
        <div className="boards-title">
          <div className="neon-orange">Lights</div>
          <div className="neon-blue">Out</div>
        </div>


          <table className="Board">
            <tbody>
              {this.state.board.map((el,idx) => (
                <tr>
                  {el.map((ela,idy) =>(
                    <Cell key={`${idx}-${idy}`} isLit={ela} flipCellsAroundMe = {()=> this.flipCellsAround(`${idx}-${idy}`)}/>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    )
  }
}


export default Board;
