import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import React from 'react';
import './App.css';
import {  getFormalatedValue} from './utlils';

function App() {
  // console.log(getSampleFile());
  console.log(getFormalatedValue());
  
  return (
    <div className="App">
    <SpreadsheetComponent  allowSave={true} allowOpen={true} openUrl='https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open'/>
   </div>
   
  );
}

export default App;
