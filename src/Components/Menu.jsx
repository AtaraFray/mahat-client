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
        {label: 'Home', icon: 'pi pi-fw pi-home' },
        {label: 'Login', icon: 'pi pi-fw pi-user'},
        {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
        {label: 'Documentation', icon: 'pi pi-fw pi-file'},
        {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    ];

    return (
        <div>
            <div className="card">
                <TabMenu model={items}/>
            </div>
        </div>
    );
}
                
const rootElement = document.getElementById("root");
ReactDOM.render(<Menu />, rootElement);