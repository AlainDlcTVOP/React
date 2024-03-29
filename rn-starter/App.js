import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';
import ImagePickers from './src/screens/ImagePickers';
import EditListScreen from './src/screens/EditListScreen';
import { ImagePickerIOS } from 'react-native';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Text: TextScreen,
    Box: BoxScreen,
    Picker: ImagePickers,
    Edit: EditListScreen

  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'IN YOUR FACE',

    },
  }
);


export default createAppContainer(navigator);
