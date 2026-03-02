import { render, screen } from '@testing-library/react';
import PokeMenu from './poke-menu';

const sut = () => render(<PokeMenu />);

describe('<PokeMenu />', () => {
  it('should render poke menu correctly', () => {
    sut();
    const pokeMenu = screen.getByTestId('poke-menu');
    expect(pokeMenu).toBeInTheDocument();
    expect(pokeMenu).toHaveTextContent('PokeDex');
  });
});
