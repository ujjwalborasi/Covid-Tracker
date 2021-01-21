import React, { useEffect, useState } from 'react';
import {countries} from '../../FetchApi/fetch';
import {NativeSelect, FormControl} from '@material-ui/core';
function Countryselector({Getcountry}) {
    const [country, SetCountry] = useState([]);
    useEffect(()=>{
        const CallCountry = async () => {
            SetCountry(await countries());
        }
        CallCountry();
    },[SetCountry]);
    return (
        <div className='countryselector'>
            <FormControl className='form'>
                <NativeSelect className="native-select" defaultValue='' onChange={(e) => Getcountry(e.target.value)}>
                    <option className='country-option' value="">Global</option>
                 {country.map((country, index)=><><option key={index} className="country-option" value={country}>{country}</option></>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}
export default Countryselector
