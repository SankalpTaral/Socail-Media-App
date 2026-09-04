
import { useUserProfile } from '../../hooks/useUserProfile';
import './UserProfile.css'
function UserProfile() {
 
const [user] = useUserProfile(); // custom hook 
// segeragated logic into custom hooks so
// my component looks clean 

  if (!user) return "Loading...";

  return (
    <div>
      <div className="wrapper">
        <img
        className = "image"
         src={user.avatar} alt={user.name} />
        <h1>{user.name}</h1>
      </div>
    </div>
  );
}

export default UserProfile;

/**
 * i have two options over here i can shift my userList
 * in global context and use it find that id and show image
 * or i can do a api call with specific id
 *
 */
