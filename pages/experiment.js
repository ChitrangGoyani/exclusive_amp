import {withAmp} from 'next/amp'
import React from 'react'
import Head from 'next/head'

const experiment = (props) => (
        <div>
                <Head>
                <script async custom-element="amp-youtube" src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js"></script>
                    <script async custom-element="amp-video" src="https://cdn.ampproject.org/v0/amp-video-0.1.js"></script>
                    <script async custom-element="amp-video-iframe" src="https://cdn.ampproject.org/v0/amp-video-iframe-0.1.js"></script>
    
                    <style amp-custom>{`
                    
                    @media screen and (min-width: 320px){

                        .video_boy{
                            display:flex;
                            margin:-10%;
                            z-index:-99;
                        }

                    }
                    
                    `}</style>
                </Head>
                <body>
                    <amp-video class="video_boy2" autoplay loop noaudio layout="responsive" width="700" height="700"><source src="https://d2v9y0dukr6mq2.cloudfront.net/video/preview/SsRadVyPGjdkeg9tt/videoblocks-flight-through-the-clouds-thunder-and-lightning_r7wwnnoxw__SB_PM.mp4" type="video/mp4"/></amp-video>
                </body>    
        </div>
)

export default withAmp(experiment, {hybrid:true})