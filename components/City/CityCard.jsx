import React from "react";
import {View} from 'react-native';
import {styles, TextName, CityImage, CityView, CityBackground} from "./Style"

export const City = ({name, foundation_date, grp, climate, square, status, description, minioImageUrl}) => {
    return (
        <CityBackground>
            <CityView>
                <CityImage source={{ uri: minioImageUrl }} />
                <View style={styles.textContainer}>
                    <TextName>{name}</TextName>
                    <TextName>{foundation_date}</TextName>
                    <TextName>{grp}</TextName>
                    <TextName>{climate}</TextName>
                    <TextName>{square}</TextName>
                    <TextName>{status}</TextName>
                    <TextName>{description}</TextName>
                </View>
            </CityView>
        </CityBackground>
    );
};

export const CityShort = ({name, minioImageUrl}) => {
    // Первый экран, где вы хотите отобразить все данные
    const cityData = {
        name: name,
        minioImageUrl: minioImageUrl,
    };

    return (
       <City {...cityData} />
    );
};

export const CityDetail = ({name, foundation_date, grp, climate, square, status, description, minioImageUrl}) => {
    return (
        <CityBackground>
            <CityView>
                <CityImage source={{ uri:minioImageUrl }} />
                <View style={styles.textContainer}>
                    <TextName>{name}</TextName>
                    <TextName>Год основания: {foundation_date} г.</TextName>
                    <TextName>Население: {grp} млн.</TextName>
                    <TextName>Климат: {climate}</TextName>
                    <TextName>Площадь: {square} кв.км</TextName>
                    <TextName>Статус: {status}</TextName>
                    <TextName>{description}</TextName>
                </View>
            </CityView>
        </CityBackground>
    );
};

export const CityFull = ({name, foundation_date, grp, climate, square, status, description, minioImageUrl}) => {
    // Второй экран, где вы хотите отобразить все данные
    const cityData = {
        name: name,
        foundation_date: foundation_date,
        grp: grp,
        climate: climate,
        square: square,
        status: status,
        description: description,
        minioImageUrl: minioImageUrl,
    };

    return (
       <City {...cityData} />
    );
};