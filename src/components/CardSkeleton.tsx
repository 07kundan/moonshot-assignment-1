import React from 'react'

const CardSkeleton = () => {
  return (
    <div className='flex flex-col gap-5'>
        <div className="bg-background px-2 md:px-5 lg:pr-14 py-8 rounded-lg flex gap-1 md:gap-5 shadow-md border-2 border-border animate-pulse">
            <div className="h-8 w-8 md:h-12 md:w-12 rounded-full bg-gray-300"></div>
            <div className="flex-1 space-y-4 py-1">
                <div className="flex justify-between">
                    <div className="h-6 bg-gray-300 rounded w-1/3"></div>
                    <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                </div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                <div className="space-y-2">
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                </div>
            </div>
        </div>
        <div className="bg-background px-2 md:px-5 lg:pr-14 py-8 rounded-lg flex gap-1 md:gap-5 shadow-md border-2 border-border animate-pulse">
        <div className="h-8 w-8 md:h-12 md:w-12 rounded-full bg-gray-300"></div>
        <div className="flex-1 space-y-4 py-1">
            <div className="flex justify-between">
                <div className="h-6 bg-gray-300 rounded w-1/3"></div>
                <div className="h-6 bg-gray-300 rounded w-1/4"></div>
            </div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="space-y-2">
                <div className="h-4 bg-gray-300 rounded w-full"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
        </div>
        </div>
        <div className="bg-background px-2 md:px-5 lg:pr-14 py-8 rounded-lg flex gap-1 md:gap-5 shadow-md border-2 border-border animate-pulse">
        <div className="h-8 w-8 md:h-12 md:w-12 rounded-full bg-gray-300"></div>
        <div className="flex-1 space-y-4 py-1">
            <div className="flex justify-between">
                <div className="h-6 bg-gray-300 rounded w-1/3"></div>
                <div className="h-6 bg-gray-300 rounded w-1/4"></div>
            </div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="space-y-2">
                <div className="h-4 bg-gray-300 rounded w-full"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
        </div>
        </div>
        <div className="bg-background px-2 md:px-5 lg:pr-14 py-8 rounded-lg flex gap-1 md:gap-5 shadow-md border-2 border-border animate-pulse">
        <div className="h-8 w-8 md:h-12 md:w-12 rounded-full bg-gray-300"></div>
        <div className="flex-1 space-y-4 py-1">
            <div className="flex justify-between">
                <div className="h-6 bg-gray-300 rounded w-1/3"></div>
                <div className="h-6 bg-gray-300 rounded w-1/4"></div>
            </div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="space-y-2">
                <div className="h-4 bg-gray-300 rounded w-full"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CardSkeleton;
