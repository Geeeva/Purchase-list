import React from 'react';
import './Footer.css';

const footer = (props) => {
    return (
        <div className="footer-wrapper">
            <div className="bg-wrapper">
                <svg id="footer-bg" viewBox="0 0 1920 289">
                    <path fill="#454D5B" d="M956,65C611.6,65,286.6,148.2,0,295.5v4.5h1920.8C1632,149.9,1303.9,65,956,65z"/>
                </svg>
                <svg id="footer-bg-xl" viewBox="0 0 1281 238">
                    <path fill="#454D5B" d="M620,6C275.6,6-49.4,89.2-336,236.5v4.5h1920.8C1296,90.9,967.9,6,620,6z"/>
                </svg>

                <svg id="footer-bg-md" viewBox="0 0 995 238">
                    <path fill="#454D5B" d="M479,7C134.6,7-190.4,90.2-477,237.5v4.5h1920.8C1155,91.9,826.9,7,479,7z"/>
                </svg>

                <svg id="footer-bg-sm" viewBox="0 0 771 238">
                    <path fill="#454D5B" d="M377,7C32.6,7-292.4,90.2-579,237.5v4.5h1920.8C1053,91.9,724.9,7,377,7z"/>
                </svg>

                <svg id="footer-bg-xs" viewBox="0 0 481 238">
                    <path fill="#454D5B" d="M203,7c-344.4,0-669.4,83.2-956,230.5v4.5h1920.8C879,91.9,550.9,7,203,7z"/>
                </svg>
                <div className="social-footer">
                    <div className="social">
                        <div className="intro">You can follow me on my Social networks accounts:</div>
                        <figure>
                            <a href="https://github.com/Geeeva" target="_blank" rel="noopener noreferrer">
                                <div className="frame">
                                   <svg id="github" viewBox="128 -13.5 340.5 339.5">
                                        <circle className="circle" fill="#CFD8DC" cx="300" cy="155" r="168.5"/>
                                        <circle className="circle-bg" fill="#BCBCBE" cx="300" cy="155" r="168.5"/>
                                        <path className="octocat" fill="#070000" d="M244.3,313.9c8.9,1,12.1-3.2,12.1-8.9c0-4.4,0-15.5,0-29.8C209.1,285.1,199,252,199,252
                                            c-7.7-19.9-18.8-25.4-18.8-25.4c-15.5-11.1,1-9.9,1-9.9c17.7,1,26.4,17.7,26.4,17.7c15.5,26.4,39.7,18.8,49.6,14.3
                                            c1-11.1,5.5-18.8,11.1-23.2c-37.5-4.4-77.2-18.8-77.2-84.9c0-18.8,6.6-34.3,17.7-46.4c-2.2-4.4-7.7-22,2.2-45.2
                                            c0,0,14.3-4.4,47.4,17.7c13.3-3.2,28.6-5.5,43-5.5c14.3,0,28.6,2.2,43,5.5C378,44.6,391.1,49,391.1,49c8.9,24.2,3.2,40.7,2.2,45.2
                                            c11.1,12.1,17.7,27.6,17.7,46.4c0,66.1-39.7,80.5-78.4,84.9c6.6,5.5,11.1,15.5,11.1,32c0,23.2,0,41.9,0,47.4c0,4.4,3.2,9.9,12.1,8.9
                                            C327.5,326,285.4,327.7,244.3,313.9z"/>
                                    </svg>
                                </div>
                            </a>
                
                            <a href="https://www.linkedin.com/in/ivana-gili%C4%87-04620850" target="_blank" rel="noopener noreferrer" >
                                <div className="frame">
                                    <svg id="linkedin" viewBox="130.3 -19.7 339 339">
                                        <circle className="circle" fill="#CFD8DC" cx="300" cy="150" r="168.5"/>
                                        <circle className="circle-bg" fill="#BCBCBE"  cx="300" cy="150" r="168.5"/>
                                        <g>
                                            <path className="linkedin-sign" d="M241.2,244.5h-44.4V100.8h44.4C241.2,100.8,241.2,244.5,241.2,244.5z M218.6,82.5c-16.2,0-24-7.1-24-21.9
                                                c0-6.3,2.1-11.3,7-15.4c5-5,10.5-7.1,17-7.1c16.2,0,24,7.8,24,21.9C242.6,74.7,234.8,82.5,218.6,82.5L218.6,82.5z M405.3,244.5
                                                h-45.1v-80.4c0-21.1-7.1-31.6-21.9-31.6c-11.3,0-19,5.7-23.3,17.5c-1.3,2.1-2.1,5.7-2.1,11.3v83.3h-45v-97.9
                                                c0-21.9,0-37.4-0.8-45.8h38.1l2.9,19c9.9-15.5,24.6-23.3,45.1-23.3c15.5,0,27.5,5.7,37.3,16.2c9.9,10.5,14.1,26.1,14.1,46.5v85.2
                                                H405.3z"/>
                                        </g>
                                        </svg>
                                </div>  
                            </a> 
                        </figure>
                        <div className="email">
                            <a href="mailto:ivana.gilich@gmail.com">or email me here</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer;