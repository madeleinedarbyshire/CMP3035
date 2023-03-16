import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import colours from '../components/Colours';
import demoRoutes from '../components/Routes';
import { calculateTime } from '../components/CalculateTime';
import { calculateDistance } from '../components/CalculateDistance';
import AsyncStorage from '@react-native-async-storage/async-storage';

const timestampToDate = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString('en-GB', { year: '2-digit', month: '2-digit', day: '2-digit' });
};

export default function HistoryScreen({ route, navigation }) {
  const [history, setHistory] = useState({})

  const retrieveHistory = async () => {
    try {
      const value = await AsyncStorage.getItem('routes');
      if (value === null) {
        // TODO: use AsyncStorage.setItem to save demoRoutes under the key 'routes' in Async Storage and then call retrieveHistory. 
      }
      else {
        // TODO: set the value under the key 'routes' in AsyncStorage as the history.
      }
    } 
    catch (error) {
      console.log(error); 
    }
  };

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      retrieveHistory();
    }
    return () => (isSubscribed = false);
  }, []);

  return (
    <Container>
      <HeaderImage source={require('../assets/run5.jpg')} />
      <Body>
        <HeaderText>My Routes</HeaderText>

        <View>
          <RowStyle style={{paddingLeft: 10, paddingRight: 10}}>
            <ColumnStyle key="th1">
              <ColumnText>Name</ColumnText>
            </ColumnStyle>
            <ColumnStyle key="th2">
              <ColumnText>Date</ColumnText>
            </ColumnStyle>
            <ColumnStyle key="th3">
              <ColumnText>Distance</ColumnText>
            </ColumnStyle>
            <ColumnStyle key="th4">
              <ColumnText>Duration</ColumnText>
            </ColumnStyle>
          </RowStyle>
          <DivideHeader />
          {Object.keys(history).map((item, index) => (
            // TODO: Navigate to Map screen with the route coords as a parameter when the row is pressed. 
            <TouchButton key={item} onPress={() => undefined}>
              <RowStyle key={item}>
                <ColumnStyle key="col1">
                  {/* TODO: Add the name of the route.*/}
                  <ColumnText></ColumnText> 
                </ColumnStyle>
                <ColumnStyle key="col2">
                  {/* TODO: Add the date. Convert the timestamp using timestampToDate. */}
                  <ColumnText></ColumnText>
                </ColumnStyle>
                <ColumnStyle key="col3">
                  {/* TODO: Add the distance. Calculate the distance from the route coords using calculateDistance. */}
                  <ColumnText></ColumnText> 
                </ColumnStyle>
                <ColumnStyle key="col4">
                  {/* TODO: Add the duration. Calculate the duration from the route coords using calculateTime. */}
                  <ColumnText></ColumnText>
                </ColumnStyle>
              </RowStyle>
              <Divide />
            </TouchButton>
            ))}
        </View>
      </Body>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background: ${colours.background};
`;

const HeaderImage = styled.Image`
  width: 100%;
  height: 40%;
  background: ${colours.blue};
`;

const Body = styled.ScrollView`
  background: ${colours.background};
  height: 65%;
  width: 100%;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  position: absolute;
  top: 37%;
`;

const BodyText = styled.Text`
  color: white;
  font-size: 15px;
  margin: 20px 20px;
`;

const RowStyle = styled.View`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 20px;
  margin-right: 20px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
`;
const ColumnStyle = styled.View`
  flex: 1;
  height: 30px;
`;

const ColumnText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  width: 100%;
`;

const Divide = styled.View`
  background: #fff;
  height: 1px;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
`;
const DivideHeader = styled.View`
  background: #fff;
  height: 1px;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
`;
const TouchButton = styled.TouchableOpacity`
  margin-left: 10px;
  margin-right: 10px;
`;

const Btn = styled.Button`
  height: 50px;
  width: 150px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: absolute;
  left: 150px;
  top: 150px;
  z-index: 9999;
  background: #333;
`;

const HeaderText = styled.Text`
  color: white;
  font-size: 25px;
  margin-top: 5%;
  margin-left: 20px;
  font-weight: bold;
  text-align: center;
`;
const Submit = styled.View`
  flex: 1;
  height: 50px;
  border-radius: 15px;
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
  padding: 10px;
  background: ${colours.red};
  height: 50px;
`;
const BtnText = styled.Text`
  color: white;
  font-size: 15px;
  text-align: center;
  line-height: 30px;
`;
