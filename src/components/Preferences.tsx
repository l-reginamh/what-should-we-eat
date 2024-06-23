import { useState } from 'react'
import "nes.css/css/nes.min.css";
import "../App.css";

interface PreferencesForms {
    halal: string;
    mall: string;
    cuisine: string
}

interface PreferencesProps {
    preferences: string;
    preferencesForm: PreferencesForms;
    onSelectPreferences: (preferences: string) => void
    onSelectPreferencesForm: (preferences: PreferencesForms) => void
}

function Preferences({ preferences, preferencesForm, onSelectPreferences, onSelectPreferencesForm }: PreferencesProps) {
    const malls = ["Mid Valley", "The Gardens", "Sunway Pyramid", "Sunway Velocity"];
    const cuisines = ["Anything", "Chinese", "Local", "Western", "Fast Food", "Japanese", "Korean", "Ice-cream", "Cafe", "Bakery", "Thai", "Mart", "Vietnamese", "Mexican", "Turkish", "South Indian"];

    const handleHalalOption = (value: string) => {
        preferencesForm.mall = preferencesForm.mall;
        preferencesForm.cuisine = preferencesForm.cuisine;
        preferencesForm.halal = value;
        onSelectPreferencesForm(preferencesForm);
        console.log(preferencesForm);
    }

    const handleMallOption = (value: string) => {
        preferencesForm.cuisine = preferencesForm.cuisine;
        preferencesForm.halal = preferencesForm.halal;
        preferencesForm.mall = value;
        onSelectPreferencesForm(preferencesForm);
        console.log(preferencesForm);
    }

    const handleCuisineOption = (value: string) => {
        preferencesForm.mall = preferencesForm.mall;
        preferencesForm.halal = preferencesForm.halal;
        preferencesForm.cuisine = value;
        onSelectPreferencesForm(preferencesForm);
        console.log(preferencesForm);
    }

    return (
        <div className="container mx-auto size-full">
            <div className="nes-container is-rounded mb-3 size-full">
                <div className="message-list flex flex-col">
                    <div className="message -left flex flex-row item-center justify-start">
                        <i className="nes-ash mr-1"></i>
                        <div className="nes-balloon from-left">
                            <p>Looking for Halal Food?</p>
                        </div>
                    </div>

                    <div className="message -right flex flex-row item-center justify-end">
                        <div className="nes-balloon from-right">
                            <label>
                                <input 
                                    type="radio" 
                                    className="nes-radio" 
                                    name="preferences" 
                                    onClick={() => {
                                        onSelectPreferences("yes")
                                    }}  
                                />
                                <span>Yes</span>
                            </label>

                            <label>
                                <input 
                                    type="radio" 
                                    className="nes-radio" 
                                    name="preferences" 
                                    onClick={() => {
                                        onSelectPreferences("no")
                                    }} 
                                />
                                <span>No</span>
                            </label>
                        </div>
                        <i className="nes-pokeball ml-1"></i>
                    </div>
                </div>
            </div>

            {/* { preferences!="no" && 
            
            <div className="nes-container">
                <div className="message-list flex flex-col">

                { (preferences!='' || preferences!=null) && <>
                    <div className="message -left flex flex-row item-center justify-start">
                        <i className="nes-ash mr-1"></i>
                        <div className="nes-balloon from-left">
                            <p>Which mall are we going?</p>
                        </div>
                    </div>

                    <div className="message -right flex flex-row item-center justify-end mb-3">
                        <div className="nes-balloon from-right">
                        <div className="nes-select">
                            <select required onChange={(e) => { handleMallOption(e.target.value) }}>
                                <option value="" disabled selected hidden>Select...</option>
                                {malls.map((option, index) => {
                                    return (
                                        <option key={index} value={option} >
                                            {option}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        </div>
                        <i className="nes-bulbasaur ml-1"></i>
                    </div>
                </> }

                { (preferencesForm.mall!="" || preferencesForm.mall!= null) && <>
                    <div className="message -left flex flex-row item-center justify-start">
                        <i className="nes-ash mr-1"></i>
                        <div className="nes-balloon from-left">
                            <p>Looking for Halal Food?</p>
                        </div>
                    </div>

                    <div className="message -right flex flex-row item-center justify-end">
                        <div className="nes-balloon from-right">
                            <label>
                                <input 
                                    type="radio" 
                                    className="nes-radio" 
                                    name="halal" 
                                    onClick={() => {
                                        handleHalalOption("yes")
                                    }}  
                                />
                                <span>Yes</span>
                            </label>

                            <label>
                                <input 
                                    type="radio" 
                                    className="nes-radio" 
                                    name="halal" 
                                    onClick={() => {
                                        handleHalalOption("no")
                                    }} 
                                />
                                <span>No</span>
                            </label>
                        </div>
                        <i className="nes-charmander ml-1"></i>
                    </div>
                </> }

                { (preferencesForm.halal!='' || preferencesForm.halal!=null) && <>
                    <div className="message -left flex flex-row item-center justify-start">
                        <i className="nes-ash mr-1"></i>
                        <div className="nes-balloon from-left">
                            <p>What are you craving?</p>
                        </div>
                    </div>

                    <div className="message -right flex flex-row item-center justify-end">
                        <div className="nes-balloon from-right">
                        <div className="nes-select">
                            <select required onChange={(e) => { handleCuisineOption(e.target.value) }}>
                                <option value="" disabled selected hidden>Select...</option>
                                {cuisines.map((option, index) => {
                                    return (
                                        <option key={index} value={option} >
                                            {option}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        </div>
                        <i className="nes-squirtle ml-1"></i>
                    </div>
                </> }
                    
                </div>
            </div> } */}
        </div>
    );
}

export default Preferences