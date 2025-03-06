import React from 'react'
import ServiceInner from './ServiceInner'

const Service = () => {
  return (
    <div className='grid lg:grid-cols-3 justify-self-center py-[5vh] gap-10'>
     <ServiceInner title={"Product Manufacturing"} image={"services/1.png"} first={"HDPE Pipe Production"} second={"Custom Pipe Solution"} />
     <ServiceInner title={"Quality Assurance"} image={"services/2.png"} first={"Testing and Certification"} second={"Material Sourcing"} />
     <ServiceInner title={"Technical Support"} image={"services/3.png"} first={"Consultation Services"} second={"After-Sales Support"} />
     <ServiceInner title={"Distribution and Logistics"} image={"services/4.png"} first={"Timely Delivery"} second={"Inventory Management"}/>
     <ServiceInner title={" Installation Guidance"} image={"services/5.png"} first={"Expert Recommendations"} second={"On-Site Assistance"}/>
     <ServiceInner title={"Sustainable Solutions"} image={"services/6.png"} first={"Eco-Friendly Manufacturing"} second={"Water Management Solutions"} />
    </div>
  )
}

export default Service
