import React from "react";
import './Cards.css';
import { HiOutlinePencilSquare } from 'react-icons/hi2';


const Cards = () => {
  return (
    <div className="conatiner">
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            {/* <div className="card-body"> */}
            <HiOutlinePencilSquare  className="out" / >
            {/* <i class="bi bi-pencil-square" style={{textAlign: 'end'}}></i> */}
              <h5 className="card-title">Personal Information</h5>
              <p>
              <span><b>Passport No.</b></span> <span style={{textAlign:'right', marginLeft:'110px'}}> 9876543210</span>
              </p>
              <p>
              <span><b>Passport Exp No.</b></span><span style={{textAlign:'right', marginLeft:'80px'}}> 9876543210 </span>
              </p>
              <p>
              <span><b>Tel</b> </span> <span style={{textAlign:'right', marginLeft:'185px', color: 'blue'}}> 9876543210 </span>
              </p>
              <p>
              <span><b>Nationality</b> </span> <span style={{textAlign:'right', marginLeft:'120px'}}> Indian </span>
              </p>
              <p>
              <span><b>Religion</b> </span> <span style={{textAlign:'right', marginLeft:'140px'}}> Christian </span>    
              </p>
              <p>          
              <span><b>Marital status</b> </span> <span style={{textAlign:'right', marginLeft:'99px'}}> Married </span>
              </p>
              <p>
              <span><b>Employment of Spouse</b> </span> <span style={{textAlign:'right', marginLeft:'26px'}}> No </span>
              </p>
              <p>
              <span><b>No. of chlidren</b> </span> <span style={{textAlign:'right', marginLeft:'88px'}}> 2 </span>
              </p>
              
              
              {/* <a href="#" class="btn btn-primary">
                Go somewhere
              </a> */}
              {/* </div> */}
            {/* </div> */}
          </div>
        </div>
        <div className="col-sm-6 col-sm-5">
          <div className="card">
            {/* <div className="card-body"> */}
            <HiOutlinePencilSquare  className="outs"/>
            {/* <i class="bi bi-pencil-square" style={{textAlign: 'end'}}></i> */}
              <h5 className="card-title">Emergency Contact</h5>

              <p>
              <span><b>Primary</b> </span> <span style={{textAlign:'right', marginLeft:'110px'}}> </span>
              </p>
              <p>
              <span><b>Name</b> </span> <span style={{textAlign:'right', marginLeft:'110px'}}>John Doe </span>
              </p>
              <p>
              <span><b>Relationship</b> </span> <span style={{textAlign:'right', marginLeft:'60px'}}> Father</span>
              </p>
              <p>
              <span><b>Phone</b> </span> <span style={{textAlign:'right', marginLeft:'105px'}}>9876543210, 9876543210 </span>
              </p>
              <hr />
              <p>
              <span><b>Secondary</b> </span> <span style={{textAlign:'right', marginLeft:'110px'}}> </span>
              </p>
              <p>
              <span><b>Name</b> </span> <span style={{textAlign:'right', marginLeft:'110px'}}>Karen Wills </span>
              </p>
              <p>
              <span><b>Relationship</b> </span> <span style={{textAlign:'right', marginLeft:'60px'}}>Brother </span>
              </p>
              <p>
              <span><b>Phone</b> </span> <span style={{textAlign:'right', marginLeft:'105px'}}>9876543210, 9876543210 </span>
              {/* <i class="bi bi-gear" style={{color: '#FF5C00', marginLeft: '800px',  fontSize: '50px' }}></i> */}
              </p>
            {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cards;