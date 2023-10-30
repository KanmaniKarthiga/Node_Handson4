const array = []  // database

const register = (req, res) => {
    const data = req.body;
    const details = array.find((item) => {
        if (item.email === data.email) {
            return item;
        }
    })
    if (details) {
        return res.send({ msg: "User already registered!" })
    }
    array.push(data)
    res.send(array)
}

const login = (req, res) => {
    const logindata = req.body;
    const details = array.find((item) => {
        if (item.email === logindata.email) {
            return item;
        }
    })

    if (details) {
        if (details.password === logindata.password) {
            return res.send({ msg: "User logged in" })
        }
        else {
            return res.send({ msg: "Password is wrong" })
        }
    }
    else {
        console.log("email is wrong")
    }

}
module.exports = { register, login }