import React, { useEffect, useState } from 'react';
import {getAllRequest} from "../services/request";


function Admin()  {
    const [allRequest, setAllRequest] = useState([])

       useEffect(() => {
        getAllRequest().then((request) => {
            setAllRequest(request);
        });
    },[]);

  return (
    <>
        <div>
            <table>
                <tr>
                    <th>Request</th>
                    <th>URL Reference</th>
                </tr>
                {allRequest.length>0 && 
                allRequest.map((request, index) => {
                    return(
                        <tr key={index}>
                            <td>{request.request_description}</td>
                            <td>{request.url_ref}</td>
                            <button>delete</button>
                        </tr>
                        
                    )
                })}
//             </table>
//         </div>
//     </>
    
  )
}

export default Admin;