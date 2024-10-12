function Card({children}){
    return(
        <div className="w-50  border border-dark border-1 rounded mx-auto p-5 shadow-lg" style={{height:"50vh"}}> 
        {children}
        </div>
    )

}

export default Card;