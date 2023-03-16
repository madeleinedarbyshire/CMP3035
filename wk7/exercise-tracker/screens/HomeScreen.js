import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import colours from '../components/Colours';
import Card from '../components/Card';

function HomeScreen({ route, navigation }) {
  return (
    <Container>
      <HeaderImage source={require('../assets/run2.jpg')} />
      <Body>
      <HeaderText>Keep Fit</HeaderText>
        <BodyText>
          Lace up your shoes and head out for your very first run. Start a
          training plan, challenge yourself with each workout and get stronger.
          Dust off your bike and track a ride.
        </BodyText>
        <Divide />
        <Subtitle>What next?</Subtitle>
        <ItemsLayout>
          <TouchButton onPress={() => navigation.navigate('Track')}>
            <Card
              cardtitle="Track"
              caption="Track your runs"
              cardsrc={require('../assets/run5.jpg')}
            />
          </TouchButton>

          <TouchButton onPress={() => navigation.navigate('History')}>
            <Card
              cardtitle="History"
              caption="View your runs"
              cardsrc={require('../assets/run4.jpg')}
            />
          </TouchButton>
        </ItemsLayout>
        <RowStyle>
          <View style={{ paddingLeft: "5%" }}>
            <RowStyle></RowStyle>
          </View>
        </RowStyle>
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
  background: #fff;
  height: 75%;
  width: 100%;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  position: absolute;
  top: 27%;
  padding: 10px;
`;
const ItemsLayout = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 100%;
`;

const TouchButton = styled.TouchableOpacity`
  width: 50%;
  padding: 10px;
`;

const TagContainer = styled.View`
  flex-direction: row;
  width: 100%;
  margin-left: 8%;
  margin-top: 8%};
`;

const TagBody = styled.View`
  height: auto;
  width: 30%;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  padding: 10px;
`;

const TagText = styled.Text`
  color: white;
  font-size: 14px;
`;

const HeaderText = styled.Text`
  color: #b8b3c3;
  font-size: 25px;
  margin-top: 5%;
  margin-left: 20px;
  font-weight: bold;
`;

const BodyText = styled.Text`
  color: #b8b3c3;
  font-size: 15px;
  margin: 20px 20px;
`;

const RowStyle = styled.View`
  flex-direction: row;
  width: 100%;
`;

const Divide = styled.View`
  background: ${colours.blue};
  height: 1px;
  margin: 10px 20px;
  align-items: center;
`;

const StrengthSubText = styled.Text`
  color: ${colours.green};
  font-size: 20px;
  margin-left: 8%;
  font-weight: bold;
  margin-right: 10px;
`;

const Subtitle = styled.Text`
  font-size: 20px;
  color: ${colours.blue};
  font-weight: 500;
  text-transform: uppercase;
  padding-left: 15px;
  padding-top: 15px;
`;

export default HomeScreen;
