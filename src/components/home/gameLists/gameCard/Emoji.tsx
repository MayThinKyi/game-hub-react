import Bad from '../../../../images/bad.png'
import Good from '../../../../images/good.png'
import Excellent from '../../../../images/excellent.png'

type Props = {
    rating:number;
}

const Emoji = ({rating}: Props) => {
    const emoji=rating <3 ? Bad : rating <5 ? Good : Excellent;
  return (
   <img className='w-[50px] h-[50px]' src={emoji} alt='Rating Emoji' />
  )
}

export default Emoji