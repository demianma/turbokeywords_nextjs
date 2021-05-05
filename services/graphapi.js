/*
*
* Acesso a graph api do Facebook
* 
*/

import useSWR from 'swr'

//data fetcher await
const fetcher = (...args) => fetch(...args).then(res => res.json())

//fetch FB with useSWR
function fetchFBkeywords (params) {

    console.log ("fetchFBkeywords keyword:", params.keyword)
    
    const token = 'EAAHe0AcsY6MBAGlLPcM9bBVczujSfZAhSzi0Pi1ySbEAZAjVR1LpeYf7B9573MBVpnNYZC8u9RBQZApXv6MF2BWpdtlBnvyRDMRHgqauDYPh7xQ7YJQJpB8WqTV1TyMjXwQEcIrLZCaoCVY0QZBU7knwNf1EHkiGFI3UZCmALvPPW2V7x5fJcCW598MD6s3FSmNUZAPHrJHYHJoMTGejm0XF'
    const url = `https://graph.facebook.com/search?type=adinterest&q=[
                    ${params.keyword}]&limit=10000&locale=pt_BR&access_token=
                    ${token}`

    const {data, error} = useSWR(url , fetcher)

    return {
        response: data,
        isLoading: !error && !data,
        isError: error
      }
}

export default fetchFBkeywords