import React from 'react';
import {Text, FlatList, View, Image} from 'react-native';
import {speakers} from '../data/speakers.json';
import styles from '../containers/styles/sharedStyles';

function Speakers() {
  return (
    <View>
      <FlatList
        data={speakers}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={SeparatorComponet}
        pagingEnabled={false}
        ListHeaderComponent={HeaderComponent}
        ListFooterComponent={FooterComponent}
      />
    </View>
  );
}

const renderItem = ({item, index}) => {
  return (
    <View>
      <SpeakersList id={index} name={item.name} bio={item.bio} />
    </View>
  );
};

const SpeakersList = ({id, name, bio}) => {
  return (
    <View style={styles.sectionContainer} key={id}>
      <Text style={styles.sectionTitle}>{`Speakers name: ${name}`}</Text>
      <Text style={styles.sectionDescription}>{`Bio: ${bio}`}</Text>
    </View>
  );
};

const SeparatorComponet = () => {
  return <View style={styles.separatorStyle} />;
};

const HeaderComponent = () => {
  return (
    <View style={styles.sectionContainer}>
      <Image
        style={styles.headerImage}
        source={require('../images/girl.png')}
      />
      <Text style={styles.sectionDescription}>Awesome Speakers Lineup!!</Text>
    </View>
  );
};

const FooterComponent = () => {
  return (
    <View style={styles.footerContainer}>
      <Image style={styles.footerImage} source={require('../images/G.png')} />
      <Text style={styles.sectionDescription}>
        {' '}
        All rights reserved by Globomantics Tech Conference 2020.
      </Text>
    </View>
  );
};

export default Speakers;
