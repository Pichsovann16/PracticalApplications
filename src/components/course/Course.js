import CourseCard from "./CourseCard";
const Course = () => {
  // const title = "React course 2025";
  // const subTittle = "Learning React is fun!";
  // const price = "$99";
  // const coursImg =
  //   "https://imgs.search.brave.com/DU3Yz5ErIiS0iHmgTeArdTWG9JgILClu-3YfIX9i8io/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDgvUmVhY3QtTG9n/by01MDB4MjgxLnBu/Zw";
  const course = {
    title: "React Course 2025",
    subTittle: "Start learning React today!",
    price: "$99",
    courseImg:
      "https://imgs.search.brave.com/wTNXpYUC1W6ILguJnF2uA9Ndp-XcCt8-iH7YDIGC1ec/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kdG12/YW1haHM0MHV4LmNs/b3VkZnJvbnQubmV0/L3B1YmxpYy9jb3Vy/c2UvY291cnNlLTMy/MjYtUmVhY3QlMjBF/c3NlbnRpYWxzJTIw/YW5kJTIwQWR2YW5j/ZWQlMjBDb25jZXB0/cy5wbmc",
  };
  return (
    <div className="row cols-4 gap-4 m-4 d-flex justify-content-center">
      <CourseCard course={course} />
      <CourseCard course={course} />
      <CourseCard course={course} />
      <CourseCard course={course} />
      <CourseCard course={course} />
      <CourseCard course={course} />
      <CourseCard course={course} />
      <CourseCard course={course} />
    </div>
  );
};

export default Course;
