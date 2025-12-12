const CourseCard = (props) => {
  const { title, subTittle, price, courseImg } = props.course;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={courseImg}
        className="card-img-top"
        alt="React Course"
        width="286"
        height="180"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {subTittle} - {price}
        </p>
        <a href="#" className="btn btn-primary d-grid justify-content-center">
          Enroll
        </a>
      </div>
    </div>
  );
};
export default CourseCard;
