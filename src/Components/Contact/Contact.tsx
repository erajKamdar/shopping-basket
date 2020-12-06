import React from 'react';
import { GitHubIcon } from '../index';
import styles from './Contact.module.css'
const Contact = () => {
    return (
        <>
        <div className={styles.contact} >
           
            <h1 style={{ color: "purple" }} className="center">Contact Query</h1>
            <br />
            <a className="btn btn-info center " href="https://github.com/erajKamdar?tab=repositories">
                <GitHubIcon width={"18px"} />
                <span className="ml-2 mr-4 text-center">
                    Visit Repo
                </span>
            </a>
            <div className={styles.setContact}></div>
        </div>
        
        </>
    )
}

export default Contact;