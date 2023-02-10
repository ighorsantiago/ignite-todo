import { View, Text, TouchableOpacity } from 'react-native';
import { EvilIcons, Feather } from '@expo/vector-icons';

import { styles } from './styles';

type Props = {
    task: string;
    done?: boolean;
    onCheck: () => void;
    onRemove: () => void;
}

export function Task({ task, done = false, onCheck, onRemove }: Props) {

    return (
        <View style={styles.container}>
            {
                done
                    ?
                    <TouchableOpacity style={styles.checked} onPress={onCheck}>
                        <Feather name='check' size={20} color='white'/>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.unchecked} onPress={onCheck}>
                    </TouchableOpacity>
            }
            <Text style={done ? styles.textCheacked : styles.textUncheacked}>
                { task }
            </Text>

            <TouchableOpacity onPress={onRemove}>
                <EvilIcons name='trash' size={32} color='#808080' />
            </TouchableOpacity>
        </View>
    );
}