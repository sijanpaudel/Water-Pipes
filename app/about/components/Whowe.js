import React from 'react'
import Whoweinner from './Whoweinner'

const Whowe = () => {
    return (
        <div className='grid grid-cols-1 bg-[#F9F9F9] lg:grid-cols-2 py-[5vh] px-[5vw] gap-y-16 gap-x-8'>

            <Whoweinner titleblack={"Who We"} titleblue={"Are"} logo={"about/logo.png"} content={"At [Your Company Name], we bring years of experience in pipe manufacturing, utilizing state-of-the-art technology and stringent quality control measures to ensure superior products. Our expertise spans across PVC, HDPE, steel, and industrial piping, catering to sectors such as construction, plumbing, agriculture, and oil & gas."} image={"about/who.png"} contentFirst={true}/>

            <Whoweinner titleblack={"Why Choose"} titleblue={"Us"} logo={"about/logo1.png"} content={"At [Your Company Name], we bring years of experience in pipe manufacturing, utilizing state-of-the-art technology and stringent quality control measures to ensure superior products. Our expertise spans across PVC, HDPE, steel, and industrial piping, catering to sectors such as construction, plumbing, agriculture, and oil & gas."} image={"about/why.png"} contentFirst={false}/>

            <Whoweinner titleblack={"Our"} titleblue={"Mission"} logo={"about/logo2.png"} content={'At [Your Company Name], we bring years of experience in pipe manufacturing, utilizing state-of-the-art technology and stringent quality control measures to ensure superior products. Our expertise spans across PVC, HDPE, steel, and industrial piping, catering to sectors such as construction, plumbing, agriculture, and oil & gas.'} image={"about/mission.png"} contentFirst={true} />

            <Whoweinner titleblack={"Our"} titleblue={"Vision"} logo={"about/logo3.png"} content={"At [Your Company Name], we bring years of experience in pipe manufacturing, utilizing state-of-the-art technology and stringent quality control measures to ensure superior products. Our expertise spans across PVC, HDPE, steel, and industrial piping, catering to sectors such as construction, plumbing, agriculture, and oil & gas."} image={"about/vision.png"} contentFirst={false} />
        </div>
    )
}

export default Whowe
