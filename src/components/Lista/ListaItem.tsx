import React from 'react'

export interface Radio {
    changeuuid:string;
    stationuuid:string;
    serveruuid:string;
    name:string;
    url:string;
    ref:string;
    homepage:string;
    tags:string;
    country:string;
    state:string;
    languagecodes:string;
    lastcheckok:string;
    lastchecktime_iso8601:string;
    lastcheckoktime:string;
    lastcheckoktime_iso8601:string;
    lastlocalchecktime:string;
    lastlocalchecktime_iso8601:string;
    clicktimestamp:string;
    clicktimestamp_iso8601:string;
    geo_long:string;

}

type listaItemPropsType = {
    item:Radio;
}

export default function ListaItem({item}:listaItemPropsType) {
    return (
        <li>{item.name}</li>
    )
}
