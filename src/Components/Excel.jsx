import React, { useState } from "react";
import * as XLSX from "xlsx";


export const Excel = () => {

    // const [getData,setGetData]=useState();
    // const [getData, setGetData] = useState("");

    var state ={
        d:""
    }
    const loadData = event => {
    const [file] = event.target.files;
    const reader = new FileReader();
    
    reader.onload = (evt) => {
        const bstr = evt.target.result;
        const wb = XLSX.read(bstr, { type: "binary" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
        // setGetData([...getData, data]);
        // console.log(getData);
        state.d = data;
        console.log(state.d);

      };
      reader.readAsBinaryString(file);
    };
    return<>
      <input type="file" onChange={(event) => loadData(event)} />
    </>
  };
  
  

