import request from 'superagent'

const url = "https://api.spotify.com/v1/artists/{id}/related-artists"
const id = "43ZHCT0cAZBISjO8DG9PnE"
const token = "BQDcZjvhLRPU0PVGBS6AF2eYAYfQOCiEvxs-bxLbODFJGJNEjSFhPwkbm0hLMophpf0YmUu2CIEUwUZMZolnFC42ncUGOfCw808_UMu1nGrDL2XmZDRVPL7a2rpul6z2y94PHx0pXJmwf-XvDg"


export function getArtists () {
  return request
    .get(url)
    .then(res => res.body)
    .catch(err => console.log(err))
}



curl -X "GET" "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/related-artists" 
-H "Accept: application/json" 
-H "Content-Type: application/json" 
-H "Authorization: Bearer BQDcZjvhLRPU0PVGBS6AF2eYAYfQOCiEvxs-bxLbODFJGJNEjSFhPwkbm0hLMophpf0YmUu2CIEUwUZMZolnFC42ncUGOfCw808_UMu1nGrDL2XmZDRVPL7a2rpul6z2y94PHx0pXJmwf-XvDg"