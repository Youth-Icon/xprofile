export default function ProfilesExample() {
    return (
        <div className="rounded-xl border p-1 md:p-2 w-1/3 md:w-1/6 flex-shrink-0 border-slate-500 backdrop-blur-md dark:bg-[rgba(35,45,60,0.2)] bg-black/5">
            <div className="flex gap-2 md:gap-4 my-2 px-1 md:px-2 md:my-2">
                <svg className="w-7 h-8 " viewBox="0 0 55 53" fill="none" strokeWidth="2.75" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.35587" y="2.08487" width="52.0653" height="48.8112" stroke="currentColor" strokeWidth="2.71173" />
                    <path stroke="currentColor" fill="currentColor" strokeWidth="1" d="M34.7813 39.1532H28.464L22.8063 30.0938L17.2527 39.1532H11.8032L20.151 26.4146L12.0635 14.0577H18.3287L23.3443 22.1799L28.3078 14.0577H33.6879L25.9476 25.7551L34.7813 39.1532ZM37.4469 39.1532V33.6343H43.0006V39.1532H37.4469Z" />
                </svg>
                <span className="place-self-end self-end font-medium text-sm  md:text-xl">XProfile</span>
            </div>
            <div className="w-full">
                <img className="rounded-xl" src="/profilesexample.svg" alt="placeholder" />
            </div>
        </div>
    )
}