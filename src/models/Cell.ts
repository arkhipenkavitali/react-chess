import {Colors} from "./Colors";
import {Figure} from "./figures/Figure";
import {Board} from "./Board";

export class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    figure: Figure | null;
    board: Board;
    available: boolean; // Можем ли переместиться
    id: number; // Для ключей react

    constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
        this.board = board;
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.available = false;
        this.id = Math.random();
    }

    moveFigure(target: Cell){
        if(this.figure && this.figure?.canMove(target)){
            this.figure.moveFigure(target)
            target.figure = this.figure
            this.figure = null
        }
    }
}