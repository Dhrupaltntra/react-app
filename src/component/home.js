import React, {useState, useEffect} from "react";

const Home = (id) => {
  const [bio, setBio] = useState([]);
  const [state, setState] = useState({
      name: '',
      email: ''
  });

  const {name, email} = state

  const handleOnChange = (e, key) => {
    setState({
      ...state,
      [key]: e.target.value
    });
  }

  const handleOnClick = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(email);
  }

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const response = await fetch('https://gorest.co.in/public/v2/users')
    .then(response => response.json())
    .then(json => { return json})
    console.log(response);
    setBio(response)
    if(response.length > 0){
      setState({
        ...state,
        name: '',
        email: ''
      })
    }
  }

  return (
    <div>
      <form onSubmit={handleOnClick}>
        <input 
            value={name}
            placeholder="Name"
            aria-label="Name"
            aria-describedby="basic-addon1"
            onChange={(e) => handleOnChange(e, 'name')}
        />
        <input 
            value={email}
            placeholder="Email"
            aria-label="Email"
            aria-describedby="basic-addon2"
            onChange={(e) => handleOnChange(e, 'email')}
        />
        <button>Submit</button>
      </form>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">{'ID'}</th>
              <th scope="col">{'Name'}</th>
              <th scope="col">{'Email'}</th>
              <th scope="col">{'Gender'}</th>
            </tr>
          </thead>
          <tbody>
            {bio.map(user => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
      
      {/* <li key={user.id}>{user.id}</li> */}
      {/* <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table> */}
    </div>
  )
};

export default Home;