import React from 'react'
import { If, Then, Else } from 'react-if'
import data from '../helpers/data'

function ReportTable(props) {
  console.log(props.locations)
  function handleDelete(e){
    e.preventDefault()
    id = e.target.name
  }
  console.log('aaaaaaaaaaaa')
    return (
        <div className='flex justify-center'>
            <If condition={props.locations.length}>
          <Then>
            <table className='rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800 text-center'>
              <thead className='text-left border-b-2 border-gray-300 bg-green-400 text-center'>
                {
                  data.map(element=>{
                    return(
                      <th className='px-4 py-3 text-center'>{element}</th> 
                    )
                  })
                }
              </thead>
        {
          
          props.locations.map((location,idx)=>{
            if (idx%2 == 0) {
              return(
                <tr className='bg-gray-100 border-b border-gray-200 text-center bg-green-200'>
                  <td className='px-10 py-3 text-center'>{location.location}</td>
                  {
                    location.hourly_sales.map(val=>{
                      return(
                      <td className='px-4 py-3 text-center'>{val}</td>
                      )})
                  }
                <td><button  name={location.id} onClick={props.handleDelete(location.id)}>X</button></td>
                </tr>
              )
            }
            else {
              return(
                <tr className='bg-gray-100 border-b border-gray-50 text-center bg-green-100'>
                  <td className='px-4 py-3 text-center'>{location.location}</td>
                  {
                    location.hourly_sales.map(val=>{
                      return(
                      <td className='px-4 py-3 text-center'>{val}</td>
                      )})
                  }
                                    <td><button  name={location.id} onClick={props.handleDelete(location.id)}>X</button></td>

                
                </tr>
              )
            }
          })
        }
        <tr className='text-left border-b-2 border-gray-300 text-center bg-green-400'>
          <th className='px-4 py-3 text-center'>Totals</th>
        {
          props.sumOfSums.map(value=>{
            return(
              <th className='px-4 py-3 text-center'>{value}</th>
            )
          })
        }
        <td></td>
        </tr>
            </table>
          </Then>
          <Else>
            <h2 className='text-center font-medium text-2xl'>No Cookie Stands Available</h2>
          </Else>
        </If>
        </div>
    )
}

export default ReportTable
