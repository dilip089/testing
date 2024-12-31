import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getUserData } from '../redux/Action'

const UserForm = () => {
  const [userDetils, setDetils] = useState({
    firstName: "",
    lastName: "",
    country: "",
    language: "",
    vehicle: []
  })
  const [userData, setData] = useState([])
  const [editIndex, setEditIndex] = useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const params = useParams()
  

  const tableData = useSelector((state) => state?.data) || []
  const editData = useSelector((state) => state?.editObj) || {
    firstName: "",
    lastName: "",
    country: "",
    language: "",
    vehicle: []
  }
  useEffect(() => {
    setData(tableData)
    if (params?.id) {
      setDetils(editData)
      setEditIndex(params?.id)
    }
  }, [])

  const handleChange = (e) => {
    setDetils({
      ...userDetils, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    const arr = [...userData]    
    if (editIndex !== null) {
      arr[editIndex] = userDetils
    } else {
      arr.push(userDetils)
    }
    setData(arr)
    dispatch(getUserData(arr))
    setEditIndex(null)
    handleReset()
  }

  const handleReset = () => {
    setDetils({
      firstName: "",
      lastName: "",
      country: "",
      language: "",
      vehicle: []
    })
  }
  const handleChangeCheckbox = (e) => {
    const checkArr = [...userDetils.vehicle]
    if (e.target.checked) {
      checkArr.push(e.target.value)
    } else {
      const removeData = checkArr.indexOf(e.target.value)
      checkArr.splice(removeData, 1)
    }
    setDetils({
      ...userDetils, vehicle: checkArr
    })
  }

  return (

    <div>
      <div className="container">
        <form action="action_page.php">

          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="firstName" value={userDetils.firstName} onChange={(e) => handleChange(e)} placeholder="Your name.." />

          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lastName" value={userDetils.lastName} onChange={(e) => handleChange(e)} placeholder="Your last name.." />

          <label htmlFor="country">country</label>
          <select id="country" name="country" value={userDetils.country} onChange={(e) => handleChange(e)}>
            <option value="select">select your city</option>
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
          <br />
          <p>Please select your favorite Web language:</p>
          <input type="radio" id="html" name="language" value="HTML" checked={userDetils.language === "HTML"} onChange={(e) => handleChange(e)} />
          <label htmlFor="html">HTML</label><br />
          <input type="radio" id="css" name="language" value="CSS" checked={userDetils.language === "CSS"} onChange={(e) => handleChange(e)} />
          <label htmlFor="css">CSS</label><br />
          <input type="radio" id="javascript" name="language" value="JavaScript" checked={userDetils.language === "JavaScript"} onChange={(e) => handleChange(e)} />
          <label htmlFor="javascript">JavaScript</label><br /><br />

          <p>Please select your favorite vehicle:</p>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" checked={userDetils.vehicle.includes("Bike")} onChange={(e) => handleChangeCheckbox(e)} />
          <label htmlFor="vehicle1"> I have a bike</label><br />
          <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" checked={userDetils.vehicle.includes("Car")} onChange={(e) => handleChangeCheckbox(e)} />
          <label htmlFor="vehicle2"> I have a car</label><br />
          <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" checked={userDetils.vehicle.includes("Boat")} onChange={(e) => handleChangeCheckbox(e)} />
          <label htmlFor="vehicle3"> I have a boat</label><br /><br />
          <div>
            <button type="button" onClick={() => handleSubmit()}>Submit</button>
            <button type="button" onClick={() => navigate("/table")} style={{ marginInline: "8px" }}>Go to Table</button>
          </div>
        </form>
      </div>
      <br />
    </div>
  )
}

export default UserForm
