import React from 'react'
import HowWeDo from '../../components/layanan/webapp/how-we-do/HowWeDo'
import JoinSection from '../../components/layanan/webapp/join-section/JoinSection'
import Faq from '../../components/layanan/webapp/faq/Faq'
import LanggananSection from '../../components/layanan/webapp/langganan/LanggananSection'

const WebApp = () => {
  return (
    <div className=" flex flex-col justify-center items-center shrink-0">
        <HowWeDo/>
        <LanggananSection/>
        <Faq/>
        <JoinSection/>
    </div>
    
  )
}

export default WebApp