import { useEffect, useState } from 'react'
import axios from 'axios'
import React from 'react'
import url from '../config'

function studentsTable(data) {
    const [student, setStudent] = useState([])
    const fetching1 = async () => {
        const data = await axios.get(`${url}/students`)
        setStudent(data.data.data)
    }
    useEffect(() => {
        fetching1()
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
                    </tr>
                </thead>
                <tbody>
                    {student.map((item, index) => {
                        return (
                            <tr key={item._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.phoneNumber}</td>
                                <td>{item.password}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
    )
}

export default studentsTable