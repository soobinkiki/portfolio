import { useRouter } from 'next/router'

export default function User() {
    // open an instance of useRouter
    const router = useRouter()
    // pull the path param from the router object
    const { banana } = router.query

    return (
        <div>
            <h1>Hello user { banana }</h1>
        </div>
    )
}