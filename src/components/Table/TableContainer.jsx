import React from 'react'
import { getUsers, setMaleUsers, setFemaleUsers, setByAgesIncreasing, setByAgesDecreasing } from '../../redux/table-reducer'
import {connect} from "react-redux"
import Table from './Table'

class TableContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers()

    }

    
    render() {
        return <Table usersData = {this.props.usersData}
        setMaleUsers = {this.props.setMaleUsers}
        setFemaleUsers = {this.props.setFemaleUsers}
        setByAgesIncreasing = {this.props.setByAgesIncreasing}
        setByAgesDecreasing = {this.props.setByAgesDecreasing}/>
    }
}


const mapStateToProps = (state) => {
    return {
        usersData: state.tdsTable.usersData
    }
}

export default connect(mapStateToProps, {getUsers, setMaleUsers, setFemaleUsers, setByAgesIncreasing, setByAgesDecreasing})(TableContainer)