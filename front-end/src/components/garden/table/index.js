
import React from 'react';
import CommonRow from '../entities/item/common-row';
import './styles.css';
import {GiFruitTree, GiFlowerPot, GiSittingDog, GiParkBench} from 'react-icons/gi';

const TableRows = (props) => {
    return (
        <>
            <div className="tableContainer">
            <table>
            <tbody>
            <tr>
                <td className="sbItem fruitsCategory">
                    <GiFruitTree className="icon" size={60}/>
                    <h3>Fruits</h3>
                </td>
                <td className="gardenRow fruitsRow">
                    <CommonRow listener={props.listener} 
                    items={props.fruits}
                    id={props.id}/>
                </td>
            </tr>
            <tr>
                <td className="sbItem flowersCategory">
                    <GiFlowerPot className="icon" size={60}/>
                    <h3>Flowers</h3>
                </td>
                <td className="gardenRow flowersRoew">
                    <CommonRow listener={props.listener} 
                    items={props.flowers}
                    id={props.id}/>
                </td>
            </tr>
            <tr>
                <td className="sbItem animalsCategory">
                    <GiSittingDog className="icon" size={60}/>
                    <h3>Animals</h3>
                </td>
                <td className="gardenRow animalsRow">
                <CommonRow listener={props.listener} 
                items={props.animals}
                id={props.id}/>
                </td>
            </tr>
            <tr>
                <td className="sbItem decorationsCategory">
                    <GiParkBench className="icon" size={60}/>
                    <h3>Objects</h3>
                </td>
                <td className="gardenRow decorationsRow">
                <CommonRow listener={props.listener} 
                items={props.decorations}
                id={props.id}/>
                </td>
            </tr>
            </tbody>
            </table>
            </div>
        </>
    );
};

export default TableRows;