import React from "react";
import { InputCard, TextAreaCard } from "../input/Input"



export const Footer = () => {
  return (
    <footer className="bg-black w-full h-[868px] ">



   <div className="flex flex-col bg-primeryColor rounded-b-lg max-sm:w-[350px] sm:w-2/3   md:w-1/2 w-[1053px] h-2/3 m-auto ">
    <h6 className="font-bold text-[64px] text-center ">KONTAKT</h6>
       <InputCard label={'Name'}></InputCard>
       <InputCard label={'Email addres'}></InputCard>
       <InputCard label={'Phone number'}></InputCard>
       <TextAreaCard label={'message'}></TextAreaCard>

       <button className="bg-black max-sm:m-auto sm:m-auto  w-[214px] h-[41px] rounded-md  text-white">
        <span className="m-auto text-[24px] uppercase ">send</span>
        </button>
   </div>




   <div className="text-[#ffffff] ">
    
    <h3 className="text-[36px] lg:ml-5 lg:pb-5 font-bold max-sm:p-4 max-sm:w-1/2 sm:p-4 sm:w-1/2  ">SteinSeinSite</h3>

   <div className="flex  max-sm:flex-col max-sm:p-4 max-sm:w-1/2 sm:p-4 sm:w-1/2 sm:flex-row   lg:w-full ">


   <div className=" flex-col   lg:p-4   ">
    <h6 className="text-[24px]">Links</h6>
    <ul className="text-[20px]">
      <li>Link</li>
      <li>Link</li>
      <li>Link</li>
      <li>Link</li>
    </ul>
   </div>

    <div className="flex flex-col max-sm:pt-5 sm:mx-auto sm:pl-5   ">
      <h6 className="text-[24px]"> Kontakt</h6>
      <p>Agencja Marketingowa SteinSeinSite SP.ZOO </p>
      </div>

    

      </div>
   </div>
    </footer>
  );
};