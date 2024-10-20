"use client";
import { MailInterface } from '@/interfaces/MailInterface';
import { MailMetaDataInterface } from '@/interfaces/MailMetaDataInterface';
import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const MailDetail = ({ mail, toggleFavorite } : { mail: MailMetaDataInterface; toggleFavorite : () => void }) => {
    const [mailBody, setMailBody] = useState<string>("");

    const fetchMailDetail = async () => {
        try {
            const { data } : AxiosResponse<MailInterface> = await axios.get(`https://flipkart-email-mock.vercel.app/?id=${mail.id}`);
            setMailBody(data.body);
        } catch (error) {
            if(error instanceof Error) {
                toast.error("Error while retrieving mail detail");
              } else {
                toast.error("Unknown error occured while retrieving mail detail");  
              }
        }
    }

    useEffect(() => {
        fetchMailDetail();
    },[mail.id]);

  return (
    <div className="bg-background px-2 md:px-5 lg:pr-14 py-8 rounded-lg flex gap-1 md:gap-5 shadow-md border-2 border-border">
      <div className="h-8 w-8 md:h-12 md:w-12 flex items-center justify-center rounded-full bg-accent text-white font-bold">
            {mail.from.name[0].toUpperCase()}
      </div>
      <div className='flex-1'>
        <div className='flex justify-between'>
          <h2 className="text-lg font-bold">{mail?.subject}</h2>
          <button 
            className='bg-accent px-4 py-1 rounded-3xl cursor-pointer hover:bg-accent/80 active:scale-95 transition-all ease-in-out text-xs font-semibold text-readBackground'
            onClick={toggleFavorite}
          >
              { mail.isFavorite ? "unMark Favorite" : "Mark as favorite" }
          </button>
        </div>
        <p className="text-gray-600 mt-2 mb-4"> 
          {new Date(mail?.date).toLocaleDateString()} {new Date(mail?.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
        <div className="text-sm md:text-base text-gray-800 pr-5 lg:pr-2" dangerouslySetInnerHTML={{__html: mailBody || "No content available"}}></div>
      </div>
    </div>
  )
}

export default MailDetail;
