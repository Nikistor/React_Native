import React,{useEffect, useState} from 'react';
import {Text, FlatList, View, ActivityIndicator, RefreshControl, TouchableOpacity,} from 'react-native';
import {CityShort} from "../components/CityCard";
import axios from "axios";
import SearchComponent from "../components/Search";

export const  CityListScreen =({navigation})=> {
    const [isLoading,setIsLoading]=React.useState(true);
    const [cities, setCities] = React.useState([]);
    const [filteredCities, setFilteredCities] = useState([]);
   // const [searchTerm, setSearchTerm] = useState('');

    const fetchCities =() =>{
        setIsLoading(true);
        axios
            .get('http://192.168.57.199:8000/api/cities/search/')
            .then(response => {
                console.log(response)
                // Получить доступ к массиву городов из данных ответа
                const fetchedCities = response.data;
                console.log(fetchedCities)
                setCities(fetchedCities);
                setFilteredCities(fetchedCities);
            })
            .catch(err => {
                console.log(err);
                alert('Error GET cities');
            }).finally(()=>{
            setIsLoading(false);
        });

    }
    useEffect(fetchCities,[]);

    const handleSearch = (searchTerm) => {
        const searchTermLowerCase = searchTerm.toLowerCase();
        const filtered = cities.filter((city) =>
            city.name.toLowerCase().includes(searchTermLowerCase)
        );
        setFilteredCities(filtered);
    };

    if(isLoading){
        return <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        }}>
            <ActivityIndicator size="large"/>
            <Text>Загружается..</Text>
        </View>
    }

    return (
        <View>
            <SearchComponent onSearch={handleSearch}/>
            <FlatList
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchCities}/>}
                data={filteredCities}
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


