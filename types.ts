export interface BlessingState {
  text: string;
  isLoading: boolean;
  error: string | null;
  hasGenerated: boolean;
}

export interface EventLocation {
  name: string;
  address: string;
  time: string;
  mapUrl: string;
  type: 'CEREMONY' | 'RECEPTION';
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}