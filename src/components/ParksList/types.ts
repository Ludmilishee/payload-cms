export type ParksListCity = {
  id: number | string
  name: string
  slug: string
}

export type ParksListPark = {
  id: number | string
  name: string
  address: string
  city: ParksListCity
}
