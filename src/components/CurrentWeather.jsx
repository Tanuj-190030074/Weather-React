import React from 'react';
import styled from 'styled-components';
import {Card} from 'react-bootstrap'

function CurrentWeather({ data,Button }) {
  console.log(data)
  const lu=data.current.last_updated
  const dess=lu.slice(10)
  return (
    
    <div className="card" style={{color: '#4B515D', borderRadius: '35px',width:"50%",marginLeft:"140px"}}>
              <div className="card-body p-4">
                <div className="d-flex">
                <h6 className="flex-grow-1">{data.location.country}</h6>
                  <h6 className="flex-grow-1">{data.location.name}</h6>
                  <h6>{dess}</h6>
                </div>
                <div className="d-flex flex-column text-center mt-5 mb-4">
                  <h6 className="display-4 mb-0 font-weight-bold" style={{color: '#1C2331'}}>{data.current.temp_c}°C </h6>
                  <span className="small" style={{color: '#868B94'}}>{data.current.condition.text}</span>
                </div>
                <div className="d-flex align-items-center">
                  <div className="flex-grow-1" style={{fontSize: '1rem'}}>
                    <div><i className="fas fa-wind fa-fw" style={{color: '#868B94'}} /> <span className="ms-1"> {data.current.wind_kph} km/h </span></div>
                    <div><i className="fas fa-tint fa-fw" style={{color: '#868B94'}} /> <span className="ms-1"> {data.current.humidity}% </span></div>
                    <div><i className="fas fa-cloud-rain fa-fw" style={{color: '#868B94'}} /> <span className="ms-1">  {data.current.precip_in} </span></div>
                  </div>
                  <div>
                    <img src={data.current.condition.icon}
                       alt={data.current.condition.text} width="100px" />
                  </div>
                </div>
              </div>
            </div>
  
    
  );
}

const StyledWeather = styled.div`

header {
    display: flex;
    justify-content: space-between;

    .current-weather {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 400px;
      padding: 20px;
   

      img {
        width: 80px;
        height: 80px;
      }

      h1 {
        font-size: 3rem;
      }
      
      .content {
        h5{
          font-weight: normal;
        }
      }
      
    }
    
    .location{
      width: 350px;
      padding: 20px;

      h2{
        text-align: right;
        font-size: 1rem;
        margin-bottom: 10px;
      }

      h3{
        text-align: right;
        font-size: .8rem;
        margin-bottom:0px;
      }
      h4{
        text-align: right;
        font-size: .8rem;
        font-weight: 500;
        margin-top:10px;
      }
    }

`;

export default CurrentWeather;
