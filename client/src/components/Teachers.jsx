import axios from 'axios'
import React, { useRef } from 'react'
import url from '../config'

function Teachers() {
    const inp1 = useRef(null)
    const inp2 = useRef(null)
    const inp3 = useRef(null)
    const inp4 = useRef(null)
    const inp5 = useRef(null)
    const inp6 = useRef(null)

    const person = async () => {
        if (inp1.current.value && inp2.current.value && inp3.current.value && inp4.current.value && inp5.current.value && inp6.current.value) {
            let data = {
                firstName: inp1.current.value,
                lastName: inp2.current.value,
                email: inp3.current.value,
                phoneNumber: +inp4.current.value,
                password: inp5.current.value,
                subject: inp6.current.value
            }
            console.log(data);
            const res = await axios.post(`${url}/teachers`, data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            inp1.current.value = ''
            inp2.current.value = ''
            inp3.current.value = ''
            inp4.current.value = ''
            inp5.current.value = ''
            inp6.current.value = ''
        } else {
            console.log("Error");
        }
    }

    return (
        <form className='row'>
            <div className="mb-3 col-6">
                <label htmlFor="inp1" className="form-label">First Name</label>
                <input ref={inp1} type="text" className="form-control" id="inp1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3 col-6">
                <label htmlFor="inp2" className="form-label">Last Name</label>
                <input ref={inp2} type="text" className="form-control" id="2np1" />
            </div>
            <div className="mb-3 col-6">
                <label htmlFor="inp3" className="form-label">Email</label>
                <input ref={inp3} type="email" className="form-control" id="inp3" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3 col-6">
                <label htmlFor="inp4" className="form-label">Phone</label>
                <input ref={inp4} type="number" className="form-control" id="inp4" />
            </div>
            <div className="mb-3 col-6">
                <label htmlFor="inp5" className="form-label">Password</label>
                <input ref={inp5} type="password" autoComplete='on' className="form-control" id="inp5" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3 col-6">
                <label htmlFor="inp6" className="form-label">Subject</label>
                <input ref={inp6} type="text" className="form-control" id="inp6" />
            </div>
            <button type="button" onClick={person} className="btn btn-primary mx-3 col-3">Submit</button>
        </form>
    )
}

export default Teachers