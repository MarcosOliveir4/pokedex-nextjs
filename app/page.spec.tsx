import { render } from '@testing-library/react';
import Home from './page';

describe('<Home />', () => {
  it('should render title', () => {
    const { container } = render(<Home />);

    expect(container).toHaveTextContent('Pokedex Nextjs');
  });
});
