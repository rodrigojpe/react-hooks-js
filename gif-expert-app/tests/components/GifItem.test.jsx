import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components"

// eslint-disable-next-line no-undef
describe('pruebas GifItem <GifItem />', () => {

    const title = 'Messi'
    const url = 'https://one-dasjkdhkasd.jpg'
    // eslint-disable-next-line no-undef
    test('debe hacer un match con el snapshot', ()=> {
       const container =  render( <GifItem  title={ title } url={ url } />)
       // eslint-disable-next-line no-undef 
       expect(container).toMatchSnapshot()
    })

    // eslint-disable-next-line no-undef
    test('debe mostrar la img con el ALT indicado', ()=> {
        render( <GifItem  title={ title } url={ url } />)

        // screen.debug();

        const {src, alt} = screen.getByRole('img') 

        // eslint-disable-next-line no-undef
        expect(src).toBe( url );
        // eslint-disable-next-line no-undef
        expect(alt).toBe( title )
    
    })

    // eslint-disable-next-line no-undef
    test('debe mostrar lel titulo en el componente', ()=> {
        render( <GifItem  title={ title } url={ url } />)

        // screen.debug();
        // eslint-disable-next-line no-undef
        expect(screen.getByText(title)).toBeTruthy();
    
    })
        


})