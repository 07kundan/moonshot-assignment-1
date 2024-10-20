import { MailMetaDataInterface } from '@/interfaces/MailMetaDataInterface';
import React from 'react'

const MailCard = ({ 
    mail, 
    onClick, 
    selectedMail
} : { 
    mail : MailMetaDataInterface, 
    onClick: () => void , 
    selectedMail: MailMetaDataInterface | null
}) => {
    
  return (
    <li 
        key={mail.id} 
        className={`p-4 rounded-lg flex gap-4 cursor-pointer w-full 
            ${selectedMail?.id === mail.id ? "border-2 border-accent" : "border-2 border-border"}
            ${mail.isRead ? "bg-readBackground" : "bg-background"} shadow-md `}
        onClick={onClick}
    >
        <div className="h-12 w-12 flex items-center justify-center rounded-full bg-accent text-white font-bold">
            {mail.from.name[0].toUpperCase()}
        </div>
        <div className='flex-1'>
        <p className='text-sm text-gray-600'>
            From: <span className='font-semibold'>{mail.from.name}</span> &lt;{mail.from.email}&gt;
        </p>
        <p className='font-bold text-md mt-1'>Subject: {mail.subject}</p>
        <p className='text-gray-500 mt-2'>{mail.short_description}</p>
        <span className='flex items-baseline gap-5 mt-1 lg:mt-4'>
            <p className='text-xs text-gray-400'>
                {new Date(mail.date).toLocaleDateString()} {new Date(mail.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
            <p className='text-xs text-pink-500'>{mail.isFavorite && "Favorite"}</p>
        </span>
        </div>
    </li>
  )
}

export default MailCard;
