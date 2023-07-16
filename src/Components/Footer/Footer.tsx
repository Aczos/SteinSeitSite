import React from "react";
import { InputCard, TextAreaCard } from "../input/Input"



export const Footer = () => {
  return (
    <footer className="bg-black w-full h-1/2  ">



   <div className="flex flex-col bg-primeryColor rounded-b-lg max-sm:w-2/3 sm:w-2/3   md:w-1/2 w-[65.813rem] h-2/3 m-auto  py-4">
    <h4 className="font-bold text-[4rem] text-center ">KONTAKT</h4>
       <InputCard label={'Name'}></InputCard>
       <InputCard label={'Email addres'}></InputCard>
       <InputCard label={'Phone number'}></InputCard>
       <TextAreaCard label={'message'}></TextAreaCard>

       <button className="bg-black max-sm:m-auto sm:m-auto  max-sm:w-1/2 sm:w-1/2  md:w-1/3 lg:w-1/3 h-[2.563rem] rounded-md  text-white">
        <span className="m-auto text-2xl uppercase ">send</span>
        </button>
   </div>




   <div className="text-white ">
    
    <h4 className="text-[2.25rem] lg:ml-5 lg:pb-5 font-bold max-sm:p-4 max-sm:w-1/2 sm:p-4 sm:w-1/2  ">SteinSeinSite</h4>

   <div className="flex  max-sm:flex-col max-sm:p-4 max-sm:w-1/2 sm:p-4 sm:w-1/2 sm:flex-row   lg:w-full ">


   <div className=" flex-col   lg:p-4   ">
    <h4 className="text-2xl">Links</h4>
    <ul className="text-xl">
      <li>Link</li>
      <li>Link</li>
      <li>Link</li>
      <li>Link</li>
    </ul>
   </div>

    <div className="flex flex-col max-sm:pt-5 sm:mx-auto sm:pl-5   ">
      <h4 className="text-2xl"> Kontakt</h4>
      <p>Agencja Marketingowa SteinSeinSite SP.ZOO </p>
      </div>

    

      </div>
   </div>
    </footer>
  );
};