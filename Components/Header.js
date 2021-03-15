import React, { Component } from "react";
import { Container, Header, Title, Button, Left, Right, Body, Icon } from "native-base";
export default class HeaderExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title style={styles.text}>Header</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  text: { color: "white", margin: 10, },
});
