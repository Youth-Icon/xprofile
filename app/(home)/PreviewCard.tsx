export default function PreviewCard(){
    return(
        <div className="border px-3 md:px-8 md:py-3 mt-32 md:m-10 border-[rgba(255,255,255,0.125)] rounded-3xl backdrop-blur-md bg-[rgba(35,45,60,0.2)] ">
            <div className="flex gap-4 my-2 px-3 md:px-4">
                <svg width="30" height="35" viewBox="0 0 55 53" fill="none" strokeWidth="2.75" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.35587" y="2.08487" width="52.0653" height="48.8112" stroke="currentColor" strokeWidth="2.71173" />
                    <path stroke="currentColor" fill="currentColor" strokeWidth="1" d="M34.7813 39.1532H28.464L22.8063 30.0938L17.2527 39.1532H11.8032L20.151 26.4146L12.0635 14.0577H18.3287L23.3443 22.1799L28.3078 14.0577H33.6879L25.9476 25.7551L34.7813 39.1532ZM37.4469 39.1532V33.6343H43.0006V39.1532H37.4469Z" />
                </svg>
                <span className="place-self-end self-end font-medium text-base md:text-xl">XProfile</span>
            </div>
            <div className="my-3 md:my-5 md:mx-8">
                <img src={'/placeholder.png'} className="md:w-full mx-auto rounded-3xl" alt="Card" />
            </div>
        </div>
    )
}