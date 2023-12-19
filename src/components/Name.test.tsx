import {render,screen} from '@testing-library/react';
import {Name} from './Name';
test('test loading of name component',async () =>{
    const testVar = 'Hello World';
    render(<Name name={testVar}/>);
    const rendered = await screen.findByText('Hello',{exact:false});
    expect(rendered).toBeInTheDocument();
})