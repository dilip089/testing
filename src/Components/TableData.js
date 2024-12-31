import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteUserData, editUserData } from '../redux/Action'

const TableData = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const tableData = useSelector((state) => state?.data) || []

  const handleDelete = (index) => {
    dispatch(deleteUserData(index))
  }

  const handleEdit = (index) => {
    navigate(`/edit/${index}`)
    dispatch(editUserData(index))
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>firstname</th>
            <th>lastname</th>
            <th>country</th>
            <th>language</th>
            <th>vehicle</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((value, index) => (
            <tr>
              <td>{value.firstName}</td>
              <td>{value.lastName}</td>
              <td>{value.Country}</td>
              <td>{value.language}</td>
              <td>{value.vehicle}</td>
              <td>
                <button type='button' onClick={() => handleEdit(index)}>Edit</button>
                <button type='button' style={{ background: "red", marginLeft: "5px" }} onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" onClick={() => navigate("/")} style={{ marginInline: "8px" }}>Go to Table</button>
    </div>
  )
}

export default TableData
