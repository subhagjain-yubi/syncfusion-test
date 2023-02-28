
// export const getSampleFile = () => {
//     fetch(`http://localhost:8080/api/v1/getSampleFile`, {
//       method: "GET",
//       headers: {
//         "Content-type": "APPLICATION_OCTET_STREAM",
//         "responseType": 'blob'
//       },
     
//     }).then((res) => {
//         console.log(res);
//         const blob = new Blob([res.blob as BlobPart], {
//             type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
//           });
//           console.log(blob);
//         var file = new File([blob], "name");
//         console.log(file);
//         // const element = document.createElement('a');
//         // element.href = URL.createObjectURL(file);
//         // element.setAttribute('download', ".xlsx");
//         // document.body.appendChild(element);
//         // element.click();
//     });
// };

export const sendFile=() => {
    fetch(`http://localhost:8080/api/v1/file`, {
        method: "POST",
        headers: {
          "Content-type": "multipart/form-data"
        },
       
      }).then((resp)=>{return resp})

};


export const getFormalatedValue=() => {
    fetch(`http://localhost:8080/api/v1/values?loanAmount=1200&roi=16&tenure=4&fileId=01LOCNV2KOFN2MG7QHMRAJRYYFL2FKB4M2`, {
        method: "GET",
        headers: {
          "Content-type": "application/json"
        },
       
      }).then((resp)=>{ console.log(resp);return resp.body})

};


