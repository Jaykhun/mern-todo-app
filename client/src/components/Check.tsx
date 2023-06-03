import { BsCheck } from 'react-icons/bs'

interface CheckProps {
    completed: boolean
}

const Check = ({ completed }: CheckProps) => {
    return (
        <>
            {completed && <BsCheck width={24} className='rounded-sm text-yellow-500'/>}
        </>
    )
}

export default Check