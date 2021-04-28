import image from 'next/image'
import Image from 'next/image'

const YourComponent = () => (
    <Image
      src="images/imagem.png" // Route of the image file
      height={144} // Desired size with correct aspect ratio
      width={144} // Desired size with correct aspect ratio 652 × 569
      alt="Your Name"
    />
  )


export default function images() {
    return (
        <div>
            <img src={{ YourComponent }} />
        </div>
    )
};