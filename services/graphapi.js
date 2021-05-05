//Acesso a graph api do Facebook

import useSWR from 'swr'

export function Test (props) {
    
    const data = {data: 123}
    console.log ("Funcao graphapi/Test. Props.name:", props )
    
    return <div>{data.data}</div>
}

//function fetcher await
export const fetcher = (...args) => fetch(...args).then(res => res.json())


//fetch FB with useSWR
export default function fetchFBkeywords (keyword) {

    console.log ("fetchFBkeywords keyword:", keyword)
    
    //const url = 'https://jsonplaceholder.typicode.com/todos/1'
    const token = 'EAAHe0AcsY6MBAGlLPcM9bBVczujSfZAhSzi0Pi1ySbEAZAjVR1LpeYf7B9573MBVpnNYZC8u9RBQZApXv6MF2BWpdtlBnvyRDMRHgqauDYPh7xQ7YJQJpB8WqTV1TyMjXwQEcIrLZCaoCVY0QZBU7knwNf1EHkiGFI3UZCmALvPPW2V7x5fJcCW598MD6s3FSmNUZAPHrJHYHJoMTGejm0XF'
    const url = `https://graph.facebook.com/search?type=adinterest&q=[${keyword}]&limit=10000&locale=pt_BR&access_token=${token}`

    const { data, error } = useSWR(url , fetcher)

    return {
        response: data,
        isLoading: !error && !data,
        isError: error
      }
}

