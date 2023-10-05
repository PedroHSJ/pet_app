import Logo from '../../assets/images/Logo_primary.png';
import {Container, LogoImageStyled} from './styles';

export const LogoImage = () => {
    return (
        <Container>
            <LogoImageStyled source={Logo} alt="Logo da empresa" />
        </Container>
    );
};
