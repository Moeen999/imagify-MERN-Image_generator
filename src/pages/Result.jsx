import { assets } from "../assets/assets"

const Result = () => {
  return (
    <div>
      <div className="relative">
        <img src={assets.sample_img_1} alt="" className="max-w-sm rounded"/>
        <span className="absolute bottom-0" />
      </div>
    </div>
  )
}

export default Result
