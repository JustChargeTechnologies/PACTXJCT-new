import React from 'react'
import Arrow from "../../assets/About/Arrow1.svg"
import "../../../public/styles/slider.css"
import image1 from "../../assets/About/image1.webp";
import image2 from "../../assets/About/image2.webp";
import image3 from "../../assets/About/image3.webp";
import { Link } from 'react-router-dom';

const WhyPact = () => {
  return (
    <div id='whypact' className='flex h-full w-[85%] md:w-[78%]'>
        <div className='min-h-[988px] nunito-font'>
            <div className='text-[11px] md:text-[14px] font-[600] text-[#6E6E6E] flex items-center gap-3 mt-3 md:mt-10'><div>WHY US</div><div className='border-[0.7px] w-[40px] md:w-[59.26px] h-0 border-[#6E6E6E]'></div></div>
            <div className='font-[800] text-[24px] md:text-[40px] md:leading-[50px] mt-1 md:mt-7'>Why PACT</div>
            <div className='flex flex-col mt-4 md:mt-4 gap-[32px]'>
                <div className='font-[700] leading-[24px] text-[#6E6E6E]'>PACT Foundation is a dynamic knowledge-tank that collaborates with individuals, government bodies, industries, and other non-profit organisations to shape public policy and drive sustainable transformation in local communities. We believe in the power of knowledge sharing and cross-border collaboration to create positive change and influence the world around us</div>
                <div className='font-[400] leading-[24px] text-[#6E6E6E]'>Our pioneering crowd-sourcing methods and grassroots structures enable us to create an engaging non-profit platform for people to participate in shaping their communities. Through our initiatives, we aim to democratise international knowledge and empower individuals to make informed decisions about their future. At the heart of our work is our live knowledge repository, where we bring together and share experiences, expertise, and extensive knowledge to drive progress. We curate cutting-edge research and insights from across the globe, and make them accessible to all. We believe in the transformative power of knowledge and its ability to shape the world for the better.</div>
                <div className=' flex gap-4 md:gap-5 flex-wrap md:flex-nowrap'>
                    <div className='md:max-w-[418.67px] md:min-h-[388px]'><img className='rounded-lg ' src={image1} alt="" /></div>
                    <div className='md:max-w-[418.67px] md:min-h-[388px]'><img src={image2} alt="" /></div>
                    <div className='md:max-w-[418.67px] md:min-h-[388px]'><img src={image3} alt="" /></div>
                </div>
                <div className='font-[400] leading-[24px] text-[#6E6E6E] italic'>We facilitate think tanks throughout India, hosting conferences and seminars in collaboration with government and advocacy leaders to advance educational and social causes. Our events provide a platform for experts, policymakers, and citizens to come together and exchange ideas, insights, and best practices.</div>
                <div className='font-[700] leading-[24px] text-[#6E6E6E]'> At PACT Foundation, we are committed to enhancing education and higher education across the nation. We believe that education is the cornerstone of progress and social mobility, and that every individual should have access to quality education and training opportunities. We work with government bodies, educational institutions, and other stakeholders to identify gaps, develop innovative solutions, and create lasting impact.</div>
                <div className='font-[400] leading-[24px] text-[#6E6E6E]'>Our mission is to be a catalyst for positive change, promoting a more equitable and sustainable world for all. Join us on our journey to shape the future, one idea at a time.</div>
                <div className='flex gap-[12px] items-center'>
                    <Link to="/supportus" className='font-[700] italic text-[#2282B4]'>
                    Donate now
                    </Link>
                    <div><img src={Arrow} alt="" /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyPact