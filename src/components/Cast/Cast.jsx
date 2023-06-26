import { Box } from '../../Servise/Box';
import { CastList, ActorName, ActorCharacter } from './Cast.styled';
import { useFetchFilmCast } from '../../Hooks/useFetchFilmCast';
// зображення користувача за замовчуванням
import defaultPicture from './default-foto.png';

const Cast = () => {
    const { actors } = useFetchFilmCast();
    const imageDefaultUrl = 'https://image.tmdb.org/t/p/w200';
    return (
        actors && (
            <CastList>
                {actors.map(({ name, profile_path, character, id }) => {
                    if (profile_path) {
                        return (
                            <li key={id}>
                                <img src={imageDefaultUrl + profile_path} alt={`actor ${name} `} />
                                <Box ml="4">
                                    <ActorName>{name}</ActorName>
                                    <ActorCharacter>Character: {character}</ActorCharacter>
                                </Box>
                            </li>
                        );
                    } else {
                        return (
                            <li key={id}>
                                <img src={defaultPicture} alt={`actor ${name}`} height={225} />
                                <Box ml="4">
                                    <ActorName>{name}</ActorName>
                                    <ActorCharacter>Character: {character}</ActorCharacter>
                                </Box>
                            </li>
                        )
                    }

                })}
            </CastList>
        )
    );
};
export default Cast;