function ProfileCard(props) {
    // const title = props.title;
    // const handle = props.handle;
    // above can be written as below single line
    // const {title, handle} = props;

    // we can write function ProfileCard(props) as
    // function ProfileCard({ title, handle })
    return (
        <>
        <div>Title is {props.title}</div>
        <div>Handle is {props.handle}</div>
        </>
        // <div> Title is {title}</div>
        // <div> Handle is {handle} </div>
    );
}

export default ProfileCard;