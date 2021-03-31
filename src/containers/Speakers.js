import React from 'react';
import {Text, FlatList, View} from 'react-native';
import {speakers} from '../data/speakers.json';
import styles from '../containers/styles/sharedStyles';
import {Footer} from '../components/Footer';
import {Header} from '../components/Header';

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
    <Header
      image={require('../images/girl.png')}
      heading={'Awesome Speakers Lineup!!'}
      style={styles.sectionTitleGreen}
    />
  );
};

const FooterComponent = () => {
  return <Footer />;
};

export default Speakers;
