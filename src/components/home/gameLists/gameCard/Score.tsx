
type Props = {
    score:number;
}

const Score = ({score}: Props) => {
    const bg=!score ? '' : score<70 ? 'bg-[#FEFCBF]' : 'bg-[#C6F6D5]' ;
  return (
    <div className={`w-max py-1 px-2 rounded-lg font-bold text-green-600 ${bg} `}>{score}</div>
  )
}

export default Score;