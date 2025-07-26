export default function Container({children}){

    return (
        <>
        <div className="flex justify-center">
            <div className="bg-blue-100 w-160">
        {children}
        </div>
        
        </div>
        </>
    )
}