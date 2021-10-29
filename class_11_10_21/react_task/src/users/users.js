import  './users.css';
import { useEffect,useState } from "react";
// import { DataGrid } from "@mui/x-data-grid";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch, useSelector} from "react-redux";
import {deleteUsers} from '../redux/actions/userActions'

export default function Users({history,location}) {
  const usersSelector = (useSelector(state => state.allUsers));
  let [userState,setUserState] = useState(usersSelector)
  const dispatch = useDispatch();
  useEffect(()=>{
  },[])


  function deleteUser(id){
    dispatch(deleteUsers(id));
    setUserState([...usersSelector])
  }
  function editUser(id){
    history.push(`${location.pathname}/${id}`);
  }
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>#</TableCell>
          <TableCell align="right">User Name</TableCell>
          <TableCell align="right">Name</TableCell>
          <TableCell align="right">Email</TableCell>
          <TableCell align="right">Phone</TableCell>
          <TableCell align="right">Website</TableCell>
          {/* <TableCell align="right">Address</TableCell> */}
          <TableCell align="right">Edit</TableCell>
          <TableCell align="right">Delete</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {userState.map((row) => (
          <TableRow
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell align="right">{row.username}</TableCell>
            <TableCell align="right">{row.name}</TableCell>
            <TableCell align="right">{row.email}</TableCell>
            <TableCell align="right">{row.phone}</TableCell>
            <TableCell align="right">{row.website}</TableCell>
            <TableCell align="right">
              <EditIcon className="editRow"  onClick={
              ()=>{
                editUser(row.id)
              }
            }/>
            </TableCell>
            <TableCell align="right">
              <DeleteIcon className="deleteRow" onClick={()=>{
                deleteUser(row.id)
              }}/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
}
