import { Button } from "react-native";
import MainLayout from '../layouts/MainLayout';

function AboutScreen() {
  return (
    <div>
      <h1>Incredible-To-Do-List App</h1>
      <p>Hello! This app was made by Uday Angrish!</p>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </div>
  );
}

export default AboutScreen;