import {useRouter} from 'next/router'
import styled from 'styled-components'

export default function Person({ownersList}){
    const router = useRouter();

    console.log(ownersList)
    return (
        <PersonList>
            <div className="container">
                <pre>{ownersList[0].details}</pre>
            </div>
        </PersonList>
      
    )
}

const PersonList = styled.div`
    font-family:${({theme})=>theme.font});
`

Person.getInitialProps = async ({query})=>{
    const data = await fetch(`http://localhost:4001/vehicles?ownerName=${query.person}&vehicle=${query.vehicle}`);
    const ownersList = await data.json();

    console.log(ownersList)
  
    return {
        ownersList
    }
  
}



