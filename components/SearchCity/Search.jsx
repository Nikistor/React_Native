import {View, TextInput, Button} from 'react-native';
import {useDispatch} from "react-redux";
import {updateCity} from "../../store/SearchCity";
import {SearchCityStyle} from "./Style"

export const SearchComponent = ({name_city, updateTrigger, onUpdateTriggerChange}) => {
    const dispatch = useDispatch();
    const handleChange = (search_city) => {
        dispatch(updateCity(search_city));
    };
    const pressButton = () => {
        onUpdateTriggerChange(true);
    };

    return (
        <View style={SearchCityStyle.searchContainer}>
            <TextInput
                style={SearchCityStyle.searchInput}
                placeholder="Поиск..."
                value={name_city}
                onChangeText={(text) => handleChange(text)}
                onSubmitEditing={pressButton}
            />
            {/*Иконка кнопки*/}
            {/*<Button title="Поиск" onPress={pressButton} />*/}
        </View>
    );
};

