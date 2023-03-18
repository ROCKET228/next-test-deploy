import {useRouter} from "next/router";
import MainContainer from "../../components/MainContainer";

export default function ({user}) {
    const {query} = useRouter()
    return(
        <MainContainer title="User">
            <h1>User with id {query.id}</h1>
            <div>User name - {user.name} </div>
        </MainContainer>
    );
}

export async function getServerSideProps({params}){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()

    return{
        props: {user}
    }
}