import { useParams } from "react-router-dom"

export default function UserPage() {

    const params = useParams()
    console.log(params)
    return (
        <div>
            User <h1>{params.id}</h1>
        </div>
    )
}