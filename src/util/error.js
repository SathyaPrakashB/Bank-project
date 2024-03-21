export default function Error(props) {
  const { message, style, className } = props;

  return (
    <div
      style={{ textAlign: "center", ...style }}
      className={`alert alert-danger ${className}`}
      role="alert"
    >
      {message}
    </div>
  );
}


// export default function Error(props) {
//   return (
//     <div
//       style={{ textAlign: "center", width: "830px"}}
//       className="alert alert-danger"
//       role="alert"
//     >
//       {props.message}
//     </div>
//   );
// }