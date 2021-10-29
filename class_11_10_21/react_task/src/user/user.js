import {useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import {setUser as updateUserAction} from '../redux/actions/userActions'
export default function User({history,match}){
  const userSelector = (useSelector(state => state.allUsers.find((user) => user.id === match.params.userId)));
    let [user,setUser] = useState(userSelector)
    const dispatch = useDispatch();
    const updateUser =(e)=>{
      e.preventDefault();
        dispatch(updateUserAction(user));
        history.push("/users")
    }
    const userChange = (key,value)=>{
        setUser((prev) => {return {...prev,[key]:value}})
    } 
    return (
        <div className="row m-5">
        <form>
            <div className="form-group col-6">
            <label for="userId" className="font-weight-bold text-muted" >UserID :</label>
            <label name="userId" className="font-weight-bold text-muted p-2">{user?.id }</label>
            </div>
  <div className="form-group col-6">
    <label for="username">UserName</label>
    <input name="username" type="text" className="form-control" id="username" placeholder="User name" onChange={(event)=>userChange('username',event.target.value)} value={user?.username} required/>
  </div>
  <div className="form-group col-6">
    <label for="name">Name</label>
    <input name="name" type="text" className="form-control" id="exampleInputPassword1" placeholder="name" onChange={(event)=>userChange('name',event.target.value)}  value={user?.name} required/>
  </div>
  <div className="form-group col-6">
    <label for="email">Email</label>
    <input name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="email" onChange={(event)=>userChange('email',event.target.value)}  value={user?.email} required/>
  </div>
  <div className="form-group col-6">
    <label for="phone">Phone</label>
    <input name="phone" type="text" className="form-control" id="phone" placeholder="phone" value={user?.phone} onChange={(event)=>userChange('phone',event.target.value)}  required/>
  </div>
  <div className="form-group col-6">
    <label for="website">Website</label>
    <input name="website" type="text" className="form-control" id="website" placeholder="website" value={user?.website} onChange={(event)=>userChange('website',event.target.value)}  required/>
  </div>
  <div className="form-group col-6 my-2">
  <button type="submit" className="btn btn-primary" onClick={updateUser}>Submit</button>
  </div>
  
</form>
        </div>
    )
}