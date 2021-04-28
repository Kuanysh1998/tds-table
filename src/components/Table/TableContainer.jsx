import React from 'react'
import { getUsers, setMaleUsers, setFemaleUsers, setByAgesIncreasing, setByAgesDecreasing, setAmountUsers} from '../../redux/table-reducer'
import {connect} from "react-redux"
import Table from './Table'

class TableContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.showAmountUsers)

    }

    
    render() {
        return <Table usersData = {this.props.usersData}
        setMaleUsers = {this.props.setMaleUsers}
        setFemaleUsers = {this.props.setFemaleUsers}
        setByAgesIncreasing = {this.props.setByAgesIncreasing}
        setByAgesDecreasing = {this.props.setByAgesDecreasing}
        showAmountUsers = {this.props.showAmountUsers}
        setAmountUsers = {this.props.setAmountUsers}
        getUsers = {this.props.getUsers}/>
    }
}


const mapStateToProps = (state) => {
    return {
        usersData: state.tdsTable.usersData,
        showAmountUsers: state.tdsTable.showAmountUsers
    }
}

export default connect(mapStateToProps, {getUsers, setMaleUsers, setFemaleUsers, setByAgesIncreasing, setByAgesDecreasing, setAmountUsers})(TableContainer)