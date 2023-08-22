import './index.css'

const UserProfile = props => {
  const {usedet} = props
  const {imageUrl, role, name} = usedet
  return (
    <li className="user-card-container">
      <img src={imageUrl} className="avatar" alt="avatar" />
      <div className="user-details-containe">
        <h1 className="user-details">{name}</h1>
        <p className="user-designation">{role}</p>
      </div>
    </li>
  )
}
export default UserProfile
