import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base';

type Props = IButtonProps & {
  title: string;
}

export function Button({ title, ...rest } : Props) {
  return (
    <ButtonNativeBase 
      h={14}
      rounded='sm'
      fontSize='sm'
      bg='green.700'
      _pressed={{ bg:'green.500' }}
      {...rest}
    >
      <Heading color='white' fontSize='sm'>
        {title}
      </Heading>
    </ButtonNativeBase>
  );
}