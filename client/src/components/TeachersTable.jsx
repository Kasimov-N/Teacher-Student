import { useEffect, useState } from 'react'
import axios from 'axios'
import React from 'react'
import url from '../config'

function teachersTable(data) {
    const [teacher, setTeacher] = useState([])
    const fetching = async () => {
        const data = await axios.get(`${url}/teachers`)
        setTeacher(data.data.data)
    }
    useEffect(() => {
        fetching()
    }, [])
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Password</th>
                    <th scope="col">Subject</th>
                </tr>
            </thead>
            <tbody>
                {teacher.map((item, index) => {
                    return (
                        <tr key={item._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.phoneNumber}</td>
                            <td>{item.password}</td>
                            <td>{item.subject}</td>
                        </tr>
                    )
                })}

            </tbody>
        </table>
    )
}

export default teachersTable