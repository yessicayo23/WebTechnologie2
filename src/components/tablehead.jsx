import React, { Component } from 'react';
import '../all.css';

class TableHead extends Component {

    constructor(props){
        super(props);

    }


    render() { 


        return ( 
            
            
            <tr id="headerRow">
                <th>{this.props.tableHead[0][0]}</th>
                <th>{this.props.tableHead[0][1]}</th>
                <th>{this.props.tableHead[0][2]}</th>
                <th>{this.props.tableHead[0][3]}</th>
                <th>{this.props.tableHead[0][4]}</th>
                <th>{this.props.tableHead[0][5]}</th>
                <th>{this.props.tableHead[0][6]}</th>
            </tr>
        
         );
    }
}
 
    export default TableHead;