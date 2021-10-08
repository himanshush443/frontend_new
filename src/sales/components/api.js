import qs from 'qs'
import axios from 'axios'
import XMLParser from 'react-xml-parser'

export const getMotorData = (regNumber, user) => {
    
    const form = new FormData()
    form.append('RegistrationNumber', regNumber)
    form.append('username', user)

    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }

    axios({
        method: 'post',
        url: 'https://www.regcheck.org.uk/api/reg.asmx/CheckIndia',
        data: qs.stringify({
            RegistrationNumber: regNumber,
            username: user
        }),
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    })
        .then(response => {
            // console.log(response)
            var xml = new XMLParser().parseFromString(response.data); 
            var res = JSON.parse(xml.children[0].value)
            return res
        })
        .catch(err => {
            console.log(err)
            return "error"
        })
}

