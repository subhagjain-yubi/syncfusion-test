import { SpreadsheetComponent ,Spreadsheet} from '@syncfusion/ej2-react-spreadsheet';
import React, { useEffect, useState } from 'react';
import './App.css';
import {  getSampleFile,getFormalatedValue} from './utlils';

function App() {
  const [spreadsheet,setSpreadsheet]=useState()
  useEffect(()=>{
    fetch("https://js.syncfusion.com/demos/ejservices/data/Spreadsheet/LargeData.xlsx") // fetch the remote url
    .then((response) => {
    response.blob().then((fileBlob) => {
        var file = new File([fileBlob], "Sample.xlsx"); //convert the blob into file
        // this.spreadsheet.open({ file: file }); // open the file into Spreadsheet
        // setSpreadsheet({ file: file })
    });
});
// }
  },[])
  console.log(getSampleFile());
  // console.log(getFormalatedValue());
//   let spreadsheet: Spreadsheet = new Spreadsheet({
//     openUrl: 'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open',
//     saveUrl: 'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save',
//     created: (): void => {
//         fetch("http://localhost:8080/api/v1/getSampleFile") // fetch the remote url
//             .then((response) => {
//               console.log(response);
//                 response.blob().then((fileBlob) => { // convert the excel file to blob
//                 let file = new File([fileBlob], "Sample.xlsx"); //convert the blob into file
//                 spreadsheet.open({ file: file }); // open the file into Spreadsheet
//                 })
//             })
//     }
// });
//Render the initialized Spreadsheet
// spreadsheet.appendTo('#spreadsheet');


   
  // return (<SpreadsheetComponent  ref={(ssObj) => { spreadsheet = ssObj; }} openUrl='https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open' created={created.bind()}>
  //                   </SpreadsheetComponent>);
    
  
  return (
    <div className="App">
      <div id="spreadsheet"></div>
    <SpreadsheetComponent allowSave={true} allowOpen={true} openUrl='http://localhost:8080/api/v1/getSampleFile'/>
   </div>
   
  );
}

export default App;
