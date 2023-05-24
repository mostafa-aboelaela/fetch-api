  import './App.css';
 import { useEffect,useState } from 'react';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import Table from 'react-bootstrap/Table';

 
function App() {

	const [uni,setUni] = useState();

	useEffect(() => {
				getData();
	},[]);

  const getData = async() => {
		const response = await fetch('http://universities.hipolabs.com/search?country=United+States').then( (response) => response.json());
		setUni(response);
	};


  return (
        <div className="App">
				<h1>Data List Of Universities</h1>
				  
				<Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Country</th>
          <th>Alpha_two_code</th>
          <th>Name</th>
          <th>Domains</th>
					<th>Web_pages</th>
        </tr>
      </thead>


			<tbody>
      
			{uni && uni.slice(0,10).map( (record,id)=> (
				<tr key={id}>
					<td>{record.country}</td> 
					<td>{record.alpha_two_code}</td> 
					<td>{record.name}</td> 
					<td>{record.domains}</td> 
					<td>{record.web_pages}</td>
					</tr> 
			 ))}
       

			</tbody>
			</Table>

						
					
			 
					 
			 
			 </div>
   );
}

export default App;
