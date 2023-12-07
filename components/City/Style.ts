import {ImageBackground, StyleSheet} from "react-native";
import styled from "styled-components/native";

export const CityView = styled.View`
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

export const CityImage = styled.Image`
    width:150px;
    height:150px;
    border-radius:12px;
    margin-right:12px;
`;

export const styles = StyleSheet.create({
    textContainer: {
        flex: 1, // Занимает всю доступную высоту
        flexDirection: 'column',
    },
});

export const TextName = styled.Text`
    font-size: 10px;
    font-weight: 700;
    margin-bottom: 10px;
`;

export const CityBackground = styled(ImageBackground)`
  background:rgba(255, 255, 255, 0.1) url("http://127.0.0.1:35107/api/v1/buckets/images/objects/download?preview=true&prefix=ZHJpdmVycy9iYy1jYXJkMi5qcGc=&version_id=null") no-repeat;
  background-size: cover;
  width: 100%;
  padding: 10px;
`;