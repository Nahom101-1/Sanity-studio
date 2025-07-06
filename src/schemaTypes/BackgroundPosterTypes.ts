export interface BackgroundPoster {
  _id: string
  _type: 'backGroundPoster'
  _createdAt: string
  _updatedAt: string
  _rev: string
  poster: string
  slug: {
    _type: 'slug'
    current: string
  }
  image: {
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
    hotspot?: {
      x: number
      y: number
      height: number
      width: number
    }
    crop?: {
      top: number
      bottom: number
      left: number
      right: number
    }
  }
} 