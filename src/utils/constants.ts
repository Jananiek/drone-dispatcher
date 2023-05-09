export enum DroneModel {
  LIGHT_WEIGHT = 'Lightweight',
  MIDDLE_WEIGHT = 'Middleweight',
  CRUISER_WEIGHT = 'Cruiserweight',
  HEAVY_WEIGHT = 'Heavyweight',
}

export enum DroneState {
  IDLE = 'idle',
  LOADING = 'loading',
  LOADED = 'loaded',
  DELIVERING = 'delivering',
  DELIVERED = 'delivered',
  RETURNING = 'returning',
}
