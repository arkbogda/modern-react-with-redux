function ProfileCard({ title, handle, image }) {

    //1. taking entire Props Object
    // const title = props.title;
    // const handle =props.handle;
    
    //2. Argument destructuring
    // const { title, handle } = props;

    return (
        <div>
            <img src={image} alt="pda logo"/>
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
        </div>
    ); 
}

export default ProfileCard;