---
layout: page
exclude: true
title: "Workshop 1: Intro to React Native, Expo and Styling"
excerpt: "This week we made our first app with React Native."
permalink: workshops/workshop1
---

## Node
1. Check if node is installed on your machine with `node -v`
2. Install node:
    - On windows: https://nodejs.org/en/
    - On mac: `brew install node`

## Expo
1. Sign up for an expo.io account https://expo.io/signup, confirm your details and log in.
2. Get the Expo client app on your phone. Download the client for:
	- [iOS](https://apps.apple.com/us/app/expo-go/id982107779)
	- [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_GB&gl=US&pli=1)
3. Log in to the Expo client app 
4. Install Expo CLI:
    ```
    npm install expo-cli
    ```
5. Verify that the installation was successful using `npx expo whoami`

6. Login with the credentials you created:
    ``` 
    npx expo login -u your-username -p your-password
    ```

## Creating a new app
1. Navigate in your terminal to where you want to install you want to install your app and run:
    ```javascript
    npx create-expo-app
    ```

2. Name your project when prompted

## Test the app using CLI development server
1. Install the Expo ngrok plugin `npm install @expo/ngrok`

2. Install ngrok
    - Download Windows version from here: [ngrok.com/download](https://ngrok.com/download)
    - On Mac: `brew install ngrok`
    

3. Navigate to the project folder and run `npx expo start --tunnel`

4. Scan the QR code that appears with your phone camera and follow link to open the Expo app.

5. Open your app!

## Hello World!
1. Open your favourite editor, or something like VSCode or atom, and change the text in `<Text>` to 'Hello World!'

2. Check to see if the text in your app has changed!

## Handling Dependencies
1. To handle dependencies in your app install yarn:
```
npm install yarn
```

## Styling
React is based on creating/styling components and reusing them. There a many ways to style a
component, the React way uses the `StyleSheet.create()` method and would looks similar to
below when styling the container.

    ```javascript
    const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#F5FCFF',
    }, });
    ```

This tutorial is going to be about styling your React Native apps using “Styled Components” - a third party library supported by expo https://styled-components.com/. Styled Components is a CSS-in-JS library that enables developers to write each component with their own styles. React Native follow a camelCase convention for example css Styled components just convert the CSS text into a React Native backgroundColor: ‘blue. stylesheet object.

To use styled components:
1. From the root of your project in your terminal run `npx yarn add styled-components` and `npx yarn add -D @types/styled-components-react-native`
2. Update your imports:

    ```javascript
    import React from 'react';
    import styled from 'styled-components/native';
    ```

3. Rewrite your App to include some new components

    ```javascript
    export default class App extends React.Component {
    render() {
        return (
        <Container>
        <Title>Hello World!</Title>
        </Container>
        );
    }
    }
    ```

4. Underneath define the styling for each of your new components

    ```javascript
    const Container = styled.View`
    flex: 1;
    background-color: #eee;
    justify-content: center;
    align-items: center;
    `
    ```

    ```javascript
    const Title = styled.Text`
    font-size: 25px;
    font-weight: 500;
    color: #db7093;
    ```

## Create and Styling a Custom Button Component

1. Make a new folder in your project called components and in here create a new file called `CustomButton.js`

2. In `CustomButton.js` define your new component

    ```jsx
    import React from 'react';
    import styled from 'styled-components/native';

    const CustomButton = props => (
        <ButtonContainer onPress={() => alert('Hi!')} backgroundColor={props.backgroundColor}>
            <ButtonText textColor={props.textColor}>{props.text}</ButtonText>
        </ButtonContainer>
    );

    export default CustomButton;
    ```

3. Underneath define the style for your new components:

    ```javascript
    const ButtonContainer = styled.TouchableOpacity`
        width: 100px;
        height: 40px;
        padding: 12px;
        border-radius: 10px;
        margin-top: 10px;
        background-color: ${props => props.backgroundColor};
    `

    const ButtonText = styled.Text`
        font-size: 15px;
        color: ${props => props.textColor};
        text-align: center;
    `
    ```

4. Import your custom button file into `App.js`
    ```javascript
    import CustomButton from './components/CustomButton';
    ```

5. Add the CustomButton to your page:
    ```jsx
    export default class App extends React.Component {
    render() {
        return (
        <Container>
            <Title>Hello World!</Title>
            <CustomButton text="Click Me" textColor="#db7093" backgroundColor="#222222"/>
        </Container>
        );
    }
    }
    ```

## Building Marvel Superheroes UI
1. Unzip styles project assets, components and screen in your project. Open up App.js, declare a new Container View using styled. Include Colour component
    ```javascript
        import React from 'react';
        import styled from 'styled-components/native';
        import colours from './components/Colours';
    ```

2. Define a new App Class
    ```jsx
    export default class App extends React.Component {
    render() {
        return (
            <Container>
                    <Titlebar>
                <Avatar />
                <Title>Welcome back,</Title>
                <Name>Madeleine</Name>
            </Titlebar>
        </Container>
    );}}
    ```

3. Add styles. Inside the back ticks, you can put pure CSS code there with the exact same syntax. The View element is like a div in HTML or web programming in general. Also, create another view called Titlebar inside Container. Inside Titlebar, it will contain three new elements. One is going to be image, Avatar and the other two are text: Title and Name. Note we have an additional import colours, which is just an array of colours and names. We will use these as variables in our styles using the JSX syntax. This helps to keep your design colours consistent. For example `${colours.background};` accesses the background name which value is `'#010020'` . If this confuses you just use hex colours for now.

    ```javascript
    const Container = styled.View`
    flex: 1;
        background-color: ${colours.background};
        justify-content: center;
        align-items: center;
    `;
    const Titlebar = styled.View`
        width: 100%;
        margin-top: 50px;
        padding-left: 80px;
    `;
    const Avatar = styled.Image``;
    const Title = styled.Text`
        font-size: 20px;
        font-weight: 500;
    color: ${colours.white}
    `;
    const Name = styled.Text`
        font-size: 20px;
        color: ${colours.red};
        font-weight: bold;
    `;
    ```

## Add your avatar

1. To create an image even with the styled-components, you need the Imagecomponent.You can use the source props to reference the image based on where it is located. 

2. Update you TitleBar:

    ```jsx
    <Titlebar>
        <Avatar source={require('./assets/avatar.jpeg')}/>
        <Title>Welcome back,</Title>
        <Name>Madeleine</Name>
    </Titlebar>
    ```

3. Style your avatar:

    ```javascript
    const Avatar = styled.Image`
        width: 44px;
        height: 44px;
        background: black;
        border-radius: 22px;
        margin-left: 20px;
        top: 0;
        left: 0;
    `;
    ```

4. Notice your images and text are stacking a bit oddly. To avoid this, you are going to use `position: absolute` CSS property.

    ```javascript
    const Avatar = styled.Image`
        width: 44px;
        height: 44px;
        background: black;
        border-radius: 22px;
        margin-left: 20px;
        position: absolute;
        top: 0;
        left: 0;
    `;
    ```

## Add Icons 

1. First import `Ionicons`:

    ```javascript
    import { Ionicons } from '@expo/vector-icons';
    ```

2. Update title objects with an icon

    ```jsx
    <Titlebar>
        <Avatar source={require('./assets/avatar.jpeg')}/>
        <Title>Welcome back,</Title>
        <Name>Madeleine</Name>
        <Ionicons
        name="md-cart"
        size={32}
        color={colours.red}
        /> 
    </Titlebar>
    ```

3. The icon once again is stacked under the text. To fix this we add `position: absolute`

    ```jsx
    <Ionicons
        name="md-cart"
        size={32}
        color={colours.red}
        style={% raw %}{{ position: 'absolute', right: 20, top: 5 }}{% endraw %}
    /> 
    ```

## Mapping through a list
1. Inside components/ folder create a new file called Categories.js. This file is going to render a list of category items for the Heroes UI app.

    ```jsx
    import React from 'react';
    import styled from 'styled-components/native';
    import colours from './components/Colours';
    const Categories = props => (
        <Container>
            <Name>item1</Name>
            <Name>item2</Name>
            <Name>item3</Name>
            <Name>item4</Name>
        </Container>
    );
    export default Categories;
    const Container = styled.View``;
    const Name = styled.Text`
        font-size: 16px;
        font-weight: 300;
        margin-left: 15px;
        color: ${colours.white}
    `;
    ```

2. Import this component in App.js and place it after Titlebar. You should see a vertical list.
    ```jsx
    import Categories from './components/Categories';

    //...
    return (
    <Container>
        <Titlebar>{/* ... */}</Titlebar> 
        <Categories />
    </Container>
    );
    ```

3. Define a list of items
    ```javascript
    const items = [
        { text: 'Avengers |' },
        { text: 'Thor |' },
        { text: 'Ironman |' },
        { text: 'Captain America |' },
        { text: 'Guardians |' },
        { text: 'Black Widow ' },
        { text: 'Hawkeye ' }
    ];
    ```

4. Inside the render map over your list as follows:
    ```jsx
    // Inside the render function replace <Categories /> with
    {
        items.map((category, index) => (
            <Categories name={category.text} key={index} />
        ))
    }
    ```

5. To make this work you will to update Categories in Categories.js so that the list can be dynamically defined:
    ```jsx
    const Categories = props => <Name>{props.name}</Name>;
    ```

## Adding Horizontal ScrollView
This list is right now not scrollable. To make it scrollable, let us place it inside a ScrollView.

1. Open up App.js file place the categories inside a `ScrollView`, but first import it from React Native core.

    ```jsx
    import { ScrollView } from 'react-native';
    // ...
    <ScrollView>
        {items.map((category, index) => (
        <Categories name={category.text} key={index} />
        ))}
    </ScrollView>;
    ```

2. It's not horizontal yet. To make it horizontal add the horizontal prop

    ```jsx
    <ScrollView horizontal={true}> 
        {items.map((category, index) => (
            <Categories name={category.text} key={index} />
        ))}
    </ScrollView>
    ```

3. Doesn't look quite right yet, let's add some inline styling and add the prop `showsHorizontalScrollIndicator` that hides the horizontal scroll bar that by default appears beneath the name of the categories.
    ```jsx
    <ScrollView
        horizontal={true}
        style={% raw %}{{
            padding: 20,
            paddingLeft: 12,
            paddingTop: 30,
            flexDirection: 'row'
        }}{% endraw %}
        showsHorizontalScrollIndicator={false}>
        {items.map((category, index) => (
            <Categories name={category.text} key={index} />
        ))}
    </ScrollView>
    ```

## Adding Vertical ScrollView
Next step is to add a ScrollView that act as a wrapper inside the Container view such that whole area becomes scrollable vertically. There is a reason to do this. You are now going to have items separated into three columns.

1. Modify App.js file
```jsx
return (
    <Container>
        <ScrollView>
            <Titlebar>{/* and its contents */}</Titlebar> 
            <ScrollView horizontal={true}>
                {/* Categories being rendered */}
            </ScrollView>
            <Subtitle> Your Heroes</Subtitle>
        </ScrollView>
    </Container>
);
```

2. Style new component `Subtitle`
```javascript
const Subtitle = styled.Text`
  font-size: 20px;
  color: ${colours.blue};
  font-weight: 500;
  margin-top: 10px;
  margin-left: 25px;
  text-transform: uppercase;
`;
```

## Building a card component
1. Create Card.js
    ```jsx
    import React from 'react';
    import styled from 'styled-components/native';
    const Card = props => (
    <Container>
        <Cover>
            <Image source={props.cardsrc} />
        </Cover>
        <Content>
            <Title>{props.cardtitle}</Title>
            <PowerCaption>Power: {props.cardstrength}</PowerCaption> 
        </Content>
    </Container>
    );
    export default Card;
    ```

2. Add some styling:
    ```javascript
    const Container = styled.View`
    background: #eee;
    height: 200px;
    width: 100%;
    border-radius: 14px;
    margin: 18px;
    margin-top: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
    `;
    const Cover = styled.View`
    width: 100%;
    height: 120px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    overflow: hidden;
    `;
    const Image = styled.Image`
    width: 100%;
    height: 100%;
    `;
    const Content = styled.View`
    padding-top: 10px;
    flex-direction: column;
    align-items: center;
    height: 60px;
    `;
    const Title = styled.Text`
    color: #3c4560;
    font-size: 16px;
    font-weight: 600;
    text-align:center;
    `;
    const PowerCaption = styled.Text`
    color: #b8b3c3;
    font-size: 12px;
    font-weight: 600;
    margin-top: 4px;
    `;
    ```

3. Notice the Container view has a default background of color `#eee` (light). This is useful in scenarios where you are fetching images from a third party APIs. Also, it provides a background the text area below the image.

4. Inside the Container view, add an Image and wrap it inside a Cover view. In React Native there two ways you can fetch an image:

    a. If you are getting an image from the static resource as in our case, you use use source prop with keyword require that contains the relative path to the image asset stored in the project folder. 
    
    b. In case of networking images or getting an image from an API, you use the same prop with a different keyword called uri. Here is an example of an image being fetched from an API.

    ```jsx
    <Image source={% raw %}{{uri: "https://facebook.github.io/react-native/docs/assets/favicon.png"}}{% endraw %} />
    ```

5. The Cover view uses rounded corners with overflow property. This is done to reflect the rounded corners. iOS clips the images if coming from a child component. In our case, the image is coming from a Card component which is a child to App component. The Image component takes the width and height of entire Cover view. Now let us import this component inside App.js file, after the Subtitle and let us see what results do we get. Note the props cardtitle, cardstrength, cardsrc.

    ```jsx
    import Card from './components/Card';

    <ScrollView>
        <Titlebar>{/* and its contents */}</Titlebar> 
        <ScrollView horizontal={true}>
            {/* Categories being rendered */}
        </ScrollView>
        <Subtitle> Your Heroes</Subtitle>
        <Card cardtitle="one" cardstrength="50/100" cardsrc="require('../assets/pic1.jpg')"/>
    </ScrollView>
    ```

6. After Subtitle, add a new view called ItemsLayout. This is going to be a layout that allows different cards to be divided between two columns in each row. This can be done by giving this view a flex- direction property of value row.


7. Now lets use our map function again to iterate through our data array in data.js. In App.js we will need to import it first. Note how the curly brackets around `{ picList }` make it a variable we can access. Not in Componants/Data.js we export the constant. `export const picList`


    ```jsx

    import { picList } from './components/data';
    <ItemsLayout>
    {picList.map((pic, index) => (
        <Card cardtitle={pic.title} cardstrength={pic.strength} cardsrc={pic.file} />
        ))}
    </ItemsLayout>
    ```

10. Add some styling

    ```javascript
    const ItemsLayout = styled.View`
        flex-direction: row;
        flex: 1;
        flex-wrap: wrap;
        align-items:center;
        justify-content:space-evenly;
        width:90%;
        margin:0; `;
    ```

## Navigation
1. In our root folder there is a folder named screens – these are were we will add our separate pages. Get Character.js from components and add to your project and copy the contents of App.js HomeScreen.js. Replace:
    ```javascript
    export default class App extends React.Component {

    ```

    with

    ```javascript
    export default class HomeScreen extends React.Component {

    ```

2. To use `react-navigation` and `react-navigation-stack` install with yarn:
    ```
    npx yarn add react-navigation react-navigation-stack
    ```

3. Install the following packages with expo (instead of yarn because it's important that the versions are the right ones for use with expo)
    ```
    npx expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
    ```

4. Open up App.js and add the following. Note the `headerMode`` is none – no header bars at the top of our pages. We also import our screens which we will create next so don’t view anything yet. First imports:

    ```javascript
        import * as React from 'react';
        import { createAppContainer } from 'react-navigation';
        import { createStackNavigator } from 'react-navigation-stack'; import HomeScreen from './screens/HomeScreen';
        import CharacterScreen from './screens/CharacterScreen';
    ```

5. Then MainNav component
    ```javascript
        const MainNav = createStackNavigator({ Home: HomeScreen,
                                            Character: CharacterScreen,
                                            },
                                            {
                                            headerMode: 'none'
                                            });
        export default createAppContainer(MainNav);
    ```

6. We need to store the navigation state when we navigate to each page. To do this we use the navigation properties. `const { navigate } = this.props.navigation;` in HomeScreen.js and CharacterScreen.js add this constant before your return statement.

    ```javascript
    //..
    render() {
        const { navigate } = this.props.navigation;
        return (
            //..
    ```

7. Now we have a navigation stack, we will need to add a click event on our card to change screens. In HomeScreen.js add the following so it encapsulates the card component we created earlier. Note CharacterScreen.js is static.
    ```jsx
    <TouchableOpacity key={index} onPress={() => navigate('Character')}>
    <Card cardtitle={pic.title} cardstrength={pic.strength} cardsrc={pic.file}/>
    </TouchableOpacity>
    ```

8. You will probably have an error when checking your device. Make sure you have imported the touchable opacity class.
    ```javascript
    import { ScrollView, View, TouchableOpacity } from 'react-native';
    ```