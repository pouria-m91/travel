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

export function blob2file(blob, name) {
    blob.lastModifiedDate = new Date();
    blob.name = name;
    return blob;
}

export function FAQ2JSON(faqs) {
    if (!faqs)
        return ('');
    let array = [];
    faqs.map((f) => {
        array.push(
            {
                "@type": "Question",
                "name": f.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": f.answer
                }
            }
        )
    });
    const str = '{"@context": "https://schema.org","@type": "FAQPage","mainEntity": ['+JSON.stringify(array)+']}';
    return (
        <script type="application/ld+json">
            {str}
        </script>
    );
}