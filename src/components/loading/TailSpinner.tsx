import { TailSpin } from 'react-loader-spinner'

const TailSpinner = () => {
  return (
    <div className="p-20 mx-auto">
      <TailSpin
  visible={true}
  height="80"
  width="80"
  color="#0091F7"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  )
}

export default TailSpinner
