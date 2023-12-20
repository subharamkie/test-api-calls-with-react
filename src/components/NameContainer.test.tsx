import {render,screen,waitFor} from '@testing-library/react';
import { NameContainer } from './NameContainer';
import App from '../App';
import { makeServer } from '../mock_api/server';

test('testing if name container loads',async ()=>{
    makeServer({environment:'development'});
    render(<App/>)
    const nameCon = await screen.findByText('Luke',{exact:false});
    expect(nameCon).toBeInTheDocument();
    /*
    await waitFor(()=>{
       //expect(screen.queryByText('Loading...')).toBeNull();
       const nameCon = screen.getByText("First");
    expect(nameCon).toBeInTheDocument();
    });
    */
    
})