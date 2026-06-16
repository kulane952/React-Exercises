const Navication=({underMessage})=>{

    return(
        <div>
            <h1>Hellow!</h1>
            {underMessage.length >0 &&(
                <p>You have{underMessage.length} underMassage</p>
            )}
        </div>
    )
}
export default Navication;