import error  from '@/assets/error.jpg'
import Image from 'next/image';
const NotFound = () => {
    return (
        <div>
            <Image src={error} width={800} height={300} alt='error' className='min-h-screen flex justify-center items-center mx-auto'></Image>
            <Image src="https://imgcdn.kim/poster/341/82156122.jpg" width={800} height={300} alt='spiderman'></Image>
        </div>
    );
};

export default NotFound;