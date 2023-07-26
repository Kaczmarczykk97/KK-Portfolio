import classes from "./AboutPagePhotoContainer.module.css";

function AboutPagePhotoContainer(props) {
  return (
    <div className={classes.photoContainer}>
      <img
        src={props.portrait}
        alt="Kamil Kaczmarczyk portrait"
        className={classes.aboutPhoto}
      />
    </div>
  );
}

export default AboutPagePhotoContainer;
