import withAuthorization from "../components/hoc/withAuthorization";

const Secret = (props) => {
  return (
    <>
    <h1>I am Secret </h1>
    </>
    )
  }

export default withAuthorization(Secret);