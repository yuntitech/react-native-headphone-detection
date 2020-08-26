import { EventSubscription } from 'react-native';
export interface ConnectedResult {
    audioJack: boolean;
    bluetooth: boolean;
}
export interface IHeadphoneDetection {
    isAudioDeviceConnected: () => Promise<ConnectedResult>;
    AUDIO_DEVICE_CHANGED_NOTIFICATION: string;
    addListener: (callback: (connection: ConnectedResult) => void) => EventSubscription;
}
declare const HeadphoneDetection: IHeadphoneDetection;
export declare const useHeadphonesDetection: () => ConnectedResult;
export default HeadphoneDetection;
