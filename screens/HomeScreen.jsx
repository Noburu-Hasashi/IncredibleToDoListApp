import {SafeAreaView} from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import { Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function HomeScreen({navigation}) {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
      ]);    

    const addTask = (task) => {
        setTasks([...tasks, task]);
    }

    return (
        <MainLayout>
            <SafeAreaView>
            <ToDoList tasks= {tasks}/>
            <ToDoForm />
            <Button title="About" onPress={() => navigation.navigate('About')} />
            </SafeAreaView>
        </MainLayout>
    );
}

export default HomeScreen;