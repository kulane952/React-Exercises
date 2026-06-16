
const Profile=({image, name, job})=>{
    return(
    <div>
        <img src={image} alt={name} width="100" />
        <h2>{name}</h2>
        <p>{job}</p>
    </div>
)
}

export default Profile;