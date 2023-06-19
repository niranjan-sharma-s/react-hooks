import {useState , useContext , createContext} from 'react'


const userContext = createContext()

export function Component1 () {
    const [name , setName] = useState("John Doe")

    return (
        <userContext.Provider value={name}>
            <div>Hello {name}</div>
            <Component2/>
        </userContext.Provider>
    )
}

function Component2 () {
    return (
        <> 
        <div>Component 2</div>
        <Component3/>
        </>
        )
    }

function Component3 () {
    const name = useContext(userContext)
    return (
        <>
        <div>Component3</div>
        <div>Hello {name}</div>
        </>
    )
}