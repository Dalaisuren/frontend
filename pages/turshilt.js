import Image from 'next/images'
import mongol from './mongol.avif' 
export default function Page() {
  return (
    <Image
      src={mongol}
      width={500}
      height={500}
    />
  )
}