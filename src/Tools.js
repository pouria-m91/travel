import React from "react";
import {CircularProgress} from "@material-ui/core";

export const checkMimeType = (file, types) => {
    return types.every(type => file.type !== type);
}

export const checkFileSize = (file, size) => {
    return file.size > size;
}

export function Loader(props) {
    return (
    <div style={{minHeight: 300}}>
        <CircularProgress style={{
            color: '#0b695d',
            marginTop: 150,
            marginLeft: '50%'
        }}/>
    </div>
    )
}

export function blob2file(blob,name) {
    blob.lastModifiedDate=new Date();
    blob.name=name;
    return blob;
}
{/*<CircularProgress style={{*/}
{/*    position: 'fixed',*/}
{/*    top: '50%',*/}
{/*    left: '50%',*/}
{/*    marginTop: -25,*/}
{/*    marginLeft: -25,*/}
{/*    width: 50,*/}
{/*    height: 50,*/}
{/*    color: props.color,*/}
{/*    zIndex: 99,*/}
{/*}}/>*/}