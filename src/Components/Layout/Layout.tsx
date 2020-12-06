import React from 'react';
import { Helmet } from 'react-helmet-async';
import 'bootswatch/dist/lux/bootstrap.css'

const Layout = ({title, description, children}: any)  => {
    return ( 
        <React.Fragment>
        <Helmet>
            <title>{ title ? title + " - Eraj Store" : "Eraj Store" }</title>
            <meta name = "description" content={ description || "Shoe Store" } />
        </Helmet>
        <main className="container">
            {children}
        </main>
        </React.Fragment>
     );
}
 
export default Layout;