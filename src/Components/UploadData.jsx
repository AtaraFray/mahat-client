import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../index.css';
import ReactDOM from 'react-dom';

import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
// import { Tooltip } from 'primereact/tooltip';
import { Toast } from 'primereact/toast';
import { ProductService } from '../services/ProductService';

export const UploadData = () => {
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [importedData, setImportedData] = useState([]);
    const [selectedImportedData, setSelectedImportedData] = useState([]);
    const [importedCols, setImportedCols] = useState([{ field: '', header: 'Header' }]);
    const dt = useRef(null);
    const toast = useRef(null);
    const productService = new ProductService();

    const cols = [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' },
        { field: 'quantity', header: 'Quantity' }
    ];

    const exportColumns = cols.map(col => ({ title: col.header, dataKey: col.field }));

    useEffect(() => {
        // productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    
    const importExcel = (e) => {
        const file = e.files[0];
        console.log('file',file);

        import('xlsx').then(xlsx => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const wb = xlsx.read(e.target.result, { type: 'array' });
                console.log('wb',wb);

                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                const data = xlsx.utils.sheet_to_json(ws, { header: 1 });
                console.log(data);
                // Prepare DataTable
                const cols = data[0];
                data.shift();

                let _importedCols = cols.map(col => ({ field: col, header: toCapitalize(col) }));
                let _importedData = data.map(d => {
                    return cols.reduce((obj, c, i) => {
                        obj[c] = d[i];
                        return obj;
                    }, {});
                });

                setImportedCols(_importedCols);
                setImportedData(_importedData);
            };

            reader.readAsArrayBuffer(file);
        });
    }



    const toCapitalize = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    const clear = () => {
        setImportedData([]);
        setSelectedImportedData([]);
        setImportedCols([{ field: '', header: 'Header' }]);
    }

    const onImportSelectionChange = (e) => {
        setSelectedImportedData(e.value);
        const detail = e.value.map(d => Object.values(d)[0]).join(', ');
        toast.current.show({ severity: 'info', summary: 'Data Selected', detail, life: 3000 });
    }


    

    return (
        <div>
            <div className="card">
                <h5>Import</h5>

                <Toast ref={toast} />

                <div className="flex align-items-center py-2">
                    <FileUpload chooseOptions={{ label: 'Excel', icon: 'pi pi-file-excel', className: 'p-button-success' }} mode="basic" name="demo[]" auto url="https://primefaces.org/primereact/showcase/upload.php"
                        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" className="mr-2" onUpload={importExcel} />
                    <Button type="button" label="Clear" icon="pi pi-times" onClick={clear} className="p-button-info ml-auto" />
                </div>

                <DataTable value={importedData} emptyMessage="No data" paginator rows={10} alwaysShowPaginator={false} responsiveLayout="scroll"
                    selectionMode="multiple" selection={selectedImportedData} onSelectionChange={onImportSelectionChange}>
                    {
                        importedCols.map((col, index) => <Column key={index} field={col.field} header={col.header} />)
                    }
                </DataTable>
            </div>
        </div>
    );
}
                
const rootElement = document.getElementById("root");
ReactDOM.render(<UploadData />, rootElement);