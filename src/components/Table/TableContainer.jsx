import React from 'react'
import { getUsers } from '../../redux/table-reducer'
import {connect} from "react-redux"
import Table from './Table'

class TableContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers()
        
        
    }
    render() {
        return <Table usersData = {this.props.usersData}/>
    }
}


const mapStateToProps = (state) => {
    return {
        usersData: state.tdsTable.usersData
    }
}

export default connect(mapStateToProps, {getUsers})(TableContainer)