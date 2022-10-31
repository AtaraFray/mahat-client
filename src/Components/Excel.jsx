import React, { useState } from "react";
import * as XLSX from "xlsx";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../index.css';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
// import { Tooltip } from 'primereact/tooltip';
import { Toast } from 'primereact/toast';


export const Excel = () => {
  const [importedData, setImportedData] = useState([]);

  // const [getData,setGetData]=useState();
  // const [getData, setGetData] = useState("");


  const importExcel = event => {
    console.log("szl;lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll");
    const [file] = event.target.files;
    const reader = new FileReader();

    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      console.log(data);
      const cols = data[0];
      data.shift();
      let _importedData = data.map(d => {
        return cols.reduce((obj, c, i) => {
          obj[c] = d[i];
          return obj;
        }, {});
      });
      setImportedData(_importedData);
      console.log('importedData', importedData);
    };
    reader.readAsArrayBuffer(file);
  };
  return (
    <div>
        <div className="card">
            <h5>Import</h5>
            {/* <Toast ref={toast} /> */}
            <div className="flex align-items-center py-2">
                <FileUpload 
                chooseOptions={{ label: 'Excel', icon: 'pi pi-file-excel', className: 'p-button-success' }}
                 mode="basic" name="demo[]"
                 auto url="https://primefaces.org/primereact/showcase/upload.php"
                    // accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" 
                    className="mr-2" onUpload={importExcel} />
            </div>

            <DataTable value={importedData} 
            emptyMessage="No data" paginator rows={10} alwaysShowPaginator={false} responsiveLayout="scroll">
                {/* selectionMode="multiple" selection={selectedImportedData} onSelectionChange={onImportSelectionChange}>
                {
                    importedCols.map((col, index) => <Column key={index} field={col.field} header={col.header} />)
                } */}
            </DataTable>
        </div>
    </div>
);
}
  // return<>
  //     <div>
  //         <div className="card">
  //             <h5>Import</h5>

  //             <div className="flex align-items-center py-2">
  //                 <FileUpload chooseOptions={{ label: 'Excel', icon: 'pi pi-file-excel', className: 'p-button-success' }} mode="basic" name="demo[]" auto url="https://primefaces.org/primereact/showcase/upload.php"
  //                     accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" className="mr-2" onUpload={importExcel} />
  //                 <Button type="button" label="Clear" icon="pi pi-times" onClick={clear} className="p-button-info ml-auto" />
  //             </div>

  //             <DataTable value={importedData} emptyMessage="No data" paginator rows={10} alwaysShowPaginator={false} responsiveLayout="scroll"
  //                 selectionMode="multiple" selection={selectedImportedData} onSelectionChange={onImportSelectionChange}>
  //                 {
  //                     importedCols.map((col, index) => <Column key={index} field={col.field} header={col.header} />)
  //                 }
  //             </DataTable>
  //         </div>
  //     </div>

  // </>




