import React from "react";
import styled from "styled-components/native";
import {ImageBackground, StyleSheet, View} from "react-native";
const CityView = styled.View`
    position: relative;
    display: flex;
    padding: 10px;
    border: 2px solid blue;
    max-height: 100%;
    align-items: center;
    background-repeat: no-repeat;
    flex-direction: row;
    border-radius: 10px; /* Увеличил радиус закругления углов */
    /*background-color: rgb(206, 170, 170);*/
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Добавил тень для карточек */
    transition: transform 0.2s ease-in-out; /* Анимация при наведении курсора */
`;

const CityImage = styled.Image`
    width:150px;
    height:150px;
    border-radius:12px;
    margin-right:12px;
`;

const styles = StyleSheet.create({
    textContainer: {
        flex: 1, // Занимает всю доступную высоту
        flexDirection: 'column',
    },
});

const TextName = styled.Text`
    font-size: 10px;
    font-weight: 700;
    margin-bottom: 10px;
`;

const CityBackground = styled(ImageBackground)`
  background:rgba(255, 255, 255, 0.1) url("http://127.0.0.1:35107/api/v1/buckets/images/objects/download?preview=true&prefix=ZHJpdmVycy9iYy1jYXJkMi5qcGc=&version_id=null") no-repeat;
  background-size: cover;
  width: 100%;
  padding: 10px;
`;

export const City = ({name, foundation_date, grp, climate, square, status, description, minioImageUrl}) => {
    return (
        <CityBackground>
            <CityView>
                <CityImage source={{ url: minioImageUrl }} />
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

const CityShort = ({name, minioImageUrl}) => {
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
                <CityImage source={{ url: minioImageUrl }} />
                <View style={styles.textContainer}>
                    <TextName>{name}</TextName>
                    <TextName>Год основания: {foundation_date}</TextName>
                    <TextName>Население: {grp}</TextName>
                    <TextName>Климат: {climate}</TextName>
                    <TextName>Площадь: {square}</TextName>
                    <TextName>Статус: {status}</TextName>
                    <TextName>{description}</TextName>
                </View>
            </CityView>
        </CityBackground>
    );
};

const CityFull = ({name, foundation_date, grp, climate, square, status, description, minioImageUrl}) => {
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
       <CityDetail {...cityData} />
    );
};

export { CityShort, CityFull };