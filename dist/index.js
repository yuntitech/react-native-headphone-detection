"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHeadphonesDetection = void 0;
const react_1 = require("react");
const react_native_1 = require("react-native");
const RNHeadphoneDetection = react_native_1.NativeModules.RNHeadphoneDetection;
const eventEmitter = new react_native_1.NativeEventEmitter(RNHeadphoneDetection);
const HeadphoneDetection = {
    ...RNHeadphoneDetection,
    addListener(callback) {
        return eventEmitter.addListener(RNHeadphoneDetection.AUDIO_DEVICE_CHANGED_NOTIFICATION, callback);
    },
};
exports.useHeadphonesDetection = () => {
    const [result, setResult] = react_1.useState({
        audioJack: false,
        bluetooth: false
    });
    react_1.useEffect(() => {
        HeadphoneDetection.isAudioDeviceConnected().then(setResult);
        const subscription = HeadphoneDetection.addListener(setResult);
        return () => {
            subscription.remove();
        };
    }, []);
    return result;
};
exports.default = HeadphoneDetection;
