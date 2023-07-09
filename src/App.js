 
import { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
   
  const [data, setdata] = useState({});
  const [user, setuser] = useState("");
   
  const userdetails = async (userName) => {

    const apiURL =  "https://api.github.com/users/"+userName;
    if (!userName) {

      return;
    }
    axios.get(apiURL).then((res) => {
      console.log("respons", res.data)

      setdata(res.data);
       
    }).catch((err) => {
      console.log("error", err)
    })



  }

  const handlechange = (e) => {
    setuser(e.target.value);

  }

  const handlesearch = () => {
    userdetails(user)

  }

  useEffect(() => {

    userdetails("S-achin0")

  }, []);

   





  return (


    

      

<div className='background'>
        <div className="nav">
          
          
          <h1 className="head">Github User</h1>
          <input type="text" placeholder="Type user name" className="search" onChange={handlechange}></input>

          <button type="button" className="button" value={user} onClick={handlesearch}>Search user</button>
           


           <h1 className="user">
           <img src={data.avatar_url} alt='avatar' className='avatar'/>

          <a className="userName"href={data.html_url}>{data.name}</a> 
           
           <a className="userId"href={data.html_url}>@{data.login}</a>  
           
          </h1>
          
          
           
          


        </div>
        <div className='body'>

        <a className="userName"href={data.html_url}> <h2> Followers : {data.followers}</h2></a>
        <a className="userName"href={data.html_url}> <h2> Following : {data.following}</h2></a>
        <a className="userName"href={data.html_url}> <h2> Public repositories : {data.public_repos}</h2></a>
        <a className="userName"href={data.html_url}> <h2> Public gists : {data.public_gists}</h2></a>










        </div>





        </div>
      
       
     
  )
}

export default App;

