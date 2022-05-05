import request from '../request'

const third = {
    getNewCase: async () => {
        try {
            const response = request.get('third/newcase')
            return response
        }
        catch (e) {
            console.log(e)
        }
    },
    getHospital: async () => {
        try {
            const response = request.get('third/hospital')
            return response
        }
        catch (e) {
            console.log(e)
        }
    },
}

export default third