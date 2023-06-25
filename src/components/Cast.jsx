import { Box } from '../styled-component/Box';
import { ActorName, Actor, ActorCharacter } from '../styled-component/Cast.styled';
import { useFetchFilmCast } from '../Hooks/useFetchFilmCast';

export const Cast = () => {
    const { actors } = useFetchFilmCast();
    const imageDefaultUrl = 'https://image.tmdb.org/t/p/w200';
    return (
        actors && (
            <Box as="ul" p="4">
                {actors.map(({ name, profile_path, character, id }) => (
                    <Actor key={id}>
                        <img src={imageDefaultUrl + profile_path} alt={`actor ${name} `} />
                        <Box ml="4">
                            <ActorName>{name}</ActorName>
                            <ActorCharacter>{character}</ActorCharacter>
                        </Box>
                    </Actor>
                ))}
            </Box>
        )
    );
};