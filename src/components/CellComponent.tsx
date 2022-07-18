import React, {FC} from 'react';
import {Cell} from "../models/Cell";

interface CellComponentProps {
    cell: Cell,
    selected: boolean,
    cellClick: (cell: Cell) => void
}

const CellComponent: FC<CellComponentProps> = ({cell, selected, cellClick}) => {
    return (
        <div
            className={['cell', cell.color, selected ? 'selected' : ''].join(' ')}
            onClick={() => cellClick(cell)}
            style={{background: cell.available && cell.figure ? 'green' : ''}}
        >
            {cell.available && !cell.figure && <div className={'available'}/>}
            {cell.figure?.logo && <img src={cell.figure.logo} alt=""/>}
        </div>
    );
};

export default CellComponent;