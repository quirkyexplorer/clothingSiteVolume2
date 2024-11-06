'use client'
import React from 'react'
import { IKImage } from "imagekitio-next";

export default function SportsSection() {
  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
  return (
    <div className='h-screen w-full  flex flex-col justify-start items-center'>
      
      <div className=" h-1/4 w-full overflow-hidden bg-red-200 flex justify-center ">
      
          <IKImage
            urlEndpoint={urlEndpoint}
            src="https://ik.imagekit.io/nshimhfrv/clothinSiteVol2/svgModel.png?updatedAt=1730915115139"
            height={750}
            width={500}
            alt="girl in blue sweats"
            className=''
          />
        </div>

        <div className=" h-1/4 w-full overflow-hidden bg-blue-200">
          <IKImage
            urlEndpoint={urlEndpoint}
            src="https://ik.imagekit.io/nshimhfrv/clothinSiteVol2/svgModel.png?updatedAt=1730915115139"
            height={750}
            width={500}
            alt="girl in blue sweats"
            className=''
          />
        </div>
        <div className=" h-1/4 w-full overflow-hidden bg-yellow-100">
          <IKImage
            urlEndpoint={urlEndpoint}
            src="https://ik.imagekit.io/nshimhfrv/clothinSiteVol2/svgModel.png?updatedAt=1730915115139"
            height={750}
            width={500}
            alt="girl in blue sweats"
            className=''
          />
        </div>
        <div className=" h-1/4 w-full overflow-hidden bg-gray-50">
          <IKImage
            urlEndpoint={urlEndpoint}
            src="https://ik.imagekit.io/nshimhfrv/clothinSiteVol2/svgModel.png?updatedAt=1730915115139"
            height={750}
            width={500}
            alt="girl in blue sweats"
            className=''
          />
        </div>
        
    </div>
  )
}
