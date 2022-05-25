import "./css/style.css";

const HeaderProfile = (props) => {
  return (
    <div className="header-profile">
      <div className="header-profile__avatar">
        <img src={props.profile} alt="avatar" />
      </div>
      <div className="header-profile__info">
        <h2>
          {props.firstname} {props.lastname}
        </h2>
        <div>{props.published}</div>
      </div>
    </div>
  );
};

export default HeaderProfile;
