import React from 'react';
import '../css/bank-settings-component.css';
import Flickity from 'react-flickity-component'


const BankSettings = (props) => {
  

        const {username, subscription} = props;

        const flickityOptions = {
            groupCells: false, 
            percenterPosition: false, 
            wrapAround: true, 
            prevNextButtons: true, 
            pageDots:true
        }

        return (
            <div className="bankSettingsComponent">
                
                    <div className="bankSettingsSlider">
                 <Flickity options={flickityOptions} >       
                        <div className="bankSettingsSlide">
                            <div className="bankInfo crdStyle">
                                <h2>Truliant Checking</h2>
                                <div>
                                    <div className="bankIcon"></div>
                                    <div>
                                        <p>****3456</p>

                                    </div>
                                    <div>
                                        <ul>
                                            <li><button className="squareIcon edit">Edit Bank Name</button></li>
                                            <li><button className="squareIcon delete">Delete Bank</button></li>
                                        </ul>
                                            
                                    </div>
                                </div>

                            </div>						
                        </div>
                        <div className="bankSettingsSlide">
                            <div className="bankInfo crdStyle">
                                <h2>Truliant Checking</h2>
                                <div>
                                    <div className="bankIcon"></div>
                                    <div>
                                        <p>****3456</p>

                                    </div>
                                    <div>
                                        <ul>
                                            <li><button className="squareIcon edit">Edit Bank Name</button></li>
                                            <li><button className="squareIcon delete">Delete Bank</button></li>
                                        </ul>
                                            
                                    </div>
                                </div>

                            </div>						
                        </div>
                        <div className="bankSettingsSlide">
                            <div className="bankInfo crdStyle">
                                <h2>Simple Finance Checking</h2>
                                <div>
                                    <div className="bankIcon"></div>
                                    <div>
                                        <p>****4205</p>

                                    </div>
                                    <div>
                                        <ul>
                                            <li><button className="squareIcon edit">Edit Bank Name</button></li>
                                            <li><button className="squareIcon delete">Delete Bank</button></li>
                                        </ul>
                                            
                                    </div>
                                </div>

                            </div>						
                        </div>
               </Flickity>    
                    </div>

 

        </div>
        )
    }

export default BankSettings;