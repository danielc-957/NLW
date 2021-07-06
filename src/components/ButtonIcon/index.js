import React from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import DiscordImg from '../../assets/discord.png';
import {styles} from './styles';
import PropTypes from 'prop-types';

const ButtonIcon = ({title, ...rest}) => (
  <TouchableOpacity style={styles.container} {...rest}>
    <View style={styles.iconWrapper}>
      <Image source={DiscordImg} style={styles.icon} />
    </View>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

ButtonIcon.propTypes =
  // eslint-disable-next-line no-bitwise
  TouchableOpacityProps &
  {
    title: PropTypes.string.isRequired,
  };

export default ButtonIcon;
