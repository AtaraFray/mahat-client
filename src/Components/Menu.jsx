import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../index.css';
import ReactDOM from 'react-dom';

import React, { useState } from 'react';
import { TabMenu } from 'primereact/tabmenu';
export const Menu = () => {


    const items = [
        { label: 'Home', icon: 'pi pi-fw pi-home'},
        { label: 'Login', icon: 'pi pi-fw pi-user', url: "./Login" },
        { label: 'Register', icon: 'pi pi-fw pi-pencil', url: "./Register" },
        { label: 'About', icon: 'pi pi-fw pi-file',url: "./About" },
        { label: 'Upload Data', icon: 'pi pi-file-excel', url: "./UploadData"},
        { label: 'Excel', icon: 'pi pi-file-excel', url: "./Excel"}
    ];

    return (
        <div>
            <div className="card">
                <TabMenu model={items}  />
            </div>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Menu />, rootElement);