function ProfileCard({ title, handle, image, description }) {

    //1. taking entire Props Object
    // const title = props.title;
    // const handle =props.handle;
    
    //2. Argument destructuring
    // const { title, handle } = props;

    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="pda logo "/>
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">  {handle}</p>
                </div>
                <div className="content"> {description} </div>
            </div>
        </div>
    ); 
}

export default ProfileCard;