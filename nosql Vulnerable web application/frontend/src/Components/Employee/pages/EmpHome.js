import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Layout from "../components/Layout";
import { width } from "@mui/system";

const EmpHome = () => {
  return (
    <>
      
      <Layout>
        <div>
          <input style={{textAlign:'center',width:"200px", marginLeft:'1020px', position:'absolute' }}
             className = "form-control"
             type = "search"
             placeholder = "Search"
             name = "searchQuery"
             >
              
          </input>
          <button id = "Dreport" type="button" class="btn btn-secondary"  style={{textDecoration:'none',color:'white', textAlign:'center',width:"200px", marginLeft:'805px', position:'absolute'  }}>Download Requests
            </button>
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              onClick={() => {
                window.location.href = "/userprofile";
              }}
              //Navigation for Profile View 
            >
              User Profile
            </Button>
          
            <Button
              variant="contained"
              onClick={() => {
                window.location.href = "/empregister";
              }}
              //Navigation for user Registration
            >
              User Registration
            </Button>
          </Stack>
         
        </div>
       
        <div style={{position:'absolute', marginTop:'4.5%'}}>

        
      {/* Table for employee details */}

    
        <table class="table table-hover" id = "leavedash" style={{width:'1220px',   textAlign:"center"}} >
                    <thead >
                <tr style={{textAlign:'center', backgroundColor:'#1CAF9A'}}>
                    <th style={{color:"white", textAlign:"center", backgroundColor:'#1CAF9A', fontWeight:"normal"}} scope="col" ></th>
                    <th style={{color:"white", textAlign:"center", backgroundColor:'#1CAF9A',fontWeight:"normal"}} scope="col"> Emp ID</th>
                    <th style={{color:"white", textAlign:"center", backgroundColor:'#1CAF9A',fontWeight:"normal"}}scope="col">Emp Name</th>
                    <th style={{color:"white", textAlign:"center", backgroundColor:'#1CAF9A',fontWeight:"normal"}} scope="col">Salary Type</th>
                    <th style={{color:"white", textAlign:"center", backgroundColor:'#1CAF9A',fontWeight:"normal"}}scope="col">Basic Salary (LKR)</th>
                    <th style={{color:"white", textAlign:"center", backgroundColor:'#1CAF9A',fontWeight:"normal"}}scope="col">Overtime (LKR)</th>
                    <th style={{color:"white", textAlign:"center", backgroundColor:'#1CAF9A',fontWeight:"normal"}}scope="col">Bonus (LKR)</th>
                    {/* <th scope="col">Reason</th> */}
                    <th style={{color:"white", textAlign:"center", backgroundColor:'#1CAF9A',fontWeight:"normal"}}scope="col" >Status</th>
                    <th style={{color:"white", textAlign:"center", backgroundColor:'#1CAF9A',fontWeight:"normal"}}scope="col" >Action</th>
                    
                    
                    </tr>
                </thead>
               
                <tbody >
                {/* All employee Deatails are Hard Coded, */}
                        <tr style={{height:"50px", textAlign:"center"}}>
                          <th scope="row">1</th>
                          <td>Emp01</td>
                          <td>Jason</td>
                          <td>Part-Time</td>
                          <td>50,000</td>
                          <td>20,000</td>
                          <td>15,000</td>
                          <td>Pending</td>
                          <td >
                        <a className="btn btn-primary"   style={{textDecoration:'none', width:"100px" }}>
                        &nbsp;Edit
                        
                        </a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a className="btn btn-success"   style={{textDecoration:'none', width:"100px" }}>
                        &nbsp;Approve
                        
                        </a>
                     
                        &emsp; 
                        <a className="btn btn-warning btn-small custom "  style={{textDecoration:'none', width:"100px"  }}>
                        <i className="fas fa-trash-alt"></i>&nbsp;Deny
                        </a>
                       
                    
                    </td>
                        </tr>
                        <tr style={{height:"50px", textAlign:"center"}}>
                          <th scope="row">2</th>
                          <td>Emp02</td>
                          <td>Carol</td>
                          <td>Part-Time</td>
                          <td>50,000</td>
                          <td>20,000</td>
                          <td>15,000</td>
                          <td>Pending</td>
                          <td >
                          <a className="btn btn-primary"   style={{textDecoration:'none', width:"100px" }}>
                        &nbsp;Edit
                        
                        </a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a className="btn btn-success"   style={{textDecoration:'none', width:"100px" }}>
                        &nbsp;Approve
                        
                        </a>
                     
                        &emsp; 
                        <a className="btn btn-warning btn-small custom "  style={{textDecoration:'none', width:"100px"  }}>
                        <i className="fas fa-trash-alt"></i>&nbsp;Deny
                        </a>
                      
                       
                    </td>
                        </tr>
                        <tr style={{height:"50px", textAlign:"center"}}>
                          <th scope="row">3</th>
                          <td>Emp03</td>
                          <td>Jenny</td>
                          <td>Part-Time</td>
                          <td>50,000</td>
                          <td>20,000</td>
                          <td>15,000</td>
                          <td>Approved</td>
                          <td >
                          <a className="btn btn-primary"   style={{textDecoration:'none', width:"100px" }}>
                        &nbsp;Edit
                        
                        </a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a className="btn btn-success"   style={{textDecoration:'none', width:"100px" }}>
                        &nbsp;Approve
                        
                        </a>
                     
                        &emsp; 
                        <a className="btn btn-warning btn-small custom "  style={{textDecoration:'none', width:"100px"  }}>
                        <i className="fas fa-trash-alt"></i>&nbsp;Deny
                        </a>
                       
                    
                    </td>
                        </tr>

                        <tr style={{height:"50px", textAlign:"center"}}>
                          <th scope="row">4</th>
                          <td>Emp04</td>
                          <td>Somapala</td>
                          <td>Part-Time</td>
                          <td>50,000</td>
                          <td>20,000</td>
                          <td>15,000</td>
                          <td>Pending</td>
                          <td >
                          <a className="btn btn-primary"   style={{textDecoration:'none', width:"100px" }}>
                        &nbsp;Edit
                        
                        </a>&nbsp;&nbsp;&nbsp;&nbsp;    
                        <a className="btn btn-success"   style={{textDecoration:'none', width:"100px" }}>
                        &nbsp;Approve
                        
                        </a>
                     
                        &emsp; 
                        <a className="btn btn-warning btn-small custom "  style={{textDecoration:'none', width:"100px"  }}>
                        <i className="fas fa-trash-alt"></i>&nbsp;Deny
                        </a>
                       
                    
                    </td>
                        </tr>

                        <tr style={{height:"50px", textAlign:"center"}}>
                          <th scope="row">5</th>
                          <td>Emp05</td>
                          <td>Harry</td>
                          <td>Part-Time</td>
                          <td>50,000</td>
                          <td>20,000</td>
                          <td>15,000</td>
                          <td>Pending</td>
                          <td >
                          <a className="btn btn-primary"   style={{textDecoration:'none', width:"100px" }}>
                        &nbsp;Edit
                        
                        </a>&nbsp;&nbsp;&nbsp;&nbsp;    
                        <a className="btn btn-success"   style={{textDecoration:'none', width:"100px" }}>
                        &nbsp;Approve
                        
                        </a>
                     
                        &emsp; 
                        <a className="btn btn-warning btn-small custom "  style={{textDecoration:'none', width:"100px"  }}>
                        <i className="fas fa-trash-alt"></i>&nbsp;Deny
                        </a>
                       
                    
                    </td>
                        </tr>
                        <tr style={{height:"50px", textAlign:"center"}}>
                          <th scope="row">6</th>
                          <td>Emp06</td>
                          <td>Sewmini</td>
                          <td>Part-Time</td>
                          <td>50,000</td>
                          <td>20,000</td>
                          <td>15,000</td>
                          <td>Pending</td>
                          <td >
                          <a className="btn btn-primary"   style={{textDecoration:'none', width:"100px" }}>
                        &nbsp;Edit
                        
                        </a>&nbsp;&nbsp;&nbsp;&nbsp;    
                        <a className="btn btn-success"   style={{textDecoration:'none', width:"100px" }}>
                        &nbsp;Approve
                        
                        </a>
                     
                        &emsp; 
                        <a className="btn btn-warning btn-small custom "  style={{textDecoration:'none', width:"100px"  }}>
                        <i className="fas fa-trash-alt"></i>&nbsp;Deny
                        </a>
                       
                    </td>
                        </tr>

                        <tr style={{height:"50px", textAlign:"center"}}>
                          <th scope="row">7</th>
                          <td>Emma</td>
                          <td>Jason</td>
                          <td>Part-Time</td>
                          <td>50,000</td>
                          <td>20,000</td>
                          <td>15,000</td>
                          <td>Denied</td>
                          <td >

                          <a className="btn btn-primary"   style={{textDecoration:'none', width:"100px" }}>
                        &nbsp;Edit
                        
                        </a>&nbsp;&nbsp;&nbsp;&nbsp;    
                        <a className="btn btn-success"   style={{textDecoration:'none', width:"100px" }}>
                        &nbsp;Approve
                        
                        </a>
                     
                        &emsp; 
                        <a className="btn btn-warning btn-small custom "  style={{textDecoration:'none', width:"100px"  }}>
                        <i className="fas fa-trash-alt"></i>&nbsp;Deny
                        </a>
                       
                    
                    </td>
                        </tr>

                        <tr style={{height:"50px", textAlign:"center"}}>
                          <th scope="row">8</th>
                          <td>Emp08</td>
                          <td>Peter</td>
                          <td>Part-Time</td>
                          <td>50,000</td>
                          <td>20,000</td>
                          <td>15,000</td>
                          <td>Approved</td>
                          <td >
                          <a className="btn btn-primary"   style={{textDecoration:'none', width:"100px" }}>
                        &nbsp;Edit
                        
                        </a>&nbsp;&nbsp;&nbsp;&nbsp;    
                        <a className="btn btn-success"   style={{textDecoration:'none', width:"100px" }}>
                        &nbsp;Approve
                        
                        </a>
                     
                        &emsp; 
                        <a className="btn btn-warning btn-small custom "  style={{textDecoration:'none', width:"100px"  }}>
                        <i className="fas fa-trash-alt"></i>&nbsp;Deny
                        </a>
                        
                        
                    
                    </td>
                        </tr>
              
                </tbody>  
                </table>    
                </div>
      </Layout>
      
      
    </>
  );
};

export default EmpHome;
