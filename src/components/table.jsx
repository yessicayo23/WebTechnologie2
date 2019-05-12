import React, { Component } from 'react';
import TableRow from './tablerow';
import TableHead from './tablehead';
import '../all.css';




class Table extends Component {

    constructor(props){
        super(props);

    }

    render() { 

        //console.log(this.props.feacher[1]);
        return ( 
                <React.Fragment>
                    <tbody id="fullTable">

                        <TableHead tableHead={this.props.feacher} />
                        <TableRow tableRow={this.props.feacher[1]} />
                        <TableRow tableRow={this.props.feacher[2]} />
                        <TableRow tableRow={this.props.feacher[3]} />
                        <TableRow tableRow={this.props.feacher[4]} />
                        <TableRow tableRow={this.props.feacher[5]} />
                        <TableRow tableRow={this.props.feacher[6]} />
                        <TableRow tableRow={this.props.feacher[7]} />
                        <TableRow tableRow={this.props.feacher[8]} />
                        <TableRow tableRow={this.props.feacher[9]} />
                        <TableRow tableRow={this.props.feacher[10]} />
                        <TableRow tableRow={this.props.feacher[11]} />
                        <TableRow tableRow={this.props.feacher[12]} />


                    </tbody> 
                </React.Fragment>
                )
         
    }
}
 

export default Table;