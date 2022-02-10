import withAuthorization from "../components/hoc/withAuthorization";

const Secret = (props) => {
  debugger
  return (
    <>
    <h1>I am Secret </h1>
    </>
    )
  }

export default withAuthorization(Secret);