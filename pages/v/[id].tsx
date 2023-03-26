import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Visit() {
    const router = useRouter()
    
    const getLocalStorage = (key) => {
        let item = localStorage.getItem('urls')
        let json = JSON.parse(item)

        let itemIndex = json.findIndex((data) => data.key == key)
        return json[itemIndex]
    }

    useEffect(() => {
        const visitValue = async () => {
            let { id } = router.query
            const item = await getLocalStorage(id)
            if (item != null || item != undefined) {
                router.replace(item.value)
            }
        }
        visitValue()
        // router.replace(item.value)
    })
}