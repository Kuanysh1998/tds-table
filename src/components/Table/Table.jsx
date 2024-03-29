import styles from './Table.module.css'
import ReusableTable from '../ReusableComponents/ReusableTable'
import React from 'react'
import { Form, Formik, Field, ErrorMessage} from "formik"
import * as Yup from "yup"


function Table(props) {
    const theadData = ['FirstName', 'LastName', 'Gender', 'City', 'Email', 'Age']
    const tbodyData = []
    props.usersData.map(user => tbodyData.push({
        id: user.login.uiud,
        items: [user.name.first, user.name.last, user.gender, user.location.city, user.email, user.dob.age ]
    }))
    
    function sortUsersByAgesIncreasing() {
        const ages = [];
        for (let i = 0; i < props.usersData.length; i++) {
            
            ages.push(props.usersData[i].dob.age)
            
        }
        ages.sort(function(a, b){return a - b})
    
        const sortedUsers = []
        for(let i = 0; i < ages.length; i++){
            props.usersData.map(user =>{ if(user.dob.age === ages[i]){
                sortedUsers.push(user)
            }})
        }

        const uniqueSet = new Set(sortedUsers)
        const finalSortedUsers = [...uniqueSet]
        props.setByAgesIncreasing(finalSortedUsers)
    }

    function sortUsersByAgesDecreasing() {
        const ages = [];
        for (let i = 0; i < props.usersData.length; i++) {
            
            ages.push(props.usersData[i].dob.age)
            
        }
        ages.sort(function(a, b){return a - b})
        ages.reverse()
    
        const sortedUsers = []
        for(let i = 0; i < ages.length; i++){
            props.usersData.map(user =>{ if(user.dob.age === ages[i]){
                sortedUsers.push(user)
            }})
        }

        const uniqueSet = new Set(sortedUsers)
        const finalSortedUsers = [...uniqueSet]
        props.setByAgesDecreasing(finalSortedUsers)
    }
    
    


    return <div>
        <div>
            <div>
                <span>
                    How many users you want to see? <Formik  initialValues = {{
            amountOfUsers: props.showAmountUsers,
        
        }}
        validationSchema = {Yup.object({
            amountOfUsers: Yup.number()
            .min(1, 'At least 1 user')
            .max(5000, 'Maximum 5000 users')
            
        })}
        onSubmit = {(values) => props.getUsers(values.amountOfUsers)}><Form>
        <Field name={'amountOfUsers'} placeholder={'amount'}>
               </Field> <div><ErrorMessage name = 'amountOfUsers'/></div> <button type = 'submit'>Submit</button></Form></Formik>
                </span>
            </div> 
        <span>
            Filter by gender: <button onClick = {props.setMaleUsers}>Male</button> <button onClick = {props.setFemaleUsers} >Female</button>
        </span>
        </div>
        <div>
        <span>
            Sort by age: <button onClick = {sortUsersByAgesIncreasing}>Increasing</button> 
            <button onClick = {sortUsersByAgesDecreasing}>Decreasing</button>
        </span>
        </div>
        <ReusableTable theadData={theadData} tbodyData={tbodyData} />
    </div>
}

export default Table    