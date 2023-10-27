import Image from 'next/image'

export default function PreviewCard(){
    return(
        <div className="max-w-screen-xl w-full border px-3 mx-2 md:px-8 md:py-3 mt-24 md:m-10 border-[rgba(255,255,255,0.125)] rounded-3xl backdrop-blur-md dark:bg-[rgba(35,45,60,0.2)] bg-black/5">
            <div className="flex gap-4 px-3 my-2 md:px-4">
                <svg className="w-6 h-8 md:w-10 md:h-8" viewBox="0 0 55 53" fill="none" strokeWidth="2.75" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.35587" y="2.08487" width="52.0653" height="48.8112" stroke="currentColor" strokeWidth="2.71173" />
                    <path stroke="currentColor" fill="currentColor" strokeWidth="1" d="M34.7813 39.1532H28.464L22.8063 30.0938L17.2527 39.1532H11.8032L20.151 26.4146L12.0635 14.0577H18.3287L23.3443 22.1799L28.3078 14.0577H33.6879L25.9476 25.7551L34.7813 39.1532ZM37.4469 39.1532V33.6343H43.0006V39.1532H37.4469Z" />
                </svg>
                <span className="self-end text-base font-medium place-self-end md:text-xl">XProfile</span>
            </div>
            <div className="my-3 md:my-5 md:mx-8">
                <Image src={'/profilesexample.svg'} className="mx-auto md:w-full rounded-3xl" alt="Card" width={1000}
      height={1000} />
            </div>
        </div>
    )
}