import {withAmp,useAmp} from 'next/amp'
import Document, { Html, Main, NextScript } from 'next/document';
import Sidebar from '../components/sidebar'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Index = (props) => (
      <div>
         <Head>
          <style amp-custom>
            {`
              button {
                border-radius: 10px;
                margin: 5px;
              }
              p{
                color: red;
              }
              h3{
                padding-left:5px;
                color: black;
              }
              body{
                background-color: #b3c7e8;
                font-family: -apple-system, BlinkMacSystemFont, sans-serif;
              }
              amp-sidebar{
                opacity: 0.7;
              }
            `}
          </style>
          <script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js" />
         </Head> 
         <Link href="/exclusive"><a>Click Here for exclusive</a></Link>
         <Link href="/experiment"><a>Click Here to experiment</a></Link>
          <body>
              <amp-sidebar id="sidebar"
                class="sample-sidebar"
                layout="nodisplay"
                side="left" > 
                <h3>Sidebar</h3>
                <button on="tap:sidebar.close">Close sidebar</button>
                <button on="tap:sidebar.toggle">Toggle sidebar</button>
              </amp-sidebar>
              <button on="tap:sidebar.toggle">Toggle sidebar</button>
              <button on="tap:sidebar.open">Open sidebar</button>
              <p>Welcome to the AMP only Index page!!</p>
          </body>
        </div>    
)
export default withAmp(Index, {hybrid: true})