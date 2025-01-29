const BASE_URL = "https://seb-2-pt-api.onrender.com"

const index = async () => {

    try {
        const res = await fetch(BASE_URL + "/students")
        const data = await res.json()
        return data;
        
    } catch (error) {
        console.log(error);
    }

}


const deleteStudent = async (studentId) => {

    try {
        const res = await fetch(BASE_URL + "/students/" + studentId,{
            method: "DELETE"
        })
        return res.json()
        
    } catch (error) {
        console.log(error);
    }

}

export {index, deleteStudent}