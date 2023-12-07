import React, {useEffect, useState} from 'react';
import {Text, FlatList, View, ActivityIndicator, RefreshControl, TouchableOpacity,} from 'react-native';
import {CityShort} from "../components/City/CityCard";
import axios from "axios";
import {SearchComponent} from "../components/SearchCity/Search";
import {useSelector} from "react-redux";
import {DOMEN} from "../Consts"

export const CityListScreen = ({navigation}) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [citiesList, setCitiesList] = React.useState([]);
    const [updateTrigger, setUpdateTrigger] = useState(false);
    const name_city = useSelector((state) => state.search_city.name);

    const fetchCities = async () => {
        setIsLoading(true);
        // Определяем параметры запроса, включая номер страницы и количество объектов на странице
        const params = new URLSearchParams({
            status: 'True',
            name: name_city,
        });
        const url = `${DOMEN}api/cities/search/?${params}`
        await axios.get(url, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            signal: new AbortController().signal,
            // timeout: requestTime,
        })
            .then(response => {
                setCitiesList(response.data);
                setIsLoading(false);
                setUpdateTrigger(false)
            })
            .catch(error => {
                console.error("Ошибка!\n", error);
                return;
            });
    };

    useEffect(() => {
        fetchCities()
        if (updateTrigger) {
            // Вызываем код или обновление, которое должно произойти после успешного удаления
            // Например, здесь можно обновить список географических объектов или выполнить другие действия
            setUpdateTrigger(false);
        }
    }, [updateTrigger])

    if (isLoading) {
        return <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <ActivityIndicator size="large"/>
            <Text>Загружается..</Text>
        </View>
    }

    // При нажатии изменяется состояние
    const handleUpdateTriggerChange = (value) => {
        setUpdateTrigger(value);
    };

    return (
        <View>
            <SearchComponent name_city={name_city} updateTrigger={updateTrigger}
                             onUpdateTriggerChange={handleUpdateTriggerChange}/>
            <FlatList
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchCities}/>}
                data={citiesList}
                renderItem={({item}) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('CityScreen', {id: item.id, title: item.title})}>
                        <CityShort name={item.name} minioImageUrl={item.image}/>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}


