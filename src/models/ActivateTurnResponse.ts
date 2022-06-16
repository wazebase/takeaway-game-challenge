export interface ActivateTurnResponse {
    state: 'play' | 'wait';
    user: string;
}
