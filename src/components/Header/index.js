import {TitleHeader, Image} from './styled'



export const Header = (props) => {

    return(
        <TitleHeader>
            <h4>{props.infoUsuarioNome}</h4>
            <Image src= {props.infoUsuarioFoto} alt="foto de perfil"/>
        </TitleHeader>
    )
}