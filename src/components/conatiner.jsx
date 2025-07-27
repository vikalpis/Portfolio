export default function Container({children}){

    return (
        <>
        <div className="flex justify-center">
            <div className="bg-blue-100 w-3xl">
        {children}
        </div>
        
        </div>
        </>
    )
}