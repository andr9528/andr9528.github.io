import { Document, DocumentRef, Pagination, PortalDocument } from "react-pdf-printer";
import React, { useEffect, useRef } from "react";
import { PrintingService } from "@/shared/services/printing-service";
import { WebCv } from "./web-cv";
import { PdfCv } from "./pdf-cv";

export function CV(): JSX.Element {
    const documentRef = useRef<DocumentRef>(null);
    useEffect(() => {
        PrintingService.instance.setupPrintingService(() => documentRef.current?.render())
    }, [])

    return (
        <>
            <WebCv/>
            <PortalDocument
                ref={documentRef} 
                header={<></>} 
                footer={<Pagination/>}
                // screen={() => (<WebCv/>)}
                // renderOnInit={false}
                configuration={{
                    pagination: {
                        format: '#p / #t'
                    }
                }}
                >
                    <PdfCv/>
            </PortalDocument>    
        </>    
    )
}



