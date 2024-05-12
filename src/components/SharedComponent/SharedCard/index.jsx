"use client"

export const SharedCard = ({ item }) => {
    return (
        <div className='flex flex-col gap-5 shadow-xl rounded-xl overflow-hidden cursor-pointer bg-cardBg border-gray-400 border-4 border-opacity-20'>
            <img className='w-full h-[220px] bg-white' src={item?.img} alt="Al Saif" />
            <div className='px-5 mb-5'>
                <h1 className='text-base font-semibold'>{item?.header}</h1>
                <p className='text-sm mt-4'>{item?.text}</p>
            </div>
        </div>
    )
}
