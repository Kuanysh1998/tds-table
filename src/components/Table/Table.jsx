import styles from './Table.module.css'
import ReusableTable from '../ReusableComponents/ReusableTable'

function Table(props) {
    const theadData = ['FirstName', 'LastName', 'Gender', 'City', 'Email', 'Age']
    const tbodyData = []
    props.usersData.map(user => tbodyData.push({
        id: user.login.uiud,
        items: [user.name.first, user.name.last, user.gender, user.location.city, user.email, user.dob.age ]
    }))    

 

    return <div>
        <ReusableTable theadData={theadData} tbodyData={tbodyData} />
    </div>
}

export default Table