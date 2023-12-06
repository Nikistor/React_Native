import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ActivityIndicator, Text, View} from "react-native";
import {City} from "../components/CityCard";
import {CityDetail} from "../components/CityCard";

export const CityScreen = ({route,navigation}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [city, setCity] = useState();
    const {id,title} =route.params;

    useEffect(() => {
        navigation.setOptions(title);
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`http://192.168.57.199:8000/api/cities/${id}/`);
                const fetchedCity = response.data;
                setCity(fetchedCity);
                // console.log('City updated:', fetchedCity.data.image);
            } catch (error) {
                console.log(error);
                alert('Error GET city');
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    if (isLoading) {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <ActivityIndicator size="large"/>
                <Text>Загружается..</Text>
            </View>
        );
    }

    // Проверка, определен ли город, прежде чем обращаться к его свойствам
    if (!city) {
        return (
            <View>
                <Text>City not found.</Text>
            </View>
        );
    }

    return (
        <CityDetail
            name={city.name}
            foundation_date={city.foundation_date}
            grp={city.grp}
            climate={city.climate}
            square={city.square}
            status={city.status}
            description={city.description}
            minioImageUrl={city.image}
        />
    );
};
