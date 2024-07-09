import { TouchableHighlightProps } from "react-native";

import { Container, Title, ButtonTypeStyleProps } from './styles';

type Props = TouchableHighlightProps & {
  title : string;
  type?: ButtonTypeStyleProps;
}

export function Button({ title, type = 'PRIMARY', ...res}: Props){
  return(
    <Container type={type} {...res}>
      <Title>
        {title}
      </Title>
    </Container>
  );
}