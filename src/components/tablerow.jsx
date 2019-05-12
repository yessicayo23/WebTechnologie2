import React, { Component } from 'react';
import '../all.css';



class TableRow extends Component {

    constructor(props){
        super(props);

    }




    render() { 

        return ( 
     


            
            <tr>
                <td>{this.props.tableRow[0]}</td>
                <td><input className="time" type="time" name="uhrzeit_von"/><input className="time" type="time" name="uhrzeit_bis"/></td>
                <td>{this.props.tableRow[1]}</td>
                <td>{this.props.tableRow[2]}</td>
                <td>{this.props.tableRow[3]}</td>
                <td>{this.props.tableRow[4]}</td>
                <td>{this.props.tableRow[5]}</td>
            </tr>

         );
    }
}
 
export default TableRow;