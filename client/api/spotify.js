import request from 'superagent'

const url = "https://api.spotify.com/v1/albums/{id}/tracks"
const id = "43ZHCT0cAZBISjO8DG9PnE"
const token = "BQDcZjvhLRPU0PVGBS6AF2eYAYfQOCiEvxs-bxLbODFJGJNEjSFhPwkbm0hLMophpf0YmUu2CIEUwUZMZolnFC42ncUGOfCw808_UMu1nGrDL2XmZDRVPL7a2rpul6z2y94PHx0pXJmwf-XvDg"
// Get an album's tracks

export function getAlbumTracks () {
  return request
    .get(url)
    .then(res => res.body)
    .catch(err => console.log(err))
}
