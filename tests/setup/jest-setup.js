// include this line for mocking react-native-gesture-handler
import "react-native-gesture-handler/jestSetup";
import "react-native-pie-chart";
import "firebase/firestore";
import "firebase/app";

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

jest.mock("react-native-pie-chart", () => {
  return jest.fn();
});

jest.mock("firebase/firestore", () => ({
  addDoc: jest.fn(),
  collection: jest.fn(),
  getFirestore: jest.fn(),
}));

jest.mock("firebase/app", () => ({
  initializeApp: jest.fn(),
}));
