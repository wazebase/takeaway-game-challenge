export interface IActivateTurnResponse {
    state: 'play' | 'wait';
    user: string;
}
