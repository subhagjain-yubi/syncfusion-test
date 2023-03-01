import * as React from 'react';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import './App.css';

const  App= ()=> {

  const spreadsheet=React.useRef<any>()
   const load=()=> {
        fetch("http://localhost:8080/api/v1/getSampleFile") // fetch the remote url
            .then((response) => {
            response.blob().then((fileBlob) => {
                var file = new File([fileBlob], "Sample.xlsx"); //convert the blob into file
                spreadsheet.current.open({ file: file }); // open the file into Spreadsheet
            });
        });
    }


    const beforeSave=(args:any)=>{
        console.log(args)
        console.log(Response)
        args.needBlobData = true;
        args.isFullPost = false;
    }
    async function functiond (args:any){
        var formData = new FormData();
        console.log(args)
        formData.append("file", args.blobData, "Sample.xlsx");
        console.log(args)
        return formData;
    }

    const saveComplete = async (args: any) => {
        console.log(args)
        
        var formData = await functiond (args);
        console.log(args)
        fetch("http://localhost:8080/api/v1/pushFile", {
          method: "POST",
          body: formData,
        }).then((response) => {
          console.log(response);
        });
      };
    const fileMenuItemSelect=(args:any)=>{
    }

    
        return (<SpreadsheetComponent
        ref={spreadsheet}
        allowSave={true}
        openUrl='https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open'
        saveUrl='https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save'
        // fileMenuItemSelect={fileMenuItemSelect}
        created={load}
        beforeSave= {beforeSave}
        saveComplete= { saveComplete}
        >
                    </SpreadsheetComponent>);
    }
export default App