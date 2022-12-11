import background from './ghostlamp.png';
import { Background } from './styles/imageArea';

const ImageArea = () => {
    return ( 
        <>
            <Background><img src={background} alt="conf-background" /></Background>
        </>
     );
}
 
export default ImageArea;