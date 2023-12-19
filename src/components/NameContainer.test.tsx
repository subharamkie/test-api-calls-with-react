import {render,screen,waitFor} from '@testing-library/react';
import { NameContainer } from './NameContainer';
test('testing if name container loads',async ()=>{
    render(<NameContainer/>)
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